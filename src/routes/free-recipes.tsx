import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { MoodyImage } from "@/components/site/MoodyImage";
import misoSalmonBowl from "@/assets/miso-salmon-bowl.png.asset.json";
import proteinOvernightOats from "@/assets/protein-overnight-oats.png.asset.json";
import harissaChicken from "@/assets/harissa-chicken.png.asset.json";

export const Route = createFileRoute("/free-recipes")({
  head: () => ({
    meta: [
      { title: "Free Recipes — Nóurish." },
      { name: "description", content: "Six free, tested recipes. No strings attached." },
      { property: "og:title", content: "Free Recipes — Nóurish." },
      { property: "og:description", content: "Six free, tested recipes. No strings attached." },
    ],
  }),
  component: FreeRecipes,
});

type Recipe = {
  title: string;
  prep: string;
  protein: string;
  level: "Easy" | "Medium" | "Advanced";
  tone: "moody-1" | "moody-2" | "moody-3";
  image?: string;
  ingredients: string[];
  steps: string[];
};

const recipes: Recipe[] = [
  {
    title: "Miso Glazed Salmon Bowl",
    prep: "25 min", protein: "38g", level: "Easy", tone: "moody-1",
    image: misoSalmonBowl.url,
    ingredients: ["2 salmon fillets", "2 tbsp white miso", "1 tbsp maple syrup", "1 cup brown rice", "1 cup edamame", "1 avocado, sliced", "Sesame seeds, scallions"],
    steps: ["Whisk miso and maple, brush onto salmon.", "Broil 8 minutes until caramelized.", "Cook rice per package; steam edamame.", "Assemble bowls: rice, edamame, salmon, avocado.", "Top with sesame seeds and scallions."],
  },
  {
    title: "30g Protein Overnight Oats",
    prep: "5 min", protein: "32g", level: "Easy", tone: "moody-2",
    image: proteinOvernightOats.url,
    ingredients: ["1/2 cup rolled oats", "1 scoop vanilla protein powder", "1 cup milk of choice", "1 tbsp chia seeds", "1 tbsp almond butter", "1/2 cup berries"],
    steps: ["Combine oats, protein, chia, milk in a jar.", "Stir well, refrigerate overnight.", "Top with almond butter and berries before eating."],
  },
  {
    title: "Sheet Pan Harissa Chicken",
    prep: "35 min", protein: "42g", level: "Medium", tone: "moody-3",
    ingredients: ["1.5 lb chicken thighs", "2 tbsp harissa paste", "1 lemon", "2 sweet potatoes, cubed", "1 red onion, wedged", "Olive oil, salt"],
    steps: ["Heat oven to 425°F.", "Toss chicken with harissa and lemon juice.", "Toss potatoes and onion with olive oil and salt.", "Roast on a sheet pan for 30 minutes.", "Rest 5 minutes before serving."],
  },
  {
    title: "Gut-Loving Green Smoothie",
    prep: "5 min", protein: "24g", level: "Easy", tone: "moody-3",
    ingredients: ["1 cup spinach", "1 frozen banana", "1 scoop collagen", "1 cup kefir", "1 tbsp flax", "1 tsp ginger"],
    steps: ["Add all ingredients to a blender.", "Blend on high for 60 seconds.", "Pour and drink immediately."],
  },
  {
    title: "Anti-Inflammatory Lentil Stew",
    prep: "40 min", protein: "22g", level: "Medium", tone: "moody-2",
    ingredients: ["1 cup green lentils", "1 onion, diced", "2 carrots, diced", "3 cloves garlic", "1 tsp turmeric", "1 tsp cumin", "4 cups broth", "Lemon, parsley"],
    steps: ["Sauté onion, carrot, garlic until soft.", "Add spices, toast 30 seconds.", "Add lentils and broth, simmer 30 minutes.", "Finish with lemon juice and parsley."],
  },
  {
    title: "Cottage Cheese Protein Pancakes",
    prep: "15 min", protein: "35g", level: "Easy", tone: "moody-1",
    ingredients: ["1 cup cottage cheese", "3 eggs", "1/2 cup oats", "1 tsp vanilla", "1 tsp cinnamon", "Butter for pan"],
    steps: ["Blend all ingredients until smooth.", "Heat butter in a nonstick pan.", "Cook 1/4 cup portions, 2 minutes per side.", "Serve with berries and a drizzle of maple."],
  },
];

function FreeRecipes() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-linen py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">On the House</span>
          <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-charcoal md:text-6xl">
            Free Recipes — No Strings Attached.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Six of our most-loved recipes from across the Nóurish library. Tested, photographed, ready for tonight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r, i) => {
            const isOpen = open === i;
            return (
              <article key={r.title} className="flex flex-col bg-linen">
                <button onClick={() => setOpen(isOpen ? null : i)} className="text-left">
                  {r.image ? (
                    <img src={r.image} alt={r.title} className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <MoodyImage tone={r.tone} className="aspect-[4/3] w-full" />
                  )}
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-charcoal/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/70">{r.prep}</span>
                    <span className="border border-sage/40 bg-sage/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-sage">{r.protein} protein</span>
                    <span className="border border-charcoal/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/70">{r.level}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium text-charcoal">{r.title}</h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="mt-4 self-start text-xs font-semibold uppercase tracking-[0.2em] text-sage hover:underline"
                  >
                    {isOpen ? "Close recipe" : "View recipe →"}
                  </button>
                  {isOpen && (
                    <div className="mt-6 border-t border-border pt-6">
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">Ingredients</h4>
                      <ul className="mt-3 space-y-1.5 text-sm text-charcoal/90">
                        {r.ingredients.map((ing) => (
                          <li key={ing} className="flex gap-2">
                            <span className="text-sage">·</span>{ing}
                          </li>
                        ))}
                      </ul>
                      <h4 className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70">Method</h4>
                      <ol className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal/90">
                        {r.steps.map((s, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="font-display text-base text-gold">{idx + 1}.</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
