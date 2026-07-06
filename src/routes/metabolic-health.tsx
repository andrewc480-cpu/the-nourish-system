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
    title: "Blood Sugar Is The Master Lever",
    desc: "Insulin resistance, the glucose-cortisol loop, postprandial spikes, and circadian insulin sensitivity — the four metabolic mechanisms food controls most directly.",
  },
  {
    n: "02",
    label: "The Framework",
    title: "The Three Daily Metabolic Windows",
    desc: "Morning Insulin Buffer, Midday Energy Sustainer, Evening Metabolic Reset — and why the same meal causes a larger glucose spike in the evening than at breakfast.",
  },
  {
    n: "03",
    label: "The Ingredients",
    title: "The Metabolic Ingredient Guide",
    desc: "Apple cider vinegar, cinnamon, chia seeds, oats, omega-3 rich fish, dark chocolate, legumes, leafy greens — the mechanism behind every key metabolic ingredient explained.",
  },
  {
    n: "04",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "Eat fibre before carbohydrate. Protein at every meal. Never eat refined carbohydrates alone. Move within 10 minutes of eating. Front-load calories, back-load lightness.",
  },
  {
    n: "05",
    label: "The Science",
    title: "The Sequencing Evidence",
    desc: "How eating in the right sequence reduces postprandial glucose by up to 40% — and why this is as powerful as a pharmaceutical glucose-lowering intervention.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Three Windows",
    desc: "Every recipe tagged to its daily metabolic window. Full ingredients, method, biological signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1" },
  { n: "02", name: "Gut Health", to: "/gut-health" },
  { n: "04", name: "Cognitive Performance", to: "/cognitive-performance" },
  { n: "05", name: "Longevity & Healthspan", to: "/longevity" },
  { n: "06", name: "Hormonal Health", to: "/hormonal-health" },
];

export const Route = createFileRoute("/metabolic-health")({
  head: () => ({
    meta: [
      { title: "Metabolic Health Protocol — Satellite Book 03 | nóurish." },
      { name: "description", content: "A complete food-first protocol for metabolic health — built around how your body actually manages glucose." },
      { property: "og:title", content: "Metabolic Health Protocol — Satellite Book 03 | nóurish." },
      { property: "og:description", content: "A complete food-first protocol for metabolic health — built around how your body actually manages glucose." },
      { property: "og:url", content: "https://thenourishsystem.com/metabolic-health" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/metabolic-health" }],
  }),
  component: MetabolicHealthPage,
});

function MetabolicHealthPage() {
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
              Satellite Protocol · Pillar 03 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">Metabolic</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Health.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Stable blood sugar. Stable energy. Stable everything. A complete food-first protocol for metabolic health built around how your body actually manages glucose.
            </p>
            <div
              className="mt-10"
              style={{ width: 1, height: 48, backgroundColor: GOLD, opacity: 0.5 }}
            />
            <div className="mt-10 price" style={{ fontSize: 40 }}>
              $27</div>
            <p
              className="mt-2 font-sans uppercase"
              style={{ fontSize: 11, color: MUTED, letterSpacing: "0.08em" }}
            >
              Digital PDF · Instant download
            </p>
            <a
              href="/metabolic-health"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Metabolic Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 6 sections · Three daily metabolic windows · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "3", l: "Daily Windows" },
                { n: "40%", l: "Glucose Reduction" },
                { n: "03", l: "of 06 Pillars" },
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
              The 3pm crash is not inevitable.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              It is the predictable result of what you ate at noon.
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
              Blood sugar instability is the most common and most correctable underlying condition in modern health. It drives fatigue, brain fog, hormonal disruption, poor sleep, unexplained weight gain, and accelerated aging — and it develops silently through years of random eating before any clinical diagnosis appears. Every symptom you have blamed on stress, age, or bad luck may be downstream of one thing: what and how you are eating. The goal of metabolic health is not low blood sugar. It is stable blood sugar — avoiding the spikes and crashes that drive the most common complaints of modern life. This protocol corrects it. Meal by meal. Day by day.
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
                The Sequencing Protocol
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                Within every meal, eat in this order: fibre first, protein second, fat and carbohydrate last. This single sequence — supported by multiple clinical studies — reduces the postprandial glucose response by up to 40% with no dietary restriction whatsoever.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE THREE WINDOWS */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Metabolic Daily Framework
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Three windows.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Three distinct strategies.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Your metabolic needs change across the day in predictable ways — driven by cortisol cycles, circadian insulin sensitivity, and your body's repair rhythms. The recipes in this protocol are organised to match those rhythms, not fight them.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                label: "6am – 11am",
                title: "The Insulin Buffer",
                body: "Protein-first, savoury, fibre-forward. Prevent the morning cortisol-glucose spike before it starts. No sweet breakfasts. No fruit juice. No refined carbohydrates in this window.",
              },
              {
                label: "11am – 3pm",
                title: "The Energy Sustainer",
                body: "Insulin sensitivity is highest here. Complex carbohydrates, diverse fibre, higher-volume meals. The window where your body can handle more — and where the 3pm crash is decided.",
              },
              {
                label: "5pm – 9pm",
                title: "The Metabolic Reset",
                body: "Insulin sensitivity is at its daily low. Light, easily digestible protein, non-starchy vegetables, anti-inflammatory fats. Creating clean conditions for overnight cellular repair.",
              },
            ].map((c) => (
              <div
                key={c.title}
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
              "Stable blood sugar is not a weight loss goal. It is the foundation of consistent energy, clear thinking, hormonal balance, and healthy aging. Everything else is downstream of this."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 1, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — Metabolic Health Protocol
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
              The metabolic protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Stable energy. All day.
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
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, color: MUTED }}
                >
                  This Protocol
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  Metabolic Health
                </h3>
                <p
                  className="mt-4 font-sans font-light"
                  style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete metabolic health satellite protocol. Six sections. 20 recipes. Full daily window framework.
                </p>
                <div className="mt-6 price" style={{ fontSize: 28 }}>
                  $27</div>
                <a
                  href="/metabolic-health"
                  className="mt-6 inline-flex items-center font-sans font-medium"
                  style={{
                    backgroundColor: TEXT,
                    color: BG,
                    padding: "14px 28px",
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
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, color: SAGE }}
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
                  className="mt-4 font-sans font-light"
                  style={{ fontSize: 14, color: "#9A9590", lineHeight: 1.75 }}
                >
                  This protocol plus the flagship and all five remaining satellites.
                </p>
                <div className="mt-6 price" style={{ fontSize: 28 }}>
                  $147</div>
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
                    padding: "14px 28px",
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
          <div className="mx-auto max-w-6xl">
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
              style={{ fontSize: 24, color: SAGE }}
            >
              One for every pillar.
            </p>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-5">
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
                    style={{ fontSize: 9, color: GOLD }}
                  >
                    {a.n}
                  </p>
                  <h4
                    className="mt-2 font-display font-semibold"
                    style={{ fontSize: 15, color: TEXT }}
                  >
                    {a.name}
                  </h4>
                  <p className="mt-3 price" style={{ fontSize: 28 }}>
                    $27</p>
                  <Link
                    to={a.to}
                    className="mt-3 inline-block font-sans"
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
