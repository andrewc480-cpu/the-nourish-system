import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — nóurish." },
      {
        name: "description",
        content:
          "Terms of Service for The Nourish System — digital download protocols, payment, delivery, usage rights, and contact information.",
      },
      { property: "og:title", content: "Terms of Service — nóurish." },
      {
        property: "og:description",
        content:
          "Terms of Service for The Nourish System — digital download protocols, payment, delivery, usage rights, and contact information.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/terms" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <div className="bg-[#F7F5F1] text-[#1C1C1C] font-sans">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
          <span className="inline-block font-sans text-[10px] uppercase tracking-[0.22em] text-[#7D9B76]">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Terms of Service
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                What you're buying
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Our products are instant-download digital PDF guides, including
                individual protocols, the complete system, and the free
                15-Minute Week. Every purchase is for personal use only. Files are
                delivered by email after purchase and are yours to keep.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Payment and delivery
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Payments are processed securely through Stripe. After your
                purchase is confirmed, your files are emailed automatically,
                typically within minutes. Download links are valid for 7 days.
                If your link expires or you need it re-sent, you can request a
                fresh link at any time from the{" "}
                <a href="/resend" className="text-[#7D9B76] hover:underline">
                  /resend
                </a>{" "}
                page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Usage rights
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                All content is for personal use only. You are not licensed to
                resell, redistribute, share publicly, or use our protocols for
                commercial purposes. All content, recipes, guides, and branding
                are copyright The Nourish System.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Not medical advice
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                The Nourish System protocols are educational food guidance, not
                a substitute for medical, dietary, or professional advice.
                Always consult a qualified healthcare provider before making
                significant changes to your diet, especially if you are on
                medication or managing a health condition.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Account-free purchases
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                No account or subscription is required to purchase. Every
                transaction is a one-time purchase. You will receive your
                download links by email without needing to create a password
                or log in.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Changes to terms
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                These terms may be updated occasionally. The current version
                posted here always governs your purchase and use of our
                products. We encourage you to check this page from time to time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-display text-2xl font-bold text-[#1C1C1C]">
                Contact
              </h2>
              <p className="font-sans text-[15px] leading-relaxed text-[#3a3a3a]">
                Questions about these terms? Email us at{" "}
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
