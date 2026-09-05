import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/gut-health-hero.png.asset.json";
import bandImg from "@/assets/gut-health-band.png.asset.json";

export const Route = createFileRoute("/gut-health")({
  head: () => ({
    meta: [
      { title: "Gut Health Protocol — nóurish." },
      {
        name: "description",
        content:
          "A 30-day food protocol that rebuilds your gut in three phases — remove what's harming it, repair the lining, then rebuild the diversity that keeps it working.",
      },
      { property: "og:title", content: "Gut Health Protocol — nóurish." },
      {
        property: "og:description",
        content:
          "A 30-day food protocol that rebuilds your gut in three sequenced phases — Remove, Repair, Rebuild.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/gut-health" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: heroImg.url },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/gut-health" }],
  }),
  component: GutHealthPage,
});

const css = `
.gut { background:#F7F5F1; color:#1C1C1C; font-family:'DM Sans',sans-serif; }
.gut h1,.gut h2,.gut h3 { font-family:'Playfair Display',serif; font-weight:700; letter-spacing:-.015em; }
.gut .eye { font-size:10px; letter-spacing:.22em; text-transform:uppercase; color:#7D9B76; }
.gut .arch { font-family:'Archivo',sans-serif; font-variant-numeric:tabular-nums lining-nums; }
.gut .gold { background:#C9A84C; color:#1C1C1C; font-family:'DM Sans'; font-size:12px; font-weight:500; letter-spacing:.13em; text-transform:uppercase; padding:16px 34px; border-radius:2px; text-decoration:none; display:inline-block; cursor:pointer; }

/* HERO */
.gut .hero { max-width:1140px; margin:0 auto; padding:40px 20px 24px; display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
.gut .hl h1 { font-size:36px; line-height:1.04; text-wrap:balance; }
.gut .hl h1 .it { font-family:'Playfair Display',serif; font-style:italic; font-weight:700; color:#7D9B76; }
.gut .hl p { font-size:16px; line-height:1.62; color:#3a3a3a; margin-top:18px; max-width:450px; }
.gut .hl .stat { margin-top:20px; font-size:12px; color:#8a877f; }
.gut .hl .price { margin-top:22px; display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.gut .hl .now { font-family:'Archivo'; font-weight:800; font-size:40px; color:#1C1C1C; font-variant-numeric:tabular-nums lining-nums; }
.gut .hl .per { font-size:13px; color:#8a877f; }
.gut .hl .cta { margin-top:20px; display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.gut .hl .eye { margin-bottom:14px; display:inline-block; }
.gut .himg { border-radius:8px; overflow:hidden; height:300px; background-position:center; background-size:cover; box-shadow:0 20px 50px rgba(28,28,28,.14); }

/* SEC */
.gut .sec { max-width:900px; margin:0 auto; padding:56px 20px; }
.gut .sec h2 { font-size:29px; margin-top:12px; line-height:1.1; text-wrap:balance; }
.gut .sec .body { font-size:16px; line-height:1.75; color:#3a3a3a; margin-top:20px; }
.gut .sec .body b { color:#1C1C1C; font-weight:500; }
.gut .why { background:#1C1C1C; }
.gut .why .sec h2 { color:#F7F5F1; }
.gut .why .sec .body { color:#c9c6c0; }
.gut .why .sec .body b { color:#F7F5F1; }
.gut .pull { max-width:760px; margin:28px auto 0; padding:22px 24px; border-left:3px solid #7D9B76; background:rgba(125,155,118,.12); }
.gut .pull p { font-family:'Playfair Display',serif; font-style:italic; font-size:17px; line-height:1.6; color:#F7F5F1; }

.gut .band { height:220px; background-position:center; background-size:cover; }

/* PHASES */
.gut .phases { background:#F2EDE4; }
.gut .ph-in { max-width:1040px; margin:0 auto; padding:56px 20px; }
.gut .ph-in h2 { font-size:29px; margin-top:12px; }
.gut .ph-in .body { font-size:15.5px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:620px; }
.gut .wins { display:grid; grid-template-columns:1fr; gap:16px; margin-top:32px; }
.gut .win { background:#F7F5F1; border-radius:6px; padding:24px; border-top:3px solid #7D9B76; }
.gut .win .d { font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a877f; }
.gut .win h3 { font-size:20px; margin-top:8px; }
.gut .win p { font-size:13.5px; color:#6b6862; margin-top:10px; line-height:1.55; }
.gut .outcome { margin-top:22px; background:#1C1C1C; border-radius:6px; padding:26px; display:flex; gap:20px; align-items:center; flex-wrap:wrap; }
.gut .outcome .oe { font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:#C9A84C; }
.gut .outcome h3 { color:#F7F5F1; font-size:19px; margin-top:6px; }
.gut .outcome p { color:#9A9590; font-size:14px; margin-top:6px; line-height:1.55; max-width:640px; }

/* RULE */
.gut .rule { max-width:820px; margin:0 auto; padding:16px 20px 0; }
.gut .rulebox { background:#1C1C1C; border-radius:8px; padding:32px 26px; }
.gut .rulebox .eye { color:#C9A84C; }
.gut .rulebox h3 { color:#F7F5F1; font-size:22px; margin-top:10px; }
.gut .rulebox p { color:#c9c6c0; font-size:15px; line-height:1.7; margin-top:14px; }
.gut .rulebox p b { color:#F7F5F1; font-weight:500; }

/* EXPAND */
.gut .expand-wrap { max-width:900px; margin:0 auto; padding:48px 20px 0; }
.gut .expand-btn { width:100%; background:#F2EDE4; border:1px solid rgba(28,28,28,.14); border-radius:8px; padding:20px 22px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; transition:all .2s; font-family:'DM Sans',sans-serif; }
.gut .expand-btn:hover { border-color:#7D9B76; background:#efe9de; }
.gut .eb-l { display:flex; align-items:baseline; gap:12px; flex-wrap:wrap; }
.gut .eb-t { font-family:'Playfair Display',serif; font-weight:700; font-size:17px; color:#1C1C1C; text-align:left; }
.gut .eb-m { font-size:12px; color:#8a877f; letter-spacing:.04em; }
.gut .eb-i { font-family:'Archivo',sans-serif; font-weight:700; font-size:22px; color:#7D9B76; transition:transform .25s; }
.gut .expand-btn.open .eb-i { transform:rotate(45deg); }
.gut .deep { max-height:0; overflow:hidden; transition:max-height .45s ease; }
.gut .deep.open { max-height:5000px; }
.gut .deep-in { padding:30px 4px 0; }
.gut .deep h3 { font-size:21px; margin-top:28px; margin-bottom:10px; }
.gut .deep h3:first-child { margin-top:0; }
.gut .deep p { font-size:16px; line-height:1.8; color:#3a3a3a; margin-bottom:14px; }
.gut .deep p b { color:#1C1C1C; font-weight:500; }

/* ANAT */
.gut .anat { max-width:1000px; margin:0 auto; padding:56px 20px; }
.gut .anat h2 { font-size:29px; margin-top:12px; }
.gut .anat .body { font-size:16px; line-height:1.7; color:#3a3a3a; margin-top:16px; max-width:600px; }
.gut .anat-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:32px; }
.gut .anat-item .an { font-family:'Archivo'; font-weight:800; font-size:30px; color:#C9A84C; font-variant-numeric:tabular-nums lining-nums; }
.gut .anat-item h3 { font-size:17px; margin-top:8px; }
.gut .anat-item p { font-size:13px; color:#8a877f; margin-top:8px; line-height:1.5; }

/* BUY */
.gut .buy { background:#1C1C1C; padding:64px 20px; }
.gut .buy-in { max-width:640px; margin:0 auto; text-align:center; }
.gut .buy .eye { color:#7D9B76; }
.gut .buy h2 { font-size:32px; color:#F7F5F1; margin-top:12px; }
.gut .buy p { color:#9A9590; font-size:15px; margin-top:16px; line-height:1.6; }
.gut .buy .price { margin-top:24px; }
.gut .buy .now { font-family:'Archivo'; font-weight:800; font-size:44px; color:#F7F5F1; font-variant-numeric:tabular-nums lining-nums; }
.gut .buy .cta { margin-top:20px; }
.gut .buy .fine { color:#6b6862; font-size:12px; margin-top:16px; }
.gut .upsell { margin-top:30px; padding-top:24px; border-top:1px solid rgba(247,245,241,.14); }
.gut .upsell .u { color:#c9c6c0; font-size:15px; }
.gut .upsell .u b { color:#F7F5F1; font-weight:500; }
.gut .upsell a { color:#C9A84C; text-decoration:none; font-size:13px; letter-spacing:.08em; text-transform:uppercase; display:inline-block; margin-top:12px; }

@media (min-width:820px) {
  .gut .hero { padding:52px 44px 26px; grid-template-columns:1.02fr .98fr; gap:54px; }
  .gut .hl h1 { font-size:52px; }
  .gut .hl p { font-size:17px; margin-top:20px; }
  .gut .hl .now { font-size:44px; }
  .gut .himg { height:460px; }
  .gut .sec { padding:76px 44px; }
  .gut .sec h2 { font-size:38px; margin-top:14px; }
  .gut .sec .body { font-size:17.5px; margin-top:24px; }
  .gut .pull { margin-top:36px; padding:26px 30px; }
  .gut .pull p { font-size:19px; }
  .gut .band { height:320px; }
  .gut .ph-in { padding:76px 44px; }
  .gut .ph-in h2 { font-size:38px; margin-top:14px; }
  .gut .ph-in .body { font-size:16px; margin-top:18px; }
  .gut .wins { grid-template-columns:repeat(3,1fr); gap:18px; margin-top:40px; }
  .gut .win { padding:26px; }
  .gut .win h3 { font-size:21px; }
  .gut .outcome { padding:28px 30px; gap:26px; }
  .gut .outcome h3 { font-size:20px; }
  .gut .rule { padding:20px 44px 0; }
  .gut .rulebox { padding:40px 44px; }
  .gut .rulebox h3 { font-size:24px; }
  .gut .rulebox p { font-size:15.5px; }
  .gut .expand-wrap { padding:56px 44px 0; }
  .gut .expand-btn { padding:22px 26px; }
  .gut .eb-t { font-size:20px; }
  .gut .deep-in { padding:34px 6px 0; }
  .gut .deep h3 { font-size:23px; margin-top:32px; margin-bottom:12px; }
  .gut .deep p { font-size:16.5px; }
  .gut .anat { padding:76px 44px; }
  .gut .anat h2 { font-size:38px; margin-top:14px; }
  .gut .anat .body { font-size:17px; margin-top:18px; }
  .gut .anat-grid { grid-template-columns:repeat(4,1fr); gap:26px; margin-top:40px; }
  .gut .anat-item .an { font-size:34px; }
  .gut .anat-item h3 { font-size:18px; margin-top:10px; }
  .gut .anat-item p { font-size:13.5px; }
  .gut .buy { padding:80px 44px; }
  .gut .buy h2 { font-size:40px; }
  .gut .buy .now { font-size:52px; }
}
`;

function GutHealthPage() {
  const [open, setOpen] = useState(false);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="gut">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <span className="eye">Protocol 02 · Gut Health</span>
            <h1>
              The bloating isn't the problem.{" "}
              <span className="it">It's the signal.</span>
            </h1>
            <p>
              A 30-day food protocol that rebuilds your gut in three phases —
              remove what's harming it, repair the lining, then rebuild the
              diversity that keeps it working.
            </p>
            <div className="stat">20 recipes · 3 phases · 30 days</div>
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
          <h2>A 30-day reset, in the right order.</h2>
          <div className="body">
            The Gut Health protocol is a structured, food-based 30-day plan for
            anyone dealing with bloating, irregularity, or the brain fog that
            shows up after meals.{" "}
            <b>
              It works in three sequenced phases — Remove, Repair, Rebuild —
              because a disrupted gut can't be fixed by adding one thing.
            </b>{" "}
            You get a 30-day meal plan, a one-page cheat sheet, and 20 recipes
            engineered for the phase you're actually in.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>&ldquo;Eat more fiber&rdquo; was never going to fix this.</h2>
            <div className="body">
              Most gut advice treats the symptom as the condition.{" "}
              <b>
                But bloating isn't a fiber deficiency — it's what's living in
                your gut.
              </b>{" "}
              When the wrong bacteria overpopulate, they ferment food
              aggressively, and the gas has nothing to do with portion size.
              Brain fog after eating isn't a caffeine problem; it's the
              gut-brain axis sending inflammatory signals upward. Chronic
              irregularity isn't solved by a daily probiotic yogurt — it happens
              when the bacteria that tell your gut how to move have been wiped
              out.
              <div className="pull">
                <p>
                  &ldquo;Your gut microbiome is home to 38 trillion bacteria.
                  When that ecosystem is out of balance, everything downstream
                  — digestion, immunity, mood, energy — goes with it.&rdquo;
                </p>
              </div>
              <br />
              Generic advice produces generic results. That's why you're still
              dealing with this.
            </div>
          </div>
        </div>

        {/* BAND IMAGE */}
        <div
          className="band"
          style={{ backgroundImage: `url(${bandImg.url})` }}
        />

        {/* PHASES */}
        <div className="phases">
          <div className="ph-in">
            <div className="eye">The 30-day protocol</div>
            <h2>Three phases. In this order.</h2>
            <div className="body">
              You can't build a healthy microbiome in a hostile environment. The
              sequence is the whole point — each phase makes the next one work.
            </div>
            <div className="wins">
              <div className="win">
                <div className="d">Days 1–10</div>
                <h3>Remove</h3>
                <p>
                  Take out what's disrupting the gut. Stabilize the environment
                  with bone broth, fermented vegetables, and anti-inflammatory
                  food before touching diversity.
                </p>
              </div>
              <div className="win">
                <div className="d">Days 11–20</div>
                <h3>Repair</h3>
                <p>
                  Rebuild the gut lining. Reintroduce soluble fiber in sequence
                  and add prebiotics that feed the good bacteria now
                  establishing themselves.
                </p>
              </div>
              <div className="win">
                <div className="d">Days 21–30</div>
                <h3>Rebuild</h3>
                <p>
                  Maximum diversity — 30+ different plants across the week,
                  resistant starch, diverse legumes. This locks in everything
                  the first two phases built.
                </p>
              </div>
            </div>
            <div className="outcome">
              <div>
                <div className="oe">Day 31 and beyond</div>
                <h3>A gut that maintains itself.</h3>
                <p>
                  Less bloating. Predictable digestion. Energy that doesn't
                  collapse after lunch. The fog lifts. And a microbiome diverse
                  enough to hold its own balance — plus a way of eating you can
                  actually keep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RULE */}
        <div className="rule">
          <div className="rulebox">
            <div className="eye">Rule One of Six</div>
            <h3>Elimination first. Always.</h3>
            <p>
              <b>
                You cannot build a healthy microbiome in a hostile environment.
              </b>{" "}
              Remove before you restore — that's why Phase 1 is non-negotiable,
              and why every protocol that skips it fails. Six rules govern all
              thirty days. Break them and the phases don't compound. Follow
              them and they do exactly what they're designed to do.
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
              <h3>Why the phases have to run in order</h3>
              <p>
                A disrupted microbiome cannot be corrected by adding one thing.{" "}
                <b>You cannot build a healthy ecosystem in a hostile environment</b>{" "}
                — which is why Phase 1 removes the disruptors before Phase 2
                attempts to repair anything, and why Phase 3 only expands
                diversity once there's a gut lining capable of supporting it.
                Skip the sequence and the phases stop compounding.
              </p>

              <h3>What's actually driving the bloating</h3>
              <p>
                When pathogenic bacteria overpopulate the large intestine, they
                ferment food aggressively — producing gas and distension that
                has nothing to do with portion size and everything to do with
                which species are present. That's why eating less doesn't fix
                it, and why "more fiber" can make it worse before it makes it
                better.
              </p>

              <h3>The gut-brain axis</h3>
              <p>
                The vagus nerve carries signals continuously between your gut
                and your brain. A disrupted gut sends inflammatory signals
                upward — impairing clarity, mood, and sleep in ways that look
                like mental health problems but originate in the digestive
                tract. This is why brain fog after meals is a gut symptom, not
                a caffeine problem.
              </p>

              <h3>Why irregularity is a diversity problem</h3>
              <p>
                Healthy gut motility depends on specific short-chain fatty
                acid-producing bacteria. When those species are depleted — by
                antibiotics, stress, ultra-processed food, or alcohol — your
                gut literally loses the bacterial signals that tell it when and
                how to move. A daily probiotic yogurt does not replace them.
              </p>

              <h3>The six principles</h3>
              <p>
                <b>One.</b> Elimination first — remove before you restore.
                <br />
                <b>Two.</b> Respect the phase you're in; don't skip ahead.
                <br />
                <b>Three.</b> Soluble fiber before insoluble, always in
                sequence.
                <br />
                <b>Four.</b> Fermented food daily, from Phase 2 onward.
                <br />
                <b>Five.</b> Thirty-plus different plants a week by Phase 3.
                <br />
                <b>Six.</b> Consistency beats intensity — thirty days, not
                three.
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
            cheat sheet, and 20 recipes built for each phase.
          </div>
          <div className="anat-grid">
            <div className="anat-item">
              <div className="an">30</div>
              <h3>30-Day Plan</h3>
              <p>A day-by-day framework, organized by phase.</p>
            </div>
            <div className="anat-item">
              <div className="an">01</div>
              <h3>Cheat Sheet</h3>
              <p>One page — what to eat in each phase, what to skip.</p>
            </div>
            <div className="anat-item">
              <div className="an">20</div>
              <h3>Recipes</h3>
              <p>Each tagged to the phase it belongs to.</p>
            </div>
          </div>
        </div>

        {/* BUY */}
        <div className="buy" id="buy">
          <div className="buy-in">
            <div className="eye">Included In The System</div>
            <h2>Gut Health.</h2>
            <p>
              The complete 30-day reset — a phased daily plan, a cheat sheet,
              and 20 recipes engineered for each phase.
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
