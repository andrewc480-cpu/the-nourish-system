import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/metabolic-hero.png.asset.json";
import bandImg from "@/assets/metabolic-band.png.asset.json";

export const Route = createFileRoute("/metabolic-health")({
  head: () => ({
    meta: [
      { title: "Metabolic Health Protocol — nóurish." },
      {
        name: "description",
        content:
          "A food protocol for steady energy — how to build a plate that doesn't spike, what order to eat it in, and 20 recipes that keep you level all day.",
      },
      { property: "og:title", content: "Metabolic Health Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "A food protocol for steady blood sugar — plate composition, eating order, and 20 recipes across three daily windows.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/metabolic-health" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/metabolic-health" }],
  }),
  component: MetabolicHealthPage,
});

const css = `
.meta { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.meta h1,.meta h2,.meta h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.015em; }
.meta .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.meta .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; cursor:pointer; }

/* HERO */
.meta .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.meta .hl h1 { font-size:36px; line-height:1.04; text-wrap:balance; }
.meta .hl h1 .it { font-family:'Playfair Display',serif; font-style:italic; font-weight:700; color:#7D9B76; }
.meta .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.meta .hl .stat { margin-top:20px; font-size:12px; color:#8a877f; }
.meta .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.meta .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.meta .hl .per { font-size:13px; color:#8a877f; }
.meta .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.meta .hl .eye { margin-bottom:14px; display:inline-block; }
.meta .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

/* SEC */
.meta .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.meta .sec h2 { font-size:29px; margin-top:12px; line-height:1.1; text-wrap:balance; }
.meta .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.meta .sec .body b { color:#1C1C1C; font-weight:500; }
.meta .why { background:#1C1C1C; }
.meta .why .sec h2 { color:#F7F5F1; }
.meta .why .sec .body { color:#c9c6c0; }
.meta .why .sec .body b { color:#F7F5F1; }

.meta .band { height:220px; background-position:center; background-size:cover; }

/* PHASES / WINDOWS */
.meta .phases { background:#F2EDE4; }
.meta .ph-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.meta .ph-in h2 { font-size:29px; margin-top:12px; }
.meta .ph-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:620px; }
.meta .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.meta .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.meta .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.meta .win h3 { font-size:20px; margin-top:8px; }
.meta .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }

/* RULE */
.meta .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.meta .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.meta .rulebox .eye { color:#C9A84C; }
.meta .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.meta .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.meta .rulebox p b { color:#F7F5F1; font-weight:500; }

/* EXPAND */
.meta .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.meta .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.meta .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.meta .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.meta .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.meta .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.meta .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.meta .expand-btn.open .eb-i { transform:rotate(45deg); }
.meta .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.meta .deep.open { max-height:5000px; }
.meta .deep-in { padding:30px 4px 0; }
.meta .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.meta .deep h3:first-child { margin-top:0; }
.meta .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.meta .deep p b { color:#1C1C1C; font-weight:500; }

/* ANAT */
.meta .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.meta .anat h2 { font-size:29px; margin-top:12px; }
.meta .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.meta .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.meta .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.meta .anat-item h3 { font-size:17px; margin-top:8px; }
.meta .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

/* BUY */
.meta .buy { background:#1C1C1C; padding:64px 20px; }
.meta .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.meta .buy .eye { color:#7D9B76; }
.meta .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.meta .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.meta .buy .price { margin-top:24px; }
.meta .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.meta .buy .cta { margin-top:20px; }
.meta .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.meta .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.meta .upsell .u { color:#c9c6c0; font-size:15px; }
.meta .upsell .u b { color:#F7F5F1; font-weight:500; }
.meta .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .meta .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .meta .hl h1 { font-size:52px; }
  .meta .hl p { font-size:17px; margin-top:20px; }
  .meta .hl .now { font-size:44px; }
  .meta .himg { height:460px; }
  .meta .sec { padding:76px 44px; }
  .meta .sec h2 { font-size:38px; margin-top:14px; }
  .meta .sec .body { font-size:17.5px; margin-top:24px; }
  .meta .band { height:320px; }
  .meta .ph-in { padding:76px 44px; }
  .meta .ph-in h2 { font-size:38px; margin-top:14px; }
  .meta .ph-in .body { font-size:16px; margin-top:18px; }
  .meta .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .meta .win { padding:26px; }
  .meta .win h3 { font-size:21px; }
  .meta .rule { padding:20px 44px 0; }
  .meta .rulebox { padding:40px 44px; }
  .meta .rulebox h3 { font-size:24px; }
  .meta .rulebox p { font-size:15.5px; }
  .meta .expand-wrap { padding:56px 44px 0; }
  .meta .expand-btn { padding:22px 26px; }
  .meta .eb-t { font-size:20px; }
  .meta .deep-in { padding:34px 6px 0; }
  .meta .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .meta .deep p { font-size:16.5px; }
  .meta .anat { padding:76px 44px; }
  .meta .anat h2 { font-size:38px; margin-top:14px; }
  .meta .anat .body { font-size:17px; margin-top:18px; }
  .meta .anat-grid { grid-template-columns:repeat(3,1fr); gap:26px; margin-top:40px; }
  .meta .anat-item .an { font-size:34px; }
  .meta .anat-item h3 { font-size:18px; margin-top:10px; }
  .meta .anat-item p { font-size:13.5px; }
  .meta .buy { padding:80px 44px; }
  .meta .buy h2 { font-size:40px; }
  .meta .buy .now { font-size:52px; }
}
`;

