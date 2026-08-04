import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/system-v14-hero.jpg.asset.json";
import bandImg from "@/assets/system-v14-band.jpg.asset.json";
import p1 from "@/assets/system-v14-01glp1.jpg.asset.json";
import p2 from "@/assets/system-v14-02gut.jpg.asset.json";
import p3 from "@/assets/system-v14-03metabolic.jpg.asset.json";
import p4 from "@/assets/system-v14-04cognitive.jpg.asset.json";
import p5 from "@/assets/system-v14-05longevity.jpg.asset.json";
import p6 from "@/assets/system-v14-06hormonal.jpg.asset.json";

const STRIPE = "https://buy.stripe.com/fZueVd2AG6xsfW4f4n6Vq0o";

const protocols = [
  { n: "01", name: "GLP-1 Nutrition", for: "You're on a GLP-1 medication — Ozempic, Wegovy, Mounjaro.", to: "/glp1", img: p1.url },
  { n: "02", name: "Gut Health", for: "You're bloated, irregular, or reacting to foods.", to: "/gut-health", img: p2.url },
  { n: "03", name: "Metabolic Health", for: "Your energy crashes and your blood sugar swings.", to: "/metabolic-health", img: p3.url },
  { n: "04", name: "Cognitive Performance", for: "You want sharper focus and a brain that lasts.", to: "/cognitive-performance", img: p4.url },
  { n: "05", name: "Longevity & Healthspan", for: "You're eating for the long game.", to: "/longevity", img: p5.url },
  { n: "06", name: "Hormonal Health", for: "Your hormones feel off — energy, mood, or cycle.", to: "/hormonal-health", img: p6.url },
];

