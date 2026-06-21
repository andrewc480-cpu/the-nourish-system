import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/16-Meals-for-Men-Over-40.png.asset.json";

export const Route = createFileRoute("/mens-performance")({
  head: () => ({
    meta: [
      { title: "Men's Performance Nutrition Blueprint — Nóurish." },
      { name: "description", content: "Built for muscle, heart, and metabolism." },
      { property: "og:title", content: "Men's Performance Nutrition Blueprint — Nóurish." },
      { property: "og:description", content: "Built for muscle, heart, and metabolism." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/mens-performance" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="Men's Performance Nutrition Blueprint"
      tagline="Built for muscle, heart, and metabolism."
      body="Men over 35 have specific nutritional needs that most meal plans ignore — testosterone support, cardiovascular health, muscle maintenance, and metabolic efficiency. This blueprint is built around those needs, with meals that work as hard as you do."
      price="$17"
      stripeUrl="https://buy.stripe.com/8x2fZhejo2hceS009t6Vq0f"
      imageUrl={img.url}
      imageAlt="Ribeye steak"
      inside={[
        { t: "30 Performance Recipes", d: "Built for the body of a man past 35, not in spite of it." },
        { t: "Testosterone & Heart Health", d: "Ingredients that support hormones and cardiovascular function." },
        { t: "High Protein & Micronutrients", d: "Targets calibrated for muscle maintenance and recovery." },
        { t: "Pre & Post-Workout Meals", d: "Fuel and recovery options for the training days." },
        { t: "Macros For Men's Metabolism", d: "Calorie and macro targets sized for real bodies." },
      ]}
      buyHeadline="Eat like the work matters."
    />
  ),
});
