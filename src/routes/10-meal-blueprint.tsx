import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/13-Meals-Under-10.png.asset.json";

export const Route = createFileRoute("/10-meal-blueprint")({
  head: () => ({
    meta: [
      { title: "The $10 Meal Blueprint — Nóurish." },
      { name: "description", content: "Budget-friendly without sacrificing quality." },
      { property: "og:title", content: "The $10 Meal Blueprint — Nóurish." },
      { property: "og:description", content: "Budget-friendly without sacrificing quality." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/10-meal-blueprint" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="The $10 Meal Blueprint"
      tagline="Budget-friendly without sacrificing quality."
      body="Eating well on a budget isn't about suffering through sad salads. It's about strategy. This blueprint shows you how to build 30 complete, nutritious meals for $10 or less per serving — with smart ingredient overlaps, bulk-buy guides, and zero food waste."
      price="$17"
      stripeUrl="https://buy.stripe.com/7sY5kDcbgcVQh083lF6Vq0c"
      imageUrl={img.url}
      imageAlt="Lentil soup"
      inside={[
        { t: "30 Meals At $10 Or Less", d: "Per-serving cost held without compromising nutrition." },
        { t: "Weekly Budget Shopping Lists", d: "Pre-built lists organized by store section." },
        { t: "Ingredient Overlap Strategy", d: "Buy once, use across multiple meals." },
        { t: "Bulk-Buy & Freeze Guidance", d: "Maximize value without waste." },
        { t: "Nutrition Targets Maintained", d: "Macros held steady at every price point." },
      ]}
      buyHeadline="Eat well without overspending."
    />
  ),
});
