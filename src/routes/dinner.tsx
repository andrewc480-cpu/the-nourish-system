import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-dinner.png.asset.json";

export const Route = createFileRoute("/dinner")({
  head: () => ({
    meta: [
      { title: "30 High Protein Dinner Ideas — Nóurish." },
      { name: "description", content: "Family-tested, macro-balanced evenings." },
      { property: "og:title", content: "30 High Protein Dinner Ideas — Nóurish." },
      { property: "og:description", content: "Family-tested, macro-balanced evenings." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/dinner" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Dinner Ideas"
      tagline="Family-tested, macro-balanced evenings."
      body="Dinner should be the reward, not the compromise. These 30 recipes are built to satisfy the whole table — big on flavor, easy on effort, and engineered around lean protein. Sheet pans, one-pots, and classics rebuilt with real nutrition."
      price="$19"
      stripeUrl="https://buy.stripe.com/14A14n4IO8FAh0809t6Vq03"
      imageUrl={img.url}
      imageAlt="Seared salmon dinner"
      inside={[
        { t: "30 Tested Dinner Recipes", d: "Classics rebuilt around lean protein and real ingredients." },
        { t: "Full Macro Breakdowns", d: "Every recipe with protein, carbs, fat, and calorie data." },
        { t: "Family Portion Guidance", d: "Scale up or down without doing the math." },
        { t: "One-Pan & Sheet Pan", d: "Minimal cleanup options for weeknights." },
        { t: "30 Minutes Or Less", d: "Built for the speed of real life." },
      ]}
      buyHeadline="The reward at the end of the day."
    />
  ),
});
