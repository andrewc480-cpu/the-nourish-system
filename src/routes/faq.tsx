import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

const CATEGORIES: { eyebrow: string; items: { q: string; a: string }[] }[] = [
  {
    eyebrow: "The System",
    items: [
      {
        q: "What is The Nourish System?",
        a: "The Nourish System is a set of six food protocols, each one a complete guide to a specific health situation — GLP-1 medications, gut health, metabolic health, cognitive performance, longevity, and hormonal health. Every protocol gives you a 30-day meal plan, a one-page cheat sheet, and 20 recipes built for that situation.",
      },
      {
        q: "How is this different from a diet or a meal plan?",
        a: "A diet tells you what to cut. A meal plan tells you what to cook this week. Nourish tells you what to eat for the specific situation your body is in — and why it works. There's no calorie counting, no restriction, and nothing that ends on day thirty.",
      },
      {
        q: "Do I have to give up foods or cut things out?",
        a: "No. The protocols work by what they add, not what they take away — the right foods, in the right order, at the right time for your situation. There's no elimination list and no calorie counting. You're building meals, not subtracting from them.",
      },
      {
        q: "Do I get all six protocols?",
        a: "Yes. The Nourish System is one offer at $97 and it includes all six protocols. The protocols are not sold separately — you get the whole library in a single download.",
      },
      {
        q: "Which protocol should I start with?",
        a: "Start with whatever is bothering you most right now. On a GLP-1 medication? Start there. Bloated and irregular for years? Gut Health. Energy crashing every afternoon? Metabolic Health. The protocols are designed to be entered anywhere.",
      },
      {
        q: "Is this suitable for vegetarians or other dietary needs?",
        a: "The protocols are built around whole foods and include plant-based options throughout, but they are not exclusively vegetarian or vegan. Each recipe lists full ingredients so you can see exactly what's involved before you cook.",
      },
    ],
  },
  {
    eyebrow: "The Products",
    items: [
      {
        q: "What exactly is a protocol?",
        a: "One complete guide as a digital PDF: a 30-day meal plan mapped day by day, a one-page cheat sheet, and 20 recipes built specifically for that situation — each with ingredients, method, and the reason it works.",
      },
      {
        q: "What's included in the $97 Complete System?",
        a: "All six protocols — every meal plan, every cheat sheet, and all 120 recipes. It also includes The Complete Drinks Collection, twenty functional coffees, matchas, teas and refreshers.",
      },
      {
        q: "How many recipes are there in total?",
        a: "Each protocol contains 20 recipes, so the Complete System includes 120 recipes in total. Every recipe is built for a specific biological purpose — not just collected because it happens to be healthy.",
      },
      {
        q: "Are the recipes complicated or time-consuming?",
        a: "No. Most take under 30 minutes and use ingredients from a normal supermarket. The point of the system is that the thinking is already done — the hardest thing left is cooking dinner.",
      },
      {
        q: "Do the protocols overlap?",
        a: "Each protocol has its own recipes and its own rules, built for its own situation. They connect — your gut affects your metabolism, your metabolism affects your hormones — which is why all six come together.",
      },
    ],
  },
  {
    eyebrow: "Delivery & Access",
    items: [
      {
        q: "How do I receive the protocol after I buy it?",
        a: "Immediately. After checkout you get an email with a download link, usually within a minute or two. The file is a PDF you can read on a phone, tablet, laptop, or print out.",
      },
      {
        q: "Is this a subscription?",
        a: "No. You buy it once and it's yours to keep forever. There is nothing to cancel, no recurring charge, and no account to maintain.",
      },
      {
        q: "Can I print the protocols?",
        a: "Yes. They're designed to be printed — particularly the one-page cheat sheets, which most people stick on the fridge.",
      },
      {
        q: "What if I don't receive my download email?",
        a: "Check your spam folder first, since automated download emails often land there. If it's still missing, contact us and we'll send the file directly.",
      },
    ],
  },
  {
    eyebrow: "The Science",
    items: [
      {
        q: "Is this medical advice?",
        a: "No. Nourish is food guidance, not medical advice, and it does not diagnose or treat any condition. If you have a medical condition or take medication, talk to your doctor before changing how you eat.",
      },
      {
        q: "Can I use this while taking a GLP-1 medication?",
        a: "The GLP-1 Nutrition protocol is built specifically for people on medications like Ozempic, Wegovy, Mounjaro, and Zepbound. It focuses on protecting muscle and meeting nutritional needs on a suppressed appetite. It does not replace your doctor's guidance.",
      },
      {
        q: "What do I eat on a GLP-1 when nothing sounds good?",
        a: "This is exactly what the GLP-1 Nutrition protocol is built for. When appetite is low and nothing appeals, it leads with protein, keeps portions small and easy to finish, and separates the meals you can manage on a rough day from the ones for when you're eating normally — so the little you do eat still protects muscle and covers the nutrients that tend to fall short.",
      },
      {
        q: "What is the science based on?",
        a: "Established, mainstream nutritional science — the mechanisms that are well-supported rather than trending. Each protocol explains why a food works, not just that it does, so you can evaluate the reasoning for yourself.",
      },
      {
        q: "Why isn't 'eating healthy' working for me?",
        a: "Because 'healthy' is generic and your situation isn't. The same balanced plate does different things depending on whether you're steadying blood sugar, eating on a suppressed appetite, or working with a hormonal shift. Each protocol matches food to the specific mechanism you're dealing with — which is why it can land when general healthy-eating advice hasn't.",
      },
      {
        q: "Why does food order matter for blood sugar?",
        a: "Eating protein and fiber before starch produces a significantly flatter blood sugar response than eating the same meal in the reverse order. The food is identical; only the sequence changes. This is one of the core mechanisms behind the Metabolic Health protocol.",
      },
      {
        q: "Why do the protocols focus so heavily on protein?",
        a: "Protein protects lean muscle, drives satiety, and blunts blood sugar spikes. It matters most when total food intake is low — which is why every GLP-1 recipe is built around a minimum of 28g, and why protein leads the plate in nearly every protocol.",
      },
      {
        q: "Will a GLP-1 make my hair thin or fall out?",
        a: "It can, but usually not directly from the medication — it's typically a sign of not getting enough protein, iron, or zinc while eating less overall. Rapid weight loss puts the same kind of stress on hair follicles regardless of the cause. The GLP-1 Nutrition protocol is built around hitting those targets consistently, which is the main thing within your control here.",
      },
      {
        q: "Will I lose muscle on a GLP-1?",
        a: "Some muscle loss happens with any significant weight loss, medication or not — it isn't unique to GLP-1s. What changes the ratio of fat lost to muscle lost is protein intake and resistance training. The GLP-1 Nutrition protocol is built around a 28g+ protein minimum per meal specifically to protect against this.",
      },
      {
        q: "Why does food taste different or “off” on a GLP-1?",
        a: "Taste changes — food tasting metallic, bland, or just wrong — are commonly reported on these medications, though the exact mechanism isn't fully settled. It's one more reason appetite drops further and eating gets harder, which is exactly what the GLP-1 Nutrition protocol is built to work around.",
      },
      {
        q: "I'm bloated no matter what I eat. Will this actually help?",
        a: 'If bloating happens regardless of what you eat, that\'s worth mentioning to a doctor, since it can point to something beyond diet alone. The Gut Health protocol is built around a phased approach — remove, repair, rebuild — designed for exactly this kind of unpredictable, "nothing seems to help" bloating, rather than assuming one specific trigger food.',
      },
      {
        q: "Is “gut health” actually real, or is it just marketing?",
        a: "Fair question — the phrase gets used to sell a lot of things with thin evidence behind them. What's well-established is narrower: fibre diversity, fermented foods, and reducing ultra-processed intake do measurably affect digestion and the gut microbiome. The Gut Health protocol sticks to that established ground rather than trends like expensive probiotics or detox claims.",
      },
    ],
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap((c) =>
    c.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  ),
};

const DESC =
  "What The Nourish System is, what you get for $97, how delivery works, and the science behind the six protocols. Straight answers, no fluff.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — The Nourish System" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Frequently Asked Questions — The Nourish System" },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://thenourishsystem.com/faq" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSONLD),
      },
    ],
  }),
  component: FaqPage,
});

