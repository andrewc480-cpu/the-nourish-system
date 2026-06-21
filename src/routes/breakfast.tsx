import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-breakfast.png.asset.json";

export const Route = createFileRoute("/breakfast")({
  head: () => ({
    meta: [
      { title: "30 High Protein Breakfast Ideas — Nóurish." },
      { name: "description", content: "Start every morning with 30g+ of protein." },
      { property: "og:title", content: "30 High Protein Breakfast Ideas — Nóurish." },
      { property: "og:description", content: "Start every morning with 30g+ of protein." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/breakfast" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Breakfast Ideas"
      tagline="Start every morning with 30g+ of protein."
      body="Thirty breakfast recipes built around real whole ingredients — eggs, Greek yogurt, cottage cheese, lean meats, and smart grains. Every recipe hits 30 grams of protein or more, designed to keep you full, focused, and fueled until lunch without the mid-morning crash."
      price="$19"
      stripeUrl="https://buy.stripe.com/bJe7sL5MS9JEh082hB6Vq01"
      imageUrl={img.url}
      imageAlt="High protein breakfast skillet"
      inside={[
        { t: "30 Tested Breakfast Recipes", d: "Built around real whole ingredients and balanced macros." },
        { t: "Protein Counts For Every Dish", d: "Every recipe hits 30g+ — no guessing, no shortfalls." },
        { t: "Prep-Ahead Options", d: "Clearly marked recipes you can build the night before." },
        { t: "Sweet And Savory Mix", d: "Variety that prevents the breakfast rut." },
        { t: "Fifteen Minutes Or Less", d: "Engineered for real mornings, not weekends." },
      ]}
      buyHeadline="Win the first meal. Win the day."
    />
  ),
});
