import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

const books = [
  {
    n: "01",
    label: "The Flagship Methodology",
    title: "The Nourish System",
    desc: "The complete food-first biological optimization methodology. Six pillars. 120 recipes. Seven sections.",
    individual: "$47",
    borderColor: TEXT,
    bg: BG,
  },
  {
    n: "02",
    label: "Satellite Protocol 01",
    title: "GLP-1 Nutrition",
    desc: "Eating with intention on medication. 20 recipes across three injection cycle windows.",
    individual: "$27",
    borderColor: SAGE,
    bg: LINEN,
  },
  {
    n: "03",
    label: "Satellite Protocol 02",
    title: "Gut Health",
    desc: "The 30-day microbiome restoration protocol. 20 recipes across three restoration phases.",
    individual: "$27",
    borderColor: SAGE,
    bg: BG,
  },
  {
    n: "04",
    label: "Satellite Protocol 03",
    title: "Metabolic Health",
    desc: "Stable blood sugar. Stable everything. 20 recipes across three daily metabolic windows.",
    individual: "$27",
    borderColor: SAGE,
    bg: LINEN,
  },
  {
    n: "05",
    label: "Satellite Protocol 04",
    title: "Cognitive Performance",
    desc: "Feed your brain. Protect it for life. 20 recipes across three brain targets.",
    individual: "$27",
    borderColor: SAGE,
    bg: BG,
  },
  {
    n: "06",
    label: "Satellite Protocol 05",
    title: "Longevity & Healthspan",
    desc: "Not longer. Better. 20 recipes across five longevity pathways.",
    individual: "$27",
    borderColor: SAGE,
    bg: LINEN,
  },
  {
    n: "07",
    label: "Satellite Protocol 06",
    title: "Hormonal Health",
    desc: "Restore from the inside. 20 recipes across four hormonal targets.",
    individual: "$27",
    borderColor: SAGE,
    bg: BG,
  },
];

const reasons = [
  {
    title: "The Complete Picture",
    body: "The flagship explains how all six systems connect. The satellites go deep on each one. Together they give you the full biological story — from the why to the what to the how.",
  },
  {
    title: "Maximum Flexibility",
    body: "Your health priorities will evolve. The protocol that matters most today may not be the one that matters most in six months. The Complete Bundle means you are always ready — for whatever your body needs next.",
  },
  {
    title: "The Best Value",
    body: "Seven books individually cost $209. The Complete Bundle is $147. You save $62 — the equivalent of more than two satellite protocols at no additional cost.",
  },
];

const also = [
  { n: "01", name: "GLP-1 Nutrition", to: "/glp1", price: "$27" },
  { n: "02", name: "Gut Health", to: "/gut-health", price: "$27" },
  { n: "03", name: "Metabolic Health", to: "/metabolic-health", price: "$27" },
  { n: "04", name: "Cognitive Performance", to: "/cognitive-performance", price: "$27" },
  { n: "05", name: "Longevity & Healthspan", to: "/longevity", price: "$27" },
  { n: "06", name: "Hormonal Health", to: "/hormonal-health", price: "$27" },
];

