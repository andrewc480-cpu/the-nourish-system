import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/glp1-nutrition-guide.png.asset.json";

export const Route = createFileRoute("/glp1")({
  head: () => ({
    meta: [
      { title: "GLP-1 Nutrition Protocol — Nóurish." },
      { name: "description", content: "Eat to support your medication, not against it." },
      { property: "og:title", content: "GLP-1 Nutrition Protocol — Nóurish." },
      { property: "og:description", content: "Eat to support your medication, not against it." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/glp1" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Targeted Protocol"
      title="GLP-1 Nutrition Protocol"
      tagline="Eat to support your medication, not against it."
      body="GLP-1 medications like Ozempic and Wegovy reduce appetite — but they don't tell you what to eat when you do eat. This protocol does. Every meal is designed to maximize protein absorption, protect muscle mass, and deliver the micronutrients most GLP-1 patients fall short on during rapid weight loss."
      price="$37"
      stripeUrl="https://buy.stripe.com/7sYeVd3EK4pk9xGcWf6Vq07"
      imageUrl={img.url}
      imageAlt="Balanced grilled chicken plate"
      inside={[
        { t: "60 GLP-1 Engineered Meals", d: "Built specifically for the reduced-appetite reality of GLP-1 users." },
        { t: "Small Portion, High Protein", d: "Maximum nutrition in the bites you can actually finish." },
        { t: "Muscle-Preservation Focus", d: "Protein targets calibrated to protect lean mass during loss." },
        { t: "Key Nutrient Targets", d: "The micronutrients GLP-1 patients commonly fall short on." },
        { t: "Eating Windows & Pacing", d: "Guidance on when and how to eat with the medication." },
      ]}
      buyHeadline="Make every bite work harder."
    />
  ),
});
