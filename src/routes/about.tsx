import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/about-v5-0.jpg.asset.json";
import splitImg from "@/assets/about-v5-1.jpg.asset.json";
import bandImg from "@/assets/about-v5-2.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Nourish System | nóurish." },
      {
        name: "description",
        content:
          "Above the diet. Below the clinic. Nourish answers one question properly: what should you eat for the situation your body is actually in.",
      },
      { property: "og:title", content: "About — The Nourish System | nóurish." },
      {
        property: "og:description",
        content:
          "Six situations, six protocols. Real food, the biology behind it, and the meals to make it real.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/about" }],
  }),
  component: AboutPage,
});

const beliefs = [
  {
    n: "01",
    h: "Specific beats general.",
    p: "“Eat healthy” is useless advice for someone in a specific situation. The right food for a struggling gut is the wrong food for stable blood sugar. Precision is the whole point.",
  },
  {
    n: "02",
    h: "Food is information.",
    p: "Every meal sends a signal to your body — hormones, blood sugar, inflammation, the bacteria in your gut. You're always sending one. The only question is whether it's the right one.",
  },
  {
    n: "03",
    h: "Explain the why.",
    p: "A plan you follow blindly ends when the plan ends. Understand why the food works and you can feed yourself for the rest of your life without us.",
  },
  {
    n: "04",
    h: "No gimmicks. Ever.",
    p: "No cleanses, no shakes, no supplements to sell you, no 30-day miracles. Just food, the reasons behind it, and the meals to make it real.",
  },
];

const nots = ["subscriptions", "supplements", "calorie counting", "miracle claims", "guilt"];

const css = `
.av5 h1,.av5 h2,.av5 h3{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em}
.av5 .eye{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#7D9B76}
.av5 .gold{background:#C9A84C;color:#1C1C1C;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:16px 34px;border-radius:2px;text-decoration:none;display:inline-block}
.av5{font-family:'DM Sans',sans-serif;background:#F7F5F1;color:#1C1C1C}
.av5 .hero{max-width:1140px;margin:0 auto;padding:40px 22px 24px;display:grid;grid-template-columns:1fr;gap:26px;align-items:center}
.av5 .hc{padding:0;max-width:none}
.av5 .hc h1{font-size:34px;line-height:1.05;color:#1C1C1C;margin-top:14px}
.av5 .hc p{font-size:16px;line-height:1.65;color:#3a3a3a;margin-top:20px;max-width:500px}
.av5 .himg{border-radius:8px;width:100%;aspect-ratio:4/5;background:url(${heroImg.url}) center/cover;box-shadow:0 20px 50px rgba(28,28,28,.14)}
.av5 .sec{max-width:1140px;margin:0 auto;padding:56px 22px}
.av5 .split{display:grid;grid-template-columns:1fr;gap:30px;align-items:center}
.av5 .copy h2{font-size:29px;line-height:1.12;margin-top:14px;text-wrap:balance}
.av5 .copy p{font-size:16px;line-height:1.8;color:#3a3a3a;margin-top:22px}
.av5 .copy p b{color:#1C1C1C;font-weight:500}
.av5 .simg{width:100%;aspect-ratio:4/5;order:-1;border-radius:8px;background:url(${splitImg.url}) center/cover;box-shadow:0 20px 50px rgba(28,28,28,.14)}
.av5 .band{height:300px;background:url(${bandImg.url}) center/cover}
.av5 .beliefs{background:#1C1C1C;padding:64px 22px}
.av5 .bin{max-width:1040px;margin:0 auto}
.av5 .bin h2{color:#F7F5F1;font-size:29px;margin-top:14px;text-align:center}
.av5 .bin .sub{color:#9A9590;text-align:center;font-size:16px;margin-top:14px;max-width:540px;margin-left:auto;margin-right:auto;line-height:1.6}
.av5 .bgrid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:50px}
.av5 .b{border-top:1px solid rgba(247,245,241,.15);padding-top:22px}
.av5 .b .bn{font-family:'Archivo',sans-serif;font-variant-numeric:tabular-nums lining-nums;font-weight:800;font-size:15px;color:#C9A84C}
.av5 .b h3{color:#F7F5F1;font-size:22px;margin-top:10px}
.av5 .b p{color:#9A9590;font-size:14.5px;line-height:1.7;margin-top:10px}
.av5 .stand{max-width:900px;margin:0 auto;padding:64px 22px;text-align:center}
.av5 .stand h2{font-size:29px;line-height:1.15}
.av5 .stand .body{font-size:16px;line-height:1.8;color:#3a3a3a;margin-top:24px;text-align:left}
.av5 .stand .body b{color:#1C1C1C;font-weight:500}
.av5 .nots{margin-top:34px;display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.av5 .not{background:#7D9B76;border-radius:20px;padding:10px 18px;font-size:13.5px;color:#F7F5F1}
.av5 .not b{color:#F7F5F1;font-weight:700}
.av5 .cta{background:#F2EDE4;padding:64px 22px;text-align:center}
.av5 .cta h2{font-size:29px;margin-top:12px}
.av5 .cta p{color:#6b6862;font-size:16px;margin-top:14px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.6}
.av5 .cta .btn{margin-top:26px}
.av5 .cta .fine{color:#9A9590;font-size:12px;margin-top:16px}
@media(min-width:821px){
.av5 .hero{grid-template-columns:1.02fr .98fr;gap:54px;padding:56px 44px 26px}
.av5 .hc h1{font-size:52px}
.av5 .hc p{font-size:17.5px}
.av5 .himg{aspect-ratio:4/5}
.av5 .sec{padding:80px 44px}
.av5 .split{grid-template-columns:1.1fr .9fr;gap:56px}
.av5 .copy h2{font-size:40px}
.av5 .copy p{font-size:17.5px}
.av5 .simg{order:0}
.av5 .beliefs{padding:84px 44px}
.av5 .bin h2{font-size:40px}
.av5 .bgrid{grid-template-columns:repeat(2,1fr);gap:30px}
.av5 .stand{padding:84px 44px}
.av5 .stand h2{font-size:38px}
.av5 .stand .body{font-size:17.5px}
.av5 .cta{padding:76px 44px}
.av5 .cta h2{font-size:36px}
}
`;

