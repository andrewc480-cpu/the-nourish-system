import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import heroAsset from "@/assets/H1_Pomegranate_Salmon_Power_Plate.png.asset.json";

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




const eyebrow = "font-sans uppercase text-[10px] tracking-[0.2em] text-sage";
const sectionHeadline = "font-display text-[40px] font-bold leading-[1.1] text-charcoal";

const playfair = { fontFamily: '"Playfair Display", serif' };
const dmsans = { fontFamily: '"DM Sans", sans-serif' };
const archivo = { fontFamily: '"Archivo", sans-serif', fontVariantNumeric: "tabular-nums lining-nums" as const };

const navLinks = ["Shop", "Free Recipes", "Blog", "About"];
const pillars = [
  { n: "01", label: "GLP-1" },
  { n: "02", label: "Gut Health" },
  { n: "03", label: "Metabolic" },
  { n: "04", label: "Cognitive" },
  { n: "05", label: "Longevity" },
  { n: "06", label: "Hormonal" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
      {/* SECTION 1 — HERO (approved preview hero) */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          minHeight: 520,
          backgroundImage: `url(${heroAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay 1 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(20,20,19,0.90) 0%, rgba(20,20,19,0.62) 38%, rgba(20,20,19,0.10) 66%, rgba(20,20,19,0) 100%)",
          }}
        />
        {/* Overlay 2 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(20,20,19,0.55) 0%, rgba(20,20,19,0) 22%)",
          }}
        />

        {/* Nav */}
        <nav
          className="absolute inset-x-0 top-0 z-20 flex items-center justify-between"
          style={{ padding: "26px 44px" }}
        >
          <div style={{ ...playfair, fontWeight: 700, fontSize: 27, color: "#F7F5F1", lineHeight: 1 }}>
            nóurish<span style={{ color: "#C9A84C" }}>.</span>
          </div>
          <div className="hidden md:flex items-center" style={{ gap: 34 }}>
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  ...dmsans,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  color: "rgba(247,245,241,0.85)",
                  textDecoration: "none",
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div
          className="absolute inset-y-0 left-0 z-20 flex flex-col justify-center hero-content"
          style={{ padding: "0 44px", maxWidth: 680 }}
        >
          <h1
            className="hero-h1"
            style={{
              ...playfair,
              fontWeight: 700,
              fontSize: 62,
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              color: "#F7F5F1",
              margin: 0,
            }}
          >
            Food Your Body<br />Understands.
          </h1>
          <p
            style={{
              ...dmsans,
              fontSize: 17,
              lineHeight: 1.62,
              color: "rgba(247,245,241,0.80)",
              maxWidth: 452,
              marginTop: 22,
            }}
          >
            A food-first system built around six biological pillars, engineered for how your body actually works. Eat well. Every single day.
          </p>
          <div className="flex flex-wrap items-center" style={{ gap: 12, marginTop: 30 }}>
            <a
              href="#"
              style={{
                ...dmsans,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                background: "#C9A84C",
                color: "#1C1C1C",
                padding: "16px 32px",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get The System
            </a>
            <a
              href="#"
              style={{
                ...dmsans,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                background: "transparent",
                border: "1px solid rgba(247,245,241,0.42)",
                color: "#F7F5F1",
                padding: "15px 28px",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Explore Free Recipes
            </a>
          </div>
          <div
            style={{
              ...dmsans,
              fontSize: 13,
              color: "rgba(247,245,241,0.74)",
              marginTop: 18,
            }}
          >
            The complete system — from{" "}
            <span style={{ ...archivo, fontWeight: 600, fontSize: 16 }}>$47</span>
          </div>
        </div>

        {/* Pillar index */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 grid pillar-grid"
          style={{
            padding: "14px 44px",
            borderTop: "1px solid rgba(247,245,241,0.16)",
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.n}
              className={i >= 3 ? "pillar-item pillar-hide-mobile" : "pillar-item"}
              style={{ display: "flex", alignItems: "baseline", gap: 10 }}
            >
              <span style={{ ...archivo, fontWeight: 800, fontSize: 15, color: "#F7F5F1" }}>{p.n}</span>
              <span
                style={{
                  ...dmsans,
                  fontSize: 10.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  color: "rgba(247,245,241,0.74)",
                }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 767px) {
            .hero-h1 { font-size: 38px !important; }
            .hero-content { padding: 0 24px !important; }
            .pillar-grid { grid-template-columns: repeat(3, minmax(0,1fr)) !important; padding: 14px 24px !important; }
            .pillar-hide-mobile { display: none !important; }
          }
        `}</style>
      </section>

      {/* SECTION 2 — THE SYSTEM OVERVIEW */}
      <section id="system" className="w-full px-6 py-9 md:py-12 lg:py-16" style={{ backgroundColor: "#F7F5F1" }}>
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
      <section className="w-full px-6 py-9 md:py-12 lg:py-16" style={{ backgroundColor: "#F2EDE4" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>Six Biological Pillars</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>
            Six systems.
            <br />
            <span className="italic" style={{ color: "#7D9B76" }}>All controlled by food.</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {([
              { n: "01", name: "GLP-1 Nutrition", promise: "Eat to protect your muscle and stabilise your energy.", href: "/glp1" },
              { n: "02", name: "Gut Health", promise: "Restore the gut. Everything else follows.", href: "/gut-health" },
              { n: "03", name: "Metabolic Health", promise: "Stable blood sugar is the foundation of everything.", href: "/metabolic-health" },
              { n: "04", name: "Cognitive Performance", promise: "Feed your brain. Protect it for life.", href: "/cognitive-performance" },
              { n: "05", name: "Longevity & Healthspan", promise: "Not longer. Better. For as long as possible.", href: "/longevity" },
              { n: "06", name: "Hormonal Health", promise: "Restore from the inside. Every meal.", href: "/hormonal-health" },
            ] as const).map((p) => (
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
      <section className="w-full px-6 py-9 md:py-12 lg:py-16" style={{ backgroundColor: "#F7F5F1" }}>
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
              <div className="text-[28px] price self-end text-right" style={{ color: "#F7F5F1" }}>
                $47
              </div>
              <Link
                to="/system"
                className="rounded-[2px] font-sans font-medium whitespace-nowrap bg-[#C9A84C] hover:bg-[#BE9A3D] transition-colors duration-150"
                style={{ color: "#1C1C1C", padding: "14px 28px" }}
              >
                Get The Flagship
              </Link>
            </div>
          </div>

          {/* Tier 2 — Satellites */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {([
              { n: "01", name: "GLP-1 Nutrition", href: "/glp1" },
              { n: "02", name: "Gut Health", href: "/gut-health" },
              { n: "03", name: "Metabolic Health", href: "/metabolic-health" },
              { n: "04", name: "Cognitive Performance", href: "/cognitive-performance" },
              { n: "05", name: "Longevity & Healthspan", href: "/longevity" },
              { n: "06", name: "Hormonal Health", href: "/hormonal-health" },
            ] as const).map((p) => (
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
                <div className="mt-4 text-[20px] price">
                  $27</div>
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
            <div className="flex flex-col items-start gap-2 md:items-start">
              <div className="text-[28px] price" style={{ color: "#F7F5F1" }}>
                $147</div>
              <p
                className="font-sans text-[12px]"
                style={{ color: "rgba(247,245,241,0.6)" }}
              >
                Save $62 versus buying individually
              </p>
              <Link
                to="/bundle"
                className="mt-2 rounded-[2px] font-sans font-medium bg-[#1C1C1C] hover:bg-[#2A2A2A] transition-colors duration-150"
                style={{ color: "#F7F5F1", padding: "14px 28px" }}
              >
                Get The Complete Bundle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PULL QUOTE */}
      <section
        className="w-full px-6 text-center py-9 md:py-12 lg:py-16"
        style={{ backgroundColor: "#1C1C1C" }}
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
        className="w-full px-6 text-center py-9 md:py-12 lg:py-16"
        style={{ backgroundColor: "#F2EDE4" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className={eyebrow}>Start Here</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>Try the system.</h2>
          <p className="mt-4 font-display italic text-[18px]" style={{ color: "#9A9590" }}>
            Six free recipes. One from each pillar. No email required.
          </p>
          <Link
            to="/free-recipes"
            className="mt-10 inline-block rounded-[2px] font-sans font-medium bg-[#1C1C1C] hover:bg-[#2A2A2A] transition-colors duration-150"
            style={{ color: "#F7F5F1", padding: "14px 32px" }}
          >
            Explore Free Recipes
          </Link>
          <p className="mt-6 font-sans text-[12px]" style={{ color: "#9A9590" }}>
            Real food. Real biology. No restriction.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
