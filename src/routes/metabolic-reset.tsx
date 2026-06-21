import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/18-Meals-for-Weight-Loss-After-50.png.asset.json";

export const Route = createFileRoute("/metabolic-reset")({
  head: () => ({
    meta: [
      { title: "Metabolic Reset Blueprint: 50+ — Nóurish." },
      { name: "description", content: "Sustainable nutrition that respects your body." },
      { property: "og:title", content: "Metabolic Reset Blueprint: 50+ — Nóurish." },
      { property: "og:description", content: "Sustainable nutrition that respects your body." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/metabolic-reset" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="Metabolic Reset Blueprint: 50+"
      tagline="Sustainable nutrition that respects your body."
      body="Your metabolism at 50 is different than it was at 30 — and your nutrition should reflect that. This blueprint is built for the specific hormonal and metabolic changes that come with age, with meals designed to maintain lean mass, support bone density, and keep energy steady."
      price="$17"
      stripeUrl="https://buy.stripe.com/dRm7sL8Z43lg39icWf6Vq0h"
      imageUrl={img.url}
      imageAlt="Sea bass fillet plate"
      inside={[
        { t: "30 Age-Adapted Recipes", d: "Calibrated for the metabolism you have, not the one you had." },
        { t: "Calcium & Vitamin D Targets", d: "Bone density support built into every meal." },
        { t: "Hormone-Supportive Ingredients", d: "Food choices that work with, not against, hormonal shifts." },
        { t: "Lower-Cal, Higher-Density", d: "Maximum nutrition in a smaller calorie footprint." },
        { t: "Gentle On Digestion", d: "Reintroduction approach for sensitive systems." },
      ]}
      buyHeadline="Nutrition that meets you where you are."
    />
  ),
});
