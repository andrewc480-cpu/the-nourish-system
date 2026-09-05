import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/cognitive-hero.png.asset.json";
import bandImg from "@/assets/cognitive-band.png.asset.json";

export const Route = createFileRoute("/cognitive-performance")({
  head: () => ({
    meta: [
      { title: "Cognitive Performance Protocol — nóurish." },
      {
        name: "description",
        content:
          "A food protocol for focus and long-term brain health — the fats, the timing, and 20 recipes built to keep you sharp now and protected later.",
      },
      { property: "og:title", content: "Cognitive Performance Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "Omega-3 led food protocol for focus now and brain protection later — 30-day plan, cheat sheet, and 20 recipes.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/cognitive-performance" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/cognitive-performance" }],
  }),
  component: CognitivePerformancePage,
});

const css = `
.cog { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.cog h1,.cog h2,.cog h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.015em; }
.cog .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.cog .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; cursor:pointer; }

.cog .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.cog .hl h1 { font-size:36px; line-height:1.04; text-wrap:balance; }
.cog .hl h1 .it { font-family:'Playfair Display',serif; font-style:italic; font-weight:700; color:#7D9B76; }
.cog .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.cog .hl .stat { margin-top:20px; font-size:12px; color:#8a877f; }
.cog .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.cog .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.cog .hl .per { font-size:13px; color:#8a877f; }
.cog .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.cog .hl .eye { margin-bottom:14px; display:inline-block; }
.cog .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

.cog .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.cog .sec h2 { font-size:29px; margin-top:12px; line-height:1.1; text-wrap:balance; }
.cog .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.cog .sec .body b { color:#1C1C1C; font-weight:500; }
.cog .why { background:#1C1C1C; }
.cog .why .sec h2 { color:#F7F5F1; }
.cog .why .sec .body { color:#c9c6c0; }
.cog .why .sec .body b { color:#F7F5F1; }

.cog .band { height:220px; background-position:center; background-size:cover; }

.cog .phases { background:#F2EDE4; }
.cog .ph-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.cog .ph-in h2 { font-size:29px; margin-top:12px; }
.cog .ph-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:620px; }
.cog .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.cog .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.cog .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.cog .win h3 { font-size:20px; margin-top:8px; }
.cog .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }

.cog .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.cog .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.cog .rulebox .eye { color:#C9A84C; }
.cog .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.cog .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.cog .rulebox p b { color:#F7F5F1; font-weight:500; }

.cog .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.cog .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.cog .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.cog .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.cog .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.cog .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.cog .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.cog .expand-btn.open .eb-i { transform:rotate(45deg); }
.cog .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.cog .deep.open { max-height:5000px; }
.cog .deep-in { padding:30px 4px 0; }
.cog .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.cog .deep h3:first-child { margin-top:0; }
.cog .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.cog .deep p b { color:#1C1C1C; font-weight:500; }

.cog .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.cog .anat h2 { font-size:29px; margin-top:12px; }
.cog .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.cog .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.cog .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.cog .anat-item h3 { font-size:17px; margin-top:8px; }
.cog .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

.cog .buy { background:#1C1C1C; padding:64px 20px; }
.cog .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.cog .buy .eye { color:#7D9B76; }
.cog .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.cog .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.cog .buy .price { margin-top:24px; }
.cog .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.cog .buy .cta { margin-top:20px; }
.cog .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.cog .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.cog .upsell .u { color:#c9c6c0; font-size:15px; }
.cog .upsell .u b { color:#F7F5F1; font-weight:500; }
.cog .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .cog .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .cog .hl h1 { font-size:52px; }
  .cog .hl p { font-size:17px; margin-top:20px; }
  .cog .hl .now { font-size:44px; }
  .cog .himg { height:460px; }
  .cog .sec { padding:76px 44px; }
  .cog .sec h2 { font-size:38px; margin-top:14px; }
  .cog .sec .body { font-size:17.5px; margin-top:24px; }
  .cog .band { height:320px; }
  .cog .ph-in { padding:76px 44px; }
  .cog .ph-in h2 { font-size:38px; margin-top:14px; }
  .cog .ph-in .body { font-size:16px; margin-top:18px; }
  .cog .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .cog .win { padding:26px; }
  .cog .win h3 { font-size:21px; }
  .cog .rule { padding:20px 44px 0; }
  .cog .rulebox { padding:40px 44px; }
  .cog .rulebox h3 { font-size:24px; }
  .cog .rulebox p { font-size:15.5px; }
  .cog .expand-wrap { padding:56px 44px 0; }
  .cog .expand-btn { padding:22px 26px; }
  .cog .eb-t { font-size:20px; }
  .cog .deep-in { padding:34px 6px 0; }
  .cog .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .cog .deep p { font-size:16.5px; }
  .cog .anat { padding:76px 44px; }
  .cog .anat h2 { font-size:38px; margin-top:14px; }
  .cog .anat .body { font-size:17px; margin-top:18px; }
  .cog .anat-grid { grid-template-columns:repeat(3,1fr); gap:26px; margin-top:40px; }
  .cog .anat-item .an { font-size:34px; }
  .cog .anat-item h3 { font-size:18px; margin-top:10px; }
  .cog .anat-item p { font-size:13.5px; }
  .cog .buy { padding:80px 44px; }
  .cog .buy h2 { font-size:40px; }
  .cog .buy .now { font-size:52px; }
}
`;

