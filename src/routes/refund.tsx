import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — nóurish." },
      {
        name: "description",
        content:
          "Refund Policy for The Nourish System — digital downloads are final, but delivery issues are always resolved.",
      },
      { property: "og:title", content: "Refund Policy — nóurish." },
      {
        property: "og:description",
        content:
          "Refund Policy for The Nourish System — digital downloads are final, but delivery issues are always resolved.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/refund" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <SiteLayout>
      <div className="bg-[#F7F5F1] text-[#1C1C1C] font-sans">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
          <span className="inline-block font-sans text-[10px] uppercase tracking-[0.22em] text-[#7D9B76]">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Refund Policy
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
          <div className="mb-12 rounded-lg bg-[#1C1C1C] p-6 md:p-8">
            <p className="font-display text-xl font-bold text-[#F7F5F1] md:text-2xl">
              Digital download, delivered instantly. All sales are final.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Digital products are final
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Because our products are instant-download digital files delivered
                immediately upon purchase, all sales are final and
                non-refundable. This is standard practice for digital goods:
                once the file is delivered, it cannot be returned.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Delivery issues are resolved
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                If a technical problem prevents delivery — the file never
                arrives, the link is broken, or the link expires beyond the
                7-day window — we'll fix it. Contact us at{" "}
                <a
                  href="mailto:info@thenourishsystem.com"
                  className="text-[#7D9B76] hover:underline"
                >
                  info@thenourishsystem.com
                </a>{" "}
                and we'll re-send the correct file or, if that's not possible,
                issue a refund for that specific delivery issue.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Try the free 15-Minute Week first
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                If you're unsure whether the system is right for you, we
                encourage you to start with the free{" "}
                <a href="/free-recipes" className="text-[#7D9B76] hover:underline">
                  15-Minute Week
                </a>
                . It's a quick way to sample the style, structure,
                and recipes before committing to a full protocol.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Contact
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                For any delivery issues or refund questions, email{" "}
                <a
                  href="mailto:info@thenourishsystem.com"
                  className="text-[#7D9B76] hover:underline"
                >
                  info@thenourishsystem.com
                </a>
                .
              </p>
            </section>
          </div>

          <p className="mt-16 border-t border-[rgba(28,28,28,0.12)] pt-6 font-sans text-xs text-[#8a877f]">
            Last updated July 2026.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
