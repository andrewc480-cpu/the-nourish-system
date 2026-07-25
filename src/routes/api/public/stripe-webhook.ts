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

const BUCKET = "protocols";
const LINK_TTL_SECONDS = 7 * 24 * 60 * 60;

const DISPLAY: Record<string, string> = {
  "Nourish_GLP-1_Nutrition.pdf": "GLP-1 Nutrition Protocol",
  "Nourish_Gut_Health.pdf": "Gut Health Protocol",
  "Nourish_Metabolic_Health.pdf": "Metabolic Health Protocol",
  "Nourish_Cognitive_Performance.pdf": "Cognitive Performance Protocol",
  "Nourish_Longevity_Healthspan.pdf": "Longevity & Healthspan Protocol",
  "Nourish_Hormonal_Health.pdf": "Hormonal Health Protocol",
  "Nourish_Complete_Drinks_Collection.pdf": "The Complete Drinks Collection",
};

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
  links: Array<{ name: string; url: string }>;
}) {
  const rows = opts.links
    .map(
      (link) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #EAE6DD;font-family:Georgia,serif;color:#1C1C1C;font-size:15px;">
            <a href="${escapeHtml(link.url)}" style="color:#1C1C1C;text-decoration:none;font-weight:600;">
              ${escapeHtml(link.name)}
            </a>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #EAE6DD;text-align:right;">
            <a href="${escapeHtml(link.url)}" style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#C9A84C;text-decoration:none;">Download &rarr;</a>
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
            <p style="margin:0 0 24px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:1.7;color:#3a3a3a;">${opts.links.length > 1 ? "All of your files are below." : "Your download is below."}</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${rows}
            </table>
            <p style="margin:32px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;line-height:1.7;color:#6b6862;">These links stay active for 7 days. Save the files somewhere safe once you've downloaded them.</p>
            <p style="margin:40px 0 0;font-family:Georgia,serif;font-style:italic;font-size:13px;color:#9A9590;">Eat with intention. — The Nourish System</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

async function sendResendEmail(opts: {
  resendKey: string;
  fromEmail: string;
  to: string;
  subject: string;
  html: string;
}): Promise<{ ok: boolean; detail?: string }> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${opts.resendKey}`,
      },
      body: JSON.stringify({
        from: `Nourish System <${opts.fromEmail}>`,
        to: [opts.to],
        subject: opts.subject,
        html: opts.html,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, detail: `resend ${res.status}: ${text}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, detail: `resend error: ${String(err)}` };
  }
}

async function sendAlert(opts: {
  resendKey: string;
  fromEmail: string;
  alertEmail: string;
  message: string;
}) {
  if (!opts.alertEmail) return;
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${opts.resendKey}`,
      },
      body: JSON.stringify({
        from: `Nourish System <${opts.fromEmail}>`,
        to: [opts.alertEmail],
        subject: "⚠️ Nourish delivery needs attention",
        html: `<p>${escapeHtml(opts.message)}</p><p>Check the orders table for delivery_status = 'failed'.</p>`,
      }),
    });
  } catch (err) {
    console.error("stripe-webhook: alert email failed", err);
  }
}

export const Route = createFileRoute("/api/public/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.STRIPE_WEBHOOK_SECRET;
        const resendKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.FROM_EMAIL;
        const alertEmail = process.env.ALERT_EMAIL ?? "";

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
          return new Response("ok", { status: 200 });
        }

        const session = event.data?.object ?? {};
        const email: string =
          session.customer_details?.email ?? session.customer_email ?? "";
        const customerName: string =
          session.customer_details?.name ?? session.metadata?.customer_name ?? "there";
        const metadata = session.metadata ?? {};
        const sku: string = metadata.sku ?? "";

        const files: string[] = metadata.files
          ? String(metadata.files)
              .split(",")
              .map((f: string) => f.trim())
              .filter(Boolean)
          : metadata.file
            ? [String(metadata.file)]
            : [];

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Missing email or empty file list — record failure + alert, ack 200.
        if (!email || files.length === 0) {
          const missing = !email ? "email" : "files";
          const errMsg = `Missing ${missing} on checkout ${session.id}`;
          await supabaseAdmin.from("orders").insert({
            stripe_event_id: event.id,
            checkout_session: session.id ?? "unknown",
            customer_email: email || "unknown",
            sku,
            file_count: files.length,
            amount_total: session.amount_total ?? null,
            currency: session.currency ?? null,
            delivery_status: "failed",
            delivery_error: errMsg,
          });
          await sendAlert({
            resendKey,
            fromEmail,
            alertEmail,
            message: `Delivery could not run: missing ${missing} on ${session.id}`,
          });
          return new Response("missing data", { status: 200 });
        }

        // Duplicate guard via unique stripe_event_id.
        const { error: insertErr } = await supabaseAdmin.from("orders").insert({
          stripe_event_id: event.id,
          checkout_session: session.id,
          customer_email: email,
          sku,
          file_count: files.length,
          amount_total: session.amount_total ?? null,
          currency: session.currency ?? null,
          delivery_status: "processing",
        });

        if (insertErr) {
          if ((insertErr as any).code === "23505") {
            return new Response("already processed", { status: 200 });
          }
          console.error("stripe-webhook: db insert failed", insertErr);
          await sendAlert({
            resendKey,
            fromEmail,
            alertEmail,
            message: `DB insert failed for ${session.id}: ${insertErr.message}`,
          });
          return new Response("db error", { status: 500 });
        }

        try {
          const links: Array<{ name: string; url: string }> = [];
          const expiresAt = new Date(Date.now() + LINK_TTL_SECONDS * 1000).toISOString();

          for (const file of files) {
            const { data, error } = await supabaseAdmin.storage
              .from(BUCKET)
              .createSignedUrl(file, LINK_TTL_SECONDS, { download: true });

            if (error || !data?.signedUrl) {
              throw new Error(`Could not sign ${file}: ${error?.message ?? "no url"}`);
            }

            links.push({ name: DISPLAY[file] ?? file, url: data.signedUrl });

            await supabaseAdmin.from("download_tokens").insert({
              stripe_event_id: event.id,
              customer_email: email,
              file_name: file,
              expires_at: expiresAt,
            });
          }

          const isBundle = links.length > 1;
          const subject = isBundle
            ? "Your Complete System is ready to download"
            : `Your ${links[0].name} is ready to download`;

          const html = buildEmailHtml({ customerName, links });

          const sendRes = await sendResendEmail({
            resendKey,
            fromEmail,
            to: email,
            subject,
            html,
          });

          if (!sendRes.ok) {
            throw new Error(sendRes.detail ?? "email send failed");
          }

          await supabaseAdmin
            .from("orders")
            .update({
              delivery_status: "delivered",
              delivered_at: new Date().toISOString(),
            })
            .eq("stripe_event_id", event.id);

          return new Response("delivered", { status: 200 });
        } catch (err) {
          const errText = String(err);
          console.error("stripe-webhook: delivery failed", errText);
          await supabaseAdmin
            .from("orders")
            .update({
              delivery_status: "failed",
              delivery_error: errText,
            })
            .eq("stripe_event_id", event.id);
          await sendAlert({
            resendKey,
            fromEmail,
            alertEmail,
            message: `DELIVERY FAILED for ${email} (${session.id}): ${errText}`,
          });
          return new Response("delivery failed - alerted", { status: 200 });
        }
      },
    },
  },
});
