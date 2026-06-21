import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-smoothie.png.asset.json";

export const Route = createFileRoute("/smoothies")({
  head: () => ({
    meta: [
      { title: "30 High Protein Smoothie Ideas — Nóurish." },
      { name: "description", content: "Real ingredients. Real protein. No fillers." },
      { property: "og:title", content: "30 High Protein Smoothie Ideas — Nóurish." },
      { property: "og:description", content: "Real ingredients. Real protein. No fillers." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/smoothies" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Smoothie Ideas"
      tagline="Real ingredients. Real protein. No fillers."
      body="These aren't sugary blends with a scoop of powder thrown in. These are 30 protein-forward smoothies built around whole food bases — Greek yogurt, cottage cheese, nut butters, seeds, and real fruit — engineered to hit 30g or more without the chalky aftertaste."
      price="$19"
      stripeUrl="https://buy.stripe.com/14A14n4IO9JE11a6xR6Vq04"
      imageUrl={img.url}
      imageAlt="Mango turmeric smoothie"
      inside={[
        { t: "30 Tested Smoothie Recipes", d: "Whole-food bases with no protein-powder dependency." },
        { t: "30g+ Protein Per Blend", d: "Hit your macros without the chalky aftertaste." },
        { t: "No Powder Required Options", d: "Recipes built from real food alone." },
        { t: "Prep And Freeze Instructions", d: "Batch and store for grab-and-blend mornings." },
        { t: "Ingredient Swaps", d: "Dairy-free, nut-free, and low-sugar variations." },
      ]}
      buyHeadline="Smoothies that actually do the work."
    />
  ),
});
