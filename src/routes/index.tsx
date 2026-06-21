import { createFileRoute, Link } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
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
          description: "Every protocol. Every framework. Every meal. Organized by health goal, protein target, and prep time. Yours forever.",
          image: roastedChicken.url,
          brand: { "@type": "Brand", name: "Nóurish." },
          offers: {
            "@type": "Offer",
            price: "67",
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

type Product = { title: string; desc: string; price: string; imageUrl: string; imageAlt: string; link: string; internalLink?: string };

const tier2: Product[] = [
  { title: "30 High Protein Breakfast Ideas", desc: "Start every morning with 30g+ of protein.", price: "$19", imageUrl: breakfastSkillet.url, imageAlt: "High protein breakfast skillet", link: "https://buy.stripe.com/bJe7sL5MS9JEh082hB6Vq01" },
  { title: "30 High Protein Lunch Ideas", desc: "Midday meals that keep you full till dinner.", price: "$19", imageUrl: grilledChickenBreast.url, imageAlt: "Grilled chicken breast lunch", link: "https://buy.stripe.com/00w7sL1wC3lgbFOe0j6Vq02" },
  { title: "30 High Protein Dinner Ideas", desc: "Family-tested, macro-balanced evenings.", price: "$19", imageUrl: searedSalmon.url, imageAlt: "Seared salmon dinner", link: "https://buy.stripe.com/14A14n4IO8FAh0809t6Vq03" },
  { title: "30 High Protein Smoothie Ideas", desc: "Real ingredients. Real protein. No fillers.", price: "$19", imageUrl: mangoTurmericSmoothie.url, imageAlt: "Mango turmeric smoothie", link: "https://buy.stripe.com/14A14n4IO9JE11a6xR6Vq04" },
  { title: "30 High Protein Snack Ideas", desc: "Snacks engineered for steady energy.", price: "$19", imageUrl: eggsAndTurkeyBoard.url, imageAlt: "Slate board with eggs and turkey", link: "https://buy.stripe.com/6oU14nejo7BweS04pJ6Vq05" },
  { title: "30 High Protein Dessert Ideas", desc: "Sweet, satisfying, and macro-friendly.", price: "$19", imageUrl: chocolateDessert.url, imageAlt: "High protein dessert", link: "https://buy.stripe.com/00w5kDgrwcVQ11a2hB6Vq06" },
];

const tier3: Product[] = [
  { title: "GLP-1 Nutrition Protocol", desc: "Eat to support your medication, not against it.", price: "$37", imageUrl: glp1NutritionGuide.url, imageAlt: "Balanced grilled chicken plate", link: "https://buy.stripe.com/7sYeVd3EK4pk9xGcWf6Vq07" },
  { title: "30-Day Gut Reset Protocol", desc: "30 days to a calmer, stronger gut.", price: "$37", imageUrl: fermentedKimchiBowl.url, imageAlt: "Fermented kimchi bowl", link: "https://buy.stripe.com/28EeVd3EK3lg4dme0j6Vq08", internalLink: "/gut-reset" },
  { title: "Food as Medicine System", desc: "Anti-inflammatory meals backed by science.", price: "$37", imageUrl: turmericSalmon.url, imageAlt: "Turmeric salmon plate", link: "https://buy.stripe.com/6oU3cvejo3lgcJSe0j6Vq09" },
  { title: "Real Food Reset Protocol", desc: "Strip the noise. Rebuild the basics.", price: "$37", imageUrl: realFoodReset.url, imageAlt: "Real food reset bowl", link: "https://buy.stripe.com/14A6oHb7c4pkeS009t6Vq0a" },
  { title: "Plant-Based Protein System", desc: "40g protein, zero animal products.", price: "$37", imageUrl: plantBasedBundle.url, imageAlt: "Tempeh and edamame bowl", link: "https://buy.stripe.com/8x2fZh0sy7Bw5hqbSb6Vq0b" },
];

const tier4: Product[] = [
  { title: "The $10 Meal Blueprint", desc: "Budget-friendly without sacrificing quality.", price: "$17", imageUrl: mealsUnder10.url, imageAlt: "Lentil soup", link: "https://buy.stripe.com/7sY5kDcbgcVQh083lF6Vq0c" },
  { title: "The 20-Minute Meal", desc: "Weeknight-fast, restaurant-worthy.", price: "$17", imageUrl: meals20Less.url, imageAlt: "Garlic shrimp stir fry", link: "https://buy.stripe.com/bJebJ1ejof3YeS07BV6Vq0d" },
  { title: "The Family Table: Kids-Approved Dinners", desc: "Picky-eater approved, parent approved.", price: "$17", imageUrl: familyDinners.url, imageAlt: "Sheet pan chicken dinner", link: "https://buy.stripe.com/bJe4gzejodZUeS0cWf6Vq0e" },
  { title: "Men's Performance Nutrition Blueprint", desc: "Built for muscle, heart, and metabolism.", price: "$17", imageUrl: mealsForMen40.url, imageAlt: "Ribeye steak", link: "https://buy.stripe.com/8x2fZhejo2hceS009t6Vq0f" },
  { title: "The Sunday Prep System", desc: "Cook once. Eat well all week.", price: "$17", imageUrl: mealPrepSunday.url, imageAlt: "Meal prep containers", link: "https://buy.stripe.com/00w8wPb7c8FA39i3lF6Vq0g" },
  { title: "Metabolic Reset Blueprint: 50+", desc: "Sustainable nutrition that respects your body.", price: "$17", imageUrl: weightLossAfter50.url, imageAlt: "Sea bass fillet plate", link: "https://buy.stripe.com/dRm7sL8Z43lg39icWf6Vq0h" },
];

function ProductCard({ p }: { p: Product }) {
  const image = (
    <img src={p.imageUrl} alt={p.imageAlt} className="aspect-[4/3] w-full object-cover transition-opacity group-hover:opacity-90" loading="lazy" />
  );
  const title = <h3 className="font-display text-xl font-medium leading-snug text-charcoal">{p.title}</h3>;
  return (
    <article className="group flex flex-col bg-linen">
      {p.internalLink === "/gut-reset" ? <Link to="/gut-reset">{image}</Link> : image}
      <div className="flex flex-1 flex-col p-6">
        {p.internalLink === "/gut-reset" ? <Link to="/gut-reset" className="hover:text-sage">{title}</Link> : title}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-base text-gold">{p.price}</span>
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="bg-sage px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-sage-foreground transition-all hover:bg-sage/90">
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
              180 Recipes.<br />One Complete Nutritional System.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              All 6 High Protein recipe books in one complete collection. Breakfast, Lunch, Dinner, Smoothies, Snacks, and Desserts. 180 tested recipes. One instant download. Yours forever.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground line-through">$114</span>
              <span className="text-base text-gold">$67</span>
              <span className="text-sm text-sage">(save 41%)</span>
            </div>
            <a href="https://buy.stripe.com/00wbJ11wC9JEbFO7BV6Vq00" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 bg-sage px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-sage-foreground transition-all hover:bg-sage/90">
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

        <TierHeader eyebrow="Lifestyle Frameworks" title="High-Performance Eating for Daily Life." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tier4.map((p) => <ProductCard key={p.title} p={p} />)}
        </div>
      </div>
    </SiteLayout>
  );
}

