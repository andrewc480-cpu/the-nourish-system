import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Nourish System | nóurish." },
      {
        name: "description",
        content:
          "A food-first biological optimization methodology for people who want to understand their biology — not just follow a meal plan.",
      },
      { property: "og:title", content: "About — The Nourish System | nóurish." },
      {
        property: "og:description",
        content:
          "Above the diet. Below the clinic. The story, philosophy, and methodology behind The Nourish System.",
      },
      { property: "og:url", content: "https://thenourishsystem.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://thenourishsystem.com/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { num: "01", name: "GLP-1 Nutrition", promise: "Eat to protect muscle and stabilise energy.", href: "/glp1" },
  { num: "02", name: "Gut Health", promise: "Restore the gut. Everything downstream follows.", href: "/gut-health" },
  { num: "03", name: "Metabolic Health", promise: "Stable blood sugar is the foundation of everything.", href: "/metabolic-health" },
  { num: "04", name: "Cognitive Performance", promise: "What you eat at 7am determines how you think at 3pm.", href: "/cognitive-performance" },
  { num: "05", name: "Longevity & Healthspan", promise: "The food choices you make today compound over decades.", href: "/longevity" },
  { num: "06", name: "Hormonal Health", promise: "Hormones are not an aging issue. They are a food issue.", href: "/hormonal-health" },
] as const;

const brandValues = [
  { label: "Positioning", value: "Above the diet. Below the clinic." },
  { label: "Method", value: "Food-first biological optimization." },
  { label: "Approach", value: "Education before instruction." },
  { label: "Promise", value: "Real food. Real biology. No restriction." },
];

const missionPillars = [
  { label: "Education First", body: "Every protocol begins with the biology. Understanding why food works the way it does is not supplementary information. It is the foundation of every sustainable food change ever made." },
  { label: "Food First. Always.", body: "The Nourish System does not recommend supplements, powders, or products. It recommends food — whole, real, recognisable food — prepared with intention and understanding. The plate is the protocol." },
  { label: "No Restriction. No Rules.", body: "This is not a diet. There are no forbidden foods, no calorie targets, no macros to track. There is only the understanding that every meal is an opportunity — and the system that helps you use it well." },
];

