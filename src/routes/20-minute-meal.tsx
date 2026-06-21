import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/14-Meals-20-Less.png.asset.json";

export const Route = createFileRoute("/20-minute-meal")({
  head: () => ({
    meta: [
      { title: "The 20-Minute Meal System — Nóurish." },
      { name: "description", content: "Weeknight-fast, restaurant-worthy." },
      { property: "og:title", content: "The 20-Minute Meal System — Nóurish." },
      { property: "og:description", content: "Weeknight-fast, restaurant-worthy." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/20-minute-meal" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="The 20-Minute Meal System"
      tagline="Weeknight-fast, restaurant-worthy."
      body="You don't need an hour. You need a system. These 30 recipes are built to go from fridge to table in 20 minutes or less — no shortcuts on flavor, no compromising on nutrition. Real weeknight cooking for real people."
      price="$17"
      stripeUrl="https://buy.stripe.com/bJebJ1ejof3YeS07BV6Vq0d"
      imageUrl={img.url}
      imageAlt="Garlic shrimp stir fry"
      inside={[
        { t: "30 Recipes Under 20 Minutes", d: "Fridge-to-table in the time it takes to order in." },
        { t: "Step-By-Step Timing", d: "Every recipe broken down minute by minute." },
        { t: "Mise En Place Prep Guides", d: "Set up your station like the pros do." },
        { t: "One-Pan & Minimal Cleanup", d: "Speed continues all the way through the dishes." },
        { t: "Full Macros Per Recipe", d: "Nothing sacrificed for the time savings." },
      ]}
      buyHeadline="Twenty minutes. Real food."
    />
  ),
});
