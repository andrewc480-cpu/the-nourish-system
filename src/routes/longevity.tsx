import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/longevity-hero.png.asset.json";
import bandImg from "@/assets/longevity-band.png.asset.json";

export const Route = createFileRoute("/longevity")({
  head: () => ({
    meta: [
      { title: "Longevity & Healthspan Protocol — nóurish." },
      {
        name: "description",
        content:
          "A food protocol for the long game — the eating patterns behind the world's longest, healthiest lives, and 20 recipes that make them a habit.",
      },
      { property: "og:title", content: "Longevity & Healthspan Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "Plant-forward, protein-sufficient food protocol for a long, strong life — 30-day plan, cheat sheet, and 20 recipes.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/longevity" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/longevity" }],
  }),
  component: LongevityPage,
});

const css = `
.lgv { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.lgv h1,.lgv h2,.lgv h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.015em; }
.lgv .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.lgv .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; cursor:pointer; }

.lgv .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.lgv .hl h1 { font-size:36px; line-height:1.04; text-wrap:balance; }
.lgv .hl h1 .it { font-family:'Playfair Display',serif; font-style:italic; font-weight:700; color:#7D9B76; }
.lgv .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.lgv .hl .stat { margin-top:20px; font-size:12px; color:#8a877f; }
.lgv .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.lgv .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.lgv .hl .per { font-size:13px; color:#8a877f; }
.lgv .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.lgv .hl .eye { margin-bottom:14px; display:inline-block; }
.lgv .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

.lgv .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.lgv .sec h2 { font-size:29px; margin-top:12px; line-height:1.1; text-wrap:balance; }
.lgv .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.lgv .sec .body b { color:#1C1C1C; font-weight:500; }
.lgv .why { background:#1C1C1C; }
.lgv .why .sec h2 { color:#F7F5F1; }
.lgv .why .sec .body { color:#c9c6c0; }
.lgv .why .sec .body b { color:#F7F5F1; }

.lgv .band { height:220px; background-position:center; background-size:cover; }

.lgv .phases { background:#F2EDE4; }
.lgv .ph-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.lgv .ph-in h2 { font-size:29px; margin-top:12px; }
.lgv .ph-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:620px; }
.lgv .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.lgv .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.lgv .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.lgv .win h3 { font-size:20px; margin-top:8px; }
.lgv .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }

.lgv .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.lgv .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.lgv .rulebox .eye { color:#C9A84C; }
.lgv .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.lgv .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.lgv .rulebox p b { color:#F7F5F1; font-weight:500; }

.lgv .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.lgv .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.lgv .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.lgv .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.lgv .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.lgv .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.lgv .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.lgv .expand-btn.open .eb-i { transform:rotate(45deg); }
.lgv .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.lgv .deep.open { max-height:5000px; }
.lgv .deep-in { padding:30px 4px 0; }
.lgv .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.lgv .deep h3:first-child { margin-top:0; }
.lgv .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.lgv .deep p b { color:#1C1C1C; font-weight:500; }

.lgv .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.lgv .anat h2 { font-size:29px; margin-top:12px; }
.lgv .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.lgv .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.lgv .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.lgv .anat-item h3 { font-size:17px; margin-top:8px; }
.lgv .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

.lgv .buy { background:#1C1C1C; padding:64px 20px; }
.lgv .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.lgv .buy .eye { color:#7D9B76; }
.lgv .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.lgv .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.lgv .buy .price { margin-top:24px; }
.lgv .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.lgv .buy .cta { margin-top:20px; }
.lgv .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.lgv .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.lgv .upsell .u { color:#c9c6c0; font-size:15px; }
.lgv .upsell .u b { color:#F7F5F1; font-weight:500; }
.lgv .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .lgv .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .lgv .hl h1 { font-size:52px; }
  .lgv .hl p { font-size:17px; margin-top:20px; }
  .lgv .hl .now { font-size:44px; }
  .lgv .himg { height:460px; }
  .lgv .sec { padding:76px 44px; }
  .lgv .sec h2 { font-size:38px; margin-top:14px; }
  .lgv .sec .body { font-size:17.5px; margin-top:24px; }
  .lgv .band { height:320px; }
  .lgv .ph-in { padding:76px 44px; }
  .lgv .ph-in h2 { font-size:38px; margin-top:14px; }
  .lgv .ph-in .body { font-size:16px; margin-top:18px; }
  .lgv .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .lgv .win { padding:26px; }
  .lgv .win h3 { font-size:21px; }
  .lgv .rule { padding:20px 44px 0; }
  .lgv .rulebox { padding:40px 44px; }
  .lgv .rulebox h3 { font-size:24px; }
  .lgv .rulebox p { font-size:15.5px; }
  .lgv .expand-wrap { padding:56px 44px 0; }
  .lgv .expand-btn { padding:22px 26px; }
  .lgv .eb-t { font-size:20px; }
  .lgv .deep-in { padding:34px 6px 0; }
  .lgv .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .lgv .deep p { font-size:16.5px; }
  .lgv .anat { padding:76px 44px; }
  .lgv .anat h2 { font-size:38px; margin-top:14px; }
  .lgv .anat .body { font-size:17px; margin-top:18px; }
  .lgv .anat-grid { grid-template-columns:repeat(3,1fr); gap:26px; margin-top:40px; }
  .lgv .anat-item .an { font-size:34px; }
  .lgv .anat-item h3 { font-size:18px; margin-top:10px; }
  .lgv .anat-item p { font-size:13.5px; }
  .lgv .buy { padding:80px 44px; }
  .lgv .buy h2 { font-size:40px; }
  .lgv .buy .now { font-size:52px; }
}
`;

