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
    title: "The Brain Runs On What You Eat",
    desc: "DHA and neuroplasticity, neuroinflammation, the gut-brain axis, and cerebral blood flow — the four mechanisms that food controls most directly in the brain.",
  },
  {
    n: "02",
    label: "The Framework",
    title: "Three Brain Targets",
    desc: "Fuel, Protection, and Repair — and the specific ingredients that address each target. Understanding the mechanism makes every food choice intentional.",
  },
  {
    n: "03",
    label: "The Ingredients",
    title: "The Cognitive Ingredient Guide",
    desc: "Whole eggs, wild salmon, blueberries, lion's mane mushroom, dark chocolate, walnuts — the neurological mechanism behind every key brain health ingredient.",
  },
  {
    n: "04",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "DHA every day. Protect the blood-brain barrier. Never spike glucose before cognitive work. Polyphenols daily, diversity weekly. Sleep is brain nutrition.",
  },
  {
    n: "05",
    label: "The Morning Protocol",
    title: "The Brain-First Breakfast",
    desc: "The single most impactful daily brain health habit in this entire protocol — and why protein-first, DHA-rich, glucose-stable mornings set the cognitive trajectory for the entire day.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Three Brain Targets",
    desc: "Every recipe tagged to its primary brain target — Fuel, Protection, or Repair. Full ingredients, method, biological signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1" },
  { n: "02", name: "Gut Health", to: "/gut-health" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-health" },
  { n: "05", name: "Longevity & Healthspan", to: "#" },
  { n: "06", name: "Hormonal Health", to: "#" },
];

export const Route = createFileRoute("/cognitive-performance")({
  head: () => ({
    meta: [
      { title: "Cognitive Performance Protocol — Satellite Book 04 | nóurish." },
      { name: "description", content: "A complete food-first protocol for cognitive health — built around the nutrients your neurons are actually made from." },
      { property: "og:title", content: "Cognitive Performance Protocol — Satellite Book 04 | nóurish." },
      { property: "og:description", content: "A complete food-first protocol for cognitive health — built around the nutrients your neurons are actually made from." },
      { property: "og:url", content: "https://thenourishsystem.com/cognitive-performance" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/cognitive-performance" }],
  }),
  component: CognitivePerformancePage,
});

function CognitivePerformancePage() {
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
              Satellite Protocol · Pillar 04 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">Cognitive</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Performance.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Feed your brain. Protect it for life. A complete food-first protocol for cognitive health — built around the nutrients your neurons are actually made from.
            </p>
            <div
              className="mt-10"
              style={{ width: 1, height: 48, backgroundColor: GOLD, opacity: 0.5 }}
            />
            <div
              className="mt-10 font-sans"
              style={{ fontSize: 40, fontWeight: 300, color: GOLD }}
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
              href="#"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Cognitive Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 6 sections · Three brain targets · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "3", l: "Brain Targets" },
                { n: "20%", l: "Brain Energy Use" },
                { n: "04", l: "of 06 Pillars" },
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
              What you eat at 7am determines
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              how clearly you think at 3pm.
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
              The brain consumes 20% of the body's total energy despite representing just 2% of body mass. Every neurotransmitter, every myelin sheath, every synaptic connection is built from dietary raw materials. When those materials are insufficient, degraded, or inflammatory, cognitive performance declines — not dramatically or suddenly, but through the gradual accumulation of brain fog, memory lapses, mood instability, and reduced processing speed that most people attribute to stress or age. Cognitive performance is not a fixed trait. It is a biological output — shaped daily by the nutrients available to your neurons, the quality of your gut-brain signalling, and the level of neuroinflammation in your system. The food choices you make daily are not just fuelling your brain. They are building and maintaining its physical structure.
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
                The Matcha Protocol
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                L-theanine in matcha modulates alpha brain waves — producing calm, focused alertness without the cortisol spike of coffee. L-theanine and caffeine together produce a cognitive state that neither produces alone. Never drink matcha on an empty stomach — always pair with protein or fat to buffer the cortisol response.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE THREE BRAIN TARGETS */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The Brain Nutrition Framework
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Three targets.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One complete strategy.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Every recipe in this protocol addresses one or more of three cognitive targets. Understanding which target each ingredient serves makes every meal a deliberate brain health act.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                label: "Target 01",
                title: "Fuel",
                body: "Clean, sustained energy for the brain without glucose spikes that impair focus. Eggs, oily fish, avocado, nuts, and slow-release complex carbohydrates. The brain runs most efficiently on a steady, lipid-rich energy substrate.",
              },
              {
                label: "Target 02",
                title: "Protection",
                body: "Defending against neuroinflammation and oxidative damage. Blueberries, dark chocolate, turmeric, olive oil, green tea, and omega-3 fatty acids — compounds that cross the blood-brain barrier and directly reduce neuroinflammatory markers.",
              },
              {
                label: "Target 03",
                title: "Repair",
                body: "Supporting overnight glymphatic clearance, neuroplasticity, and long-term structural brain health. Magnesium-rich evening meals, adaptogens, and fermented foods via the gut-brain axis.",
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
              "Cognitive performance is not fixed. It is a daily output of daily inputs. The food choices you make this week are building — or degrading — the brain you will have in 20 years."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 2, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — Cognitive Performance Protocol
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
              The cognitive protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              Feed your brain daily.
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
                  Cognitive Performance
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete cognitive performance satellite protocol. Six sections. 20 recipes. Three brain targets.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD }}
                >
                  $27
                </div>
                <a
                  href="#"
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
                    style={{ fontSize: 14, fontWeight: 300, color: GOLD }}
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
