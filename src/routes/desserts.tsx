import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-desserts.png.asset.json";

export const Route = createFileRoute("/desserts")({
  head: () => ({
    meta: [
      { title: "30 High Protein Dessert Ideas — Nóurish." },
      { name: "description", content: "Sweet, satisfying, and macro-friendly." },
      { property: "og:title", content: "30 High Protein Dessert Ideas — Nóurish." },
      { property: "og:description", content: "Sweet, satisfying, and macro-friendly." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/desserts" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Dessert Ideas"
      tagline="Sweet, satisfying, and macro-friendly."
      body="You don't have to choose between dessert and your goals. These 30 recipes prove it — protein-packed sweets built with real ingredients that satisfy the craving without wrecking your day. Brownies, cookies, mousse, and more — rebuilt for real nutrition."
      price="$19"
      stripeUrl="https://buy.stripe.com/00w5kDgrwcVQ11a2hB6Vq06"
      imageUrl={img.url}
      imageAlt="High protein dessert"
      inside={[
        { t: "30 Tested Dessert Recipes", d: "Brownies, cookies, mousse — rebuilt for real nutrition." },
        { t: "15–25g Protein Per Serving", d: "Sweets that earn their place on the plate." },
        { t: "Naturally Sweetened Options", d: "No reliance on refined sugar or artificial alternatives." },
        { t: "Freezer-Friendly Batches", d: "Make ahead, portion out, prevent the craving spiral." },
        { t: "Indulgent Flavor", d: "Clean ingredients without the compromise." },
      ]}
      buyHeadline="Dessert without the deal-breaker."
    />
  ),
});
