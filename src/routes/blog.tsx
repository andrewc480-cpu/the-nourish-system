import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import gutHero from "@/assets/gut-health-hero.png.asset.json";
import metabolicHero from "@/assets/metabolic-hero.png.asset.json";
import cognitiveHero from "@/assets/cognitive-hero.png.asset.json";
import longevityHero from "@/assets/longevity-hero.png.asset.json";
import hormonalHero from "@/assets/hormonal-hero.png.asset.json";
import glp1Hero from "@/assets/nourish-lib-01-glp1-v3.jpg.asset.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — The Nourish System | nóurish." },
      {
        name: "description",
        content:
          "The science behind The Nourish System. One article per pillar. Written for people who want to understand their biology — not just follow a meal plan.",
      },
      { property: "og:title", content: "Blog — The Nourish System | nóurish." },
      {
        property: "og:description",
        content:
          "The science behind The Nourish System. One article per pillar.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/blog" }],
  }),
  component: BlogPage,
});

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "0.22em",
  color: "#7D9B76",
};

const pillarTagStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "9px",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: "#C9A84C",
};

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "26px",
          fontWeight: 700,
          color: "#1C1C1C",
          margin: "48px 0 16px",
          lineHeight: 1.25,
        }}
      >
        {heading}
      </h2>
      {children}
    </>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "15px",
        fontWeight: 300,
        color: "#3a3a3a",
        lineHeight: 1.9,
        marginBottom: "24px",
        whiteSpace: "pre-line",
      }}
    >
      {children}
    </p>
  );
}

function Callout({ label, body }: { label: string; body: string }) {
  return (
    <div
      style={{
        background: "rgba(125,155,118,0.10)",
        border: "1px solid rgba(125,155,118,0.22)",
        borderRadius: "6px",
        padding: "20px 24px",
        margin: "32px 0",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "#7D9B76",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          color: "#3a3a3a",
          lineHeight: 1.8,
        }}
      >
        {body}
      </div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        borderLeft: "3px solid #7D9B76",
        padding: "16px 24px",
        background: "rgba(201,168,76,0.06)",
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "18px",
        color: "#1C1C1C",
        margin: "40px 0",
        lineHeight: 1.5,
      }}
    >
      {children}
    </blockquote>
  );
}

const upcoming = [
  {
    pillar: "Gut Health",
    title: "The 30-Day Gut Reset: Why Phase Order Changes Everything",
    blurb:
      "Remove, repair, rebuild — in that order. Skip a phase and the whole thing fails.",
    readTime: 7,
  },
  {
    pillar: "Metabolic Health",
    title: "The Sequencing Protocol: How Eating Order Reduces Glucose by 40%",
    blurb:
      "Same meal, different order, dramatically different blood sugar response.",
    readTime: 6,
  },
  {
    pillar: "Cognitive Performance",
    title: "The Morning Brain Protocol: Why Your Breakfast Determines Your 3pm",
    blurb:
      "What you eat at 7am determines whether you can think at three in the afternoon.",
    readTime: 6,
  },
  {
    pillar: "Longevity & Healthspan",
    title: "What the Blue Zones Actually Eat — And What We Got Wrong",
    blurb:
      "Not exotic. Not expensive. Boring, repeatable, and almost nobody does it.",
    readTime: 8,
  },
  {
    pillar: "Hormonal Health",
    title:
      "The Mineral Trio: The Three Nutrients Your Hormones Cannot Function Without",
    blurb:
      "Magnesium, zinc, and healthy fat — and why low-fat advice broke a generation.",
    readTime: 7,
  },
];

const UPCOMING_IMAGES: Record<string, string> = {
  "Gut Health": gutHero.url,
  "Metabolic Health": metabolicHero.url,
  "Cognitive Performance": cognitiveHero.url,
  "Longevity & Healthspan": longevityHero.url,
  "Hormonal Health": hormonalHero.url,
};

