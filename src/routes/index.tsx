import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import heroAsset from "@/assets/H1_Pomegranate_Salmon_Power_Plate.png.asset.json";
import storyImg from "@/assets/Rainbow_Vegetable_Grain_Bowl-vertical.png.asset.json";
import lookCheat from "@/assets/glp1-cheat-sheet.png.asset.json";
import lookPlan from "@/assets/glp1-30day-preview.png.asset.json";
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
.nh .nav{position:absolute;inset-inline:0;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;padding:24px 44px}
.nh .logo{font-family:'Playfair Display',serif;font-weight:700;font-size:26px;color:#F7F5F1}
.nh .logo span{color:#C9A84C}
.nh .nl{display:flex;gap:30px}
.nh .nl a{color:#F7F5F1;opacity:.85;font-size:13px;text-decoration:none;letter-spacing:.04em}
.nh .menu-btn{display:none;background:none;border:none;color:#F7F5F1;cursor:pointer;padding:4px}
.nh .menu-panel{display:none;position:absolute;right:24px;top:64px;z-index:4;background:#1C1C1C;border:1px solid rgba(247,245,241,.12);border-radius:4px;padding:10px 0;min-width:160px;box-shadow:0 12px 30px rgba(0,0,0,.35)}
.nh .menu-panel a{display:block;color:#F7F5F1;opacity:.9;font-size:13px;text-decoration:none;padding:10px 18px;letter-spacing:.04em}
.nh .menu-panel a:hover{background:rgba(247,245,241,.08);opacity:1}
.nh .hc{position:relative;z-index:3;padding:80px 44px;max-width:720px}
.nh .hc h1{font-size:58px;line-height:1.04;color:#F7F5F1}
.nh .hc .sub{font-size:18px;line-height:1.6;color:rgba(247,245,241,.88);margin-top:22px;max-width:500px}
.nh .hc .bens{margin-top:26px;display:flex;flex-direction:column;gap:9px}
.nh .hc .ben{display:flex;gap:11px;align-items:baseline;color:rgba(247,245,241,.92);font-size:15px}
.nh .hc .ben .k{color:#C9A84C;font-weight:600}
.nh .hc .cta{margin-top:30px;display:flex;gap:13px;flex-wrap:wrap;align-items:center}
.nh .hc .fine{margin-top:16px;font-size:12.5px;color:rgba(247,245,241,.62)}

/* STORY */
.nh .story{max-width:1160px;margin:0 auto;padding:84px 44px}
.nh .story-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center}
.nh .story-copy h2{font-size:38px;line-height:1.12;margin-top:14px;text-wrap:balance}
.nh .story-copy p{font-size:17px;line-height:1.78;color:#3a3a3a;margin-top:20px}
.nh .story-copy p b{color:#1C1C1C;font-weight:500}
.nh .story-img{height:560px;border-radius:8px;background-size:cover;background-position:center;box-shadow:0 20px 50px rgba(28,28,28,.14)}

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

@media(max-width:820px){
  .nh .hc h1{font-size:36px}
  .nh .nl{display:none}
  .nh .hc{padding:64px 24px}
  .nh .hero{min-height:560px;background-position:center 75%}
  .nh .nav{padding:20px 24px}
  .nh .menu-btn{display:flex;align-items:center;justify-content:center;width:40px;height:40px}
  .nh .menu-panel{display:block}
  .nh .story{padding:60px 24px}
  .nh .story-grid{grid-template-columns:1fr;gap:30px}
  .nh .story-img{height:300px;order:-1}
  .nh .story-copy h2{font-size:29px}
  .nh .midcta{padding:30px 24px}
  .nh .midcta-in{flex-direction:column;align-items:center;text-align:center}
  .nh .mc-text{font-size:21px;text-align:center;width:100%}
  .nh .mc-btns{flex-direction:column;align-items:center;width:100%}
  .nh .look{padding:60px 24px}
  .nh .look h2{font-size:29px}
  .nh .look-grid{grid-template-columns:1fr;gap:20px}
  .nh .lstats{grid-template-columns:1fr 1fr;gap:28px 12px}
  .nh .lib{padding:60px 24px 20px}
  .nh .lib h2{font-size:30px}
  .nh .grid{grid-template-columns:1fr 1fr;gap:14px}
  .nh .timg{height:150px}
  .nh .tmeta{padding:14px 14px;flex-wrap:wrap}
  .nh .tname{flex:1 1 100%;order:2}
  .nh .tnum{order:1}
  .nh .tprice{order:1;margin-left:auto}
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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="nh">
      <style>{CSS}</style>
      <main>
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${heroAsset.url})` }}>
          <div className="hov" />
          <nav className="nav">
            <div className="logo">
              nóurish<span>.</span>
            </div>
            <div className="nl">
              <a href="#library">Shop</a>
              <a href="/free-recipes">Free Recipes</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </div>
            <button
              className="menu-btn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {menuOpen && (
              <div className="menu-panel">
                <a href="#library" onClick={() => setMenuOpen(false)}>Shop</a>
                <a href="/free-recipes" onClick={() => setMenuOpen(false)}>Free Recipes</a>
                <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
                <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              </div>
            )}
          </nav>
          <div className="hc">
            <h1>
              Stop guessing what<br />to eat. <span className="it">Start knowing.</span>
            </h1>
            <div className="sub">
              Six food guides for the situations your body is actually in. Open one, and dinner is already decided — and it's the right call for what your body is doing right now.
            </div>
            <div className="bens">
              <div className="ben"><span className="k">→</span><span>Never search the internet for "what should I eat for ___" again</span></div>
              <div className="ben"><span className="k">→</span><span>A full month of meals, already planned for you</span></div>
              <div className="ben"><span className="k">→</span><span>120 recipes that actually work — and taste like this</span></div>
            </div>
            <div className="cta">
              <Link to="/system" className="gold">See What's Inside</Link>
              <a href="/free-recipes" className="ghost">Explore Free Recipes</a>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story">
          <div className="story-grid">
            <div className="story-copy">
              <div className="eye">Why this exists</div>
              <h2>Too many people are getting the <span className="it">wrong answer.</span></h2>
              <p>Someone starts a GLP-1 and asks what they should be eating. They get told to "eat clean." Someone's gut is a mess for the third year running and the internet hands them a keto plan that makes it worse. Someone is exhausted at 3pm every single day and gets told to drink more water.</p>
              <p><b>The real answers exist.</b> They're just buried in research papers, locked behind $300 consultations, or scattered across ten thousand contradicting blog posts written by people who've never read the science. So most of us do what anyone would do — we guess. We search the internet. We give up and order takeout, and feel bad about it.</p>
              <p>Nourish exists to close that gap. Not another diet. Not another meal plan. <b>A straight answer for the exact situation your body is in</b> — a 30-day meal plan, a one-page cheat sheet, and 20 recipes — plus the reasons behind every one of them. The research is done. The guesswork is over. The hardest thing left is cooking dinner.</p>
            </div>
            <div className="story-img" style={{ backgroundImage: `url(${storyImg.url})` }} />
          </div>
        </section>

        {/* MID CTA */}
        <section className="midcta">
          <div className="midcta-in">
            <div className="mc-text">Sound familiar? <b>Stop guessing.</b></div>
            <div className="mc-btns">
              <Link to="/system" className="gold">Get The System — $97</Link>
              <span className="mc-or">or start with one protocol for $27</span>
            </div>
          </div>
        </section>

        {/* LOOK */}
        <section className="look">
          <div className="look-in">
            <div className="eye">Look inside</div>
            <h2>This is what you're actually getting.</h2>
            <div className="look-sub">Not a PDF of recipes scraped off the internet. Real reference pages, real plans, real numbers — built to be used in a kitchen.</div>
            <div className="look-grid">
              <div className="lcard">
                <img src={lookCheat.url} alt="The cheat sheet" />
                <div className="lcap"><b>The cheat sheet</b><span>Your targets, what to eat, what to skip — one page, on the fridge.</span></div>
              </div>
              <div className="lcard">
                <img src={lookPlan.url} alt="The 30-day plan" />
                <div className="lcap"><b>The 30-day plan</b><span>A month of meals, mapped to how your body feels each day.</span></div>
              </div>
              <div className="lcard">
                <img src={lookRecipe.url} alt="Every recipe" />
                <div className="lcap"><b>Every recipe</b><span>Protein count, timing, and why it works — not just instructions.</span></div>
              </div>
            </div>
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
          <h2>Six protocols.<br /><span className="it">Pick one, or take them all.</span></h2>
          <div className="lead">Each one is a complete guide to a single situation — a 30-day plan, a one-page cheat sheet, and 20 recipes built for it. Click any protocol to see what's inside.</div>
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
                  <div className="tprice">$27</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* OFFER */}
        <section className="offer">
          <div className="obox">
            <div className="eye">Best Value · Save $65</div>
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
              <span className="owas">$162</span>
              <span className="onow">$97</span>
            </div>
            <div className="osave">You save $65 — more than two protocols, free</div>
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
            <form className="cap-form" onSubmit={(e) => e.preventDefault()}>
              <input className="cap-input" type="email" placeholder="you@email.com" />
              <button type="submit" className="cap-btn">Send It To Me</button>
            </form>
            <div className="cap-fine">No spam. Unsubscribe anytime.</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
