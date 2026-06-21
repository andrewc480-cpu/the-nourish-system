import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import salmonImage from "@/assets/gut-reset-salmon-fennel.png.asset.json";
import risottoImage from "@/assets/gut-reset-mushroom-risotto.png.asset.json";

const STRIPE_URL = "https://buy.stripe.com/28EeVd3EK3lg4dme0j6Vq08";

export const Route = createFileRoute("/gut-reset")({
  head: () => ({
    meta: [
      { title: "30-Day Gut Reset Protocol — Nóurish." },
      { name: "description", content: "A clinically-informed, food-sequenced 30-day system that respects the biology of the gut microbiome." },
      { property: "og:title", content: "30-Day Gut Reset Protocol — Nóurish." },
      { property: "og:description", content: "Thirty days. Three phases. One protocol." },
      { property: "og:image", content: salmonImage.url },
      { name: "twitter:image", content: salmonImage.url },
    ],
    links: [{ rel: "canonical", href: "/gut-reset" }],
  }),
  component: GutReset,
});

const symptoms = [
  { title: "Bloating", desc: "After meals, by mid-afternoon, by evening — your stomach feels distended even when you've eaten carefully." },
  { title: "Brain Fog", desc: "The mental sharpness drifts. Word recall, focus, and clarity all dull through the day." },
  { title: "Low Energy After Meals", desc: "Eating leaves you flat instead of fuelled. The post-meal slump is the rule, not the exception." },
  { title: "Irregularity", desc: "Digestion that's unpredictable — either sluggish, urgent, or both in the same week." },
];

const principles = [
  { n: "01", t: "Elimination First", d: "You cannot build a healthy microbiome in a hostile environment. Remove before you restore. Phase 1 is non-negotiable." },
  { n: "02", t: "Fibre Sequencing", d: "Soluble fibre first. Insoluble after Day 10. High-inulin foods only in Phase 3. The order matters more than the amount." },
  { n: "03", t: "Fermented Foods", d: "One fermented food at every meal from Day 5 onward. Live cultures in food outperform supplements. Kimchi contains 30–40 bacterial strains. A probiotic capsule contains 3–10." },
  { n: "04", t: "Gut Hydration", d: "2.5 litres minimum daily. The gut lining is 98% water. Dehydration is a direct barrier to repair. Add 500ml on high fermented food days." },
  { n: "05", t: "Gut Disruptors", d: "Six categories eliminated for the full 30 days — refined sugar, alcohol, ultra-processed foods, seed oils, gluten, and conventional dairy." },
  { n: "06", t: "Plant Diversity", d: "30 different plant foods per week by Day 21. The American Gut Project found that people eating 30+ different plants per week have significantly more diverse microbiomes." },
];

const phases = [
  { n: "Phase 1", t: "Remove", days: "Days 1–10", d: "Eliminate gut disruptors. Stabilise the environment. Remove ultra-processed foods, refined sugar, alcohol, and seed oils. Introduce bone broth, fermented vegetables, and anti-inflammatory foods to begin healing the gut lining." },
  { n: "Phase 2", t: "Repair", days: "Days 11–20", d: "Rebuild the gut lining. Introduce strategic diversity. Reintroduce soluble fibre in sequence. Add fermented foods systematically. Introduce prebiotic-rich ingredients that feed the beneficial bacteria now establishing in a cleaner environment." },
  { n: "Phase 3", t: "Rebuild", days: "Days 21–30", d: "Expand microbiome diversity. Lock in the new baseline. Maximum dietary diversity — 30+ different plant foods across the week. High-inulin prebiotic foods, diverse legumes, resistant starch, and the protocol's most complex recipes." },
];

const checklist = [
  "You've tried probiotics, fibre supplements, and elimination diets — and the bloating always comes back",
  "You experience brain fog, low energy after meals, or irregular digestion with no clear explanation",
  "You're on a GLP-1 medication and need targeted gut support alongside your protocol",
  "You want to reset your gut after a period of poor eating, antibiotics, stress, or illness",
  "You're done with vague advice and ready for a structured, sequenced system that addresses root cause.",
];

