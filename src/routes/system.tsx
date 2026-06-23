import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

const sections = [
  {
    n: "01",
    label: "The Philosophy",
    title: "The Nourish Philosophy",
    desc: "The foundational idea: food is information. Every meal sends a signal. This section explains the shift from random eating to intentional eating — and why it changes everything.",
  },
  {
    n: "02",
    label: "The Framework",
    title: "The Six Biological Systems",
    desc: "An accessible explanation of the six systems food directly controls — gut, metabolism, brain, hormones, longevity, and GLP-1 nutrition — and how they connect to each other.",
  },
  {
    n: "03",
    label: "The Method",
    title: "The Nourish Plate Framework",
    desc: "The foundational plate-building method. Protein + Fibre + Healthy Fat — the combination that sends the most coherent biological signal of any food pairing available.",
  },
  {
    n: "04",
    label: "The Navigation Tool",
    title: "The Symptoms to Solution Index",
    desc: "Start with how you feel. Afternoon crash, brain fog, bloating, poor sleep, hormonal disruption — navigate directly to the protocol that addresses it. The feature that makes this different from every other food system.",
  },
  {
    n: "05",
    label: "The Recipes",
    title: "120 Recipes Across Six Pillars",
    desc: "Every recipe engineered for a specific biological outcome. Filtered by pillar, tagged by biological signal, with functional headnotes that explain what the food is doing and why.",
  },
  {
    n: "06",
    label: "The Rhythm",
    title: "The Nourish Daily Protocols",
    desc: "Three time-based daily frameworks — morning, midday, and evening — aligned with your cortisol, insulin, and recovery cycles. Not a meal plan. A biological rhythm.",
  },
  {
    n: "07",
    label: "The Entry Point",
    title: "Your Next Step",
    desc: "A short diagnostic that identifies which of the six satellite protocols you should read next based on your most pressing biological concern. The system is designed to grow with you.",
  },
];

const pillars = [
  { n: "01", name: "GLP-1 Nutrition", promise: "Eat to protect your muscle and energy." },
  { n: "02", name: "Gut Health", promise: "Restore the gut. Everything follows." },
  { n: "03", name: "Metabolic Health", promise: "Stable blood sugar. Stable everything." },
  { n: "04", name: "Cognitive Performance", promise: "What you eat at 7am shapes 3pm." },
  { n: "05", name: "Longevity & Healthspan", promise: "Not longer. Better." },
  { n: "06", name: "Hormonal Health", promise: "Hormones are a food issue." },
];

