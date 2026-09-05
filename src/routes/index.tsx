import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import heroAsset from "@/assets/H1_Pomegranate_Salmon_Power_Plate.png.asset.json";
import storyImg from "@/assets/Rainbow_Vegetable_Grain_Bowl-vertical.png.asset.json";
import lookRecipe from "@/assets/glp1-recipe-preview.png.asset.json";
import lib01 from "@/assets/nourish-lib-01-glp1-v3.jpg.asset.json";
import lib02 from "@/assets/nourish-lib-02-gut-v3.jpg.asset.json";
import lib03 from "@/assets/nourish-lib-03-metabolic-v3.jpg.asset.json";
import lib04 from "@/assets/nourish-lib-04-cognitive-v3.jpg.asset.json";
import lib05 from "@/assets/nourish-lib-05-longevity-v3.jpg.asset.json";
import lib06 from "@/assets/nourish-lib-06-hormonal-v3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Nourish System — Eat Well. Every Single Day." },
      {
        name: "description",
        content:
          "Six food protocols for the situations your body is actually in — GLP-1, gut health, metabolism, and more. Real recipes, clear rules, built to actually use.",
      },
      { property: "og:title", content: "The Nourish System — Eat Well. Every Single Day." },
      {
        property: "og:description",
        content:
          "Six food protocols for the situations your body is actually in — GLP-1, gut health, metabolism, and more. Real recipes, clear rules, built to actually use.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const CSS = `
.nh *{box-sizing:border-box}
.nh{font-family:'DM Sans',sans-serif;background:#F7F5F1;color:#1C1C1C}
.nh h1,.nh h2,.nh h3{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em;margin:0}
.nh .it{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;color:#7D9B76}
.nh .eye{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#7D9B76}
.nh .arch{font-family:'Archivo',sans-serif;font-variant-numeric:tabular-nums lining-nums}
.nh .gold{background:#C9A84C;color:#1C1C1C;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:17px 36px;border-radius:2px;text-decoration:none;display:inline-block;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.nh .ghost{border:1px solid rgba(247,245,241,.45);color:#F7F5F1;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:16px 30px;border-radius:2px;text-decoration:none;display:inline-block;background:transparent;font-family:'DM Sans',sans-serif}

/* HERO */
.nh .hero{position:relative;min-height:640px;display:flex;align-items:center;background-size:cover;background-position:center}
.nh .hov{position:absolute;inset:0;background:linear-gradient(100deg,rgba(20,20,19,.93),rgba(20,20,19,.66) 42%,rgba(20,20,19,.15) 70%,rgba(20,20,19,0) 100%)}
.nh .hc{position:relative;z-index:3;padding:96px 44px;max-width:720px}
.nh .hc h1{font-size:58px;line-height:1.04;color:#F7F5F1}
.nh .hc .sub{font-size:18px;line-height:1.6;color:rgba(247,245,241,.88);margin-top:22px;max-width:500px}
.nh .hc .bens{margin-top:26px;display:flex;flex-direction:column;gap:9px}
.nh .hc .ben{display:flex;gap:11px;align-items:baseline;color:rgba(247,245,241,.92);font-size:15px}
.nh .hc .ben .k{color:#C9A84C;font-weight:600}
.nh .hc .cta{margin-top:30px;display:flex;gap:13px;flex-wrap:wrap;align-items:center}
.nh .hc .fine{margin-top:16px;font-size:12.5px;color:rgba(247,245,241,.62)}

/* HERO2 — split: copy panel + image beside (GLP-1 hero template) */
.nh .hero2{max-width:1140px;margin:0 auto;padding:56px 44px 26px;display:grid;grid-template-columns:1.02fr .98fr;gap:54px;align-items:center}
.nh .hero2-copy{max-width:520px}
.nh .hero2-copy h1{font-size:52px;line-height:1.04;color:#1C1C1C}
.nh .hero2-copy .sub{font-size:17px;line-height:1.62;color:#3a3a3a;margin-top:20px;max-width:480px}
.nh .hero2-copy .bens{margin-top:22px;display:flex;flex-direction:column;gap:10px}
.nh .hero2-copy .ben{display:flex;gap:11px;align-items:baseline;color:#3a3a3a;font-size:15.5px;line-height:1.5}
.nh .hero2-copy .ben .k{color:#C9A84C;font-weight:700}
.nh .hero2-copy .cta{margin-top:26px}
.nh .hero2-img{border-radius:8px;width:100%;aspect-ratio:4/5;background-size:cover;background-position:center;box-shadow:0 20px 50px rgba(28,28,28,.14)}

/* STORY — mirrors protocol "Why it exists": dark text band + full-width image band */
.nh .story{background:#1C1C1C}
.nh .story-in{max-width:900px;margin:0 auto;padding:76px 44px}
.nh .story-in h2{font-size:38px;line-height:1.12;margin-top:14px;color:#F7F5F1;text-wrap:balance}
.nh .story-in p{font-size:17.5px;line-height:1.78;color:#c9c6c0;margin-top:22px}
.nh .story-in p b{color:#F7F5F1;font-weight:500}
.nh .story-band{height:320px;background-size:cover;background-position:center}

/* MID CTA */
.nh .midcta{background:#1C1C1C;padding:36px 44px}
.nh .midcta-in{max-width:1160px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap}
.nh .mc-text{font-family:'Playfair Display',serif;font-weight:700;font-size:26px;color:#F7F5F1}
.nh .mc-text b{color:#C9A84C;font-weight:700}
.nh .mc-btns{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.nh .mc-or{color:#9A9590;font-size:13.5px}

/* LOOK */
.nh .look{background:#F2EDE4;padding:84px 44px}
.nh .look-in{max-width:1160px;margin:0 auto;text-align:center}
.nh .look h2{font-size:40px;margin-top:12px}
.nh .look-sub{font-size:16.5px;line-height:1.65;color:#6b6862;max-width:560px;margin:16px auto 0;text-wrap:balance}
.nh .look-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:36px;margin-top:48px}
.nh .lcard{background:#FFFFFF;border-radius:10px;overflow:hidden;box-shadow:0 18px 40px rgba(28,28,28,.16);border:1px solid rgba(28,28,28,.08);text-align:left}
.nh .lcard img{width:100%;display:block}
.nh .lcap{padding:20px 22px}
.nh .lcap b{display:block;font-family:'Playfair Display',serif;font-weight:700;font-size:19px;color:#1C1C1C}
.nh .lcap span{display:block;font-size:13.5px;color:#8a877f;margin-top:6px;line-height:1.5}
.nh .lstats{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:52px;padding-top:40px;border-top:1px solid rgba(28,28,28,.14)}
.nh .lstat .ln{font-family:'Archivo',sans-serif;font-weight:800;font-size:38px;color:#1C1C1C;font-variant-numeric:tabular-nums lining-nums}
.nh .lstat .ll{color:#6b6862;font-size:13px;margin-top:8px;line-height:1.5;text-wrap:balance;max-width:200px;margin-left:auto;margin-right:auto}
.nh .look-device{display:flex;justify-content:center;margin-top:48px}
.nh .ipad{position:relative;background:#1C1C1C;border-radius:36px;padding:22px 18px;box-shadow:0 44px 84px rgba(28,28,28,.30),0 10px 24px rgba(28,28,28,.16);max-width:500px;width:100%}
.nh .ipad::before{content:"";position:absolute;top:9px;left:50%;transform:translateX(-50%);width:6px;height:6px;border-radius:50%;background:rgba(247,245,241,.3)}
.nh .ipad-screen{background:#F7F5F1;border-radius:16px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(28,28,28,.06)}
.nh .ipad-screen img{width:100%;display:block}
.nh .look-cap{margin:24px auto 0;max-width:440px;font-size:13.5px;color:#6b6862;line-height:1.55;text-align:center}

/* LIBRARY */
.nh .lib{max-width:1160px;margin:0 auto;padding:84px 44px 30px}
.nh .lib h2{font-size:42px;line-height:1.06;margin-top:14px}
.nh .lib .lead{font-size:17px;line-height:1.7;color:#3a3a3a;max-width:640px;margin-top:20px}
.nh .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
.nh .tile{text-decoration:none;color:#1C1C1C;display:block;transition:transform .3s}
.nh .tile:hover{transform:translateY(-4px)}
.nh .timg{height:230px;border-radius:6px 6px 0 0;background-size:cover;background-position:center}
.nh .tmeta{background:#F2EDE4;border-radius:0 0 6px 6px;padding:16px 18px;display:flex;align-items:center;gap:12px}
.nh .tnum{font-family:'Archivo',sans-serif;font-weight:800;font-size:15px;color:#C9A84C}
.nh .tname{font-family:'Playfair Display',serif;font-weight:600;font-size:17px;flex:1;line-height:1.2}
.nh .tprice{font-family:'Archivo',sans-serif;font-weight:700;font-size:17px;color:#1C1C1C;font-variant-numeric:tabular-nums lining-nums}

/* OFFER */
.nh .offer{max-width:1160px;margin:24px auto 0;padding:0 44px 84px}
.nh .obox{background:#1C1C1C;border-radius:8px;padding:56px 48px;text-align:center}
.nh .obox h2{color:#F7F5F1;font-size:38px;margin-top:12px}
.nh .obox .osub{color:#9A9590;font-size:16px;margin-top:14px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.6}
.nh .incl{max-width:440px;margin:32px auto 0;text-align:left}
.nh .incl div{display:flex;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px solid rgba(247,245,241,.1);color:#F7F5F1;font-size:15px}
.nh .incl .c{color:#7D9B76}
.nh .bonus{margin-top:20px;background:rgba(125,155,118,.16);border:1px solid rgba(125,155,118,.4);border-radius:6px;padding:18px 20px;max-width:440px;margin-left:auto;margin-right:auto;text-align:left}
.nh .bonus .bt{color:#7D9B76;font-size:10px;letter-spacing:.16em;text-transform:uppercase}
.nh .bonus .bb{color:#F7F5F1;font-size:14.5px;margin-top:6px;line-height:1.5}
.nh .oprice{margin-top:32px;display:flex;align-items:baseline;justify-content:center;gap:14px}
.nh .owas{font-family:'Archivo',sans-serif;font-weight:600;font-size:22px;color:#6b6862;text-decoration:line-through;font-variant-numeric:tabular-nums lining-nums}
.nh .onow{font-family:'Archivo',sans-serif;font-weight:800;font-size:54px;color:#F7F5F1;font-variant-numeric:tabular-nums lining-nums}
.nh .osave{color:#7D9B76;font-size:13px;margin-top:8px}
.nh .ofine{color:#6b6862;font-size:12px;margin-top:16px}

/* CAPTURE */
.nh .capture{background:#7D9B76;padding:80px 44px}
.nh .cap-in{max-width:600px;margin:0 auto;text-align:center}
.nh .cap-eye{color:rgba(247,245,241,.85);font-size:10px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:18px}
.nh .cap-h{font-family:'Playfair Display',serif;font-weight:700;font-size:38px;color:#F7F5F1;letter-spacing:-.015em}
.nh .cap-sub{font-size:16px;color:rgba(247,245,241,.92);margin:16px auto 0;line-height:1.62;max-width:520px}
.nh .cap-sub b{font-weight:500;color:#F7F5F1}
.nh .cap-form{display:flex;gap:10px;margin:28px auto 0;max-width:470px}
.nh .cap-input{flex:1;background:#F7F5F1;border:none;border-radius:2px;padding:15px 18px;font-family:'DM Sans',sans-serif;font-size:15px;color:#1C1C1C;outline:none}
.nh .cap-btn{background:#1C1C1C;color:#F7F5F1;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:15px 26px;border-radius:2px;border:none;cursor:pointer;white-space:nowrap}
.nh .cap-fine{margin-top:16px;font-size:12px;color:rgba(247,245,241,.78)}
.nh .cap-success{margin:28px auto 0;max-width:470px;font-family:'Playfair Display',serif;font-style:italic;font-size:20px;color:#F7F5F1;line-height:1.5}
.nh .cap-error{margin-top:16px;font-size:12px;color:#1C1C1C;background:rgba(247,245,241,.92);display:inline-block;padding:8px 14px;border-radius:2px}

@media(max-width:820px){
  .nh .hero2{grid-template-columns:1fr;gap:26px;padding:40px 22px 24px}
  .nh .hero2-copy h1{font-size:36px}
  .nh .hero2-img{aspect-ratio:4/5}
  .nh .story-in{padding:56px 24px}
  .nh .story-in h2{font-size:29px}
  .nh .story-in p{font-size:16px}
  .nh .story-band{height:220px}
  .nh .midcta{padding:30px 24px}
  .nh .midcta-in{flex-direction:column;align-items:center;text-align:center}
  .nh .mc-text{font-size:21px;text-align:center;width:100%}
  .nh .mc-btns{flex-direction:column;align-items:center;width:100%}
  .nh .look{padding:60px 24px}
  .nh .look h2{font-size:29px}
  .nh .ipad{padding:16px 12px;border-radius:28px}
  .nh .lstats{grid-template-columns:1fr 1fr;gap:28px 12px}
  .nh .lib{padding:60px 24px 20px}
  .nh .lib h2{font-size:30px}
  .nh .grid{grid-template-columns:1fr 1fr;gap:14px}
  .nh .timg{height:150px}
  .nh .tmeta{padding:14px 14px;flex-wrap:wrap}
  .nh .tname{flex:1;order:2}
  .nh .tnum{order:1}
  .nh .offer{padding:0 24px 60px}
  .nh .obox{padding:40px 24px}
  .nh .obox h2{font-size:30px}
  .nh .onow{font-size:44px}
  .nh .capture{padding:60px 24px}
  .nh .cap-h{font-size:28px}
  .nh .cap-form{flex-direction:column}
}
`;

function HomePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/public/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SiteLayout>
      <div className="nh">
        <style>{CSS}</style>
        {/* HERO */}
        <section className="hero2">
          <div className="hero2-copy">
            <h1>Stop guessing what to eat. <span className="it">Start knowing.</span></h1>
            <div className="sub">
              Six food guides for the situations your body is actually in. Open one, and dinner is already decided — and it's the right call for what your body is doing right now.
            </div>
            <div className="bens">
              <div className="ben"><span className="k">→</span><span>Never search the internet for "what should I eat for ___" again</span></div>
              <div className="ben"><span className="k">→</span><span>A full month of meals, already planned for you</span></div>
              <div className="ben"><span className="k">→</span><span>120 recipes that actually work</span></div>
            </div>
            <div className="cta">
              <Link to="/system" className="gold">See What's Inside</Link>
            </div>
          </div>
          <div className="hero2-img" style={{ backgroundImage: `url(${lib03.url})` }} />
        </section>

        {/* STORY — mirrors protocol "Why it exists" */}
        <section className="story">
          <div className="story-in">
            <div className="eye">Why this exists</div>
            <h2>Too many people are getting the <span className="it">wrong answer.</span></h2>
            <p>Someone starts a GLP-1 and asks what they should be eating. They get told to "eat clean." Someone's gut is a mess for the third year running and the internet hands them a keto plan that makes it worse. Someone is exhausted at 3pm every single day and gets told to drink more water.</p>
            <p><b>The real answers exist.</b> They're just buried in research papers, locked behind $300 consultations, or scattered across ten thousand contradicting blog posts written by people who've never read the science. So most of us do what anyone would do — we guess. We search the internet. We give up and order takeout, and feel bad about it.</p>
            <p>Nourish exists to close that gap. Not another diet. Not another meal plan. <b>A straight answer for the exact situation your body is in</b> — a 30-day meal plan, a one-page cheat sheet, and 20 recipes — plus the reasons behind every one of them. The research is done. The guesswork is over. The hardest thing left is cooking dinner.</p>
          </div>
        </section>
        <div className="story-band" style={{ backgroundImage: `url(${storyImg.url})` }} />

        {/* MID CTA */}
        <section className="midcta">
          <div className="midcta-in">
            <div className="mc-text">Sound familiar? <b>Stop guessing.</b></div>
            <div className="mc-btns">
              <Link to="/system" className="gold">Get The System — $97</Link>
            </div>
          </div>
        </section>

        {/* LOOK */}
        <section className="look">
          <div className="look-in">
            <div className="eye">Look inside</div>
            <h2>This is what you're actually getting.</h2>
            <div className="look-sub">Not a PDF of recipes scraped off the internet. Real reference pages, real plans, real numbers — built to be used in a kitchen.</div>
            <div className="look-device">
              <div className="ipad">
                <div className="ipad-screen">
                  <img src={lookRecipe.url} alt="A Nourish recipe page" />
                </div>
              </div>
            </div>
            <div className="look-cap">One recipe page — one of 120 across the six protocols.</div>
            <div className="lstats">
              <div className="lstat"><div className="ln">120</div><div className="ll">Recipes, each built for a specific job</div></div>
              <div className="lstat"><div className="ln">28g+</div><div className="ll">Minimum protein in every GLP-1 recipe</div></div>
              <div className="lstat"><div className="ln">6</div><div className="ll">Situations covered, gut to hormones</div></div>
              <div className="lstat"><div className="ln">30</div><div className="ll">Days of meals mapped in every protocol</div></div>
            </div>
          </div>
        </section>

        {/* LIBRARY */}
        <section id="library" className="lib">
          <div className="eye">The Library</div>
          <h2>Six protocols.<br /><span className="it">One system.</span></h2>
          <div className="lead">Each one is a complete guide to a single situation — a 30-day plan, a one-page cheat sheet, and 20 recipes built for it. All six are included in The Nourish System. Click any protocol to see what's inside.</div>
          <div className="grid">
            {([
              { n: "01", name: "GLP-1 Nutrition", href: "/glp1", img: lib01.url },
              { n: "02", name: "Gut Health", href: "/gut-health", img: lib02.url },
              { n: "03", name: "Metabolic Health", href: "/metabolic-health", img: lib03.url },
              { n: "04", name: "Cognitive Performance", href: "/cognitive-performance", img: lib04.url },
              { n: "05", name: "Longevity & Healthspan", href: "/longevity", img: lib05.url },
              { n: "06", name: "Hormonal Health", href: "/hormonal-health", img: lib06.url },
            ] as const).map((p) => (
              <a key={p.n} href={p.href} className="tile">
                <div className="timg" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="tmeta">
                  <div className="tnum">{p.n}</div>
                  <div className="tname">{p.name}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* OFFER */}
        <section className="offer">
          <div className="obox">
            <div className="eye">The Complete System</div>
            <h2>The Complete System</h2>
            <div className="osub">Every protocol, every plan, every recipe — whatever your body needs next, you already have it.</div>
            <div className="incl">
              <div><span className="c">✓</span><span>All six protocols</span></div>
              <div><span className="c">✓</span><span>120 recipes, tested and photographed</span></div>
              <div><span className="c">✓</span><span>Six 30-day meal plans</span></div>
              <div><span className="c">✓</span><span>Six one-page cheat sheets</span></div>
            </div>
            <div className="bonus">
              <div className="bt">Bonus — included free</div>
              <div className="bb"><b>The Complete Drinks Collection</b> — 20 functional coffees, matchas, teas and refreshers, each built to do a job. Yours with the system.</div>
            </div>
            <div className="oprice">
              <span className="onow">$97</span>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link to="/system" className="gold">Get The System</Link>
            </div>
            <div className="ofine">Instant download · No subscription · Yours to keep</div>
          </div>
        </section>

        {/* CAPTURE */}
        <section className="capture">
          <div className="cap-in">
            <div className="cap-eye">Free · No card required</div>
            <div className="cap-h">Try a week on us.</div>
            <div className="cap-sub"><b>The 15-Minute Week</b> — seven days of meals you can cook in fifteen minutes or less, plus three drinks to go with them. Enter your email and it's in your inbox.</div>
            {status === "success" ? (
              <div className="cap-success">Check your inbox — your 15-Minute Week is on its way.</div>
            ) : (
              <>
                <form className="cap-form" onSubmit={handleSubscribe}>
                  <input
                    className="cap-input"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                    disabled={status === "submitting"}
                    aria-label="Email address"
                  />
                  <button type="submit" className="cap-btn" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending…" : "Send It To Me"}
                  </button>
                </form>
                {status === "error" ? (
                  <div className="cap-error">That didn't go through. Check the address and try again.</div>
                ) : (
                  <div className="cap-fine">No spam. Unsubscribe anytime.</div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