const css = `
.sv14{font-family:'DM Sans',sans-serif;background:#F7F5F1;color:#1C1C1C}
.sv14 h1,.sv14 h2,.sv14 h3{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.01em}
.sv14 .gold{background:#C9A84C;color:#1C1C1C;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:16px 34px;border-radius:2px;text-decoration:none;display:inline-block}
.sv14 .eye{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#7D9B76}
.sv14 .arch{font-family:'Archivo',sans-serif;font-variant-numeric:tabular-nums lining-nums}
.sv14 .pfw{font-family:'Playfair Display',serif;font-weight:600}
.sv14 .hero{max-width:1140px;margin:0 auto;padding:40px 20px 24px;display:grid;grid-template-columns:1fr;gap:28px;align-items:center}
.sv14 .hl .eye{margin-bottom:16px}
.sv14 .hl h1{font-size:38px;line-height:1.02}
.sv14 .hl h1 .g{color:#C9A84C}
.sv14 .hl p{font-size:17px;line-height:1.62;color:#3a3a3a;margin-top:20px;max-width:440px}
.sv14 .price{margin-top:26px;display:flex;align-items:baseline;gap:12px}
.sv14 .was{font-family:'Archivo',sans-serif;font-weight:600;font-size:20px;color:#8a877f;text-decoration:line-through}
.sv14 .hl .now{font-family:'Archivo',sans-serif;font-weight:800;font-size:46px;color:#1C1C1C}
.sv14 .hl .cta{margin-top:22px}
.sv14 .savenote{font-size:13px;color:#7D9B76;margin-top:8px;font-weight:500}
.sv14 .launchnote{font-size:12px;color:#8a877f;margin-top:14px;letter-spacing:.02em}
.sv14 .himg{border-radius:8px;overflow:hidden;height:300px;background-position:center;background-size:cover;box-shadow:0 20px 50px rgba(28,28,28,.14)}
.sv14 .sec{max-width:900px;margin:0 auto;padding:56px 20px}
.sv14 .sec h2{font-size:30px;margin-top:14px;line-height:1.08}
.sv14 .sec .body{font-size:17.5px;line-height:1.75;color:#3a3a3a;margin-top:24px}
.sv14 .sec .body b{color:#1C1C1C;font-weight:500}
.sv14 .why{background:#1C1C1C}
.sv14 .why .sec h2{color:#F7F5F1}
.sv14 .why .sec .body{color:#c9c6c0}
.sv14 .why .sec .body b{color:#F7F5F1}
.sv14 .band{height:240px;background-position:center;background-size:cover}
.sv14 .anat{background:#F2EDE4}
.sv14 .anat-wrap{max-width:1000px;margin:0 auto;padding:56px 20px}
.sv14 .anat-wrap h2{font-size:30px;margin-top:14px;line-height:1.08}
.sv14 .anat-wrap .body{font-size:17px;line-height:1.7;color:#3a3a3a;margin-top:20px;max-width:600px}
.sv14 .anat-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:40px}
.sv14 .anat-item .an{font-family:'Archivo',sans-serif;font-weight:800;font-size:34px;color:#C9A84C}
.sv14 .anat-item h3{font-size:18px;margin-top:10px}
.sv14 .anat-item p{font-size:13.5px;color:#8a877f;margin-top:8px;line-height:1.5}
.sv14 .six{max-width:920px;margin:0 auto;padding:56px 20px}
.sv14 .six h2{font-size:30px}
.sv14 .slist{margin-top:34px;display:flex;flex-direction:column;gap:12px}
.sv14 .srow{display:flex;align-items:center;gap:16px;padding:14px;border:1px solid rgba(28,28,28,.12);border-radius:6px;text-decoration:none;color:#1C1C1C;transition:all .18s;background:#F7F5F1}
.sv14 .srow:hover{border-color:#7D9B76;transform:translateX(4px)}
.sv14 .sthumb{width:80px;height:60px;border-radius:4px;background-size:cover;background-position:center;flex-shrink:0}
.sv14 .sbody{flex:1}
.sv14 .stop{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}
.sv14 .sn{font-family:'Archivo',sans-serif;font-weight:800;font-size:16px;color:#C9A84C}
.sv14 .snm{font-family:'Playfair Display',serif;font-weight:600;font-size:20px}
.sv14 .sfor{font-size:14px;color:#8a877f;margin-top:4px}
.sv14 .sarrow{color:#7D9B76;font-size:18px;padding-right:6px}
.sv14 .value{max-width:900px;margin:0 auto;padding:20px 20px 56px}
.sv14 .valuebox{background:#F2EDE4;border-radius:6px;padding:32px;max-width:460px;margin:0 auto}
.sv14 .valuebox .vt{text-align:center;margin-bottom:16px}
.sv14 .valuebox .row{display:flex;justify-content:space-between;padding:9px 0;font-size:15px;color:#3a3a3a}
.sv14 .valuebox .tot{display:flex;justify-content:space-between;border-top:2px solid #1C1C1C;margin-top:10px;padding-top:14px;align-items:baseline}
.sv14 .valuebox .tot .now{font-family:'Archivo',sans-serif;font-weight:800;font-size:34px}
.sv14 .valuebox .save{text-align:center;color:#7D9B76;font-size:13px;margin-top:8px}
.sv14 .offer{background:#1C1C1C;padding:60px 20px}
.sv14 .offer-in{max-width:720px;margin:0 auto;text-align:center}
.sv14 .offer h2{font-size:32px;color:#F7F5F1}
.sv14 .offer .clist{margin:34px auto 0;max-width:420px;text-align:left}
.sv14 .cli{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid rgba(247,245,241,.1);color:#F7F5F1;font-size:15px}
.sv14 .offer .price{margin-top:34px;display:flex;align-items:baseline;justify-content:center;gap:14px}
.sv14 .offer .was{font-family:'Archivo',sans-serif;font-weight:600;font-size:22px;color:#6b6862;text-decoration:line-through}
.sv14 .offer .now{font-family:'Archivo',sans-serif;font-weight:800;font-size:44px;color:#F7F5F1}
.sv14 .offer .save{color:#7D9B76;font-size:13px;margin-top:8px}
.sv14 .offer .cta{margin-top:26px}
.sv14 .offer .fine{color:#6b6862;font-size:12px;margin-top:16px}
@media(min-width:821px){
.sv14 .hero{padding:56px 44px 30px;grid-template-columns:1.02fr .98fr;gap:54px}
.sv14 .hl h1{font-size:54px}
.sv14 .himg{height:470px}
.sv14 .sec{padding:78px 44px}
.sv14 .sec h2{font-size:40px}
.sv14 .band{height:340px}
.sv14 .anat-wrap{padding:78px 44px}
.sv14 .anat-wrap h2{font-size:40px}
.sv14 .anat-grid{grid-template-columns:repeat(4,1fr);gap:26px}
.sv14 .six{padding:78px 44px}
.sv14 .six h2{font-size:40px}
.sv14 .srow{gap:22px}
.sv14 .sthumb{width:118px;height:80px}
.sv14 .value{padding:20px 44px 78px}
.sv14 .offer{padding:82px 44px}
.sv14 .offer h2{font-size:42px}
.sv14 .offer .now{font-size:54px}
}
`;

