import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "node:crypto";

// Verify the Stripe webhook signature using the raw request body.
// Stripe sends header: "t=<timestamp>,v1=<signature>,v1=<signature2>,..."
// signed_payload = `${timestamp}.${rawBody}` with HMAC-SHA256 keyed by the
// endpoint signing secret. Reject if no v1 matches or timestamp is too old.
function verifyStripeSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
  toleranceSeconds = 300,
): { ok: true } | { ok: false; reason: string } {
  if (!signatureHeader) return { ok: false, reason: "missing signature header" };

  const parts = signatureHeader.split(",").map((p) => p.trim());
  let timestamp: string | null = null;
  const signatures: string[] = [];
  for (const part of parts) {
    const [k, v] = part.split("=");
    if (k === "t") timestamp = v;
    else if (k === "v1" && v) signatures.push(v);
  }
  if (!timestamp || signatures.length === 0) {
    return { ok: false, reason: "malformed signature header" };
  }

  const tsNum = Number(timestamp);
  if (!Number.isFinite(tsNum)) return { ok: false, reason: "invalid timestamp" };
  const ageSeconds = Math.abs(Math.floor(Date.now() / 1000) - tsNum);
  if (ageSeconds > toleranceSeconds) {
    return { ok: false, reason: "timestamp outside tolerance" };
  }

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");
  const expectedBuf = Buffer.from(expected, "utf8");

  for (const sig of signatures) {
    const sigBuf = Buffer.from(sig, "utf8");
    if (sigBuf.length === expectedBuf.length && timingSafeEqual(sigBuf, expectedBuf)) {
      return { ok: true };
    }
  }
  return { ok: false, reason: "no matching v1 signature" };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(opts: {
  customerName: string;
  items: Array<{ description: string; quantity: number; amount: string }>;
  total: string;
}) {
  const rows = opts.items
    .map(
      (item) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #EAE6DD;font-family:Georgia,serif;color:#1C1C1C;font-size:15px;">
            ${escapeHtml(item.description)}${item.quantity > 1 ? ` &times; ${item.quantity}` : ""}
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #EAE6DD;font-family:Georgia,serif;color:#1C1C1C;font-size:15px;text-align:right;">
            ${escapeHtml(item.amount)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#F7F5F1;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F1;padding:40px 0;">
      <tr><td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:6px;padding:48px 40px;">
          <tr><td>
            <p style="margin:0 0 24px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#7D9B76;">nóurish.</p>
            <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-weight:700;font-size:28px;color:#1C1C1C;line-height:1.2;">Your order is confirmed.</h1>
            <p style="margin:0 0 28px;font-family:Georgia,serif;font-style:italic;font-size:16px;color:#7D9B76;">Thank you, ${escapeHtml(opts.customerName)}.</p>
            <p style="margin:0 0 32px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.7;color:#3a3a3a;">Your digital protocol is ready. You'll receive a separate email with your download link shortly.</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${rows}
              <tr>
                <td style="padding:16px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#9A9590;">Total</td>
                <td style="padding:16px 0 0;font-family:Georgia,serif;font-weight:700;font-size:20px;color:#C9A84C;text-align:right;">${escapeHtml(opts.total)}</td>
              </tr>
            </table>
            <p style="margin:40px 0 0;font-family:Georgia,serif;font-style:italic;font-size:13px;color:#9A9590;">Eat with intention. — The Nourish System</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function formatAmount(amount: number | null | undefined, currency: string | null | undefined): string {
  if (amount == null) return "";
  const cur = (currency ?? "usd").toUpperCase();
  const value = amount / 100;
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: cur }).format(value);
  } catch {
    return `${value.toFixed(2)} ${cur}`;
  }
}

export const Route = createFileRoute("/api/public/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        const resendKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.FROM_EMAIL;

        if (!secret || !resendKey || !fromEmail) {
          console.error("stripe-webhook: missing env", {
            hasSecret: !!secret,
            hasResend: !!resendKey,
            hasFrom: !!fromEmail,
          });
          return new Response("Server misconfigured", { status: 500 });
        }

        const rawBody = await request.text();
        const signature = request.headers.get("stripe-signature");
        const verified = verifyStripeSignature(rawBody, signature, secret);
        if (!verified.ok) {
          console.warn("stripe-webhook: signature verification failed", verified.reason);
          return new Response(`Invalid signature: ${verified.reason}`, { status: 400 });
        }

        let event: any;
        try {
          event = JSON.parse(rawBody);
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        if (event?.type !== "checkout.session.completed") {
          // Ack other event types so Stripe stops retrying.
          return new Response("ok", { status: 200 });
        }

        const session = event.data?.object ?? {};
        const customerEmail: string | undefined =
          session.customer_details?.email ?? session.customer_email ?? undefined;
        const customerName: string =
          session.customer_details?.name ?? session.metadata?.customer_name ?? "there";

        if (!customerEmail) {
          console.warn("stripe-webhook: session missing customer email", session.id);
          return new Response("ok", { status: 200 });
        }

        // Build a line-item summary. line_items isn't included by default on
        // checkout.session.completed unless expanded — fall back to metadata
        // or a generic line if absent.
        const lineItems: Array<{ description: string; quantity: number; amount: string }> = [];
        const rawItems = session.line_items?.data;
        if (Array.isArray(rawItems) && rawItems.length > 0) {
          for (const li of rawItems) {
            lineItems.push({
              description:
                li.description ?? li.price?.product?.name ?? "Nourish System Protocol",
              quantity: li.quantity ?? 1,
              amount: formatAmount(li.amount_total, li.currency ?? session.currency),
            });
          }
        } else {
          lineItems.push({
            description:
              session.metadata?.product_name ?? "Nourish System — Digital Protocol",
            quantity: 1,
            amount: formatAmount(session.amount_total, session.currency),
          });
        }

        const total = formatAmount(session.amount_total, session.currency);

        const html = buildEmailHtml({
          customerName,
          items: lineItems,
          total,
        });

        try {
          const resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: `Nourish System <${fromEmail}>`,
              to: [customerEmail],
              subject: "Your Nourish System order is confirmed",
              html,
            }),
          });

          if (!resendRes.ok) {
            const text = await resendRes.text();
            console.error("stripe-webhook: resend send failed", resendRes.status, text);
            // Return 500 so Stripe retries the webhook.
            return new Response("Email send failed", { status: 500 });
          }
        } catch (err) {
          console.error("stripe-webhook: resend request error", err);
          return new Response("Email send error", { status: 500 });
        }

        return new Response("ok", { status: 200 });
      },
    },
  },
});