const inside = [
  { t: "The Protocol Brief", d: "The science behind the system. Why your gut is disrupted, what's actually happening, and why this approach works when generic advice doesn't." },
  { t: "6 Core Principles", d: "The non-negotiable operating rules that govern all 30 days. Understand why each rule exists and every food decision becomes easier." },
  { t: "30-Day Framework", d: "A phase-by-phase day-by-day meal framework. Every decision made in advance so the system runs without willpower." },
  { t: "20 Phase-Tagged Recipes", d: "Each recipe engineered for a specific phase, tagged accordingly, and assigned to specific days. Remove, Repair, and Rebuild recipes across two volumes." },
];

const related = [
  { t: "GLP-1 Nutrition Protocol", to: "/glp-1-protocol", price: "$37" },
  { t: "Food as Medicine System", to: "/food-as-medicine", price: "$37" },
  { t: "Plant-Based Protein System", to: "/plant-protein", price: "$37" },
];

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

function Eyebrow({ children, color = SAGE }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-sans text-xs font-medium uppercase tracking-[0.3em]" style={{ color }}>
      {children}
    </span>
  );
}

function GutReset() {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: BG, color: TEXT }}>
        {/* HERO */}
        <section className="grid md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden">
            <img src={salmonImage.url} alt="Baked salmon with fennel and dill" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20">
            <Eyebrow>Targeted Protocol</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] md:text-6xl" style={{ color: TEXT }}>
              30-Day Gut Reset Protocol
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: TEXT }}>
              Your gut is trying to tell you something. The bloating, brain fog, and exhaustion aren't the problem — they're the signal. This is a 30-day structured protocol built to fix what's underneath.
            </p>
            <div className="mt-8 font-sans text-3xl" style={{ color: GOLD, fontWeight: 300 }}>$37</div>
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-3 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, color: BG }}
            >
              Get Instant Access
            </a>
            <p className="mt-5 font-sans text-xs" style={{ color: MUTED }}>
              Instant digital download · Yours forever
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ backgroundColor: TEXT }}>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4">
            {[
              { n: "30", l: "Days" },
              { n: "3", l: "Phases" },
              { n: "20", l: "Recipes" },
              { n: "1", l: "Protocol" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-5xl font-medium" style={{ color: GOLD }}>{s.n}</div>
                <div className="mt-3 font-sans text-xs uppercase tracking-[0.25em]" style={{ color: MUTED }}>{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* THE PROBLEM */}
        <section style={{ backgroundColor: LINEN }}>
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2">
            <div>
              <Eyebrow>The Problem</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Your gut is trying to tell you something.
              </h2>
              <p className="mt-6 text-base leading-relaxed">
                If you've tried eating more fibre, reducing stress, or taking a probiotic — and the bloating came back, the energy never restored, the brain fog never lifted — here's why: generic advice treats symptoms as though they are the condition. They're not.
              </p>
              <blockquote
                className="mt-8 pl-5 font-display text-lg italic leading-relaxed"
                style={{ borderLeft: `3px solid ${GOLD}`, color: TEXT }}
              >
                Your gut microbiome is home to 38 trillion bacteria. When that ecosystem is out of balance, everything downstream — digestion, immunity, mood, energy — goes with it.
              </blockquote>
            </div>
            <div className="space-y-8">
              {symptoms.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: SAGE }} />
                  <div>
                    <h3 className="font-display text-xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE SYSTEM */}
        <section style={{ backgroundColor: BG }}>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <Eyebrow>The System</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Thirty days. Three phases. One protocol.
              </h2>
              <p className="mt-6 text-base leading-relaxed" style={{ color: MUTED }}>
                Not a cleanse. Not an elimination diet with a vague reintroduction phase. A clinically-informed, food-sequenced 30-day system that works because it respects the biology of the gut microbiome.
              </p>
            </div>
            <div className="mt-16 grid border md:grid-cols-3" style={{ borderColor: "rgba(28,28,28,0.12)" }}>
              {phases.map((p, i) => (
                <div
                  key={p.n}
                  className="p-10"
                  style={{
                    borderLeft: i > 0 ? "1px solid rgba(28,28,28,0.12)" : undefined,
                  }}
                >
                  <Eyebrow>{p.n}</Eyebrow>
                  <h3 className="mt-3 font-display text-3xl font-medium">{p.t}</h3>
                  <div className="mt-2 font-sans text-xs uppercase tracking-[0.2em]" style={{ color: MUTED }}>{p.days}</div>
                  <p className="mt-6 text-sm leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section style={{ backgroundColor: LINEN }}>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <Eyebrow>Core Principles</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Six rules that govern all thirty days.
              </h2>
              <p className="mt-6 text-base leading-relaxed" style={{ color: MUTED }}>
                These are not suggestions. They are the operating logic of a functioning gut reset.
              </p>
            </div>
            <div className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: "rgba(28,28,28,0.12)" }}>
              {principles.map((p) => (
                <div key={p.n} className="p-8" style={{ backgroundColor: LINEN }}>
                  <div className="font-display text-2xl font-medium" style={{ color: GOLD }}>{p.n}</div>
                  <h3 className="mt-3 font-display text-xl font-medium">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: TEXT }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S BUILT FOR */}
        <section style={{ backgroundColor: BG }}>
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
            <div>
              <Eyebrow>Who It's Built For</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                This protocol is for you if —
              </h2>
              <ul className="mt-10 space-y-5">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs"
                      style={{ backgroundColor: SAGE, color: BG }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={risottoImage.url} alt="Wild mushroom and barley risotto" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ backgroundColor: TEXT }}>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <Eyebrow color={GOLD}>What's Inside</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: BG }}>
                Everything you need. Nothing you don't.
              </h2>
            </div>
            <div className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "rgba(247,245,241,0.15)" }}>
              {inside.map((c) => (
                <div key={c.t} className="p-8" style={{ backgroundColor: TEXT }}>
                  <h3 className="font-display text-xl font-medium" style={{ color: BG }}>{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUY BLOCK */}
        <section style={{ backgroundColor: BG }}>
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Eyebrow>Get The Protocol</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              By Day 30, you will not just feel better. You will have built a different gut.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed" style={{ color: MUTED }}>
              One structured, sequenced 30-day system — backed by science, delivered through food.
            </p>
            <div className="mt-8 font-sans text-4xl" style={{ color: GOLD, fontWeight: 300 }}>$37</div>
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-10 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, color: BG }}
            >
              Get Instant Access — $37
            </a>
            <p className="mt-6 font-sans text-xs" style={{ color: MUTED }}>
              Instant digital download · Yours forever · One-time purchase · No subscription.
            </p>
          </div>
        </section>

        {/* YOU MIGHT ALSO LIKE */}
        <section style={{ backgroundColor: LINEN }}>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <Eyebrow>You Might Also Like</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              More targeted protocols.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <a
                  key={r.t}
                  href={r.to}
                  className="block p-8 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: BG }}
                >
                  <h3 className="font-display text-2xl font-medium">{r.t}</h3>
                  <div className="mt-6 font-sans text-2xl" style={{ color: GOLD, fontWeight: 300 }}>{r.price}</div>
                  <div className="mt-4 font-sans text-xs uppercase tracking-[0.2em]" style={{ color: SAGE }}>
                    View Protocol →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: TEXT }}>
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <div className="font-display text-3xl font-medium" style={{ color: BG }}>
              nóurish<span style={{ color: GOLD }}>.</span>
            </div>
            <p className="mt-3 font-sans text-sm" style={{ color: MUTED }}>
              Eat Well. Every Single Day.
            </p>
            <p className="mt-8 font-sans text-xs" style={{ color: MUTED }}>
              © 2026 Nóurish. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </SiteLayout>
  );
}