export const Route = createFileRoute("/system")({
  head: () => ({
    meta: [
      { title: "The Nourish System — The Complete Methodology | nóurish." },
      { name: "description", content: "One flagship methodology. Six biological pillars. 120 recipes. The complete food-first biological optimization system." },
      { property: "og:title", content: "The Nourish System — The Complete Methodology | nóurish." },
      { property: "og:description", content: "One flagship methodology. Six biological pillars. 120 recipes. The complete food-first biological optimization system." },
      { property: "og:url", content: "https://thenourishsystem.com/system" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/system" }],
  }),
  component: SystemPage,
});

function SystemPage() {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: BG, color: TEXT }}>
        {/* HERO */}
        <section
          className="flex w-full items-center justify-center px-6 py-20"
          style={{ backgroundColor: TEXT, minHeight: "70vh" }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.22em", color: SAGE }}
            >
              The Complete Methodology
            </p>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">The Nourish</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                System.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 18, color: MUTED, maxWidth: 500 }}
            >
              One flagship methodology. Six biological pillars. 120 recipes. The complete food-first biological optimization system.
            </p>
            <div
              className="mt-10"
              style={{ width: 1, height: 48, backgroundColor: GOLD, opacity: 0.5 }}
            />
            <div
              className="mt-10 font-sans"
              style={{ fontSize: 40, fontWeight: 300, color: GOLD }}
            >
              $47
            </div>
            <p
              className="mt-2 font-sans uppercase"
              style={{ fontSize: 11, color: MUTED, letterSpacing: "0.08em" }}
            >
              Digital PDF · Instant download
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Nourish System
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              Includes all 7 sections · 120 recipes · Symptoms to Solution Index · Daily Protocols · Six Pillar Framework
            </p>
          </div>
        </section>

        {/* SECTION 1 — WHAT THIS IS */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Methodology
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Not a diet. Not a meal plan.
              <br />
              <span className="italic" style={{ color: SAGE }}>
                A system.
              </span>
            </h2>
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
              Most food content teaches you what to eat. The Nourish System teaches you why food does what it does — and gives you the exact meals that put that knowledge to work. Every chronic health complaint — low energy, hormonal disruption, cognitive decline, gut dysfunction, metabolic confusion — shares a common root. The food you eat either supports or undermines the biological systems that control all of it. The Nourish System makes that connection explicit. And actionable.
            </p>
          </div>
        </section>

        {/* SECTION 2 — WHAT'S INSIDE */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Inside The System
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Seven sections.
              <br />
              <span className="italic" style={{ color: SAGE }}>
                One complete framework.
              </span>
            </h2>
            <div className="mt-14 space-y-0">
              {sections.map((s, i) => (
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
                  {i < sections.length - 1 && (
                    <div style={{ height: 1, backgroundColor: "rgba(28,28,28,0.09)" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE SIX PILLARS OVERVIEW */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-6xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              What's Covered
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Six pillars.
              <br />
              <span className="italic" style={{ color: SAGE }}>
                One interconnected system.
              </span>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.n}
                  style={{
                    backgroundColor: LINEN,
                    borderRadius: 4,
                    padding: 20,
                    borderLeft: `3px solid ${SAGE}`,
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
                    style={{ fontSize: 17, color: TEXT }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="mt-2 font-sans font-light"
                    style={{ fontSize: 12, color: MUTED }}
                  >
                    {p.promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — PULL QUOTE */}
        <section
          className="flex w-full items-center justify-center px-6 py-16"
          style={{ backgroundColor: TEXT }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="font-display italic"
              style={{
                fontSize: 22,
                color: BG,
                maxWidth: 580,
                lineHeight: 1.65,
              }}
            >
              "You are not following a plan. You are learning a language. The language your body has always been speaking."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 1, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — The Nourish System
            </p>
          </div>
        </section>

        {/* SECTION 5 — PRICING & CTA */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-5xl text-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Get Started
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              The complete system.
              <br />
              <span className="italic" style={{ color: SAGE }}>
                One decision.
              </span>
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
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
                  Start Here
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  The Nourish System
                </h3>
                <p
                  className="mt-4 font-sans font-light"
                  style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete flagship methodology. Seven sections. 120 recipes.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD }}
                >
                  $47
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center font-sans font-medium"
                  style={{
                    backgroundColor: TEXT,
                    color: BG,
                    padding: "14px 28px",
                    fontSize: 14,
                  }}
                >
                  Get The Flagship
                </a>
              </div>

              {/* Card 2 */}
              <div
                className="flex flex-col items-start p-8 text-left"
                style={{
                  backgroundColor: BG,
                  border: "1px solid rgba(28,28,28,0.09)",
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, color: SAGE }}
                >
                  Most Popular
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  Flagship + Your Pillar
                </h3>
                <p
                  className="mt-4 font-sans font-light"
                  style={{ fontSize: 14, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The flagship plus the satellite protocol that addresses your most pressing concern.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD }}
                >
                  $67
                </div>
                <p
                  className="mt-2 font-sans"
                  style={{ fontSize: 12, color: MUTED }}
                >
                  Choose your pillar at checkout
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center font-sans font-medium"
                  style={{
                    backgroundColor: TEXT,
                    color: BG,
                    padding: "14px 28px",
                    fontSize: 14,
                  }}
                >
                  Build Your Bundle
                </a>
              </div>

              {/* Card 3 */}
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
                  style={{ fontSize: 13, color: "#9A9590", lineHeight: 1.75 }}
                >
                  Every book. The complete system.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD }}
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
                  href="#"
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
      </div>
    </SiteLayout>
  );
}