function BlogPage() {
  const [showArticle, setShowArticle] = useState(false);
  return (
    <SiteLayout>
    <div style={{ background: "#F7F5F1", color: "#1C1C1C" }}>
      <style>{`
.bhead{max-width:1100px;margin:0 auto;padding:48px 24px 10px}
.bhead h1{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em;font-size:34px;line-height:1.05;margin-top:14px}
.bhead p{font-size:16px;color:#6b6862;margin-top:18px;max-width:520px;line-height:1.6}
.beye{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#7D9B76}
.bit{font-family:'Playfair Display',serif;font-style:italic;font-weight:700;color:#7D9B76}
.bfeat{max-width:1100px;margin:32px auto 0;padding:0 24px}
.bfeat-in{display:grid;grid-template-columns:1fr;border-radius:8px;overflow:hidden;box-shadow:0 20px 50px rgba(28,28,28,.12)}
.bfimg{background-size:cover;background-position:center;min-height:220px}
.bftxt{background:#1C1C1C;padding:32px 26px;display:flex;flex-direction:column;justify-content:center}
.bftag{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#C9A84C}
.bftxt h2{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em;color:#F7F5F1;font-size:26px;line-height:1.14;margin-top:14px}
.bftxt .bfd{color:#9A9590;font-size:15px;line-height:1.7;margin-top:16px}
.bftxt .bfm{color:#6b6862;font-size:12px;margin-top:18px;letter-spacing:.05em}
.bftxt .bgold{margin-top:26px;align-self:flex-start}
.bgold{background:#C9A84C;color:#1C1C1C;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:16px 34px;border-radius:2px;text-decoration:none;display:inline-block;border:none;cursor:pointer;font-family:'DM Sans',sans-serif}
.bdark{background:#1C1C1C;color:#F7F5F1;font-size:12px;font-weight:500;letter-spacing:.13em;text-transform:uppercase;padding:16px 34px;border-radius:2px;text-decoration:none;display:inline-block}
.bmore{max-width:1100px;margin:0 auto;padding:56px 24px 30px}
.bmore h2{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em;font-size:28px}
.bpgrid{display:grid;grid-template-columns:1fr;gap:22px;margin-top:32px}
.bpc{color:#1C1C1C;background:#F2EDE4;border-radius:8px;overflow:hidden;display:block;transition:transform .3s,box-shadow .3s}
.bpc:hover{transform:translateY(-4px);box-shadow:0 16px 36px rgba(28,28,28,.12)}
.bpimg{height:180px;background-size:cover;background-position:center}
.bpb{padding:20px}
.bptag{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#C9A84C}
.bpt{font-family:'Playfair Display',serif;font-weight:600;font-size:19px;margin-top:10px;line-height:1.25}
.bpd{font-size:13.5px;color:#6b6862;margin-top:8px;line-height:1.5}
.bpm{font-size:11px;color:#9A9590;margin-top:12px;letter-spacing:.05em}
.bband{background:#F2EDE4;padding:56px 24px;text-align:center;margin-top:40px}
.bband h2{font-family:'Playfair Display',serif;font-weight:700;letter-spacing:-.015em;font-size:28px}
.bband p{color:#6b6862;font-size:16px;margin-top:14px;max-width:500px;margin-left:auto;margin-right:auto;line-height:1.6}
@media(min-width:821px){
.bhead{padding:70px 44px 10px}
.bhead h1{font-size:52px}
.bhead p{font-size:17px}
.bfeat{margin-top:44px;padding:0 44px}
.bfeat-in{grid-template-columns:1.15fr .85fr}
.bfimg{min-height:420px}
.bftxt{padding:48px 44px}
.bftxt h2{font-size:34px}
.bmore{padding:70px 44px 30px}
.bmore h2{font-size:32px}
.bpgrid{grid-template-columns:repeat(3,1fr)}
.bband{padding:70px 44px}
.bband h2{font-size:32px}
}
      `}</style>

      {/* SECTION 1 — HEAD */}
      <div className="bhead">
        <div className="beye">The Journal</div>
        <h1>
          Food that works. <span className="bit">Explained.</span>
        </h1>
        <p>
          The reasoning behind the system — written for people who'd rather
          understand what they're doing than just follow a plan.
        </p>
      </div>

      {/* SECTION 2 — FEATURED */}
      <div className="bfeat">
        <div className="bfeat-in">
          <div
            className="bfimg"
            style={{ backgroundImage: `url(${featuredImg.url})` }}
            role="img"
            aria-label="Garlic prawns with wilted spinach"
          />
          <div className="bftxt">
            <div className="bftag">GLP-1 Nutrition · Latest</div>
            <h2>The GLP-1 meal prep guide nobody's talking about.</h2>
            <div className="bfd">
              One in five adults has used a GLP-1. Almost none of them have a
              food system built for how their body now works. Here's how to
              build one around the injection cycle.
            </div>
            <div className="bfm">8 min read</div>
            <button
              type="button"
              className="bgold"
              onClick={() => {
                setShowArticle(true);
                setTimeout(() => {
                  document
                    .getElementById("article")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 0);
              }}
            >
              {showArticle ? "Article Open Below" : "Read The Article"}
            </button>
          </div>
        </div>
      </div>


      {/* SECTION 2 — FULL ARTICLE */}
      {showArticle && (
      <section
        id="article"
        style={{
          background: "#F7F5F1",
          padding: "80px 24px",
        }}
      >
        <article style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "#C9A84C",
              marginBottom: "12px",
            }}
          >
            Pillar 01 · GLP-1 Nutrition
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "36px",
              fontWeight: 700,
              color: "#1C1C1C",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            The GLP-1 Meal Prep Guide No One Is Talking About.
          </h2>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#9A9590",
              letterSpacing: "0.08em",
              marginBottom: "40px",
            }}
          >
            June 2026 · 8 min read
          </div>

          <P>
            GLP-1 medications have changed the conversation around food for
            millions of people. The appetite suppression is real. The reduced
            food noise is real. For many, the experience of simply not
            thinking about food constantly is genuinely liberating. But
            liberation from appetite is not the same as liberation from
            nutritional need — and the gap between those two things is where
            most people on GLP-1 medications quietly run into trouble.
          </P>

          <Section heading="The Problem No One Is Preparing You For">
            <P>
              When appetite disappears, eating becomes easy to neglect. Not
              intentionally — there is no decision to under-eat. The hunger
              signal simply stops arriving, and without it, meals become
              optional in a way they never were before. The scale moves. The
              results feel like success.
            </P>
            <P>
              But beneath the surface, something else is happening. Muscle
              tissue is being broken down alongside fat — because without
              adequate protein, the body has no reason to preserve it during
              rapid weight loss. Micronutrient stores are depleting. The
              metabolic foundation that will determine long-term health
              outcomes is being quietly eroded.
            </P>
            <P>
              This is not a medication problem. It is a food system problem.
              Most people on GLP-1 medications have no food system built for
              how their body is now functioning. This guide is the beginning
              of one.
            </P>
            <PullQuote>
              The primary danger of GLP-1 medications is not the medication
              itself. It is under-nutrition that masquerades as success.
            </PullQuote>
          </Section>

          <Section heading="Understanding Your Weekly Cycle">
            <P>
              Most GLP-1 medications are weekly injections. The experience of
              that week is not uniform — and your food strategy should reflect
              that reality.
            </P>
            <P>
              Days 1–2 following injection are typically the most challenging.
              The medication peaks in your system. Nausea, fatigue, and
              significantly reduced appetite are common. This is the Nausea
              Window — and it requires a completely different food approach
              than the rest of your week.
            </P>
            <P>
              Days 3–4 are the Stabilisation Window. Nausea subsides. Appetite
              returns slightly but remains suppressed. This is the moment to
              reintroduce structure deliberately — not to eat freely, but to
              rebuild protein intake with intention.
            </P>
            <P>
              Days 5–7 are the Optimisation Window — the most important
              nutritional days of your entire week. The medication level
              drops. Appetite and energy return closest to baseline. This is
              when your body can best absorb and utilise what you eat. Most
              people under-eat in this window out of habit or fear of
              disrupting their progress. That habit is the most expensive
              nutritional mistake you can make.
            </P>
            <Callout
              label="The Cycle Rule"
              body="Your food strategy on day one should look completely different from your food strategy on day six. Fighting the cycle — trying to eat the same meals across all seven days — works against the medication rather than with it. The injection cycle is a biological rhythm. Eat with it."
            />
          </Section>

          <Section heading="The Protein Imperative">
            <P>
              Every recipe in The Nourish System GLP-1 protocol is built
              around a minimum of 28 grams of protein — with a target of 35
              grams or above wherever possible. This is not arbitrary.
              Research consistently shows that 0.7–1g of protein per pound of
              body weight per day is the minimum threshold for preserving
              lean muscle during rapid weight loss.
            </P>
            <P>
              On a compressed appetite — where total daily food volume is
              significantly reduced — every single meal must carry a
              meaningful protein load. There is no room for empty calories.
              There is no room for meals that fill without building. Every
              bite has a job.
            </P>
            <P>
              The best protein sources for GLP-1 users prioritise soft
              texture, low odour, high bioavailability, and ease of
              preparation. Soft-scrambled eggs, Greek yogurt, cottage cheese,
              smoked salmon, silken tofu, white beans, and baked or poached
              fish are the foundation of every Nausea Window and Stabilisation
              Window meal in this protocol.
            </P>
            <Callout
              label="The Protein-First Rule"
              body="Eat protein before anything else on the plate at every meal, every single day. When gastric emptying is slowed and satiety arrives early, protein must reach your system before appetite disappears. If you fill up on vegetables or carbohydrates first, protein gets crowded out — and muscle pays the price."
            />
          </Section>

          <Section heading="The Fibre Strategy">
            <P>
              Standard nutrition advice says eat more fibre. On GLP-1
              medications, that advice requires precision.
            </P>
            <P>
              There are two types of fibre — soluble and insoluble — and they
              behave very differently in a stomach that is already emptying
              slowly due to medication.
            </P>
            <P>
              Insoluble fibre — the roughage in raw vegetables, bran, and
              whole wheat — adds bulk and slows transit. When gastric emptying
              is already delayed, excess insoluble fibre compounds the problem
              significantly, increasing nausea and bloating.
            </P>
            <P>
              Soluble fibre is the correct fibre type for GLP-1 users. It
              dissolves in water, forms a gel, blunts glucose absorption, and
              feeds beneficial gut bacteria without adding mechanical gastric
              load. Oats, chia seeds, cannellini beans, sweet potato,
              courgette, and avocado are the soluble fibre sources that form
              the foundation of this protocol.
            </P>
            <P>
              On Nausea Window days specifically: all fibre must be soluble.
              Reserve raw salads, cruciferous vegetables, and
              high-insoluble-fibre foods for Stabilisation and Optimisation
              windows only.
            </P>
          </Section>

          <Section heading="The Weekly Meal Prep Framework">
            <P>
              Meal prep on GLP-1 medications serves a different purpose than
              standard meal prep. It is not about saving time — it is about
              removing decision-making from the moments when eating feels
              most difficult.
            </P>
            <P>
              On injection day, you will not want to cook. You may not want
              to open the refrigerator. Having food that requires zero
              preparation — that can be eaten cold, in small amounts, with no
              sensory overwhelm — is not a convenience. It is a nutritional
              safety net.
            </P>
            <P>
              The weekly prep framework for GLP-1 users has four components.
            </P>
            <P>
              First: prepare the Nausea Window foods the day before
              injection. Overnight protein oats in a jar. Greek yogurt
              portioned into small containers. Turkey and cucumber roll-ups
              wrapped and refrigerated. These are zero-effort, zero-cooking,
              high-protein options that require nothing from you on your
              hardest days.
            </P>
            <P>
              Second: cook one batch of a soft, blended soup — butternut
              squash and cannellini bean, or bone broth congee — that can be
              reheated in 90 seconds and eaten in small amounts across days
              1 and 2.
            </P>
            <P>
              Third: on day 4 or 5, when energy returns, prepare the
              Optimisation Window meals. Roasted chicken thighs, baked
              salmon, a grain bowl with brown rice and edamame. These are
              full-nutrition meals for the days when your body can fully
              receive them.
            </P>
            <P>
              Fourth: keep a consistent stock of five ingredients that cross
              all three windows: eggs, Greek yogurt, smoked salmon,
              cannellini beans, and avocado. With these five ingredients and
              nothing else, you can meet your minimum protein target on any
              day of the week, regardless of how you feel.
            </P>
            <Callout
              label="The Five Staples"
              body="Eggs. Greek yogurt. Smoked salmon. Cannellini beans. Avocado. Stock these five ingredients every week without exception. They provide complete protein across all three cycle windows, require minimal preparation, and together cover every nutritional priority of the GLP-1 protocol."
            />
          </Section>

          <Section heading="What This Looks Like In Practice">
            <P>
              Sunday evening — the night before injection day — takes 20
              minutes of preparation.
            </P>
            <P>
              Portion four small containers of Greek yogurt. Add chia seeds
              and berries to each. Refrigerate. Prepare two jars of overnight
              protein oats. Make eight turkey and cucumber roll-ups — six for
              tomorrow, two for the day after. Blend a batch of butternut
              squash and cannellini bean soup. Refrigerate everything.
            </P>
            <P>
              Monday morning — injection day — you open the refrigerator and
              every decision has already been made. You eat what is there, in
              whatever amount feels right, whenever the window opens. The
              nutritional foundation is in place regardless of how difficult
              the day becomes.
            </P>
            <P>
              By Thursday — day 4 — you cook something warm. Something with
              structure. Poached eggs on warm cannellini beans. Savoury
              oatmeal with a poached egg. Ginger and turmeric chicken congee.
              The system rebuilds itself across the week, automatically,
              because the preparation made it possible.
            </P>
            <P>
              This is what eating with intention on GLP-1 looks like. Not
              restriction. Not perfection. A system that works with the
              medication rather than fighting it.
            </P>
          </Section>

          <P>
            The GLP-1 Nutrition Protocol in The Nourish System contains 20
            complete recipes across all three injection cycle windows — every
            one built around a minimum of 28g protein, tagged to its window,
            and designed to deliver the maximum nutritional return in the
            smallest possible volume. The full protocol also includes the
            complete injection cycle framework, the protein and fibre
            strategy guides, and the five non-negotiable protocol principles
            that make this system work.
          </P>
        </article>
      </section>
      )}

      {/* SECTION 3 — MORE FROM THE JOURNAL */}
      <div className="bmore">
        <h2>More from the journal.</h2>
        <div className="bpgrid">
          {upcoming.map((c) => (
            <div className="bpc" key={c.pillar}>
              <div
                className="bpimg"
                style={{ backgroundImage: `url(${UPCOMING_IMAGES[c.pillar]})` }}
              />
              <div className="bpb">
                <div className="bptag">{c.pillar}</div>
                <div className="bpt">{c.title}</div>
                <div className="bpd">{c.blurb}</div>
                <div className="bpm">{c.readTime} min read</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4 — CTA BAND */}
      <div className="bband">
        <div className="beye">Go deeper</div>
        <h2 style={{ marginTop: "12px" }}>The articles are the free part.</h2>
        <p>
          The protocols are where it gets specific — a 30-day meal plan, a
          cheat sheet, and 20 recipes built for your situation.
        </p>
        <div style={{ marginTop: "24px" }}>
          <Link className="bdark" to="/system">
            See The Complete System — $97
          </Link>
        </div>
      </div>

    </div>
    </SiteLayout>
  );
}