function LongevityPage() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="lgv">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 05 · Longevity & Healthspan</span>
            <h1>
              Not just longer. <span className="it">Better.</span>
            </h1>
            <p>
              A food protocol for the long game — the eating patterns behind
              the world's longest, healthiest lives, and 20 recipes that make
              them a habit.
            </p>
            <div className="stat">
              20 recipes · 5 longevity pathways · plant-forward
            </div>
            <div className="cta">
              <Link to="/system" className="gold">
                Get The Nourish System — $97
              </Link>
            </div>
          </div>
          <div
            className="himg"
            style={{ backgroundImage: `url(${heroImg.url})` }}
          />
        </div>

        {/* WHAT THIS IS */}
        <div className="sec">
          <div className="eye">What this is</div>
          <h2>Eating for the decades, not the week.</h2>
          <div className="body">
            The Longevity protocol is a food guide for people who want to stay
            strong, sharp, and independent for as long as possible.{" "}
            <b>
              It's built on the eating patterns that consistently show up in
              the world's longest-lived populations — and the mechanisms that
              explain why they work.
            </b>{" "}
            Not a diet with an end date. A way of eating you can hold for
            thirty years. A 30-day plan, a cheat sheet, and 20 recipes.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>
              Adding years is easy. Adding good ones is the hard part.
            </h2>
            <div className="body">
              Most people don't fear dying so much as the decade before it —
              the slow loss of strength, memory, and independence.{" "}
              <b>
                Healthspan, not lifespan, is the thing worth optimizing.
              </b>{" "}
              The food patterns behind the longest-lived populations on earth
              are remarkably consistent: plant-forward but not vegan, heavy on
              legumes and olive oil, low in ultra-processed food, protein
              sufficient enough to protect muscle into old age. None of it is
              exotic. All of it is boring, repeatable, and almost nobody does
              it — because nobody handed them the meals.
            </div>
          </div>
        </div>

        {/* BAND */}
        <div
          className="band"
          style={{ backgroundImage: `url(${bandImg.url})` }}
        />

        {/* PATHWAYS */}
        <div className="phases">
          <div className="ph-in">
            <div className="eye">The pathways</div>
            <h2>What the protocol targets.</h2>
            <div className="body">
              Five mechanisms with real evidence behind them — and food that
              hits each one.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Pathway</div>
                <h3>Muscle</h3>
                <p>
                  Protein sufficiency, because muscle loss is the strongest
                  predictor of losing your independence. You cannot 'eat
                  light' your way into a strong old age.
                </p>
              </div>
              <div className="win">
                <div className="d">Pathway</div>
                <h3>Inflammation</h3>
                <p>
                  Chronic low-grade inflammation drives most age-related
                  disease. Olive oil, oily fish, and polyphenol-dense plants
                  push the other way.
                </p>
              </div>
              <div className="win">
                <div className="d">Pathway</div>
                <h3>Metabolic Health</h3>
                <p>
                  Stable blood sugar and insulin sensitivity — the single
                  biggest lever on how well you age, and the one most people
                  ignore until it's a diagnosis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">The core rule</div>
            <h3>Protein protects your independence.</h3>
            <p>
              <b>Muscle is the organ of longevity.</b> The people who stay
              independent longest are the ones who kept their strength — and
              you cannot keep muscle on a diet that skimps on protein. Every
              recipe in this protocol is built to deliver it, alongside the
              legumes, olive oil, and plant diversity that show up in every
              long-lived population on earth.
            </p>
          </div>
        </div>

        {/* EXPAND */}
        <div className="expand-wrap">
          <button
            className={`expand-btn${open ? " open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            type="button"
            aria-expanded={open}
          >
            <span className="eb-l">
              <span className="eb-t">
                {open ? "Hide the full protocol" : "See the full protocol"}
              </span>
              <span className="eb-m">5 min read</span>
            </span>
            <span className="eb-i">+</span>
          </button>
          <div className={`deep${open ? " open" : ""}`}>
            <div className="deep-in">
              <h3>Healthspan, not lifespan</h3>
              <p>
                Most people don't fear death so much as the decade before it —
                the slow loss of strength, memory, and independence.{" "}
                <b>The goal isn't more years. It's more good ones.</b>{" "}
                Everything in this protocol targets the mechanisms that
                determine which kind of decade you get.
              </p>

              <h3>Muscle is the organ of longevity</h3>
              <p>
                Sarcopenia — age-related muscle loss — is among the strongest
                predictors of losing independence. You cannot "eat light" your
                way into a strong old age. Protein sufficiency isn't optional
                past fifty; it's the single highest-leverage nutritional
                decision you make.
              </p>

              <h3>What the long-lived populations actually eat</h3>
              <p>
                The patterns are remarkably consistent and remarkably boring:
                plant-forward but not vegan, heavy on legumes and olive oil,
                minimal ultra-processed food, and protein sufficient to hold
                muscle. Nothing exotic, nothing expensive — and almost nobody
                does it, because nobody handed them the meals.
              </p>

              <h3>The five principles</h3>
              <p>
                <b>One.</b> Protein sufficiency, non-negotiable.
                <br />
                <b>Two.</b> Legumes daily — the one food every long-lived
                population shares.
                <br />
                <b>Three.</b> Extra virgin olive oil as the primary fat.
                <br />
                <b>Four.</b> Thirty-plus plants a week for microbiome
                diversity.
                <br />
                <b>Five.</b> Sustainable beats optimal — you have to do this
                for thirty years.
              </p>
            </div>
          </div>
        </div>

        {/* ANATOMY */}
        <div className="anat">
          <div className="eye">What you get</div>
          <h2>A full protocol. Not just recipes.</h2>
          <div className="body">
            Three parts, built to be used — a 30-day meal plan, a one-page
            cheat sheet, and 20 recipes built for the long game.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>30 days of the way they actually eat.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>Targets, staples, and swaps — one page.</p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>Plant-forward, protein-sufficient, repeatable.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Get The Protocol</div>
            <h2>Longevity & Healthspan.</h2>
            <p>
              The complete protocol — a 30-day plan, a cheat sheet, and 20
              recipes for a long, strong life.
            </p>
            <div className="cta">
              <Link to="/system" className="gold">
                Get The Nourish System — $97
              </Link>
            </div>
            <div className="fine">
              Digital PDF · Instant download · No subscription · Yours to keep
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
