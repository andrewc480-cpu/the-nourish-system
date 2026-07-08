import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/H1_Pomegranate_Salmon_Power_Plate.png.asset.json";

export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [
      { title: "Preview — nóurish." },
      { name: "description", content: "Food your body understands. A food-first system built around six biological pillars." },
      { property: "og:title", content: "Preview — nóurish." },
      { property: "og:description", content: "Food your body understands. A food-first system built around six biological pillars." },
    ],
  }),
  component: PreviewPage,
});

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

function PreviewPage() {
  return (
    <div
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
    </div>
  );
}
