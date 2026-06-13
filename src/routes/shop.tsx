import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import roastedChicken from "@/assets/roasted-chicken.png.asset.json";
import breakfastSkillet from "@/assets/nourish-breakfast.png.asset.json";
import grilledChickenBreast from "@/assets/nourish-lunch.png.asset.json";
import searedSalmon from "@/assets/nourish-dinner.png.asset.json";
import mangoTurmericSmoothie from "@/assets/nourish-smoothie.png.asset.json";
import eggsAndTurkeyBoard from "@/assets/nourish-snacks-v2.png.asset.json";
import chocolateDessert from "@/assets/nourish-desserts.png.asset.json";
import glp1NutritionGuide from "@/assets/glp1-nutrition-guide.png.asset.json";
import fermentedKimchiBowl from "@/assets/gut-reset-meal-plan.png.asset.json";
import turmericSalmon from "@/assets/food-as-medicine.png.asset.json";
import realFoodReset from "@/assets/11-Real-Food-Reset.png.asset.json";
import plantBasedBundle from "@/assets/12-High-Protein-Plant-Based.png.asset.json";
import mealsUnder10 from "@/assets/13-Meals-Under-10.png.asset.json";
import meals20Less from "@/assets/14-Meals-20-Less.png.asset.json";
import familyDinners from "@/assets/15-Family-Dinners-Kids-Eat.png.asset.json";
import mealsForMen40 from "@/assets/16-Meals-for-Men-Over-40.png.asset.json";
import mealPrepSunday from "@/assets/17-Meal-Prep-Sunday-Plans.png.asset.json";
import weightLossAfter50 from "@/assets/18-Meals-for-Weight-Loss-After-50.png.asset.json";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Nóurish." },
      { name: "description", content: "Recipe collections built around clear nutritional goals. Instant download, lifetime access." },
      { property: "og:title", content: "Shop — Nóurish." },
      { property: "og:description", content: "Recipe collections built around clear nutritional goals. Instant download, lifetime access." },
      { property: "og:url", content: "/shop" },
      { property: "og:image", content: roastedChicken.url },
      { name: "twitter:image", content: roastedChicken.url },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "The Complete Bundle — 180 Recipes",
          description: "Every collection, every goal, every meal. Lifetime access with free updates.",
          image: roastedChicken.url,
          brand: { "@type": "Brand", name: "Nóurish." },
          offers: {
            "@type": "Offer",
            price: "99",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "/shop",
          },
        }),
      },
    ],
  }),
  component: Shop,
});

type Product = { title: string; desc: string; price: string; imageUrl: string; imageAlt: string };

const tier2: Product[] = [
  { title: "30 High Protein Breakfast Ideas", desc: "Start every morning with 30g+ of protein.", price: "$19", imageUrl: breakfastSkillet.url, imageAlt: "High protein breakfast skillet" },
  { title: "30 High Protein Lunch Ideas", desc: "Midday meals that keep you full till dinner.", price: "$19", imageUrl: grilledChickenBreast.url, imageAlt: "Grilled chicken breast lunch" },
  { title: "30 High Protein Dinner Ideas", desc: "Family-tested, macro-balanced evenings.", price: "$19", imageUrl: searedSalmon.url, imageAlt: "Seared salmon dinner" },
  { title: "30 High Protein Smoothie Ideas", desc: "Real ingredients. Real protein. No fillers.", price: "$19", imageUrl: mangoTurmericSmoothie.url, imageAlt: "Mango turmeric smoothie" },
  { title: "30 High Protein Snack Ideas", desc: "Snacks engineered for steady energy.", price: "$19", imageUrl: eggsAndTurkeyBoard.url, imageAlt: "Slate board with eggs and turkey" },
  { title: "30 High Protein Dessert Ideas", desc: "Sweet, satisfying, and macro-friendly.", price: "$19", imageUrl: chocolateDessert.url, imageAlt: "High protein dessert" },
];

const tier3: Product[] = [
  { title: "GLP-1 Nutrition Guide", desc: "Eat to support your medication, not against it.", price: "$49", imageUrl: glp1NutritionGuide.url, imageAlt: "Balanced grilled chicken plate" },
  { title: "Gut Reset Meal Plan", desc: "21 days to a calmer, stronger gut.", price: "$39", imageUrl: fermentedKimchiBowl.url, imageAlt: "Fermented kimchi bowl" },
  { title: "Food as Medicine Collection", desc: "Anti-inflammatory meals backed by science.", price: "$44", imageUrl: turmericSalmon.url, imageAlt: "Turmeric salmon plate" },
  { title: "Real Food Reset", desc: "Strip the noise. Rebuild the basics.", price: "$34", imageUrl: realFoodReset.url, imageAlt: "Real food reset bowl" },
  { title: "High Protein Plant-Based Bundle", desc: "40g protein, zero animal products.", price: "$49", imageUrl: plantBasedBundle.url, imageAlt: "Tempeh and edamame bowl" },
];

const tier4: Product[] = [
  { title: "Meals Under $10", desc: "Budget-friendly without sacrificing quality.", price: "$24", imageUrl: mealsUnder10.url, imageAlt: "Lentil soup" },
  { title: "Meals in 20 Min or Less", desc: "Weeknight-fast, restaurant-worthy.", price: "$24", imageUrl: meals20Less.url, imageAlt: "Garlic shrimp stir fry" },
  { title: "Family Dinners Kids Eat", desc: "Picky-eater approved, parent approved.", price: "$24", imageUrl: familyDinners.url, imageAlt: "Sheet pan chicken dinner" },
  { title: "Meals for Men Over 40", desc: "Built for muscle, heart, and metabolism.", price: "$24", imageUrl: mealsForMen40.url, imageAlt: "Ribeye steak" },
  { title: "Meal Prep Sunday Plans", desc: "Cook once. Eat well all week.", price: "$24", imageUrl: mealPrepSunday.url, imageAlt: "Meal prep containers" },
  { title: "Meals for Weight Loss After 50", desc: "Sustainable nutrition that respects your body.", price: "$24", imageUrl: weightLossAfter50.url, imageAlt: "Sea bass fillet plate" },
];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col bg-linen">
      <img src={p.imageUrl} alt={p.imageAlt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium leading-snug text-charcoal">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-base text-gold">{p.price}</span>
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
      <section className="border-b border-border bg-linen">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <img src={roastedChicken.url} alt="The Complete Bundle" className="aspect-[5/6] w-full object-cover" />
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">The Complete Bundle</span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-charcoal md:text-6xl">
              180 Recipes.<br />One Library.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every collection, every goal, every meal. Lifetime access with free updates as the library grows.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-base text-gold">$99</span>
              <span className="text-sm text-muted-foreground line-through">$240</span>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-3 bg-sage px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-sage-foreground transition-all hover:bg-sage/90">
              Get the Complete Bundle →
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">
        <TierHeader eyebrow="The Protein Foundation" title="30-Day Systems for Every Meal." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tier2.map((p) => <ProductCard key={p.title} p={p} />)}
        </div>

        <TierHeader eyebrow="Targeted Protocols" title="Solutions for Specific Health Goals." />
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

