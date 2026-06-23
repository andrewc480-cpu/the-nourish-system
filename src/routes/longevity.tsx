import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

const inside = [
  {
    n: "01",
    label: "The Biology",
    title: "Aging Is Not Inevitable Decline",
    desc: "Inflammaging, telomere length, autophagy, and sarcopenia prevention — the four biological aging mechanisms that food directly modulates.",
  },
  {
    n: "02",
    label: "The Evidence",
    title: "What The World's Longest-Lived People Eat",
    desc: "The Blue Zone dietary commonalities distilled into a practical everyday food system. Not a single superfood. A consistent overall pattern — applied daily, over decades.",
  },
  {
    n: "03",
    label: "The Ingredients",
    title: "The Longevity Ingredient Guide",
    desc: "Extra virgin olive oil, dark berries, legumes, green tea, oily fish, turmeric with black pepper, walnuts — the longevity mechanism behind every key ingredient explained.",
  },
  {
    n: "04",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "Eat more plants. More diverse plants. Lead with legumes. Olive oil is not optional. Protect muscle. Eat with other people.",
  },
  {
    n: "05",
    label: "The Pathways",
    title: "Five Longevity Mechanisms",
    desc: "Anti-inflammatory, autophagy, telomere support, sarcopenia prevention, microbiome diversity — how each recipe is tagged and why the tagging matters.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Five Pathways",
    desc: "Every recipe tagged to its primary longevity pathway. Full ingredients, method, longevity signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const pathways = [
  {
    label: "Pathway 01",
    title: "Anti-Inflammatory",
    body: "Chronic low-grade inflammation — inflammaging — is the single most consistent biomarker of biological aging. EVOO, oily fish, dark berries, turmeric, and diverse plant foods directly reduce inflammatory markers.",
  },
  {
    label: "Pathway 02",
    title: "Autophagy Activation",
    body: "The cellular self-cleaning process that declines with age. EGCG from green tea, resveratrol from dark berries, quercetin from onions — compounds that activate the body's own longevity mechanisms.",
  },
  {
    label: "Pathway 03",
    title: "Telomere Support",
    body: "Folate from leafy greens, omega-3s from oily fish, and polyphenols from berries are the three nutrients most consistently associated with longer telomere length in human longitudinal studies.",
  },
  {
    label: "Pathway 04",
    title: "Sarcopenia Prevention",
    body: "Age-related muscle loss begins in the mid-30s. Leucine-rich protein, adequate vitamin D, and diverse plant food intake are the primary food-based interventions. Muscle mass is the strongest single predictor of longevity.",
  },
  {
    label: "Pathway 05",
    title: "Microbiome Diversity",
    body: "The gut microbiome diversity most consistently associated with biological youth. Target 30 distinct plant sources per week. Each species feeds different bacteria and activates different longevity pathways.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1" },
  { n: "02", name: "Gut Health", to: "/gut-health" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-health" },
  { n: "04", name: "Cognitive Performance", to: "/cognitive-performance" },
  { n: "06", name: "Hormonal Health", to: "/hormonal-health" },
];

export const Route = createFileRoute("/longevity")({
  head: () => ({
    meta: [
      { title: "Longevity & Healthspan Protocol — Satellite Book 05 | nóurish." },
      { name: "description", content: "Not longer. Better. For as long as possible. A complete food-first longevity protocol built around the dietary patterns of the world's longest-lived populations." },
      { property: "og:title", content: "Longevity & Healthspan Protocol — Satellite Book 05 | nóurish." },
      { property: "og:description", content: "Not longer. Better. For as long as possible. A complete food-first longevity protocol built around the dietary patterns of the world's longest-lived populations." },
      { property: "og:url", content: "https://thenourishsystem.com/longevity" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/longevity" }],
  }),
  component: LongevityPage,
});

function LongevityPage() {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: BG, color: TEXT }}>
        {/* HERO */}
        <section
          className="flex w-full items-center justify-center px-6 py-20"
          style={{ backgroundColor: TEXT, minHeight: "70vh" }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span
              className="inline-block font-sans font-medium uppercase"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                color: SAGE,
                backgroundColor: "rgba(125,155,118,0.15)",
                border: "1px solid rgba(125,155,118,0.25)",
                borderRadius: 20,
                padding: "6px 16px",
              }}
            >
              Satellite Protocol · Pillar 05 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">Longevity &</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Healthspan.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Not longer. Better. For as long as possible. A complete food-first longevity protocol built around the dietary patterns of the world's longest-lived populations.
            </p>
            <div
              className="mt-10"
              style={{ width: 1, height: 48, backgroundColor: GOLD, opacity: 0.5 }}
            />
            <div
              className="mt-10 font-sans"
              style={{ fontSize: 40, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
            >
              $27
            </div>
            <p
              className="mt-2 font-sans uppercase"
              style={{ fontSize: 11, color: MUTED, letterSpacing: "0.08em" }}
            >
              Digital PDF · Instant download
            </p>
            <a
              href="/longevity"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Longevity Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 6 sections · Five longevity pathways · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "5", l: "Longevity Pathways" },
                { n: "5", l: "Blue Zones" },
                { n: "05", l: "of 06 Pillars" },
              ].map((s, i) => (
                <div key={s.l} className="flex items-center">
                  <div className="flex flex-col items-center px-4 md:px-8">
                    <div
                      className="font-display font-bold"
                      style={{ fontSize: 28, color: BG }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="mt-1 font-sans uppercase"
                      style={{ fontSize: 9, letterSpacing: "0.16em", color: MUTED }}
                    >
                      {s.l}
                    </div>
                  </div>
                  {i < 3 && (
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        backgroundColor: "rgba(247,245,241,0.15)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 — THE PROBLEM THIS SOLVES */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Why This Exists
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Aging is not inevitable decline.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              It is a process driven by modifiable mechanisms.
            </p>
            <div className="mt-6" style={{ width: 40, height: 2, backgroundColor: GOLD }} />
            <p
              className="mt-10 font-sans font-light"
              style={{
                fontSize: 15,
                color: "#3a3a3a",
                maxWidth: 600,
                lineHeight: 1.85,
              }}
            >
              The science of longevity has identified five primary biological mechanisms that drive aging — and dietary interventions that directly modulate each of them. This is not theoretical. These are measurable pathways, modified by measurable inputs, producing measurable outcomes across decades of epidemiological research.
              <br /><br />
              The populations with the longest healthy lifespans share no single food. But they share profound commonalities in dietary pattern: high plant diversity, abundant legumes, minimal ultra-processed food, olive oil as primary fat, moderate protein from predominantly plant and fish sources, and regular fermented food consumption.
              <br /><br />
              The Nourish longevity protocol is rooted in these patterns — translated into contemporary, practical, delicious food. The food choices you make in your 40s and 50s are the most powerful longevity intervention available to you. More accessible than any clinic. More consistent than any supplement. On your plate, every single day.
            </p>

            {/* Sage callout */}
            <div
              className="mt-10"
              style={{
                backgroundColor: "rgba(125,155,118,0.10)",
                border: "1px solid rgba(125,155,118,0.22)",
                borderRadius: 6,
                padding: "22px 26px",
              }}
            >
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: SAGE, marginBottom: 8 }}
              >
                The Long Game
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                Longevity nutrition does not produce dramatic short-term results. It produces almost imperceptible daily improvements that compound into profound outcomes over years and decades. The person who follows this protocol consistently for five years will have measurably different inflammatory markers, telomere length, microbiome diversity, and muscle mass than the person who does not.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE FIVE LONGEVITY PATHWAYS */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Longevity Science
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Five pathways.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              All activated by food.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Every recipe in this protocol is tagged to its primary longevity pathway. Understanding the mechanism makes every meal a deliberate longevity act — not just healthy eating.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {pathways.slice(0, 3).map((c) => (
              <div
                key={c.label}
                style={{
                  backgroundColor: BG,
                  borderRadius: 4,
                  padding: 24,
                  borderTop: `3px solid ${SAGE}`,
                }}
              >
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 9, color: MUTED }}
                >
                  {c.label}
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 17, color: TEXT }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-5 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="hidden md:block" />
            {pathways.slice(3).map((c) => (
              <div
                key={c.label}
                style={{
                  backgroundColor: BG,
                  borderRadius: 4,
                  padding: 24,
                  borderTop: `3px solid ${SAGE}`,
                }}
              >
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 9, color: MUTED }}
                >
                  {c.label}
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 17, color: TEXT }}
                >
                  {c.title}
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — WHAT'S INSIDE */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Inside The Protocol
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Six sections.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One complete protocol.
            </p>
            <div className="mt-14 space-y-0">
              {inside.map((s, i) => (
                <div key={s.n}>
                  <div className="py-8">
                    <div
                      className="font-display font-bold"
                      style={{
                        fontSize: 48,
                        color: "rgba(28,28,28,0.06)",
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </div>
                    <p
                      className="mt-3 font-sans font-medium uppercase"
                      style={{ fontSize: 9, letterSpacing: "0.16em", color: SAGE }}
                    >
                      {s.label}
                    </p>
                    <h3
                      className="mt-3 font-display font-semibold"
                      style={{ fontSize: 20, color: TEXT }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 font-sans font-light"
                      style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                    >
                      {s.desc}
                    </p>
                  </div>
                  {i < inside.length - 1 && (
                    <div style={{ height: 1, backgroundColor: "rgba(28,28,28,0.09)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — PULL QUOTE */}
        <section
          className="flex w-full items-center justify-center px-6"
          style={{ backgroundColor: TEXT, paddingTop: 72, paddingBottom: 72 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="font-display italic"
              style={{
                fontSize: 22,
                color: BG,
                maxWidth: 560,
                lineHeight: 1.65,
              }}
            >
              "Longevity is not a destination. It is a daily practice — a series of small, consistent, intentional food choices that compound, invisibly and reliably, into a longer, better life."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 2, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — Longevity & Healthspan Protocol
            </p>
          </div>
        </section>

        {/* SECTION 5 — PRICING & CTA */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-4xl text-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Get The Protocol
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              The longevity protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              The long game starts now.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Card 1 — Protocol Only */}
              <div
                className="flex flex-col items-start p-8 text-left"
                style={{
                  backgroundColor: BG,
                  border: "1px solid rgba(28,28,28,0.09)",
                }}
              >
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 9, color: MUTED, letterSpacing: "0.16em" }}
                >
                  This Protocol
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  Longevity & Healthspan
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete longevity satellite protocol. Six sections. 20 recipes. Five longevity pathways.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
                >
                  $27
                </div>
                <a
                  href="/longevity"
                  className="mt-6 inline-flex items-center font-sans font-medium"
                  style={{
                    backgroundColor: TEXT,
                    color: BG,
                    padding: "14px 32px",
                    fontSize: 14,
                  }}
                >
                  Get This Protocol
                </a>
              </div>

              {/* Card 2 — Complete Bundle */}
              <div
                className="flex flex-col items-start p-8 text-left"
                style={{ backgroundColor: TEXT }}
              >
                <p
                  className="font-sans uppercase"
                  style={{ fontSize: 9, color: SAGE, letterSpacing: "0.16em" }}
                >
                  Best Value
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: BG }}
                >
                  The Complete Bundle
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.75 }}
                >
                  This protocol plus the flagship and all five remaining satellites.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
                >
                  $147
                </div>
                <p
                  className="mt-2 font-sans"
                  style={{ fontSize: 11, color: MUTED }}
                >
                  Save $62 versus buying individually
                </p>
                <a
                  href="/bundle"
                  className="mt-6 inline-flex items-center font-sans font-medium"
                  style={{
                    backgroundColor: GOLD,
                    color: TEXT,
                    padding: "14px 32px",
                    fontSize: 14,
                  }}
                >
                  Get Everything
                </a>
              </div>
            </div>
            <p
              className="mt-10 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              Digital PDF delivery · Instant download · No subscription · Yours to keep
            </p>
          </div>
        </section>

        {/* SECTION 6 — ALSO IN THE SYSTEM */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 60, paddingBottom: 60 }}>
          <div className="mx-auto max-w-5xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Nourish System
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 28, color: TEXT, lineHeight: 1.1 }}
            >
              Five more protocols.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 18, color: SAGE }}
            >
              One for every pillar.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {also.map((p) => (
                <div
                  key={p.n}
                  style={{
                    backgroundColor: LINEN,
                    padding: 18,
                    borderRadius: 4,
                    borderTop: `2px solid ${SAGE}`,
                  }}
                >
                  <p
                    className="font-sans uppercase"
                    style={{ fontSize: 9, letterSpacing: "0.16em", color: GOLD }}
                  >
                    {p.n}
                  </p>
                  <h3
                    className="mt-2 font-display font-semibold"
                    style={{ fontSize: 15, color: TEXT }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="mt-2 font-sans"
                    style={{ fontSize: 14, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
                  >
                    $27
                  </p>
                  {p.to.startsWith("/") ? (
                    <Link
                      to={p.to}
                      className="mt-3 inline-block font-sans"
                      style={{ fontSize: 11, color: SAGE }}
                    >
                      View Protocol →
                    </Link>
                  ) : (
                    <span
                      className="mt-3 inline-block font-sans"
                      style={{ fontSize: 11, color: SAGE }}
                    >
                      View Protocol →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
