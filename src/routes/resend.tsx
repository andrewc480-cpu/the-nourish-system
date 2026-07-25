import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";

export const Route = createFileRoute("/resend")({
  head: () => ({
    meta: [
      { title: "Resend Download Links | nóurish." },
      {
        name: "description",
        content:
          "Lost your Nourish download links? Enter your email and we'll send them again.",
      },
      { property: "og:title", content: "Resend Download Links | nóurish." },
      {
        property: "og:description",
        content:
          "Lost your Nourish download links? Enter your email and we'll send them again.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ResendPage,
});

function ResendPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;
    setStatus("sending");
    try {
      await fetch("/api/public/resend-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
    } catch {
      // Swallow — we always show the generic message.
    }
    setMessage(
      "If that email has a purchase on file, your download links are on their way.",
    );
    setStatus("done");
  }

  return (
    <SiteLayout>
      <section className="bg-[#F7F5F1] py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6">
          <p
            className="mb-6 text-[10px] uppercase"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              letterSpacing: "0.2em",
              color: "#7D9B76",
            }}
          >
            nóurish.
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 44px)",
              lineHeight: 1.15,
              color: "#1C1C1C",
            }}
          >
            Resend my download links.
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#3a3a3a",
            }}
          >
            Enter the email you used at checkout. We'll email you fresh
            download links, valid for 7 days.
          </p>

          {status === "done" ? (
            <div
              className="rounded-[2px] border p-6"
              style={{
                borderColor: "#EAE6DD",
                background: "#FFFFFF",
              }}
            >
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontSize: 16,
                  color: "#1C1C1C",
                  lineHeight: 1.6,
                }}
              >
                {message}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="email"
                className="block text-[10px] uppercase"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  letterSpacing: "0.16em",
                  color: "#6b6862",
                }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-[2px] border px-4 py-3 outline-none"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: 16,
                  color: "#1C1C1C",
                  background: "#FFFFFF",
                  borderColor: "#EAE6DD",
                }}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-[2px] px-6 py-3 transition-colors disabled:opacity-60"
                style={{
                  background: "#C9A84C",
                  color: "#1C1C1C",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {status === "sending" ? "Sending…" : "Send my links"}
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