export const Route = createFileRoute("/system")({
  head: () => ({
    meta: [
      { title: "The Nourish System — Everything, In One Place | nóurish." },
      { name: "description", content: "Six food protocols for the six situations your body can be in. 120 recipes, six 30-day plans, six cheat sheets — one download, $97." },
      { property: "og:title", content: "The Nourish System — Everything, In One Place" },
      { property: "og:description", content: "Six food protocols for the six situations your body can be in. 120 recipes, six 30-day plans, six cheat sheets — one download, $97." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://thenourishsystem.com/system" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/system" }],
  }),
  component: SystemPage,
});

function SystemPage() {
  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="sv14">
        {/* HERO */}
        <div className="hero">
          <div className="hl">
            <div className="eye">The Complete System</div>
            <h1>
              Everything, in <span className="g">one place.</span>
            </h1>
            <p>
              Food guidance for the six situations your body can actually be in — what to eat, why,
              and the meals to do it. All of it, one download.
            </p>
            <div className="price">
              <span className="was">$162</span>
              <span className="now">$97</span>
            </div>
            <div className="cta">
              <a className="gold" href={STRIPE} target="_blank" rel="noopener noreferrer">
                Get Instant Access
              </a>
            </div>
          </div>
          <div className="himg" style={{ backgroundImage: `url(${heroImg.url})` }} />
        </div>

        {/* WHAT THIS IS */}
        <div className="sec">
          <div className="eye">What this is</div>
          <h2>The answer, already worked out.</h2>
          <div className="body">
            The Nourish System is a set of food guides for six situations your body can be in — being
            on a GLP-1 medication, healing your gut, steadying blood sugar, sharpening focus, aging
            well, or balancing hormones.{" "}
            <b>
              For each one, it tells you exactly what to eat and why, gives you a 30-day meal plan to
              follow, and 20 recipes built for it.
            </b>{" "}
            Instead of searching the internet for "what should I eat for ___" and drowning in ten
            thousand conflicting answers, you get the one that's actually right for the situation
            you're in — already figured out for you.
          </div>
        </div>

        {/* WHY IT EXISTS */}
        <div className="why">
          <div className="sec">
            <div className="eye">Why it exists</div>
            <h2>Generic advice isn't just unhelpful here. It's wrong.</h2>
            <div className="body">
              "Eat healthy" is fine until your body is in a specific situation — and then it
              backfires.{" "}
              <b>
                The right food for a struggling gut is the wrong food for stable blood sugar. What
                protects your brain isn't what protects your hormones.
              </b>{" "}
              Most advice ignores this and hands everyone the same generic plan. The internet gives
              you ten thousand conflicting answers; the Nourish System gives you the one that fits
              the situation you're actually in — six of them, each built around what your body is
              really doing.
            </div>
          </div>
        </div>

        <div className="band" style={{ backgroundImage: `url(${bandImg.url})` }} />

        {/* WHAT YOU GET */}
        <div className="anat">
          <div className="anat-wrap">
            <div className="eye">What you get</div>
            <h2>Six complete guides. Not just recipes.</h2>
            <div className="body">
              Every protocol is a full playbook for its situation — four things, not a pile of
              recipes:
            </div>
            <div className="anat-grid">
              <div className="anat-item">
                <div className="an">30</div>
                <h3>30-Day Plan</h3>
                <p>A full month of meals, mapped day by day.</p>
              </div>
              <div className="anat-item">
                <div className="an">01</div>
                <h3>Cheat Sheet</h3>
                <p>One page — what to eat, what to skip, your targets.</p>
              </div>
              <div className="anat-item">
                <div className="an">20</div>
                <h3>Recipes</h3>
                <p>Built for that situation. 120 across the whole system.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SIX SITUATIONS */}
        <div className="six">
          <div className="eye">Is this you?</div>
          <h2 style={{ marginTop: 12 }}>Six situations. Find yours.</h2>
          <div className="slist">
            {protocols.map((p) => (
              <Link key={p.n} className="srow" to={p.to}>
                <div className="sthumb" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="sbody">
                  <div className="stop">
                    <span className="sn">{p.n}</span>
                    <span className="snm">{p.name}</span>
                  </div>
                  <div className="sfor">{p.for}</div>
                </div>
                <span className="sarrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        {/* VALUE */}
        <div className="value">
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 40px" }}>
            <div className="eye">Why get all six</div>
            <h2 style={{ fontSize: 30, marginTop: 12, fontFamily: "'Playfair Display',serif", fontWeight: 700 }}>
              One connected system.
            </h2>
            <div className="body" style={{ fontSize: 16, lineHeight: 1.75, color: "#3a3a3a", marginTop: 24 }}>
              Your gut talks to your metabolism. Your metabolism talks to your hormones. Improve one
              and the others move with it — which is why the answer you’re after often lives in a
              protocol you didn’t expect.
              <br />
              Get all six, and whatever your body needs next, you already have it.
            </div>
          </div>
          <div className="valuebox">
            <div className="eye vt">The Math</div>
            <div className="row">
              <span>6 protocols individually</span>
              <span className="arch">$162</span>
            </div>
            <div className="row">
              <span>The Complete System</span>
              <span className="arch" style={{ color: "#7D9B76" }}>
                −$65
              </span>
            </div>
            <div className="tot">
              <span className="pfw" style={{ fontSize: 18, fontWeight: 700 }}>
                Your price
              </span>
              <span className="arch now">$97</span>
            </div>
            <div className="save">Save $65 — more than two protocols, free</div>
          </div>
        </div>

        {/* OFFER */}
        <div className="offer">
          <div className="offer-in">
            <div className="eye">Best Value · Save $65</div>
            <h2 style={{ marginTop: 12 }}>The Complete System</h2>
            <div
              style={{
                fontSize: 15,
                color: "#9A9590",
                marginTop: 14,
                maxWidth: 480,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              Every protocol, every plan, every recipe — whatever your body needs next, you already
              have it.
            </div>
            <div className="clist">
              {[
                "All six protocols",
                "120 recipes, tested and photographed",
                "Six 30-day meal plans",
                "Six one-page cheat sheets",
              ].map((item) => (
                <div className="cli" key={item}>
                  <span style={{ color: "#7D9B76", fontWeight: 600 }}>&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                margin: "22px auto 0",
                maxWidth: 420,
                textAlign: "left",
                background: "rgba(125,155,118,.16)",
                border: "1px solid rgba(125,155,118,.4)",
                borderLeft: "3px solid #C9A84C",
                borderRadius: 6,
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  color: "#7D9B76",
                  fontSize: 10,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                }}
              >
                Bonus — Included Free
              </div>
              <div style={{ color: "#F7F5F1", fontSize: 14.5, marginTop: 6, lineHeight: 1.6 }}>
                <b>The Complete Drinks Collection</b> — 20 functional coffees, matchas, teas and
                refreshers, each built to do a job. Yours with the system.
              </div>
            </div>
            <div className="price" style={{ justifyContent: "center" }}>
              <span className="was">$162</span>
              <span className="now" style={{ color: "#F7F5F1" }}>
                $97
              </span>
            </div>
            <div className="save">You save $65 — more than two protocols, free</div>
            <div className="cta" style={{ marginTop: 24 }}>
              <a className="gold" href={STRIPE} target="_blank" rel="noopener noreferrer">
                Get The System
              </a>
            </div>
            <div className="fine">Instant download · No subscription · Yours to keep</div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
