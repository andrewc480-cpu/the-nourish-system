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
    title: "Hormones Are Made From Food",
    desc: "The cortisol-hormone connection, liver estrogen clearance, thyroid and metabolic hormones, vascular health and vitality — four biological systems food directly controls.",
  },
  {
    n: "02",
    label: "The Framework",
    title: "The Hormonal Nutrition Framework",
    desc: "The three minerals hormones run on — zinc, magnesium, selenium — and why deficiency in any one disrupts the entire hormonal cascade. All correctable through food alone.",
  },
  {
    n: "03",
    label: "The Ingredients",
    title: "The Hormonal Ingredient Guide",
    desc: "Pumpkin seeds, oysters, Brazil nuts, dark leafy greens, beetroot and arugula, avocado, cruciferous vegetables, flaxseeds — the hormonal mechanism behind every key ingredient explained.",
  },
  {
    n: "04",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "Never skip fat. Manage cortisol first. Support liver clearance daily. Hit the mineral trio daily. Eat for vascular vitality.",
  },
  {
    n: "05",
    label: "The Targets",
    title: "Four Hormonal Systems",
    desc: "Cortisol support, sex hormones, thyroid, and vascular vitality — how each recipe is tagged and why addressing all four simultaneously produces the most complete hormonal restoration.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Four Targets",
    desc: "Every recipe tagged to its primary hormonal target. Full ingredients, method, biological signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const targets = [
  {
    label: "Target 01",
    title: "Cortisol Support",
    body: "Cortisol is the master stress hormone — and when chronically elevated, it steals precursors from sex hormone synthesis. Adaptogens, blood sugar stability, and magnesium are the primary food-based cortisol interventions.",
  },
  {
    label: "Target 02",
    title: "Sex Hormones",
    body: "Zinc, magnesium, healthy fats, and phytoestrogen compounds that directly support testosterone, estrogen, and progesterone synthesis and regulation. For every body, at every age.",
  },
  {
    label: "Target 03",
    title: "Thyroid",
    body: "Selenium for T4 to T3 conversion, iodine for hormone synthesis, cruciferous vegetables for metabolic support. One Brazil nut daily provides the full selenium RDA — the most efficient food-based thyroid intervention available.",
  },
  {
    label: "Target 04",
    title: "Vascular Vitality",
    body: "Sexual vitality is fundamentally a vascular health story. Dietary nitrates from beetroot, arugula, and pomegranate support nitric oxide production and the circulation that underlies hormonal vitality in all bodies.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1" },
  { n: "02", name: "Gut Health", to: "/gut-health" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-health" },
  { n: "04", name: "Cognitive Performance", to: "/cognitive-performance" },
  { n: "05", name: "Longevity & Healthspan", to: "/longevity" },
];

export const Route = createFileRoute("/hormonal-health")({
  head: () => ({
    meta: [
      { title: "Hormonal Health Protocol — Satellite Book 06 | nóurish." },
      { name: "description", content: "Restore from the inside. Every meal. A complete food-first hormonal health protocol built around the minerals, fats, and compounds your hormones are actually made from." },
      { property: "og:title", content: "Hormonal Health Protocol — Satellite Book 06 | nóurish." },
      { property: "og:description", content: "Restore from the inside. Every meal. A complete food-first hormonal health protocol built around the minerals, fats, and compounds your hormones are actually made from." },
      { property: "og:url", content: "https://thenourishsystem.com/hormonal-health" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/hormonal-health" }],
  }),
  component: HormonalHealthPage,
});

function HormonalHealthPage() {
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
              Satellite Protocol · Pillar 06 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">Hormonal</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Health.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Restore from the inside. Every meal. A complete food-first hormonal health protocol built around the minerals, fats, and compounds your hormones are actually made from.
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
              href="/hormonal-health"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Hormonal Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 6 sections · Four hormonal targets · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "4", l: "Hormone Systems" },
                { n: "3", l: "Key Minerals" },
                { n: "06", l: "of 06 Pillars" },
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
              Hormonal health is not a women's issue.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              It is not an aging issue. It is a food issue.
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
              Every steroid hormone in your body — testosterone, estrogen, progesterone, cortisol, DHEA — is synthesised from cholesterol. Every peptide hormone requires specific amino acids. Every hormone signalling pathway depends on minerals, vitamins, and fats that can only come from your diet. Hormonal disruption is one of the most common and most poorly understood health complaints of modern life. Fatigue, low libido, mood instability, weight that resists intervention, sleep that never restores, cycles that are unpredictable — these are hormonal symptoms. And in the majority of cases, they are downstream of nutritional deficiencies and lifestyle inputs that food can directly address. Hormones are not a specialist concern. They are a daily food practice. And it starts at the next meal.
            </p>

            {/* Gold callout */}
            <div
              className="mt-10"
              style={{
                backgroundColor: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.28)",
                borderRadius: 6,
                padding: "22px 26px",
              }}
            >
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: 9, letterSpacing: "0.18em", color: GOLD, marginBottom: 8 }}
              >
                The Mineral Trio
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                Three minerals are foundational to hormonal health across all hormone systems: Zinc for testosterone synthesis and progesterone production. Magnesium for DHEA production, cortisol regulation, and sleep. Selenium for thyroid hormone conversion. Deficiency in any one of the three disrupts the entire hormonal cascade. All three are obtainable through food alone — with intentional daily choices.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE FOUR HORMONAL TARGETS */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Hormonal Framework
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Four targets.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One complete protocol.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Every recipe in this protocol is tagged to its primary hormonal target. Understanding which system each meal is supporting makes every food choice a deliberate act of hormonal restoration.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
            {targets.map((c) => (
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
              Every meal that hits the mineral trio, supports liver clearance, and protects vascular health is a hormonal health intervention. This is not a specialist protocol. It is a daily food practice.
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 2, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — Hormonal Health Protocol
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
              The hormonal protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Restore from the inside.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {/* Card 1 — Protocol Only */}
              <div
                style={{
                  backgroundColor: BG,
                  border: "1px solid rgba(28,28,28,0.09)",
                  borderRadius: 4,
                  padding: 32,
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.18em", color: MUTED }}
                >
                  This Protocol
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  Hormonal Health
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete hormonal health satellite protocol. Six sections. 20 recipes. Four hormonal targets.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
                >
                  $27
                </div>
                <a
                  href="/hormonal-health"
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
                style={{
                  backgroundColor: TEXT,
                  borderRadius: 4,
                  padding: 32,
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.18em", color: SAGE }}
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
                  style={{ fontSize: 13, color: MUTED, lineHeight: 1.75 }}
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
              className="mt-4 font-display font-bold"
              style={{ fontSize: 28, color: TEXT, lineHeight: 1.1 }}
            >
              Five more protocols.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One for every pillar.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {also.map((a) => (
                <div
                  key={a.n}
                  style={{
                    backgroundColor: LINEN,
                    padding: 18,
                    borderRadius: 4,
                    borderTop: `2px solid ${SAGE}`,
                  }}
                >
                  <p
                    className="font-sans font-medium uppercase"
                    style={{ fontSize: 9, letterSpacing: "0.18em", color: GOLD }}
                  >
                    {a.n}
                  </p>
                  <h4
                    className="mt-2 font-display font-semibold"
                    style={{ fontSize: 15, color: TEXT }}
                  >
                    {a.name}
                  </h4>
                  <p
                    className="mt-2 font-sans"
                    style={{ fontSize: 22, fontWeight: 700, color: GOLD, fontFamily: "'Playfair Display', serif" , fontVariantNumeric: "lining-nums" }}
                  >
                    $27
                  </p>
                  <Link
                    to={a.to as any}
                    className="mt-3 inline-block font-sans font-medium"
                    style={{ fontSize: 11, color: SAGE }}
                  >
                    View Protocol →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
