import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nourish System — Eat Well. Every Single Day." },
      {
        name: "description",
        content:
          "A food-first biological optimization methodology built around the six systems that food controls most directly.",
      },
      { property: "og:title", content: "The Nourish System — Eat Well. Every Single Day." },
      {
        property: "og:description",
        content:
          "A food-first biological optimization methodology built around the six systems that food controls most directly.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const pillars = [
  { n: "01", name: "GLP-1 Nutrition", promise: "Eat to protect your muscle and stabilise your energy.", href: "/glp1" },
  { n: "02", name: "Gut Health", promise: "Restore the gut. Everything else follows.", href: "/gut-reset" },
  { n: "03", name: "Metabolic Health", promise: "Stable blood sugar is the foundation of everything.", href: "/metabolic-reset" },
  { n: "04", name: "Cognitive Performance", promise: "Feed your brain. Protect it for life.", href: "#" },
  { n: "05", name: "Longevity & Healthspan", promise: "Not longer. Better. For as long as possible.", href: "#" },
  { n: "06", name: "Hormonal Health", promise: "Restore from the inside. Every meal.", href: "#" },
];

const eyebrow = "font-sans uppercase text-[10px] tracking-[0.2em] text-sage";
const eyebrowTight = "font-sans uppercase text-[10px] tracking-[0.22em] text-sage";
const sectionHeadline = "font-display text-[40px] font-bold leading-[1.1] text-charcoal";

