import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/glp1-hero-eggs-salmon.jpg.asset.json";
import bandImg from "@/assets/glp1-band-grilled-salmon.jpg.asset.json";

export const Route = createFileRoute("/glp1")({
  head: () => ({
    meta: [
      { title: "GLP-1 Nutrition Protocol — nóurish." },
      {
        name: "description",
        content:
          "A complete food protocol for GLP-1 medications — what to eat across your injection cycle, how to protect your muscle, and 20 recipes built for a smaller appetite.",
      },
      { property: "og:title", content: "GLP-1 Nutrition Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "A complete food protocol for GLP-1 medications — what to eat across your injection cycle, and 20 recipes built for a smaller appetite.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/glp1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/glp1" }],
  }),
  component: Glp1Page,
});

const css = `
.glp1 { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.glp1 h1,.glp1 h2,.glp1 h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.01em; }
.glp1 .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.glp1 .arch { font-family:'Archivo',sans-serif; font-variant-numeric:tabular-nums lining-nums; }
.glp1 .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; }

/* HERO */
.glp1 .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.glp1 .hl h1 { font-size:36px; line-height:1.03; }
.glp1 .hl h1 .em { font-style:italic; color:#7D9B76; }
.glp1 .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.glp1 .hl .stat { margin-top:20px; font-size:12px; letter-spacing:.02em; color:#8a877f; }
.glp1 .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.glp1 .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.glp1 .hl .per { font-size:13px; color:#8a877f; }
.glp1 .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.glp1 .hl .eye { margin-bottom:14px; display:inline-block; }
.glp1 .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

/* SEC */
.glp1 .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.glp1 .sec h2 { font-size:29px; margin-top:12px; line-height:1.08; }
.glp1 .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.glp1 .sec .body b { color:#1C1C1C; font-weight:500; }
.glp1 .why { background:#1C1C1C; }
.glp1 .why .sec h2 { color:#F7F5F1; }
.glp1 .why .sec .body { color:#c9c6c0; }
.glp1 .why .sec .body b { color:#F7F5F1; }

.glp1 .band { height:220px; background-position:center; background-size:cover; }

/* CYCLE */
.glp1 .cycle { background:#F2EDE4; }
.glp1 .cycle-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.glp1 .cycle-in h2 { font-size:29px; margin-top:12px; }
.glp1 .cycle-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.glp1 .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.glp1 .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.glp1 .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.glp1 .win h3 { font-size:20px; margin-top:8px; }
.glp1 .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }

/* RULE */
.glp1 .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.glp1 .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.glp1 .rulebox .eye { color:#C9A84C; }
.glp1 .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.glp1 .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.glp1 .rulebox p b { color:#F7F5F1; font-weight:500; }

/* EXPAND */
.glp1 .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.glp1 .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.glp1 .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.glp1 .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.glp1 .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.glp1 .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.glp1 .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.glp1 .expand-btn.open .eb-i { transform:rotate(45deg); }
.glp1 .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.glp1 .deep.open { max-height:5000px; }
.glp1 .deep-in { padding:30px 4px 0; }
.glp1 .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.glp1 .deep h3:first-child { margin-top:0; }
.glp1 .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.glp1 .deep p b { color:#1C1C1C; font-weight:500; }

/* ANAT */
.glp1 .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.glp1 .anat h2 { font-size:29px; margin-top:12px; }
.glp1 .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.glp1 .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.glp1 .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.glp1 .anat-item h3 { font-size:17px; margin-top:8px; }
.glp1 .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

/* BUY */
.glp1 .buy { background:#1C1C1C; padding:64px 20px; }
.glp1 .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.glp1 .buy .eye { color:#7D9B76; }
.glp1 .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.glp1 .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.glp1 .buy .price { margin-top:24px; }
.glp1 .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.glp1 .buy .cta { margin-top:20px; }
.glp1 .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.glp1 .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.glp1 .upsell .u { color:#c9c6c0; font-size:15px; }
.glp1 .upsell .u b { color:#F7F5F1; font-weight:500; }
.glp1 .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .glp1 .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .glp1 .hl h1 { font-size:52px; }
  .glp1 .hl p { font-size:17px; margin-top:20px; }
  .glp1 .hl .now { font-size:44px; }
  .glp1 .himg { height:460px; }
  .glp1 .sec { padding:76px 44px; }
  .glp1 .sec h2 { font-size:38px; margin-top:14px; }
  .glp1 .sec .body { font-size:17.5px; margin-top:24px; }
  .glp1 .band { height:320px; }
  .glp1 .cycle-in { padding:76px 44px; }
  .glp1 .cycle-in h2 { font-size:38px; margin-top:14px; }
  .glp1 .cycle-in .body { font-size:16px; margin-top:18px; }
  .glp1 .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .glp1 .win { padding:26px; }
  .glp1 .rule { padding:20px 44px 0; }
  .glp1 .rulebox { padding:40px 44px; }
  .glp1 .rulebox h3 { font-size:24px; }
  .glp1 .rulebox p { font-size:15.5px; }
  .glp1 .expand-wrap { padding:56px 44px 0; }
  .glp1 .expand-btn { padding:22px 26px; }
  .glp1 .eb-t { font-size:20px; }
  .glp1 .deep-in { padding:34px 6px 0; }
  .glp1 .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .glp1 .deep p { font-size:16.5px; }
  .glp1 .anat { padding:76px 44px; }
  .glp1 .anat h2 { font-size:38px; margin-top:14px; }
  .glp1 .anat .body { font-size:17px; margin-top:18px; }
  .glp1 .anat-grid { grid-template-columns:repeat(4,1fr); gap:26px; margin-top:40px; }
  .glp1 .anat-item .an { font-size:34px; }
  .glp1 .anat-item h3 { font-size:18px; margin-top:10px; }
  .glp1 .anat-item p { font-size:13.5px; }
  .glp1 .buy { padding:80px 44px; }
  .glp1 .buy h2 { font-size:40px; }
  .glp1 .buy .now { font-size:52px; }
}
`;

function Glp1Page() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="glp1">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 01 · GLP-1 Nutrition</span>
            <h1>
              You're eating less. <span className="em">Make it count.</span>
            </h1>
            <p>
              A complete food protocol for GLP-1 medications — what to eat across
              your injection cycle, how to protect your muscle, and 20 recipes
              built for a smaller appetite.
            </p>
            <div className="stat">
              20 recipes · 28g+ protein each · 3 injection-cycle windows
            </div>
            <div className="price">
              <span className="now">$27</span>
              <span className="per">· digital PDF, yours to keep</span>
            </div>
            <div className="cta">
              <a href="#buy" className="gold">
                Get Instant Access
              </a>
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
          <h2>The food part of your GLP-1.</h2>
          <div className="body">
            The GLP-1 Nutrition protocol is a complete food guide for anyone on
            Ozempic, Wegovy, Mounjaro, or Zepbound.{" "}
            <b>
              It tells you what to eat across each phase of your injection cycle,
              how to hit your protein without overwhelming a smaller appetite, and
              gives you 20 recipes built for exactly this.
            </b>{" "}
            No guessing, no generic meal plan — food designed to work with the
            medication, not against it.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>The scale moves. So does your muscle.</h2>
            <div className="body">
              GLP-1 medications suppress appetite and slow digestion — so the
              little you eat carries an outsized job.{" "}
              <b>
                The real danger isn't the medication. It's under-nutrition that
                masquerades as success:
              </b>{" "}
              you eat almost nothing, feel fine, the scale drops — while muscle
              wastes and micronutrients deplete quietly underneath. One in five
              adults has used a GLP-1, and almost none of them have food built for
              it. This protocol exists to protect what you can't feel happening.
            </div>
          </div>
        </div>

        {/* BAND IMAGE */}
        <div
          className="band"
          style={{ backgroundImage: `url(${bandImg.url})` }}
        />

        {/* CYCLE */}
        <div className="cycle">
          <div className="cycle-in">
            <div className="eye">The injection cycle</div>
            <h2>Your week has three phases. Eat for each.</h2>
            <div className="body">
              Most people on weekly injections fight the same cycle every week
              with no strategy. This gives you one — food mapped to how your body
              actually feels across the seven days.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Days 1–2</div>
                <h3>The Nausea Window</h3>
                <p>
                  Soft textures, low odour, protein in its most digestible form.
                  Minimum viable nutrition, maximum density.
                </p>
              </div>
              <div className="win">
                <div className="d">Days 3–4</div>
                <h3>The Stabilization Window</h3>
                <p>
                  Reintroduce structure. Rebuild protein deliberately. Warm,
                  simple, familiar meals.
                </p>
              </div>
              <div className="win">
                <div className="d">Days 5–7</div>
                <h3>The Optimization Window</h3>
                <p>
                  Full nutritional recovery — the most important window of your
                  week. Don't under-eat out of habit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">The Protein-First Rule</div>
            <h3>Protein before anything else on the plate.</h3>
            <p>
              Every meal, every day.{" "}
              <b>
                When satiety arrives early and unpredictably, protein has to
                reach your system before your appetite disappears.
              </b>{" "}
              Every recipe in this protocol hits a minimum of 28g — and shows you
              how to get there even on a nausea-window day.
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
              <h3>What GLP-1 medications actually do</h3>
              <p>
                Four mechanisms change how you need to eat.{" "}
                <b>Appetite suppression</b> reduces how much you want.{" "}
                <b>Delayed gastric emptying</b> keeps food in your stomach
                longer, which is why heavy or fatty meals sit badly.{" "}
                <b>Blood sugar regulation</b> flattens the glucose response. And{" "}
                <b>muscle loss risk</b> rises sharply when protein intake falls
                below what rapid weight loss demands.
              </p>

              <h3>Why 28 grams</h3>
              <p>
                Research consistently points to roughly 0.7–1g of protein per
                pound of body weight per day as the threshold for preserving
                lean muscle during rapid weight loss. On a suppressed appetite,
                where total daily volume is a fraction of what it was, that only
                works if{" "}
                <b>every single meal carries a meaningful protein load</b>.
                Twenty-eight grams is the floor this protocol is built on.
              </p>

              <h3>The five principles</h3>
              <p>
                <b>One.</b> Protein before anything else on the plate, every
                meal.
                <br />
                <b>Two.</b> Match your food to the window you're in — day one
                is not day six.
                <br />
                <b>Three.</b> Soluble fiber only on nausea days.
                <br />
                <b>Four.</b> Density over volume. Every bite has a job.
                <br />
                <b>Five.</b> Never skip the optimization window out of habit.
                It's the most important nutritional stretch of your week.
              </p>

              <h3>What's inside the 20 recipes</h3>
              <p>
                Each one is tagged to the injection-cycle window it belongs to,
                and each lists full ingredients, method, protein count, and the
                reason it works. Nausea-window recipes prioritize soft texture
                and low odor. Optimization-window recipes are fuller meals built
                for a body that can finally absorb them.
              </p>
            </div>
          </div>
        </div>

        {/* ANATOMY */}
        <div className="anat">
          <div className="eye">What you get</div>
          <h2>A full protocol. Not just recipes.</h2>
          <div className="body">
            Four parts, built to be used — the rules, a 30-day meal plan, a
            one-page cheat sheet, and 20 recipes built for GLP-1.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">05</div>
              <h3>The Rules</h3>
              <p>Five non-negotiables for eating on a GLP-1.</p>
            </div>
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>30 days, mapped to your injection cycle.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>
                Protein targets, foods to prioritize and avoid — one page.
              </p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>28g+ protein, tagged to each cycle window.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Get The Protocol</div>
            <h2>GLP-1 Nutrition.</h2>
            <p>
              The complete protocol — rules, weekly plan, cheat sheet, and 20
              recipes built for how you eat now.
            </p>
            <div className="price">
              <span className="now">$27</span>
            </div>
            <div className="cta">
              <a href="#buy" className="gold">
                Get Instant Access
              </a>
            </div>
            <div className="fine">
              Digital PDF · Instant download · No subscription · Yours to keep
            </div>
            <div className="upsell">
              <div className="u">
                On more than a GLP-1?{" "}
                <b>The Complete System</b> is all six protocols for $97 — save
                $65.
              </div>
              <Link to="/system">See The Complete System →</Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