function MetabolicHealthPage() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="meta">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 03 · Metabolic Health</span>
            <h1>
              The 3pm crash isn't willpower.{" "}
              <span className="it">It's your blood sugar.</span>
            </h1>
            <p>
              A food protocol for steady energy — how to build a plate that
              doesn't spike, what order to eat it in, and 20 recipes that keep
              you level all day.
            </p>
            <div className="stat">
              20 recipes · 3 daily windows · plate-order method
            </div>
            <div className="price">
              <span className="now">$27</span>
              <span className="per">· digital PDF, yours to keep</span>
            </div>
            <div className="cta">
              <a href="https://buy.stripe.com/aFa14nejocVQ7pyf4n6Vq0k" className="gold" target="_blank" rel="noopener noreferrer">
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
          <h2>Steady blood sugar, all day.</h2>
          <div className="body">
            The Metabolic Health protocol is a food guide for anyone whose
            energy swings — the mid-morning slump, the post-lunch crash, the
            4pm hunt for something sweet.{" "}
            <b>
              It covers what to eat, in what order, and at what time of day to
              keep your blood sugar level instead of riding a rollercoaster.
            </b>{" "}
            A 30-day plan, a cheat sheet, and 20 recipes built to hold the
            line.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>You're not tired. You're spiking.</h2>
            <div className="body">
              That heavy, foggy feeling an hour after eating isn't normal, and
              it isn't a character flaw.{" "}
              <b>
                It's a blood sugar spike followed by the crash that always
                comes after it.
              </b>{" "}
              Most advice tells you to eat less or eat 'clean' — but a clean
              meal eaten in the wrong order will still spike you. What
              actually matters is the composition of the plate and the
              sequence you eat it in: protein and fiber before starch, fat to
              slow the curve, and never a naked carb on an empty stomach.
              That's not a diet. It's a mechanism.
            </div>
          </div>
        </div>

        {/* BAND IMAGE */}
        <div
          className="band"
          style={{ backgroundImage: `url(${bandImg.url})` }}
        />

        {/* WINDOWS */}
        <div className="phases">
          <div className="ph-in">
            <div className="eye">The daily rhythm</div>
            <h2>Three windows. Three jobs.</h2>
            <div className="body">
              Your body handles food differently at different times of day.
              This protocol maps your meals to that rhythm instead of fighting
              it.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Morning</div>
                <h3>Set the Baseline</h3>
                <p>
                  Protein-led and savory. What you eat first sets your blood
                  sugar curve for the entire day — a sweet breakfast
                  guarantees a mid-morning crash.
                </p>
              </div>
              <div className="win">
                <div className="d">Midday</div>
                <h3>Hold the Line</h3>
                <p>
                  The biggest, most fiber-dense meal of your day. Built to
                  carry you through the afternoon without a slump or a snack.
                </p>
              </div>
              <div className="win">
                <div className="d">Evening</div>
                <h3>Wind It Down</h3>
                <p>
                  Lighter, earlier, lower-glycemic. Eating heavy late keeps
                  your blood sugar elevated overnight and steals your sleep
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">The core rule</div>
            <h3>Never eat a naked carb.</h3>
            <p>
              <b>Order changes everything.</b> The same meal — eaten protein
              and fiber first, starch last — produces a dramatically flatter
              blood sugar response than the reverse. Bread before salad spikes
              you. Salad before bread doesn't. Every recipe in this protocol
              is built around this sequence, and the cheat sheet shows you
              how to apply it to food you didn't cook.
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
              <h3>Why food order changes everything</h3>
              <p>
                The same meal, eaten in a different order, produces a
                dramatically different blood sugar response.{" "}
                <b>Protein and fiber first, starch last</b> — that sequence
                slows gastric emptying and blunts the glucose curve. Bread
                before salad spikes you. Salad before bread doesn't. The food
                is identical; only the order changed.
              </p>

              <h3>What a spike actually costs you</h3>
              <p>
                The heavy, foggy feeling an hour after eating is the crash on
                the back of a spike. Insulin surges to clear the glucose,
                overshoots, and you land lower than where you started — which
                is why you're hungry again, reaching for something sweet,
                ninety minutes after a full meal.
              </p>

              <h3>Why timing matters as much as content</h3>
              <p>
                Your body handles the same food differently at different times
                of day. Insulin sensitivity is highest in the morning and
                falls through the evening — which is why a heavy late dinner
                keeps blood sugar elevated overnight and steals sleep
                quality, and why a sweet breakfast guarantees a mid-morning
                crash.
              </p>

              <h3>The five principles</h3>
              <p>
                <b>One.</b> Never eat a naked carb — always pair it.
                <br />
                <b>Two.</b> Protein and fiber before starch, every meal.
                <br />
                <b>Three.</b> Savory breakfast; what you eat first sets the
                day's curve.
                <br />
                <b>Four.</b> Biggest, most fiber-dense meal at midday.
                <br />
                <b>Five.</b> Eat earlier and lighter in the evening.
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
            cheat sheet, and 20 recipes built to hold your blood sugar
            steady.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>30 days, mapped to your daily rhythm.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>Plate order, swaps, and targets — one page.</p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>Built to hold your blood sugar steady.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Get The Protocol</div>
            <h2>Metabolic Health.</h2>
            <p>
              The complete protocol — a 30-day plan, a cheat sheet, and 20
              recipes that keep your energy level.
            </p>
            <div className="price">
              <span className="now">$27</span>
            </div>
            <div className="cta">
              <a href="https://buy.stripe.com/aFa14nejocVQ7pyf4n6Vq0k" className="gold" target="_blank" rel="noopener noreferrer">
                Get Instant Access
              </a>
            </div>
            <div className="fine">
              Digital PDF · Instant download · No subscription · Yours to keep
            </div>
            <div className="upsell">
              <div className="u">
                Blood sugar touches everything else.{" "}
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
