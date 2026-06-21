import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/roasted-chicken.png.asset.json";

export const Route = createFileRoute("/bundle")({
  head: () => ({
    meta: [
      { title: "The Complete Bundle — 180 Recipes — Nóurish." },
      { name: "description", content: "180 Recipes. One Complete Nutritional System." },
      { property: "og:title", content: "The Complete Bundle — Nóurish." },
      { property: "og:description", content: "180 Recipes. One Complete Nutritional System." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/bundle" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="The Complete Bundle"
      title="180 Recipes. One Complete Nutritional System."
      tagline="Eat well. Every single day."
      body="All 6 High Protein recipe books in one complete collection. Breakfast, Lunch, Dinner, Smoothies, Snacks, and Desserts. 180 tested recipes. One instant download. Yours forever. This is the full Nóurish system — everything you need to eat well at every meal, every day, for the rest of your life."
      price="$67"
      oldPrice="$114"
      saveLabel="Save 41%"
      stripeUrl="https://buy.stripe.com/00wbJ11wC9JEbFO7BV6Vq00"
      imageUrl={img.url}
      imageAlt="The Complete Bundle"
      inside={[
        { t: "All 6 Protein Foundation Books", d: "Breakfast, Lunch, Dinner, Smoothies, Snacks, Desserts." },
        { t: "180 Total Tested Recipes", d: "Every recipe held to the same nutritional standard." },
        { t: "Macros For Every Recipe", d: "Full protein, carb, fat, and calorie data per serving." },
        { t: "Instant Download, Lifetime Access", d: "One purchase, yours forever, no subscription." },
        { t: "The Complete System", d: "Every meal of every day in a single file." },
      ]}
      buyHeadline="The full Nóurish system, in one file."
    />
  ),
});
