import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/12-High-Protein-Plant-Based.png.asset.json";

export const Route = createFileRoute("/plant-based")({
  head: () => ({
    meta: [
      { title: "Plant-Based Protein System — Nóurish." },
      { name: "description", content: "40g protein, zero animal products." },
      { property: "og:title", content: "Plant-Based Protein System — Nóurish." },
      { property: "og:description", content: "40g protein, zero animal products." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/plant-based" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Targeted Protocol"
      title="Plant-Based Protein System"
      tagline="40g protein, zero animal products."
      body="The biggest lie about plant-based eating is that you can't get enough protein. This system disproves it — 60 recipes built around legumes, tofu, tempeh, edamame, seeds, and smart pairings that hit 30–40 grams per meal without any animal products."
      price="$37"
      stripeUrl="https://buy.stripe.com/8x2fZh0sy7Bw5hqbSb6Vq0b"
      imageUrl={img.url}
      imageAlt="Tempeh and edamame bowl"
      inside={[
        { t: "60 Plant-Based Recipes", d: "Every meal engineered for 30–40g of plant-based protein." },
        { t: "Amino Acid Pairing Guide", d: "Combine plant proteins for complete amino profiles." },
        { t: "Iron And B12 Source Guide", d: "The two nutrients most plant-based eaters miss." },
        { t: "Full-Week Meal Prep", d: "Sunday-to-Friday plans built around batch cooking." },
        { t: "Athlete & Non-Athlete Plans", d: "Protocols calibrated to activity level." },
      ]}
      buyHeadline="Forty grams. Zero animal products."
    />
  ),
});
