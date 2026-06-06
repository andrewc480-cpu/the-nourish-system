import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { MoodyImage } from "@/components/site/MoodyImage";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Nóurish." },
      { name: "description", content: "Recipe collections built around clear nutritional goals. Instant download, lifetime access." },
      { property: "og:title", content: "Shop — Nóurish." },
      { property: "og:description", content: "Recipe collections built around clear nutritional goals." },
    ],
  }),
  component: Shop,
});

type Product = { title: string; desc: string; price: string; tone: "moody-1" | "moody-2" | "moody-3" };

const tier2: Product[] = [
  { title: "30 High Protein Breakfast Ideas", desc: "Start every morning with 30g+ of protein.", price: "$19.99", tone: "moody-1" },
  { title: "30 High Protein Lunch Ideas", desc: "Midday meals that keep you full till dinner.", price: "$19.99", tone: "moody-2" },
  { title: "30 High Protein Dinner Ideas", desc: "Family-tested, macro-balanced evenings.", price: "$19.99", tone: "moody-3" },
  { title: "30 High Protein Smoothie Ideas", desc: "Real ingredients. Real protein. No fillers.", price: "$19.99", tone: "moody-2" },
  { title: "30 High Protein Snack Ideas", desc: "Snacks engineered for steady energy.", price: "$19.99", tone: "moody-1" },
  { title: "30 High Protein Dessert Ideas", desc: "Sweet, satisfying, and macro-friendly.", price: "$19.99", tone: "moody-3" },
];

const tier3: Product[] = [
  { title: "GLP-1 Nutrition Guide", desc: "Eat to support your medication, not against it.", price: "$49", tone: "moody-3" },
  { title: "Gut Reset Meal Plan", desc: "21 days to a calmer, stronger gut.", price: "$39", tone: "moody-1" },
  { title: "Food as Medicine Collection", desc: "Anti-inflammatory meals backed by science.", price: "$44", tone: "moody-2" },
  { title: "Real Food Reset", desc: "Strip the noise. Rebuild the basics.", price: "$34", tone: "moody-1" },
  { title: "High Protein Plant-Based Bundle", desc: "40g protein, zero animal products.", price: "$49", tone: "moody-3" },
];

const tier4: Product[] = [
  { title: "Meals Under $10", desc: "Budget-friendly without sacrificing quality.", price: "$24.99", tone: "moody-2" },
  { title: "Meals in 20 Min or Less", desc: "Weeknight-fast, restaurant-worthy.", price: "$24.99", tone: "moody-1" },
  { title: "Family Dinners Kids Eat", desc: "Picky-eater approved, parent approved.", price: "$24.99", tone: "moody-3" },
  { title: "Meals for Men Over 40", desc: "Built for muscle, heart, and metabolism.", price: "$24.99", tone: "moody-2" },
  { title: "Meal Prep Sunday Plans", desc: "Cook once. Eat well all week.", price: "$24.99", tone: "moody-1" },
  { title: "Meals for Weight Loss After 50", desc: "Sustainable nutrition that respects your body.", price: "$24.99", tone: "moody-3" },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col bg-linen">
      <MoodyImage tone={p.tone} className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-charcoal">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-display text-2xl font-medium text-gold">{p.price}</span>
          <a href="#" className="bg-sage px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-sage-foreground transition-all hover:bg-sage/90">
            Get Instant Access
          </a>
        </div>
      </div>
    </article>
  );
}

function TierHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 mt-20 border-b border-border pb-6">
      <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-medium text-charcoal md:text-4xl">{title}</h2>
    </div>
  );
}

function Shop() {
  return (
    <SiteLayout>
      {/* Hero product */}
      <section className="border-b border-border bg-linen">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <MoodyImage tone="moody-1" className="aspect-[5/6] w-full" label="Bundle" />
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">The Complete Bundle</span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-charcoal md:text-6xl">
              180 Recipes.<br />One Library.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every collection, every goal, every meal. Lifetime access with free updates as the library grows.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-5xl font-medium text-gold">$99.99</span>
              <span className="text-sm text-muted-foreground line-through">$240</span>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-3 bg-sage px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-sage-foreground transition-all hover:bg-sage/90">
              Get the Complete Bundle →
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <TierHeader eyebrow="High Protein Series" title="30 Ideas, every meal." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tier2.map((p) => <ProductCard key={p.title} p={p} />)}
        </div>

        <TierHeader eyebrow="Specialty Collections" title="Built around a goal." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tier3.map((p) => <ProductCard key={p.title} p={p} />)}
        </div>

        <TierHeader eyebrow="Lifestyle Series" title="Meals for how you live." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tier4.map((p) => <ProductCard key={p.title} p={p} />)}
        </div>
      </div>
    </SiteLayout>
  );
}
