import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hormonal-hero.png.asset.json";
import bandImg from "@/assets/hormonal-band.png.asset.json";

export const Route = createFileRoute("/hormonal-health")({
  head: () => ({
    meta: [
      { title: "Hormonal Health Protocol — nóurish." },
      {
        name: "description",
        content:
          "A food protocol for hormonal balance — the nutrients your endocrine system actually runs on, and 20 recipes built to supply them.",
      },
      { property: "og:title", content: "Hormonal Health Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "Magnesium-led food protocol for hormonal balance — 30-day plan, cheat sheet, and 20 recipes.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/hormonal-health" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/hormonal-health" }],
  }),
  component: HormonalHealthPage,
});

const css = `
.hrm { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.hrm h1,.hrm h2,.hrm h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.015em; }
.hrm .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.hrm .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; cursor:pointer; }

.hrm .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.hrm .hl h1 { font-size:36px; line-height:1.04; text-wrap:balance; }
.hrm .hl h1 .it { font-family:'Playfair Display',serif; font-style:italic; font-weight:700; color:#7D9B76; }
.hrm .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.hrm .hl .stat { margin-top:20px; font-size:12px; color:#8a877f; }
.hrm .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.hrm .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.hrm .hl .per { font-size:13px; color:#8a877f; }
.hrm .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.hrm .hl .eye { margin-bottom:14px; display:inline-block; }
.hrm .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

.hrm .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.hrm .sec h2 { font-size:29px; margin-top:12px; line-height:1.1; text-wrap:balance; }
.hrm .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.hrm .sec .body b { color:#1C1C1C; font-weight:500; }
.hrm .why { background:#1C1C1C; }
.hrm .why .sec h2 { color:#F7F5F1; }
.hrm .why .sec .body { color:#c9c6c0; }
.hrm .why .sec .body b { color:#F7F5F1; }

.hrm .band { height:220px; background-position:center; background-size:cover; }

.hrm .phases { background:#F2EDE4; }
.hrm .ph-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.hrm .ph-in h2 { font-size:29px; margin-top:12px; }
.hrm .ph-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:620px; }
.hrm .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.hrm .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.hrm .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.hrm .win h3 { font-size:20px; margin-top:8px; }
.hrm .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }

.hrm .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.hrm .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.hrm .rulebox .eye { color:#C9A84C; }
.hrm .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.hrm .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.hrm .rulebox p b { color:#F7F5F1; font-weight:500; }

.hrm .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.hrm .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.hrm .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.hrm .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.hrm .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.hrm .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.hrm .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.hrm .expand-btn.open .eb-i { transform:rotate(45deg); }
.hrm .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.hrm .deep.open { max-height:5000px; }
.hrm .deep-in { padding:30px 4px 0; }
.hrm .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.hrm .deep h3:first-child { margin-top:0; }
.hrm .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.hrm .deep p b { color:#1C1C1C; font-weight:500; }

.hrm .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.hrm .anat h2 { font-size:29px; margin-top:12px; }
.hrm .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.hrm .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.hrm .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.hrm .anat-item h3 { font-size:17px; margin-top:8px; }
.hrm .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

.hrm .buy { background:#1C1C1C; padding:64px 20px; }
.hrm .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.hrm .buy .eye { color:#7D9B76; }
.hrm .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.hrm .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.hrm .buy .price { margin-top:24px; }
.hrm .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.hrm .buy .cta { margin-top:20px; }
.hrm .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.hrm .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.hrm .upsell .u { color:#c9c6c0; font-size:15px; }
.hrm .upsell .u b { color:#F7F5F1; font-weight:500; }
.hrm .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .hrm .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .hrm .hl h1 { font-size:52px; }
  .hrm .hl p { font-size:17px; margin-top:20px; }
  .hrm .hl .now { font-size:44px; }
  .hrm .himg { height:460px; }
  .hrm .sec { padding:76px 44px; }
  .hrm .sec h2 { font-size:38px; margin-top:14px; }
  .hrm .sec .body { font-size:17.5px; margin-top:24px; }
  .hrm .band { height:320px; }
  .hrm .ph-in { padding:76px 44px; }
  .hrm .ph-in h2 { font-size:38px; margin-top:14px; }
  .hrm .ph-in .body { font-size:16px; margin-top:18px; }
  .hrm .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .hrm .win { padding:26px; }
  .hrm .win h3 { font-size:21px; }
  .hrm .rule { padding:20px 44px 0; }
  .hrm .rulebox { padding:40px 44px; }
  .hrm .rulebox h3 { font-size:24px; }
  .hrm .rulebox p { font-size:15.5px; }
  .hrm .expand-wrap { padding:56px 44px 0; }
  .hrm .expand-btn { padding:22px 26px; }
  .hrm .eb-t { font-size:20px; }
  .hrm .deep-in { padding:34px 6px 0; }
  .hrm .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .hrm .deep p { font-size:16.5px; }
  .hrm .anat { padding:76px 44px; }
  .hrm .anat h2 { font-size:38px; margin-top:14px; }
  .hrm .anat .body { font-size:17px; margin-top:18px; }
  .hrm .anat-grid { grid-template-columns:repeat(3,1fr); gap:26px; margin-top:40px; }
  .hrm .anat-item .an { font-size:34px; }
  .hrm .anat-item h3 { font-size:18px; margin-top:10px; }
  .hrm .anat-item p { font-size:13.5px; }
  .hrm .buy { padding:80px 44px; }
  .hrm .buy h2 { font-size:40px; }
  .hrm .buy .now { font-size:52px; }
}
`;

