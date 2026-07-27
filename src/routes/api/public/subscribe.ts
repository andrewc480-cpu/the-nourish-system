import { createFileRoute } from "@tanstack/react-router";

const GENERAL_SUBSCRIBERS_GROUP_ID = "191362452071384943";

export const Route = createFileRoute("/api/public/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.MAILERLITE_API_KEY;

        let body: any;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
        }

        const rawEmail = typeof body?.email === "string" ? body.email : "";
        const email = rawEmail.trim().toLowerCase();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRe.test(email) || email.length > 254) {
          return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
        }

        if (!apiKey) {
          console.error("subscribe: missing MAILERLITE_API_KEY");
          return Response.json({ ok: false, error: "server_config" }, { status: 500 });
        }

        try {
          const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              email,
              groups: [GENERAL_SUBSCRIBERS_GROUP_ID],
            }),
          });

          if (!res.ok) {
            const text = await res.text();
            console.error(`subscribe: mailerlite ${res.status}: ${text}`);
            return Response.json({ ok: false, error: "subscribe_failed" }, { status: 502 });
          }

          return Response.json({ ok: true }, { status: 200 });
        } catch (err) {
          console.error("subscribe: unexpected error", err);
          return Response.json({ ok: false, error: "unexpected" }, { status: 500 });
        }
      },
    },
  },
});
