import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { MoodyImage } from "@/components/site/MoodyImage";
import glp1MealPrep from "@/assets/glp1-meal-prep.png.asset.json";
import fiberBeforeNoon from "@/assets/fiber-before-noon.png.asset.json";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Nóurish." },
      { name: "description", content: "Essays on protein, gut health, GLP-1, and food as medicine." },
      { property: "og:title", content: "Journal — Nóurish." },
      { property: "og:description", content: "Essays on protein, gut health, GLP-1, and food as medicine." },
    ],
  }),
  component: Blog,
});

const posts = [
  { cat: "GLP-1", title: "The GLP-1 Meal Prep Guide No One Is Talking About", read: "8 min", tone: "moody-3" as const },
  { cat: "Gut Health", title: "30g Fiber Before Noon: The Gut Health Rule That Actually Works", read: "6 min", tone: "moody-1" as const, image: fiberBeforeNoon.url },
  { cat: "GLP-1", title: "What to Eat the Week After Starting Ozempic", read: "10 min", tone: "moody-2" as const },
  { cat: "Food as Medicine", title: "10 Anti-Inflammatory Dinners Under 30 Minutes", read: "5 min", tone: "moody-3" as const },
  { cat: "High Protein", title: "The 40g Breakfast: Why Your Morning Macros Matter Most", read: "7 min", tone: "moody-1" as const },
  { cat: "Meal Prep", title: "Sunday Strategy: The Three-Container System We Swear By", read: "6 min", tone: "moody-2" as const },
  { cat: "Clean Eating", title: "How to Read a Nutrition Label Without Falling for It", read: "9 min", tone: "moody-1" as const },
  { cat: "Gut Health", title: "Fermented Foods, Ranked by Someone Who Actually Eats Them", read: "5 min", tone: "moody-3" as const },
];

function Blog() {
  const [hero, ...rest] = posts;
  return (
    <SiteLayout>
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">The Journal</span>
          <h1 className="mt-3 font-display text-5xl font-medium text-charcoal md:text-6xl">
            Field notes on better eating.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Featured */}
        <a href="#" className="group mb-20 grid gap-10 md:grid-cols-2 md:items-center">
          <img src={glp1MealPrep.url} alt={hero.title} className="aspect-[4/3] w-full object-cover" />
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">{hero.cat}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-charcoal transition-colors group-hover:text-sage md:text-5xl">
              {hero.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              An honest look at how to plan your week of meals around medication, satiety windows, and protein targets — without losing the joy of cooking.
            </p>
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-charcoal/60">{hero.read} read</div>
          </div>
        </a>

        {/* Grid */}
        <div className="grid gap-x-8 gap-y-14 border-t border-border pt-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <a key={p.title} href="#" className="group block">
              {"image" in p && p.image ? (
                <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" />
              ) : (
                <MoodyImage tone={p.tone} className="aspect-[4/3] w-full" />
              )}
              <div className="mt-5">
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-sage">{p.cat}</span>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug text-charcoal transition-colors group-hover:text-sage">
                  {p.title}
                </h3>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-charcoal/50">{p.read} read</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
