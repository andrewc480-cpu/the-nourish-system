import { createFileRoute } from "@tanstack/react-router";

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
            <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-weight:700;font-size:28px;color:#1C1C1C;line-height:1.2;">Your download links.</h1>
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

const GENERIC_RESPONSE = {
  ok: true,
  message: "If that email has a purchase on file, your download links are on their way.",
};

export const Route = createFileRoute("/api/public/resend-links")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const resendKey = process.env.RESEND_API_KEY;
        const fromEmail = process.env.FROM_EMAIL;

        if (!resendKey || !fromEmail) {
          console.error("resend-links: missing env");
          // Still return generic to avoid leaking configuration state.
          return Response.json(GENERIC_RESPONSE, { status: 200 });
        }

        let body: any;
        try {
          body = await request.json();
        } catch {
          return Response.json(GENERIC_RESPONSE, { status: 200 });
        }

        const rawEmail = typeof body?.email === "string" ? body.email : "";
        const email = rawEmail.trim().toLowerCase();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRe.test(email) || email.length > 254) {
          return Response.json(GENERIC_RESPONSE, { status: 200 });
        }

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

          const { data: tokenRows, error: qErr } = await supabaseAdmin
            .from("download_tokens")
            .select("file_name")
            .ilike("customer_email", email);

          if (qErr) {
            console.error("resend-links: query failed", qErr);
            return Response.json(GENERIC_RESPONSE, { status: 200 });
          }

          const files = Array.from(
            new Set((tokenRows ?? []).map((r) => r.file_name).filter(Boolean)),
          );

          if (files.length === 0) {
            return Response.json(GENERIC_RESPONSE, { status: 200 });
          }

          const links: Array<{ name: string; url: string }> = [];
          for (const file of files) {
            const { data, error } = await supabaseAdmin.storage
              .from(BUCKET)
              .createSignedUrl(file, LINK_TTL_SECONDS, { download: true });
            if (error || !data?.signedUrl) {
              console.error("resend-links: sign failed", file, error);
              continue;
            }
            links.push({ name: DISPLAY[file] ?? file, url: data.signedUrl });
          }

          if (links.length === 0) {
            return Response.json(GENERIC_RESPONSE, { status: 200 });
          }

          const html = buildEmailHtml({ customerName: "there", links });
          const sendRes = await sendResendEmail({
            resendKey,
            fromEmail,
            to: email,
            subject: "Your Nourish download links",
            html,
          });
          if (!sendRes.ok) {
            console.error("resend-links: email failed", sendRes.detail);
          }
        } catch (err) {
          console.error("resend-links: unexpected error", err);
        }

        return Response.json(GENERIC_RESPONSE, { status: 200 });
      },
    },
  },
});
