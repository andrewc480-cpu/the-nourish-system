import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/15-Family-Dinners-Kids-Eat.png.asset.json";

export const Route = createFileRoute("/family-dinners")({
  head: () => ({
    meta: [
      { title: "The Family Table: Kids-Approved Dinners — Nóurish." },
      { name: "description", content: "Picky-eater approved, parent approved." },
      { property: "og:title", content: "The Family Table: Kids-Approved Dinners — Nóurish." },
      { property: "og:description", content: "Picky-eater approved, parent approved." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/family-dinners" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="The Family Table: Kids-Approved Dinners"
      tagline="Picky-eater approved, parent approved."
      body="Getting the whole family to the table — and getting them to actually eat — is its own sport. These 30 dinners are built to win it. Familiar flavors, hidden nutrition, and enough variety to break the Monday pasta rut without starting a dinner-table war."
      price="$17"
      stripeUrl="https://buy.stripe.com/bJe4gzejodZUeS0cWf6Vq0e"
      imageUrl={img.url}
      imageAlt="Sheet pan chicken dinner"
      inside={[
        { t: "30 Family Dinner Recipes", d: "Tested with real families — and real picky eaters." },
        { t: "Kid-Approved Flavor Profiles", d: "Familiar enough to land, refined enough for adults." },
        { t: "Hidden Vegetable Techniques", d: "Nutrition that gets eaten, not negotiated." },
        { t: "Adjustable Spice Levels", d: "Cook one meal that works for the whole table." },
        { t: "Leftover-Friendly Builds", d: "Tonight's dinner becomes tomorrow's lunch." },
      ]}
      buyHeadline="Bring the whole table back."
    />
  ),
});