export const Route = createFileRoute("/bundle")({
  head: () => ({
    meta: [
      { title: "The Complete Nourish Bundle — All Seven Books | nóurish." },
      { name: "description", content: "Every book in The Nourish System. The flagship methodology plus all six satellite protocols. The complete biological optimization library — in one decision." },
      { property: "og:title", content: "The Complete Nourish Bundle — All Seven Books | nóurish." },
      { property: "og:description", content: "Every book in The Nourish System. The flagship methodology plus all six satellite protocols. The complete biological optimization library — in one decision." },
      { property: "og:url", content: "https://thenourishsystem.com/bundle" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/bundle" }],
  }),
  component: BundlePage,
});

function BundlePage() {
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
                color: GOLD,
                backgroundColor: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: 20,
                padding: "6px 16px",
              , fontVariantNumeric: "lining-nums" , fontVariantNumeric: "lining-nums" }}
            >
              Best Value · Save $62
            </span>
            <h1
              className="mt-6 font-display font-bold leading-[1.1]"
              style={{ fontSize: 36, color: BG }}
            >
              <span className="md:text-[56px]">The Complete</span>
              <br />
              <span className="italic md:text-[56px]" style={{ color: SAGE }}>
                Nourish Bundle.
              </span>
            </h1>
            <p
              className="mt-8 font-display italic"
              style={{ fontSize: 17, color: MUTED, maxWidth: 480 }}
            >
              Every book in The Nourish System. The flagship methodology plus all six satellite protocols. The complete biological optimization library — in one decision.
            </p>
            <div
              className="mt-10"
              style={{ width: 1, height: 48, backgroundColor: GOLD, opacity: 0.5 }}
            />
            <div className="mt-10 flex flex-col items-start gap-1">
              <span
                className="font-sans"
                style={{ fontSize: 16, fontWeight: 400, color: MUTED, textDecoration: "line-through", opacity: 0.8 , fontVariantNumeric: "lining-nums" }}
              >
                $209
              </span>
              <span
                className="font-display font-bold"
                style={{ fontSize: 48, color: GOLD , fontVariantNumeric: "lining-nums" }}
              >
                $147
              </span>
            </div>
            <p
              className="mt-2 font-sans uppercase"
              style={{ fontSize: 11, color: SAGE, letterSpacing: "0.08em" , fontVariantNumeric: "lining-nums" }}
            >
              You save $62
            </p>
            <p
              className="mt-2 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              Digital PDF · Instant download · All seven books
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 48px",
                fontSize: 15,
              }}
            >
              Get The Complete Bundle
            </a>
            <p
              className="mt-6 font-sans"
              style={{ fontSize: 11, color: MUTED }}
            >
              7 books · 140 recipes · 6 biological pillars · One complete system
            </p>

            {/* Stat row */}
            <div className="mt-14 flex w-full max-w-2xl items-center justify-center">
              {[
                { n: "7", l: "Complete Books" },
                { n: "140", l: "Total Recipes" },
                { n: "6", l: "Biological Pillars" },
                { n: "$62", l: "Saved" },
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

        {/* SECTION 1 — WHAT'S INCLUDED */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Everything In The Bundle
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              Seven books.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              One complete biological optimization library.
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
              The Complete Nourish Bundle gives you the full methodology plus all six precision protocols — the most comprehensive food-first biological optimization resource available. Each satellite is designed to be read independently, used in sequence, or returned to as your health priorities evolve. Start with the flagship to understand the system. Then go deep on the pillar that matters most to you right now.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-0">
            {books.map((b) => (
              <div
                key={b.n}
                className="flex items-start justify-between gap-4 px-6 py-6 md:px-8 md:py-8"
                style={{
                  backgroundColor: b.bg,
                  borderLeft: `4px solid ${b.borderColor}`,
                }}
              >
                <div className="flex flex-col">
                  <p
                    className="font-sans uppercase"
                    style={{ fontSize: 9, color: GOLD }}
                  >
                    {b.label}
                  </p>
                  <h3
                    className="mt-1 font-display font-semibold"
                    style={{ fontSize: 20, color: TEXT }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="mt-1 font-sans font-light"
                    style={{ fontSize: 13, color: MUTED }}
                  >
                    {b.desc}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span
                    className="font-sans"
                    style={{ fontSize: 12, color: MUTED, textDecoration: "line-through" }}
                  >
                    {b.individual}
                  </span>
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: 12, color: SAGE }}
                  >
                    Included ✓
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary row */}
          <div
            className="mx-auto mt-0 flex max-w-4xl items-center justify-between px-6 py-5 md:px-8"
            style={{ backgroundColor: TEXT }}
          >
            <span className="font-sans font-light" style={{ fontSize: 13, color: MUTED , fontVariantNumeric: "lining-nums" }}>
              Total individual value: $209
            </span>
            <span className="font-display font-semibold" style={{ fontSize: 16, color: BG }}>
              The Complete Bundle
            </span>
            <span className="font-sans font-light" style={{ fontSize: 18, color: GOLD , fontVariantNumeric: "lining-nums" }}>
              $147 — Save $62
            </span>
          </div>
        </section>

        {/* SECTION 2 — WHY THE BUNDLE */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Why Get Everything
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 36, color: TEXT, lineHeight: 1.1 }}
            >
              The six pillars are not
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE }}
            >
              six separate topics.
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
              They are six interconnected biological systems. Improve one, and the others follow. Neglect one, and the others compensate. The person who buys only the GLP-1 protocol eventually discovers that their gut health is the reason their protein absorption is insufficient. The person who buys only the gut health protocol discovers that their metabolic health is the reason their microbiome keeps getting disrupted. The system is designed to be entered anywhere and followed everywhere. The Complete Bundle gives you that freedom — the ability to move between pillars as your health priorities evolve, without returning to buy the next piece.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {reasons.map((c) => (
              <div
                key={c.title}
                style={{
                  backgroundColor: BG,
                  borderRadius: 4,
                  padding: 24,
                  borderTop: `3px solid ${SAGE}`,
                }}
              >
                <h3
                  className="font-display font-semibold"
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

        {/* SECTION 3 — PULL QUOTE */}
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
              "The system is designed to be entered anywhere and followed everywhere. One book leads naturally to the next — because the biology is connected, and so is the food."
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

        {/* SECTION 4 — FINAL CTA */}
        <section className="w-full px-6" style={{ backgroundColor: LINEN, paddingTop: 80, paddingBottom: 80 }}>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Get The Complete Bundle
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 40, color: TEXT, lineHeight: 1.1 }}
            >
              Everything.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 24, color: SAGE , fontVariantNumeric: "lining-nums" }}
            >
              One decision. $147.
            </p>
          </div>
          <div
            className="mx-auto mt-12 flex max-w-xl flex-col items-center rounded-md px-10 py-12 text-center"
            style={{ backgroundColor: TEXT }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: SAGE }}
            >
              The Complete Nourish Bundle
            </p>
            <ul
              className="mt-6 text-left font-sans font-light"
              style={{ fontSize: 13, color: MUTED, lineHeight: 2.0 }}
            >
              <li>✓ The Nourish System — Flagship Methodology</li>
              <li>✓ GLP-1 Nutrition Protocol</li>
              <li>✓ Gut Health Protocol</li>
              <li>✓ Metabolic Health Protocol</li>
              <li>✓ Cognitive Performance Protocol</li>
              <li>✓ Longevity & Healthspan Protocol</li>
              <li>✓ Hormonal Health Protocol</li>
            </ul>
            <div
              className="mt-6 w-full"
              style={{ height: 1, backgroundColor: "rgba(247,245,241,0.1)" }}
            />
            <div
              className="mt-6 font-sans"
              style={{ fontSize: 56, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}
            >
              $147
            </div>
            <p className="mt-2 font-sans" style={{ fontSize: 11, color: MUTED , fontVariantNumeric: "lining-nums" }}>
              Individual value $209 · You save $62
            </p>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center font-sans font-medium"
              style={{
                backgroundColor: GOLD,
                color: TEXT,
                padding: "16px 48px",
                fontSize: 15,
              }}
            >
              Get The Complete Bundle
            </a>
            <p className="mt-4 font-sans" style={{ fontSize: 11, color: MUTED }}>
              Digital PDF delivery · Instant download · No subscription · Yours to keep
            </p>
          </div>
        </section>

        {/* SECTION 5 — INDIVIDUAL PROTOCOLS */}
        <section className="w-full px-6" style={{ backgroundColor: BG, paddingTop: 60, paddingBottom: 60 }}>
          <div className="mx-auto max-w-3xl">
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: SAGE }}
            >
              Prefer To Start With One?
            </p>
            <h2
              className="mt-5 font-display font-bold"
              style={{ fontSize: 28, color: TEXT, lineHeight: 1.1 }}
            >
              Every protocol is available individually.
            </h2>
            <p
              className="mt-3 font-display italic"
              style={{ fontSize: 18, color: MUTED }}
            >
              Start where your body needs it most.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Flagship card */}
            <div
              style={{
                backgroundColor: LINEN,
                borderRadius: 4,
                padding: 18,
                borderTop: `3px solid ${TEXT}`,
              }}
            >
              <p className="font-sans uppercase" style={{ fontSize: 9, color: MUTED }}>
                The Flagship
              </p>
              <h3 className="mt-2 font-display font-semibold" style={{ fontSize: 15, color: TEXT }}>
                The Nourish System
              </h3>
              <p className="mt-2 font-sans" style={{ fontSize: 14, fontWeight: 300, color: GOLD , fontVariantNumeric: "lining-nums" }}>
                $47
              </p>
              <Link
                to="/"
                className="mt-2 inline-block font-sans"
                style={{ fontSize: 11, color: SAGE }}
              >
                View & Get →
              </Link>
            </div>
            {/* Satellite cards */}
            {also.map((a) => (
              <div
                key={a.n}
                style={{
                  backgroundColor: LINEN,
                  borderRadius: 4,
                  padding: 18,
                  borderTop: `2px solid ${SAGE}`,
                }}
              >
                <p className="font-sans uppercase" style={{ fontSize: 9, color: GOLD }}>
                  {a.n} — {a.name}
                </p>
                <h3 className="mt-2 font-display font-semibold" style={{ fontSize: 15, color: TEXT }}>
                  {a.name}
                </h3>
                <p className="mt-2 font-sans" style={{ fontSize: 14, fontWeight: 300, color: GOLD }}>
                  {a.price}
                </p>
                <Link
                  to={a.to}
                  className="mt-2 inline-block font-sans"
                  style={{ fontSize: 11, color: SAGE }}
                >
                  View & Get →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