const EYE = "text-[10px] uppercase tracking-[0.22em] text-[#7D9B76] font-sans";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3.5 overflow-hidden rounded-[8px] border border-[#7D9B76] bg-[#F2EDE4]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-[22px] py-5 text-left font-sans transition-colors hover:bg-[rgba(125,155,118,0.08)] md:px-[26px] md:py-[22px]"
      >
        <span className="font-display text-[16px] font-bold leading-[1.35] text-[#1C1C1C] md:text-[18px]">
          {q}
        </span>
        <span
          className="ml-4 shrink-0 text-[22px] font-bold text-[#7D9B76] transition-transform duration-[250ms]"
          style={{
            fontFamily: "Archivo, sans-serif",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-[400ms] ease-in-out"
        style={{ maxHeight: open ? 600 : 0 }}
      >
        <div className="px-[22px] pb-[22px] text-[16px] leading-[1.75] text-[#3a3a3a] md:px-[26px] md:pb-6">
          {a}
        </div>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <SiteLayout>
      <div className="bg-[#F7F5F1] text-[#1C1C1C] font-sans">
        {/* HEAD */}
        <div className="mx-auto max-w-[900px] px-6 pt-12 pb-2 md:px-11 md:pt-[66px] md:pb-[10px]">
          <div className={EYE}>Questions</div>
          <h1 className="mt-3.5 font-display text-[33px] font-bold leading-[1.06] tracking-[-0.015em] md:text-[50px]">
            Real questions.{" "}
            <span className="font-display italic font-bold text-[#7D9B76]">
              Real answers.
            </span>
          </h1>
          <p className="mt-[18px] max-w-[520px] text-[17px] leading-[1.6] text-[#6b6862]">
            What this is, what you get, how it arrives, and what it's based on.
            If your question isn't here, it should be — tell us.
          </p>
        </div>

        {/* BODY */}
        <div className="mx-auto max-w-[900px] px-6 pt-5 pb-8 md:px-11 md:pb-[30px]">
          {CATEGORIES.map((cat) => (
            <div key={cat.eyebrow} className="mt-[50px]">
              <div className="mb-2.5 border-b-2 border-[#1C1C1C] pb-3.5">
                <div className={EYE}>{cat.eyebrow}</div>
              </div>
              {cat.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[50px] bg-[#1C1C1C] px-6 py-[70px] text-center md:px-11">
          <div className="mx-auto max-w-[620px]">
            <div className={EYE}>Still deciding?</div>
            <h2 className="mt-3 font-display text-[28px] font-bold tracking-[-0.015em] text-[#F7F5F1] md:text-[34px]">
              Six protocols. One system.
            </h2>
            <p className="mt-3.5 text-[16px] leading-[1.6] text-[#9A9590]">
              Every protocol is a complete guide to one situation — a full meal plan, a cheat sheet, and 20 recipes. All six are included.
            </p>
            <div className="mt-[26px] flex flex-wrap justify-center gap-3.5">
              <Link
                to="/"
                hash="library"
                className="inline-block rounded-[2px] border border-[rgba(247,245,241,0.45)] px-[34px] py-4 text-[12px] font-medium uppercase tracking-[0.13em] text-[#F7F5F1] transition-colors hover:border-[#F7F5F1]"
              >
                See All Six Protocols
              </Link>
              <Link
                to="/system"
                className="inline-block rounded-[2px] bg-[#C9A84C] px-[34px] py-4 text-[12px] font-medium uppercase tracking-[0.13em] text-[#1C1C1C]"
              >
                Get The Complete System — $97
              </Link>
            </div>
            <div className="mt-4 text-[12px] text-[#6b6862]">
              One-time purchase. Instant download. Yours to keep.
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
