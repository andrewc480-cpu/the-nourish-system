import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";

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
    pillar: "Pillar 02 · Gut Health",
    title: "The 30-Day Gut Reset: Why Phase Order Changes Everything",
  },
  {
    pillar: "Pillar 03 · Metabolic Health",
    title: "The Sequencing Protocol: How Eating Order Reduces Glucose by 40%",
  },
  {
    pillar: "Pillar 04 · Cognitive Performance",
    title: "The Morning Brain Protocol: Why Your Breakfast Determines Your 3pm",
  },
  {
    pillar: "Pillar 05 · Longevity & Healthspan",
    title: "What the Blue Zones Actually Eat — And What We Got Wrong",
  },
  {
    pillar: "Pillar 06 · Hormonal Health",
    title:
      "The Mineral Trio: The Three Nutrients Your Hormones Cannot Function Without",
  },
];

function BlogPage() {
  const [showArticle, setShowArticle] = useState(false);
  return (
    <SiteLayout>
    <div style={{ background: "#F7F5F1" }}>
      {/* HERO */}
      <section
        style={{
          background: "#F7F5F1",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={eyebrowStyle}>The Nourish Journal</div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#1C1C1C",
              lineHeight: 1.1,
              margin: "20px 0 0",
              fontSize: "clamp(36px, 6vw, 56px)",
            }}
          >
            Food that works.
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>
              Explained.
            </em>
          </h1>
          <div
            style={{
              width: "40px",
              height: "2px",
              background: "#C9A84C",
              margin: "32px auto",
            }}
          />
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#9A9590",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            The science behind the system. One article per pillar. Written for
            people who want to understand their biology — not just follow a
            meal plan.
          </p>
        </div>
      </section>

      {/* SECTION 1 — FEATURED */}
      <section
        style={{
          background: "#1C1C1C",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#7D9B76",
              marginBottom: "24px",
            }}
          >
            Latest Article
          </div>
          <div
            style={{
              background: "rgba(247,245,241,0.04)",
              border: "1px solid rgba(247,245,241,0.08)",
              borderRadius: "4px",
              padding: "48px",
            }}
          >
            <div style={{ ...pillarTagStyle, marginBottom: "16px" }}>
              Pillar 01 · GLP-1 Nutrition
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#F7F5F1",
                lineHeight: 1.15,
                marginBottom: "12px",
                fontSize: "clamp(28px, 4.5vw, 40px)",
              }}
            >
              The GLP-1 Meal Prep Guide
              <br />
              <em style={{ color: "#7D9B76", fontStyle: "italic" }}>
                No One Is Talking About.
              </em>
            </h2>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "#9A9590",
                letterSpacing: "0.08em",
                marginBottom: "24px",
              }}
            >
              June 2026 · 8 min read · GLP-1 Nutrition
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#9A9590",
                maxWidth: "640px",
                lineHeight: 1.85,
                marginBottom: "32px",
              }}
            >
              One in five adults has now used a GLP-1 medication. Almost none
              of them have a meal prep system built for how their body is now
              functioning. Most GLP-1 content focuses on what to avoid. This
              guide focuses on what to build — a weekly food system engineered
              around the injection cycle, the protein imperative, and the
              fibre strategy that prevents the most common nutritional
              mistakes made on these medications.
            </p>
            <button
              type="button"
              onClick={() => {
                setShowArticle(true);
                setTimeout(() => {
                  document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
                }, 0);
              }}
              style={{
                display: "inline-block",
                background: "#C9A84C",
                color: "#1C1C1C",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                padding: "12px 28px",
                border: "none",
                cursor: "pointer",
                borderRadius: "2px",
              }}
            >
              {showArticle ? "Article Open Below" : "Read The Article"}
            </button>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "#9A9590",
                marginTop: "16px",
              }}
            >
              Part of The Nourish System · GLP-1 Nutrition Protocol
            </div>
          </div>
        </div>
      </section>

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

      {/* SECTION 3 — ARTICLE CTA */}
      <section
        style={{
          background: "#F2EDE4",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#7D9B76",
              marginBottom: "16px",
            }}
          >
            Go Deeper
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#1C1C1C",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            The full GLP-1 protocol.
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>
              20 recipes. Three windows. One system.
            </em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#3a3a3a",
              maxWidth: "480px",
              margin: "0 auto 32px",
              lineHeight: 1.8,
            }}
          >
            Everything in this article — plus 20 complete recipes, full
            ingredient guides, the five protocol principles, and a MidJourney
            photography prompt for every recipe.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/glp1"
              style={{
                background: "#1C1C1C",
                color: "#F7F5F1",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                padding: "14px 32px",
                textDecoration: "none",
                borderRadius: "2px",
                fontVariantNumeric: "lining-nums",
              }}
            >
              Get The GLP-1 Protocol — $27
            </Link>
            <Link
              to="/bundle"
              style={{
                background: "transparent",
                border: "1px solid #1C1C1C",
                color: "#1C1C1C",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
                padding: "14px 32px",
                textDecoration: "none",
                borderRadius: "2px",
                fontVariantNumeric: "lining-nums",
              }}
            >
              Get The Complete Bundle — $147
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — MORE FROM THE JOURNAL */}
      <section
        style={{
          background: "#F7F5F1",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#7D9B76",
                marginBottom: "16px",
              }}
            >
              Coming Soon
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "32px",
                fontWeight: 700,
                color: "#1C1C1C",
                lineHeight: 1.2,
              }}
            >
              Five more articles.
              <br />
              <em style={{ color: "#7D9B76", fontStyle: "italic" }}>
                One for every remaining pillar.
              </em>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {upcoming.map((c) => (
              <div
                key={c.pillar}
                style={{
                  background: "#F2EDE4",
                  borderRadius: "4px",
                  padding: "20px",
                  borderTop: "2px solid rgba(28,28,28,0.09)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  opacity: 0.6,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    background: "rgba(28,28,28,0.06)",
                    color: "#9A9590",
                    borderRadius: "12px",
                    padding: "3px 10px",
                  }}
                >
                  Coming Soon
                </span>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#C9A84C",
                  }}
                >
                  {c.pillar}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#1C1C1C",
                    lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </SiteLayout>
  );
}