function HomePage() {
  return (
    <SiteLayout>
      {/* SECTION 1 — HERO */}
      <section
        className="flex w-full items-center justify-center px-6 py-24"
        style={{ backgroundColor: "#1C1C1C", minHeight: "90vh" }}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className={eyebrowTight}>The Complete Methodology</p>
          <h1
            className="mt-6 font-display font-bold leading-[1.1] text-[38px] md:text-[64px]"
            style={{ color: "#F7F5F1" }}
          >
            Eat Well.
            <br />
            <span className="italic" style={{ color: "#7D9B76" }}>
              Every Single Day.
            </span>
          </h1>
          <p
            className="mt-8 font-display italic text-[18px]"
            style={{ color: "#9A9590", maxWidth: 520 }}
          >
            A food-first biological optimization methodology built around the six systems
            that food controls most directly.
          </p>
          <div
            className="mt-10"
            style={{ width: 1, height: 48, backgroundColor: "#C9A84C", opacity: 0.5 }}
          />
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              to="/bundle"
              className="rounded-[2px] font-sans font-medium flex flex-col items-center leading-tight"
              style={{ backgroundColor: "#C9A84C", color: "#1C1C1C", padding: "13px 28px" }}
            >
              <span>Get The Nourish System</span>
              <span className="font-sans font-light" style={{ fontSize: 12, marginTop: 2 }}>
                $47 · Digital PDF
              </span>
            </Link>
            <Link
              to="/free-recipes"
              className="rounded-[2px] font-sans font-normal"
              style={{
                border: "1px solid rgba(247,245,241,0.25)",
                color: "#F7F5F1",
                padding: "14px 32px",
              }}
            >
              Explore Free Recipes
            </Link>
          </div>
          <p className="mt-8 font-sans text-[11px]" style={{ color: "#9A9590" }}>
            One flagship. Six satellite protocols. One complete system.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE SYSTEM OVERVIEW */}
      <section id="system" className="w-full px-6" style={{ backgroundColor: "#F7F5F1", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-3xl">
          <p className={eyebrow}>The Nourish System</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>Food is information.</h2>
          <p className="mt-4 font-display italic text-[18px]" style={{ color: "#9A9590" }}>
            Every meal sends a signal. The question is whether it is saying the right thing.
          </p>
          <div className="mt-6" style={{ width: 40, height: 2, backgroundColor: "#C9A84C" }} />
          <p
            className="mt-10 font-sans font-light text-[15px] leading-[1.85]"
            style={{ color: "#3a3a3a", maxWidth: 640 }}
          >
            Most food content teaches you what to eat. The Nourish System teaches you why
            food does what it does — and gives you the exact meals that put that knowledge
            to work. Built around six biological systems that food directly controls, this
            is not a diet, not a meal plan, and not a recipe collection. It is a
            methodology for using food the way your body actually needs it.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4">
            {[
              { n: "120", l: "Recipes" },
              { n: "6", l: "Biological Pillars" },
              { n: "7", l: "Complete Books" },
              { n: "1", l: "Unified System" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="px-6 py-4"
                style={{
                  borderLeft: i === 0 ? "none" : "1px solid rgba(28,28,28,0.09)",
                }}
              >
                <div className="font-display text-[32px] font-bold text-charcoal">{s.n}</div>
                <div
                  className="mt-2 font-sans uppercase text-[10px]"
                  style={{ letterSpacing: "0.16em", color: "#9A9590" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE SIX PILLARS */}
      <section className="w-full px-6" style={{ backgroundColor: "#F2EDE4", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Six Biological Pillars</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>
            Six systems.
            <br />
            <span className="italic" style={{ color: "#7D9B76" }}>All controlled by food.</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="block transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F7F5F1",
                  borderRadius: 4,
                  padding: 28,
                  borderTop: "3px solid #7D9B76",
                }}
              >
                <div
                  className="font-display uppercase text-[11px]"
                  style={{ letterSpacing: "0.2em", color: "#C9A84C" }}
                >
                  Pillar {p.n}
                </div>
                <h3 className="mt-3 font-display text-[22px] font-semibold text-charcoal">
                  {p.name}
                </h3>
                <p
                  className="mt-2 font-sans font-light italic text-[13px]"
                  style={{ color: "#9A9590" }}
                >
                  {p.promise}
                </p>
                <div
                  className="mt-5 font-sans font-medium text-[12px]"
                  style={{ color: "#7D9B76" }}
                >
                  Explore Protocol →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE PRODUCTS */}
      <section className="w-full px-6" style={{ backgroundColor: "#F7F5F1", paddingTop: 96, paddingBottom: 96 }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>The Complete Library</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>
            One system.
            <br />
            <span className="italic" style={{ color: "#7D9B76" }}>Seven books.</span>
          </h2>

          {/* Tier 1 — Flagship */}
          <div
            className="mt-12 flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-14"
            style={{ backgroundColor: "#1C1C1C", borderRadius: 4 }}
          >
            <div className="max-w-2xl">
              <div
                className="font-sans uppercase text-[10px]"
                style={{ letterSpacing: "0.16em", color: "#7D9B76" }}
              >
                The Complete Methodology
              </div>
              <h3
                className="mt-3 font-display text-[32px] font-bold"
                style={{ color: "#F7F5F1" }}
              >
                The Nourish System
              </h3>
              <p
                className="mt-4 font-sans font-light text-[14px]"
                style={{ color: "#9A9590" }}
              >
                The complete food-first biological optimization methodology. Six pillars.
                120 recipes. The full system.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div
                className="font-sans font-light text-[28px]"
                style={{ color: "#C9A84C" }}
              >
                $47
              </div>
              <Link
                to="/bundle"
                className="rounded-[2px] font-sans font-medium"
                style={{ backgroundColor: "#C9A84C", color: "#1C1C1C", padding: "14px 28px" }}
              >
                Get The Flagship
              </Link>
            </div>
          </div>

          {/* Tier 2 — Satellites */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="block transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F2EDE4",
                  borderRadius: 4,
                  padding: 24,
                  borderTop: "3px solid #7D9B76",
                }}
              >
                <div
                  className="font-sans uppercase text-[9px]"
                  style={{ letterSpacing: "0.16em", color: "#9A9590" }}
                >
                  Satellite Protocol {p.n}
                </div>
                <h4 className="mt-3 font-display text-[18px] font-semibold text-charcoal">
                  {p.name}
                </h4>
                <div
                  className="mt-4 font-sans font-light text-[20px]"
                  style={{ color: "#C9A84C" }}
                >
                  $27
                </div>
                <div
                  className="mt-4 font-sans font-medium text-[12px]"
                  style={{ color: "#7D9B76" }}
                >
                  Get This Protocol →
                </div>
              </a>
            ))}
          </div>

          {/* Tier 3 — Bundle */}
          <div
            className="mt-8 flex flex-col gap-6 p-10 md:flex-row md:items-center md:justify-between md:p-14"
            style={{ backgroundColor: "#7D9B76", borderRadius: 4 }}
          >
            <div className="max-w-2xl">
              <div
                className="font-sans uppercase text-[10px]"
                style={{ letterSpacing: "0.16em", color: "rgba(247,245,241,0.7)" }}
              >
                Best Value
              </div>
              <h3
                className="mt-3 font-display text-[28px] font-bold"
                style={{ color: "#F7F5F1" }}
              >
                The Complete Nourish Bundle
              </h3>
              <p
                className="mt-4 font-sans font-light text-[14px]"
                style={{ color: "rgba(247,245,241,0.8)" }}
              >
                Every book in The Nourish System. The flagship plus all six satellite
                protocols. The complete biological optimization library.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <div
                className="font-sans font-light text-[28px]"
                style={{ color: "#F7F5F1" }}
              >
                $147
              </div>
              <p
                className="font-sans text-[12px]"
                style={{ color: "rgba(247,245,241,0.6)" }}
              >
                Save $62 versus buying individually
              </p>
              <Link
                to="/bundle"
                className="mt-2 rounded-[2px] font-sans font-medium"
                style={{ backgroundColor: "#1C1C1C", color: "#F7F5F1", padding: "14px 28px" }}
              >
                Get The Complete Bundle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PULL QUOTE */}
      <section
        className="w-full px-6 text-center"
        style={{ backgroundColor: "#1C1C1C", paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <p
            className="font-display italic leading-[1.6] text-[20px] md:text-[26px]"
            style={{ color: "#F7F5F1" }}
          >
            "Above the diet. Below the clinic. Food that actually understands what your
            body is doing."
          </p>
          <div
            className="mx-auto mt-8"
            style={{ width: 40, height: 1, backgroundColor: "#C9A84C" }}
          />
          <p
            className="mt-6 font-sans uppercase text-[11px]"
            style={{ letterSpacing: "0.16em", color: "#9A9590" }}
          >
            — The Nourish System
          </p>
        </div>
      </section>

      {/* SECTION 6 — FREE RECIPES TEASER */}
      <section
        className="w-full px-6 text-center"
        style={{ backgroundColor: "#F2EDE4", paddingTop: 96, paddingBottom: 96 }}
      >
        <div className="mx-auto max-w-2xl">
          <p className={eyebrow}>Start Here</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>Try the system.</h2>
          <p className="mt-4 font-display italic text-[18px]" style={{ color: "#9A9590" }}>
            Six free recipes. One from each pillar. No email required.
          </p>
          <Link
            to="/free-recipes"
            className="mt-10 inline-block rounded-[2px] font-sans font-medium"
            style={{ backgroundColor: "#1C1C1C", color: "#F7F5F1", padding: "14px 32px" }}
          >
            Explore Free Recipes
          </Link>
          <p className="mt-6 font-sans text-[12px]" style={{ color: "#9A9590" }}>
            Real food. Real biology. No restriction.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
