import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-lunch.png.asset.json";

export const Route = createFileRoute("/lunch")({
  head: () => ({
    meta: [
      { title: "30 High Protein Lunch Ideas — Nóurish." },
      { name: "description", content: "Midday meals that keep you full till dinner." },
      { property: "og:title", content: "30 High Protein Lunch Ideas — Nóurish." },
      { property: "og:description", content: "Midday meals that keep you full till dinner." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/lunch" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Lunch Ideas"
      tagline="Midday meals that keep you full till dinner."
      body="Lunch is where most people lose the plot. These 30 recipes fix that — fast to assemble, high in protein, and satisfying enough to get you through the afternoon without snacking. Bowls, wraps, salads, and leftovers done right."
      price="$19"
      stripeUrl="https://buy.stripe.com/00w7sL1wC3lgbFOe0j6Vq02"
      imageUrl={img.url}
      imageAlt="Grilled chicken breast lunch"
      inside={[
        { t: "30 Tested Lunch Recipes", d: "Bowls, wraps, salads, and rebuilt leftovers." },
        { t: "30g+ Protein Per Meal", d: "Engineered to keep you full through the afternoon." },
        { t: "Meal-Prep Friendly Builds", d: "Recipes designed to hold up in the fridge." },
        { t: "Office And On-The-Go", d: "Portable options for life beyond the kitchen." },
        { t: "Under 500 Calories", d: "Full macros listed for every dish." },
      ]}
      buyHeadline="End the afternoon slump for good."
    />
  ),
});
