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
    title: "What GLP-1 Actually Does",
    desc: "Appetite suppression, delayed gastric emptying, blood sugar regulation, muscle loss risk — understanding the four mechanisms that change how you need to eat.",
  },
  {
    n: "02",
    label: "The Cycle",
    title: "The Weekly Injection Framework",
    desc: "How to eat across all three windows of your weekly injection cycle — and why eating the same way on day one and day six is the most common GLP-1 nutrition mistake.",
  },
  {
    n: "03",
    label: "The Priority",
    title: "The Protein Imperative",
    desc: "Every recipe in this protocol meets a minimum of 28g protein. Why that number, which sources work best on a compressed appetite, and how to hit it even on nausea window days.",
  },
  {
    n: "04",
    label: "The Strategy",
    title: "The Fibre Framework",
    desc: "Soluble versus insoluble fibre on GLP-1 — why the wrong type compounds nausea and the right type supports blood sugar, gut health, and satiety without gastric burden.",
  },
  {
    n: "05",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "Protein first. Match food to your cycle. Soluble fibre only on nausea days. Density over volume. Never skip the optimisation window. The five non-negotiables.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Three Windows",
    desc: "Every recipe tagged to its injection cycle window. Full ingredients, method, biological signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const also = [
  { n: "02", name: "Gut Health", to: "/gut-health" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-health" },
  { n: "04", name: "Cognitive Performance", to: "/cognitive-performance" },
  { n: "05", name: "Longevity & Healthspan", to: "/longevity" },
  { n: "06", name: "Hormonal Health", to: "/hormonal-health" },
];

export const Route = createFileRoute("/glp1")({
  head: () => ({
    meta: [
      { title: "GLP-1 Nutrition Protocol — Satellite Book 01 | nóurish." },
      { name: "description", content: "A complete food-first protocol for GLP-1 users — built around how your body is now functioning." },
      { property: "og:title", content: "GLP-1 Nutrition Protocol — Satellite Book 01 | nóurish." },
      { property: "og:description", content: "A complete food-first protocol for GLP-1 users — built around how your body is now functioning." },
      { property: "og:url", content: "https://thenourishsystem.com/glp1" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/glp1" }],
  }),
  component: Glp1Page,
});

function Glp1Page() {
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
              Satellite Protocol · Pillar 01 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">GLP-1</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Nutrition.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Eating with intention, on medication. A complete food-first protocol for GLP-1 users — built around how your body is now functioning.
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
              href="/glp1"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The GLP-1 Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 7 sections · Injection cycle framework · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "28g+", l: "Min. Protein" },
                { n: "3", l: "Cycle Windows" },
                { n: "01", l: "of 06 Pillars" },
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
              One in five adults has used a GLP-1 medication.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Almost none of them have a food system built for it.
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
              GLP-1 medications suppress appetite and slow gastric emptying — which means the small amount of food you do consume carries an outsized biological responsibility. Every meal must protect lean muscle mass, maintain micronutrient density, and stabilise blood sugar without overwhelming a compressed digestive system. The primary danger of GLP-1 medications is not the medication itself. It is under-nutrition that masquerades as success. When appetite disappears, it is easy to eat very little and feel fine. The scale moves. But muscle is being lost, micronutrient stores are being depleted, and the metabolic foundation for long-term health is being quietly eroded. This protocol exists to prevent exactly that.
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
                The Protein-First Rule
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                On GLP-1 medications, eat protein before anything else on the plate. Every single meal. Every single day. When satiety arrives early and unpredictably, protein must reach your system before appetite disappears.
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
              The Injection Cycle Framework
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Your week has three
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              distinct phases.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Most people on weekly GLP-1 injections fight the same cycle every week without a strategy. This protocol gives you one.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                label: "Days 1–2",
                title: "The Nausea Window",
                body: "Soft textures. Low odour. Cold or warm — never heavy. Protein in its most digestible form. Minimum viable nutrition with maximum density.",
              },
              {
                label: "Days 3–4",
                title: "The Stabilisation Window",
                body: "Reintroduce structure. Rebuild protein deliberately. Warm, simple, familiar meals that bring the system back online.",
              },
              {
                label: "Days 5–7",
                title: "The Optimisation Window",
                body: "Full nutritional recovery. This is the most important window of your week. Do not under-eat here out of habit.",
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
              Seven sections.
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
              "The injection cycle is not something to push through. It is a biological rhythm to eat with. Your food strategy on day one should look completely different from your food strategy on day six — and that is not a failure. That is precision."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 1, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — GLP-1 Nutrition Protocol
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
              The GLP-1 protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Built for how you eat now.
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
                  GLP-1 Nutrition
                </h3>
                <p
                  className="mt-4 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete GLP-1 satellite protocol. Seven sections. 20 recipes. Full injection cycle framework.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
                >
                  $27
                </div>
                <a
                  href="/glp1"
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
          <div className="mx-auto max-w-6xl text-center">
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
            <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {also.map((p) => (
                <div
                  key={p.n}
                  className="flex flex-col items-start p-5 text-left"
                  style={{
                    backgroundColor: LINEN,
                    borderRadius: 4,
                    borderTop: `2px solid ${SAGE}`,
                  }}
                >
                  <p
                    className="font-sans font-medium uppercase"
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
                  <div
                    className="mt-3 font-sans"
                    style={{ fontSize: 22, fontWeight: 700, color: GOLD, fontFamily: "'Playfair Display', serif" , fontVariantNumeric: "lining-nums" }}
                  >
                    $27
                  </div>
                  <Link
                    to={p.to as any}
                    className="mt-4 font-sans"
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
