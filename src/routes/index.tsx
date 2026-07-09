import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import heroAsset from "@/assets/H1_Pomegranate_Salmon_Power_Plate.png.asset.json";
import lib01 from "@/assets/nourish-lib-01-glp1.jpg.asset.json";
import lib02 from "@/assets/nourish-lib-02-gut.jpg.asset.json";
import lib03 from "@/assets/nourish-lib-03-metabolic.jpg.asset.json";
import lib04 from "@/assets/nourish-lib-04-cognitive.jpg.asset.json";
import lib05 from "@/assets/nourish-lib-05-longevity.jpg.asset.json";
import lib06 from "@/assets/nourish-lib-06-hormonal.jpg.asset.json";

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
            style={{
              ...dmsans,
              fontWeight: 400,
              fontSize: "16.5px",
              lineHeight: 1.72,
              color: "#3a3a3a",
              maxWidth: 660,
              marginTop: 30,
            }}
          >
            Most food content tells you what to eat. The Nourish System tells you <em>why</em> — why food does what it does inside your body, and which meals actually put that to work. It's built around six systems your food shapes every day: your gut, your metabolism, your hormones, and more. Learn how it works once, and you'll stop reaching for the next plan.
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
                <div style={{ fontFamily: '"Archivo", sans-serif', fontWeight: 800, fontSize: 40, fontVariantNumeric: "tabular-nums lining-nums", color: "#1C1C1C", lineHeight: 1 }}>{s.n}</div>
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


      {/* SECTION 4 — THE PRODUCTS */}
      <section className="w-full px-6 py-9 md:py-12 lg:py-16" style={{ backgroundColor: "#F7F5F1" }}>
        <div className="mx-auto max-w-6xl">
          <p className={eyebrow}>The Library</p>
          <h2 className={`mt-5 ${sectionHeadline}`}>
            Six protocols.
            <br />
            <span className="italic" style={{ color: "#7D9B76" }}>Pick one, or take them all.</span>
          </h2>
          <p
            style={{
              ...dmsans,
              fontSize: 16,
              lineHeight: 1.7,
              color: "#3a3a3a",
              maxWidth: 640,
              marginTop: 20,
            }}
          >
            Each protocol is a complete guide to one situation — the rules, a 7-day plan, a one-page cheat sheet, and 20 recipes built for it. Buy the one you need most, or get all six together as the complete system. Click any protocol to see exactly what's inside.
          </p>


          {/* Tier 2 — Satellites */}
          <div className="mt-8 grid gap-[18px] grid-cols-2 md:grid-cols-3 pillar-tile-grid">
            {([
              { n: "01", name: "GLP-1 Nutrition", href: "/glp1", img: lib01.url },
              { n: "02", name: "Gut Health", href: "/gut-health", img: lib02.url },
              { n: "03", name: "Metabolic Health", href: "/metabolic-health", img: lib03.url },
              { n: "04", name: "Cognitive Performance", href: "/cognitive-performance", img: lib04.url },
              { n: "05", name: "Longevity & Healthspan", href: "/longevity", img: lib05.url },
              { n: "06", name: "Hormonal Health", href: "/hormonal-health", img: lib06.url },
            ] as const).map((p) => (
              <a
                key={p.n}
                href={p.href}
                className="pillar-tile group"
                style={{
                  position: "relative",
                  display: "block",
                  height: 310,
                  borderRadius: 4,
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="pillar-tile-img"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(20,20,19,0.82) 0%, rgba(20,20,19,0.08) 55%, rgba(20,20,19,0.22) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    left: 20,
                    fontFamily: '"Archivo", sans-serif',
                    fontWeight: 800,
                    fontSize: 21,
                    color: "#F7F5F1",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {p.n}
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 18,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 600,
                      fontSize: 20,
                      lineHeight: 1.14,
                      color: "#F7F5F1",
                      maxWidth: "72%",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Archivo", sans-serif',
                      fontWeight: 600,
                      fontSize: 18,
                      color: "#F7F5F1",
                      fontVariantNumeric: "tabular-nums lining-nums",
                    }}
                  >
                    $27
                  </div>
                </div>
              </a>
            ))}
          </div>
          <style>{`
            .pillar-tile:hover .pillar-tile-img { transform: scale(1.04); }
            @media (max-width: 767px) {
              .pillar-tile { height: 210px !important; }
            }
          `}</style>

          {/* Complete System */}
          <div
            className="mt-8"
            style={{ backgroundColor: "#1C1C1C", borderRadius: 4, padding: "52px 48px", textAlign: "center" }}
          >
            <div
              style={{
                ...dmsans,
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7D9B76",
              }}
            >
              Best Value · Save $65
            </div>
            <h3
              className="font-display"
              style={{ fontWeight: 700, fontSize: 34, color: "#F7F5F1", marginTop: 16 }}
            >
              The Complete System
            </h3>
            <p
              style={{
                ...dmsans,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#9A9590",
                maxWidth: 560,
                margin: "16px auto 0",
              }}
            >
              All six protocols in one. Every situation, every rule, every weekly plan, and all 120 recipes — the whole library, one price.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                gap: 14,
                marginTop: 28,
              }}
            >
              <span
                style={{
                  ...archivo,
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#6b6862",
                  textDecoration: "line-through",
                }}
              >
                $162
              </span>
              <span
                style={{
                  ...archivo,
                  fontWeight: 800,
                  fontSize: 44,
                  color: "#F7F5F1",
                }}
              >
                $97
              </span>
            </div>
            <p
              style={{
                ...dmsans,
                fontSize: 12,
                color: "#7D9B76",
                marginTop: 8,
              }}
            >
              You save $65 versus buying each protocol on its own
            </p>
            <Link
              to="/system"
              className="mt-7 inline-block rounded-[2px] font-sans font-medium"
              style={{
                background: "#C9A84C",
                color: "#1C1C1C",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                padding: "17px 40px",
                textDecoration: "none",
              }}
            >
              Get Everything
            </Link>
            <p
              style={{
                ...dmsans,
                fontSize: 11,
                color: "#6b6862",
                marginTop: 18,
              }}
            >
              Digital PDF · Instant download · Yours to keep
            </p>
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
