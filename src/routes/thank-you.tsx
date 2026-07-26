import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — nóurish." },
      {
        name: "description",
        content:
          "Your order is confirmed. Your download link is on its way to your inbox.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank You — nóurish." },
      {
        property: "og:description",
        content:
          "Your order is confirmed. Your download link is on its way to your inbox.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/thank-you" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteLayout>
      <div className="bg-[#F7F5F1] text-[#1C1C1C] font-sans">
        {/* Hero */}
        <div className="bg-[#1C1C1C] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block font-sans text-[10px] uppercase tracking-[0.22em] text-[#7D9B76]">
              Order Confirmed
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-[#F7F5F1] md:text-6xl">
              You're in.
            </h1>
            <p className="mx-auto mt-5 max-w-xl font-sans text-[15px] leading-relaxed text-[#F7F5F1]/80">
              Your download link is on its way to your inbox — it usually arrives within a few minutes.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-[#F2EDE4] p-6">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7D9B76]">
                01
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-[#1C1C1C]">
                Check your email
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                The file arrives from{" "}
                <span className="text-[#1C1C1C] font-medium">orders@thenourishsystem.com</span>
                . Check spam if it's not there in 5 minutes.
              </p>
            </div>

            <div className="rounded-lg bg-[#F2EDE4] p-6">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7D9B76]">
                02
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-[#1C1C1C]">
                Save your files
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Download and store them somewhere safe — your links stay active for 7 days.
              </p>
            </div>

            <div className="rounded-lg bg-[#F2EDE4] p-6">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7D9B76]">
                03
              </span>
              <h2 className="mt-3 font-display text-xl font-bold text-[#1C1C1C]">
                Start with the Quick Reference
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Open the one-page cheat sheet first, then dive into the 30-day plan.
              </p>
            </div>
          </div>

          {/* Note box */}
          <div className="mt-10 rounded-lg border border-[#7D9B76]/30 bg-white p-6 md:p-8">
            <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
              Didn't receive anything, or did your link expire? Visit the{" "}
              <a
                href="/resend"
                className="font-semibold text-[#7D9B76] hover:underline"
              >
                resend page
              </a>{" "}
              and we'll send fresh links to your email.
            </p>
          </div>

          {/* Closing line */}
          <p className="mt-10 text-center font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
            While you wait, browse the{" "}
            <a
              href="/system"
              className="font-semibold text-[#7D9B76] hover:underline"
            >
              Complete System
            </a>{" "}
            or explore the free{" "}
            <a
              href="/free-recipes"
              className="font-semibold text-[#7D9B76] hover:underline"
            >
              15-Minute Week
            </a>
            .
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