const brandStandards = [
  { label: "Visual Identity", title: "Premium & Purposeful", body: "Warm White. Deep Charcoal. Sage Green. Warm Gold. Playfair Display headlines. DM Sans body. A visual identity built to feel like a high-end wellness editorial — not a fitness brand." },
  { label: "Content Standard", title: "Science-Backed, Beautifully Written", body: "Every headnote explains the biological mechanism. Every article goes beyond the advice to explain the reason. The standard is: if it cannot be explained, it does not belong in the system." },
  { label: "Recipe Standard", title: "28g Protein Minimum. Always.", body: "Every recipe in every protocol meets a minimum of 28 grams of protein. Every recipe is tagged to a biological signal. Every recipe includes a MidJourney photography prompt for consistent visual content creation." },
  { label: "Positioning", title: "Above the Diet. Below the Clinic.", body: "Premium enough to feel authoritative. Practical enough to use on a Tuesday night. The space between the wellness influencer and the functional medicine practitioner — and more useful than either." },
];

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, color: "#3a3a3a", lineHeight: 1.9, marginBottom: "24px" }}>
      {children}
    </p>
  );
}

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{ background: "#1C1C1C", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.22em", color: "#7D9B76" }}>
            The Nourish System
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#F7F5F1", lineHeight: 1.1, margin: "20px 0 28px", fontSize: "clamp(36px, 6vw, 56px)" }}>
            Above the diet.
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>Below the clinic.</em>
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "18px", color: "#9A9590", maxWidth: "520px", margin: "0 auto 36px", lineHeight: 1.5 }}>
            A food-first biological optimization methodology for people who want to understand their biology — not just follow a meal plan.
          </p>
          <div style={{ width: "1px", height: "48px", background: "#C9A84C", opacity: 0.5, margin: "0 auto" }} />
        </div>
      </section>

      {/* SECTION 1 — BRAND STORY */}
      <section style={{ background: "#F7F5F1", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 55fr) minmax(0, 45fr)", gap: "56px", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
              The Philosophy
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#1C1C1C", lineHeight: 1.15, margin: "16px 0 0" }}>
              Food is information.
              <br />
              <em style={{ color: "#7D9B76", fontStyle: "italic" }}>Every meal sends a signal.</em>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#C9A84C", margin: "28px 0" }} />
            <P>
              The wellness industry has spent decades teaching people to think about food in terms of restriction — what to cut, what to avoid, what to count. The result is a population that is more confused about eating than at any point in human history, despite having access to more nutritional information than ever before. The Nourish System was built on a different premise entirely. Food is not the enemy. Food is not a reward. Food is biological information — and every meal you eat sends a direct signal to six critical systems inside your body.
            </P>
            <P>
              Most people are sending mixed signals without knowing it. They eat in ways that are working against their gut while trying to help their metabolism. They optimise for energy at the expense of hormonal balance. They chase short-term satiety while accelerating long-term cellular aging. Not because they are making bad choices — because they do not have a system. The Nourish System gives you that system. Built around six biological pillars — six systems that food directly controls — and organised so that you can enter through the topic that matters most to you right now, then build outward into the complete methodology over time.
            </P>
            <P>
              This is not a diet. It does not restrict food groups, assign point values, mandate fasting windows, or promise a number on a scale. It does not require supplements, powders, or any product beyond whole food. It is a methodology — a way of understanding and using food — that works within your life as it actually exists. Above the diet. Below the clinic. Practical enough to use on a Tuesday night. Authoritative enough to trust for the long term.
            </P>
          </div>

          {/* Brand identity block */}
          <div style={{ background: "#F2EDE4", borderRadius: "4px", padding: "40px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", fontWeight: 700, color: "#1C1C1C" }}>
              nóurish<span style={{ color: "#C9A84C" }}>.</span>
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "15px", color: "#9A9590", marginBottom: "32px" }}>
              Eat Well. Every Single Day.
            </div>
            <div style={{ width: "1px", height: "40px", background: "#C9A84C", opacity: 0.4, margin: "0 auto 32px" }} />
            <div>
              {brandValues.map((v, i) => (
                <div key={v.label} style={{ padding: "16px 0", borderTop: i === 0 ? "none" : "1px solid rgba(28,28,28,0.08)" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9A9590", marginBottom: "4px" }}>
                    {v.label}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 600, color: "#1C1C1C" }}>
                    {v.value}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#9A9590", marginTop: "24px" }}>
              thenourishsystem.com
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SIX PILLARS */}
      <section style={{ background: "#F2EDE4", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
            The Methodology
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#1C1C1C", lineHeight: 1.2, margin: "16px 0 24px" }}>
            Six biological systems.
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>All controlled by food.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, color: "#3a3a3a", maxWidth: "600px", lineHeight: 1.85, marginBottom: "48px" }}>
            The Nourish System is organized around one central truth: every chronic health complaint — low energy, hormonal disruption, cognitive decline, gut dysfunction, metabolic confusion — shares a common root. The food you eat either supports or undermines the biological systems that control all of it. These six pillars are not six separate topics. They are six interconnected systems. Improve one, and the others follow. The system is designed to be entered anywhere — and followed everywhere.
          </p>
          <div>
            {pillars.map((p) => (
              <div key={p.num} style={{ padding: "20px 0", borderBottom: "1px solid rgba(28,28,28,0.09)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: "1 1 280px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "48px", fontWeight: 700, color: "rgba(28,28,28,0.07)", lineHeight: 1 }}>
                    {p.num}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#1C1C1C" }}>
                    {p.name}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: "1 1 280px", justifyContent: "flex-end", flexWrap: "wrap" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9A9590", fontStyle: "italic" }}>
                    {p.promise}
                  </div>
                  <Link to={p.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#7D9B76", textDecoration: "none", whiteSpace: "nowrap" }}>
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BRAND FACE */}
      <section style={{ background: "#F7F5F1", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 45fr) minmax(0, 55fr)", gap: "56px", alignItems: "start" }}>
          <div style={{ background: "#F2EDE4", borderRadius: "4px", aspectRatio: "4 / 5", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9A9590" }}>
              Brand Image
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
              Living The System
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#1C1C1C", lineHeight: 1.2, margin: "16px 0 0" }}>
              Not a diet expert.
              <br />
              <em style={{ color: "#7D9B76", fontStyle: "italic" }}>Someone who did the research.</em>
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#C9A84C", margin: "24px 0" }} />
            <P>
              The Nourish System was not built in a laboratory or a clinic. It was built in a kitchen — by someone who got frustrated with the gap between what the science says and what the wellness industry was actually teaching. The biology was always there. The research existed. The evidence on gut health, metabolic function, hormonal nutrition, and cognitive performance was robust and consistent. What was missing was a practical, beautiful, food-first system that made it accessible for real people eating real food on a real Tuesday night.
            </P>
            <P>
              The face of this brand is an educated woman in her 30s who has done the reading, tested the protocols on herself, and translated the science into a methodology that works in ordinary life. She is not a doctor, a dietitian, or a fitness influencer. She is the person who sits between all three — authoritative enough to be trusted, relatable enough to be followed, and honest enough to explain both what works and why.
            </P>
            <P>
              The Nourish System exists because that person could not find the resource she needed. So she built it. And made it available to anyone who is ready to stop guessing about food and start understanding it.
            </P>
          </div>
        </div>
      </section>

      {/* SECTION 4 — METHODOLOGY STATEMENT */}
      <section style={{ background: "#1C1C1C", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
            The Mission
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, color: "#F7F5F1", lineHeight: 1.15, maxWidth: "640px", margin: "16px auto 48px" }}>
            To redefine what food can do — by teaching people what food actually does.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", textAlign: "left" }}>
            {missionPillars.map((m) => (
              <div key={m.label} style={{ background: "rgba(247,245,241,0.04)", border: "1px solid rgba(247,245,241,0.08)", borderRadius: "4px", padding: "28px" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#7D9B76", marginBottom: "12px" }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9A9590", lineHeight: 1.75 }}>
                  {m.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — BRAND STANDARDS */}
      <section style={{ background: "#F2EDE4", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
            The Brand
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 32px)", fontWeight: 700, color: "#1C1C1C", lineHeight: 1.2, margin: "16px 0 40px" }}>
            Built to a standard.
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>Not to a trend.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {brandStandards.map((s) => (
              <div key={s.title} style={{ background: "#F7F5F1", borderRadius: "4px", padding: "24px", borderTop: "2px solid #7D9B76" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9A9590", marginBottom: "8px" }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 600, color: "#1C1C1C", marginBottom: "12px" }}>
                  {s.title}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#3a3a3a", lineHeight: 1.75 }}>
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section style={{ background: "#F7F5F1", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#7D9B76" }}>
            Start Here
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 700, color: "#1C1C1C", lineHeight: 1.15, margin: "16px 0 20px" }}>
            Ready to understand
            <br />
            <em style={{ color: "#7D9B76", fontStyle: "italic" }}>what food is actually doing?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 300, color: "#3a3a3a", maxWidth: "480px", margin: "0 auto 48px", lineHeight: 1.85 }}>
            Start with the flagship to understand the complete system. Or go directly to the pillar that speaks most directly to where you are right now. Either way, the system meets you there.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", textAlign: "center" }}>
            <div style={{ background: "#F2EDE4", borderRadius: "4px", padding: "24px", borderTop: "2px solid #7D9B76", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1C1C1C" }}>Try It Free</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9A9590", lineHeight: 1.7, flex: 1 }}>
                Six complete recipes. One per pillar. No email required.
              </div>
              <Link to="/free-recipes" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "#7D9B76", textDecoration: "none" }}>
                Free Recipes →
              </Link>
            </div>
            <div style={{ background: "#1C1C1C", borderRadius: "4px", padding: "24px", borderTop: "2px solid #1C1C1C", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#F7F5F1" }}>The Flagship</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9A9590", lineHeight: 1.7, flex: 1 }}>
                The complete Nourish System methodology. 120 recipes. Seven sections.
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 300, color: "#C9A84C", fontVariantNumeric: "lining-nums" }}>$47</div>
              <Link to="/system" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "#7D9B76", textDecoration: "none" }}>
                Get The System →
              </Link>
            </div>
            <div style={{ background: "#F2EDE4", borderRadius: "4px", padding: "24px", borderTop: "2px solid #C9A84C", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#1C1C1C" }}>The Complete Bundle</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 300, color: "#9A9590", lineHeight: 1.7, flex: 1 }}>
                All seven books. Save $62 versus buying individually.
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "22px", fontWeight: 300, color: "#C9A84C", fontVariantNumeric: "lining-nums" }}>$147</div>
              <Link to="/bundle" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, color: "#7D9B76", textDecoration: "none" }}>
                Get Everything →
              </Link>
            </div>
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#9A9590", marginTop: "32px" }}>
            nóurish. · Eat Well. Every Single Day. · thenourishsystem.com
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