function CognitivePerformancePage() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="cog">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 04 · Cognitive Performance</span>
            <h1>
              Your brain runs on what you fed it{" "}
              <span className="it">three hours ago.</span>
            </h1>
            <p>
              A food protocol for focus and long-term brain health — the fats,
              the timing, and 20 recipes built to keep you sharp now and
              protected later.
            </p>
            <div className="stat">
              20 recipes · 3 brain targets · omega-3 led
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
          <h2>Food for focus, and for later.</h2>
          <div className="body">
            The Cognitive Performance protocol is a food guide for mental
            clarity — the afternoon fog, the words that won't come, the sense
            that your focus isn't what it was.{" "}
            <b>
              It covers the fats your brain is actually built from, the foods
              that protect it over decades, and how to time your eating so
              your focus doesn't collapse at 3pm.
            </b>{" "}
            A 30-day plan, a cheat sheet, and 20 recipes.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>
              Brain fog is a food problem more often than you think.
            </h2>
            <div className="body">
              Your brain is roughly 60% fat, and it uses more energy than any
              other organ you have.{" "}
              <b>
                What you eat directly determines what it's built from and how
                well it runs.
              </b>{" "}
              Yet most people fuel it on refined carbs and seed oils, then
              wonder why focus collapses by mid-afternoon. Omega-3 fats build
              the cell membranes your neurons signal across. Polyphenols from
              berries and olive oil reduce the inflammation that dulls
              thinking. Stable blood sugar is the difference between clear
              focus and a brain that's begging for sugar. This isn't a
              supplement stack — it's food, in the right form.
            </div>
          </div>
        </div>

        {/* BAND */}
        <div
          className="band"
          style={{ backgroundImage: `url(${bandImg.url})` }}
        />

        {/* TARGETS */}
        <div className="phases">
          <div className="ph-in">
            <div className="eye">The three targets</div>
            <h2>What the protocol is built around.</h2>
            <div className="body">
              Every recipe hits at least one of three jobs — and most hit all
              three.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Target 01</div>
                <h3>Structure</h3>
                <p>
                  Omega-3 fats — oily fish, walnuts, seeds. These are the raw
                  material your brain is physically built from, and most
                  people are running short.
                </p>
              </div>
              <div className="win">
                <div className="d">Target 02</div>
                <h3>Protection</h3>
                <p>
                  Polyphenols and antioxidants — berries, olive oil, dark
                  leafy greens. These fight the low-grade inflammation that
                  erodes cognition over years.
                </p>
              </div>
              <div className="win">
                <div className="d">Target 03</div>
                <h3>Fuel</h3>
                <p>
                  Steady glucose, not spikes. A brain on a blood-sugar
                  rollercoaster cannot hold focus. Protein-led meals keep the
                  supply even.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">The core rule</div>
            <h3>Feed it fat, not sugar.</h3>
            <p>
              <b>The single highest-leverage change is omega-3.</b> Your brain
              cannot build healthy cell membranes without it, and the modern
              diet is catastrophically short. Every recipe in this protocol
              is built to deliver it — from oily fish to walnuts to seeds —
              alongside the polyphenols that protect what you build. The
              cheat sheet gives you the targets and the shortcuts for days
              you don't cook.
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
              <h3>What your brain is physically made of</h3>
              <p>
                Your brain is roughly 60% fat, and the omega-3 fat DHA is a
                primary structural component of the cell membranes your
                neurons signal across.{" "}
                <b>Your brain is built from what you feed it</b> — and the
                modern diet is dramatically short on the raw material.
              </p>

              <h3>Why focus collapses in the afternoon</h3>
              <p>
                A brain on a blood-sugar rollercoaster cannot hold sustained
                attention. The refined-carb breakfast that spikes you at 8am
                is why you're staring at the same paragraph at 3pm. Steady
                glucose is the precondition for focus — the fats and
                polyphenols only matter on top of it.
              </p>

              <h3>The protection question</h3>
              <p>
                Chronic low-grade inflammation is strongly implicated in
                long-term cognitive decline. Polyphenols — from berries,
                extra virgin olive oil, dark leafy greens — push in the other
                direction. This is the part of the protocol that isn't about
                today; it's about the brain you'll have in thirty years.
              </p>

              <h3>The five principles</h3>
              <p>
                <b>One.</b> Omega-3 daily — oily fish, walnuts, seeds.
                <br />
                <b>Two.</b> Savory, protein-led breakfast. Never sugar first.
                <br />
                <b>Three.</b> Polyphenols at every meal — color on the plate.
                <br />
                <b>Four.</b> Stable glucose before anything else works.
                <br />
                <b>Five.</b> Hydration is cognitive, not cosmetic.
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
            cheat sheet, and 20 recipes built for focus.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>30 days, built around the three targets.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>Targets, top foods, and swaps — one page.</p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>Each hitting structure, protection, or fuel.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Get The Protocol</div>
            <h2>Cognitive Performance.</h2>
            <p>
              The complete protocol — a 30-day plan, a cheat sheet, and 20
              recipes for focus now and protection later.
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