function AboutPage() {
  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="av5">
        <div className="hero">
          <div className="hc">
            <div className="eye">About Nourish</div>
            <h1>
              Above the diet.
              <br />
              Below the clinic.
            </h1>
            <p>
              Nourish sits in the gap nobody was filling — more specific than general healthy eating,
              more practical than a medical consultation.
            </p>
          </div>
          <div className="himg" />
        </div>

        <div className="sec">
          <div className="split">
            <div className="copy">
              <div className="eye">What we do</div>
              <h2>We answer one question, properly.</h2>
              <p>
                <b>What should I eat?</b> — for the situation your body is actually in right now.
              </p>
              <p>
                Not what a healthy 25-year-old should eat. Not what worked for someone on TikTok. What{" "}
                <i>you</i> should eat if you're on a GLP-1 medication, or your gut has been a mess for
                three years, or your energy dies every afternoon at three o'clock.
              </p>
              <p>
                The answers already exist. They're buried in research, locked behind expensive
                consultations, or scattered across ten thousand contradicting articles.{" "}
                <b>
                  Nourish digs them out, tests them, and hands them to you as food you can actually cook
                  tonight.
                </b>
              </p>
            </div>
            <div className="simg" />
          </div>
        </div>

        <div className="band" />

        <div className="beliefs">
          <div className="bin">
            <div className="eye" style={{ textAlign: "center" }}>
              What we believe
            </div>
            <h2>Four things we’d put in writing.</h2>
            <div className="sub">
              These aren't slogans. They're the rules we build every protocol around.
            </div>
            <div className="bgrid">
              {beliefs.map((b) => (
                <div className="b" key={b.n}>
                  <div className="bn">{b.n}</div>
                  <h3>{b.h}</h3>
                  <p>{b.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stand">
          <div className="eye">What we're not</div>
          <h2>Nourish is not a diet.</h2>
          <div className="body">
            There's no calorie counting here, no food to feel guilty about, no before-and-after photos.
            Nothing to weigh, nothing to restrict, nothing that ends on day thirty and leaves you back
            where you started.
            <br />
            <br />
            <b>It's a set of answers.</b> Six situations, six protocols. Each one tells you what to eat,
            why it works, and gives you a 30-day meal plan and the recipes to cook it. Buy it once, it's
            yours, and there's nothing to cancel.
          </div>
          <div className="nots">
            {nots.map((n) => (
              <div className="not" key={n}>
                No <b>{n}</b>
              </div>
            ))}
          </div>
        </div>

        <div className="cta">
          <div className="eye">Start here</div>
          <h2>Find your situation.</h2>
          <p>
            Six protocols, each a complete guide to one thing your body is dealing with. Take the one you
            need — or take all of them.
          </p>
          <div className="btn">
            <Link className="gold" to="/system">
              See The Complete System — $97
            </Link>
          </div>
          <div className="fine">Or start with one protocol for $27</div>
        </div>
      </div>
    </SiteLayout>
  );
}