function HormonalHealthPage() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="hrm">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 06 · Hormonal Health</span>
            <h1>
              Your hormones are{" "}
              <span className="it">listening to your food.</span>
            </h1>
            <p>
              A food protocol for hormonal balance — the nutrients your
              endocrine system actually runs on, and 20 recipes built to
              supply them.
            </p>
            <div className="stat">
              20 recipes · 4 hormonal targets · magnesium-led
            </div>
            <div className="price">
              <span className="now">$27</span>
              <span className="per">· digital PDF, yours to keep</span>
            </div>
            <div className="cta">
              <a href="https://buy.stripe.com/00wcN5a38cVQeS009t6Vq0n" className="gold" target="_blank" rel="noopener noreferrer">
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
          <h2>Food that supports the system, not fights it.</h2>
          <div className="body">
            The Hormonal Health protocol is a food guide for anyone whose
            energy, mood, sleep, or cycle feels off.{" "}
            <b>
              It covers the specific nutrients your hormones are built from
              and depend on — and how to eat in a way that supports the system
              instead of stressing it.
            </b>{" "}
            A 30-day plan, a cheat sheet, and 20 recipes designed around them.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>Hormones are made from what you eat. Literally.</h2>
            <div className="body">
              This is the part most advice skips.{" "}
              <b>
                Your sex hormones are synthesized from cholesterol; your
                thyroid hormones require iodine and selenium; your stress
                response burns through magnesium and B vitamins.
              </b>{" "}
              Eat too little fat and you starve the raw material. Run on
              caffeine and sugar and you keep cortisol elevated all day, which
              suppresses everything downstream. This isn't about a magic food
              — it's about consistently supplying the things your endocrine
              system is physically made of, and removing the things that keep
              it in alarm mode.
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
            <div className="eye">The four targets</div>
            <h2>What the protocol is built around.</h2>
            <div className="body">
              Every recipe hits at least one — and the plan sequences them
              across your week.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Target 01</div>
                <h3>Blood Sugar</h3>
                <p>
                  Insulin is a hormone, and it bosses the others around.
                  Spikes and crashes cascade into cortisol, and cortisol
                  suppresses everything else.
                </p>
              </div>
              <div className="win">
                <div className="d">Target 02</div>
                <h3>Raw Materials</h3>
                <p>
                  Healthy fats, cholesterol, and micronutrients — the actual
                  physical inputs your body builds hormones from. Under-eat
                  fat and the whole system slows.
                </p>
              </div>
              <div className="win">
                <div className="d">Target 03</div>
                <h3>Stress & Sleep</h3>
                <p>
                  Magnesium, B vitamins, and evening meals built to lower
                  cortisol rather than spike it. Bad sleep is a hormonal
                  problem and a hormonal cause.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">The core rule</div>
            <h3>Stop under-eating fat.</h3>
            <p>
              <b>Your hormones are literally built from fat.</b> Decades of
              low-fat advice left a generation of people starving the raw
              material their endocrine system needs. Every recipe in this
              protocol supplies it — alongside the magnesium, zinc, and B
              vitamins that the stress response burns through daily. The
              cheat sheet gives you the targets and the foods that hit them
              fastest.
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
              <h3>Hormones are built from food</h3>
              <p>
                This is the part most advice skips.{" "}
                <b>
                  Your sex hormones are synthesized from cholesterol. Your
                  thyroid hormones require iodine and selenium. Your stress
                  response burns through magnesium and B vitamins daily.
                </b>{" "}
                Under-eat fat and you starve the raw material — which is what
                decades of low-fat advice quietly did to a generation.
              </p>

              <h3>Insulin is the hormone that bosses the others</h3>
              <p>
                Blood sugar spikes and crashes cascade directly into
                cortisol. Elevated cortisol suppresses thyroid function and
                disrupts sex hormone production. This is why the hormonal
                protocol starts with blood sugar — it's upstream of nearly
                everything else.
              </p>

              <h3>Why sleep is a food problem</h3>
              <p>
                Magnesium is required for the enzymatic processes that wind
                you down, and it's depleted by chronic stress. Evening meals
                built around magnesium-rich foods — dark leafy greens,
                pumpkin seeds, dark chocolate — support the transition into
                sleep. Bad sleep is both a hormonal symptom and a hormonal
                cause.
              </p>

              <h3>The five principles</h3>
              <p>
                <b>One.</b> Stop under-eating fat — it's the raw material.
                <br />
                <b>Two.</b> Steady blood sugar before anything else.
                <br />
                <b>Three.</b> Magnesium daily, especially in the evening.
                <br />
                <b>Four.</b> Enough protein to hold muscle and satiety.
                <br />
                <b>Five.</b> Caffeine early or not at all — cortisol is the
                lever.
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
            cheat sheet, and 20 recipes built for hormonal support.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>30 days, sequenced across the targets.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>Key nutrients, top foods, swaps — one page.</p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>Built around the four hormonal targets.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Get The Protocol</div>
            <h2>Hormonal Health.</h2>
            <p>
              The complete protocol — a 30-day plan, a cheat sheet, and 20
              recipes built for hormonal support.
            </p>
            <div className="price">
              <span className="now">$27</span>
            </div>
            <div className="cta">
              <a href="https://buy.stripe.com/00wcN5a38cVQeS009t6Vq0n" className="gold" target="_blank" rel="noopener noreferrer">
                Get Instant Access
              </a>
            </div>
            <div className="fine">
              Digital PDF · Instant download · No subscription · Yours to keep
            </div>
            <div className="upsell">
              <div className="u">
                Hormones don't work in isolation.{" "}
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
