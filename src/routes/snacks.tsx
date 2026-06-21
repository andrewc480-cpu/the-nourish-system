import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/nourish-snacks-v2.png.asset.json";

export const Route = createFileRoute("/snacks")({
  head: () => ({
    meta: [
      { title: "30 High Protein Snack Ideas — Nóurish." },
      { name: "description", content: "Snacks engineered for steady energy." },
      { property: "og:title", content: "30 High Protein Snack Ideas — Nóurish." },
      { property: "og:description", content: "Snacks engineered for steady energy." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/snacks" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Protein Foundation"
      title="30 High Protein Snack Ideas"
      tagline="Snacks engineered for steady energy."
      body="Stop grabbing whatever's closest. These 30 snack recipes are designed to bridge meals without spiking blood sugar or tanking your macros. Portable, prep-able, and actually satisfying — the kind of snacks that keep you on track."
      price="$19"
      stripeUrl="https://buy.stripe.com/6oU14nejo7BweS04pJ6Vq05"
      imageUrl={img.url}
      imageAlt="Slate board with eggs and turkey"
      inside={[
        { t: "30 Tested Snack Recipes", d: "Engineered to bridge meals, not spike blood sugar." },
        { t: "Under 200 Cal, Over 15g Protein", d: "The right macros in a portable format." },
        { t: "Fridge-Stable & Grab-And-Go", d: "Options for the desk, the bag, and the car." },
        { t: "Sweet And Savory Variety", d: "Range that prevents the same-snack fatigue." },
        { t: "Batch Prep Guides", d: "Make once on Sunday, eat well all week." },
      ]}
      buyHeadline="Snacking that keeps you on track."
    />
  ),
});
