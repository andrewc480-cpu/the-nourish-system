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
    title: "Your Gut Runs Everything",
    desc: "The gut-brain axis, the immune command centre, metabolic signalling, the gut barrier — four biological systems the gut controls and food directly influences.",
  },
  {
    n: "02",
    label: "The Framework",
    title: "Pre, Pro & Postbiotics",
    desc: "Feed it. Seed it. Let it produce. The three layers of gut nutrition — prebiotic, probiotic, and postbiotic — and why all three must be present for the microbiome to thrive.",
  },
  {
    n: "03",
    label: "The Reset",
    title: "The 30-Day Phase Structure",
    desc: "Why phase order matters, what each phase achieves, and how to know when you are ready to progress. The most common gut health mistake is skipping Phase 01.",
  },
  {
    n: "04",
    label: "The Ingredients",
    title: "The Gut Health Ingredient Guide",
    desc: "Live kefir, kimchi, white miso, tempeh, garlic, asparagus, bone broth, polyphenol-rich berries — the mechanism behind every key ingredient explained.",
  },
  {
    n: "05",
    label: "The Rules",
    title: "Five Protocol Principles",
    desc: "Diversity above all else. Fermented food daily. Go slow with fermented foods. Protect the gut barrier first. Never heat live cultures above 70°C.",
  },
  {
    n: "06",
    label: "The Recipes",
    title: "20 Recipes Across Three Phases",
    desc: "Every recipe tagged to its restoration phase. Full ingredients, method, biological signal, and a MidJourney photography prompt for every single recipe.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-reset" },
  { n: "04", name: "Cognitive Performance", to: "#" },
  { n: "05", name: "Longevity & Healthspan", to: "#" },
  { n: "06", name: "Hormonal Health", to: "#" },
];

export const Route = createFileRoute("/gut-health")({
  head: () => ({
    meta: [
      { title: "Gut Health Protocol — Satellite Book 02 | nóurish." },
      { name: "description", content: "A complete 30-day food-first microbiome restoration protocol." },
      { property: "og:title", content: "Gut Health Protocol — Satellite Book 02 | nóurish." },
      { property: "og:description", content: "A complete 30-day food-first microbiome restoration protocol." },
      { property: "og:url", content: "https://thenourishsystem.com/gut-health" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/gut-health" }],
  }),
  component: GutHealthPage,
});

function GutHealthPage() {
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
              Satellite Protocol · Pillar 02 of 06
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">Gut</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Health.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Restore the gut. Everything downstream follows. A complete 30-day food-first microbiome restoration protocol.
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
              href="#"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 40px",
                fontSize: 15,
              }}
            >
              Get The Gut Health Protocol
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              20 recipes · 7 sections · 30-day phase framework · MidJourney prompts included
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "20", l: "Recipes" },
                { n: "30", l: "Day Reset" },
                { n: "3", l: "Phases" },
                { n: "02", l: "of 06 Pillars" },
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
              Your gut is not just a digestive organ.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              It is the control centre for everything else.
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
              The gut produces 95% of the body's serotonin. It houses 70–80% of the immune system. It generates the short-chain fatty acids that directly regulate insulin sensitivity, appetite hormones, and fat storage. It communicates with the brain via the vagus nerve more than the brain communicates back. When the microbiome is diverse, balanced, and well-fed, the downstream effects are profound: stable mood, strong immunity, efficient metabolism, clear skin, balanced hormones, and consistent energy. When it is compromised — through poor diet, chronic stress, antibiotic use, or age — the downstream effects are equally profound, and felt across every system in the body. 36% of people actively seek gut-friendly food. Almost none of them have a system that actually understands what the microbiome needs. This protocol is that system.
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
                The Diversity Principle
              </p>
              <p
                className="font-sans font-light"
                style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.75 }}
              >
                Microbiome diversity — the number of distinct bacterial species — is the single strongest predictor of gut health. The most effective way to increase it is to eat more distinct plant foods per week. Target: 30 different plant sources. Many recipes in this protocol deliver five or more in a single meal.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE THREE PHASES */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              The 30-Day Reset Framework
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Three phases.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One complete restoration.
            </p>
            <p
              className="mt-6 font-sans font-light"
              style={{ fontSize: 15, color: "#3a3a3a", maxWidth: 600, lineHeight: 1.85 }}
            >
              Gut restoration does not happen overnight. The microbiome responds to dietary change within 24–48 hours — but meaningful, lasting change requires a structured approach. The recipes in this protocol are organised across three phases. Follow them in order.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                label: "Days 1–10",
                title: "Remove & Repair",
                body: "Calm the gut lining. Reduce inflammation. Bone broth, soft-cooked vegetables, easily digestible proteins, anti-inflammatory turmeric and ginger. Repair before rebuilding.",
              },
              {
                label: "Days 11–20",
                title: "Seed & Feed",
                body: "Introduce fermented foods and prebiotic-rich ingredients gradually. Kimchi, kefir, miso, asparagus, garlic, leeks. Microbiome diversity begins to expand here.",
              },
              {
                label: "Days 21–30",
                title: "Diversify & Sustain",
                body: "Maximise plant food diversity. Target 30 distinct plant sources per week. Full recipe rotation. Multiple fermented foods daily. The long-term maintenance pattern.",
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
              "You cannot fix your energy, your mood, your metabolism, or your immunity by working on those systems directly. You fix them by fixing the gut — because the gut is upstream of all of them."
            </p>
            <div
              className="mx-auto mt-8"
              style={{ width: 40, height: 1, backgroundColor: GOLD }}
            />
            <p
              className="mt-6 font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: MUTED }}
            >
              — Gut Health Protocol
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
              The gut health protocol.
            </h2>
            <p
              className="mt-2 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              30 days. Real results.
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
                  style={{ fontSize: 9, letterSpacing: "0.16em", color: MUTED }}
                >
                  This Protocol
                </p>
                <h3
                  className="mt-3 font-display font-semibold"
                  style={{ fontSize: 20, color: TEXT }}
                >
                  Gut Health
                </h3>
                <p
                  className="mt-3 font-sans font-light"
                  style={{ fontSize: 13, color: "#4a4a4a", lineHeight: 1.75 }}
                >
                  The complete gut health satellite protocol. Seven sections. 20 recipes. Full 30-day phase framework.
                </p>
                <div
                  className="mt-6 font-sans"
                  style={{ fontSize: 28, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
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
                style={{
                  backgroundColor: TEXT,
                }}
              >
                <p
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: 9, letterSpacing: "0.16em", color: SAGE }}
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
                  style={{ fontSize: 11, color: MUTED , fontVariantNumeric: "lining-nums" }}
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
              className="mx-auto mt-10 font-sans"
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
              style={{ fontSize: 18, color: SAGE }}
            >
              One for every pillar.
            </p>
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-5">
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
                    style={{ fontSize: 9, letterSpacing: "0.14em", color: GOLD }}
                  >
                    {a.n}
                  </p>
                  <h3
                    className="mt-2 font-display font-semibold"
                    style={{ fontSize: 15, color: TEXT }}
                  >
                    {a.name}
                  </h3>
                  <p
                    className="mt-2 font-sans"
                    style={{ fontSize: 22, fontWeight: 700, color: GOLD, fontFamily: "'Playfair Display', serif" , fontVariantNumeric: "lining-nums" }}
                  >
                    $27
                  </p>
                  <Link
                    to={a.to as any}
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
