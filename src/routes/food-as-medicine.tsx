import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/food-as-medicine.png.asset.json";

export const Route = createFileRoute("/food-as-medicine")({
  head: () => ({
    meta: [
      { title: "Food as Medicine System — Nóurish." },
      { name: "description", content: "Anti-inflammatory meals backed by science." },
      { property: "og:title", content: "Food as Medicine System — Nóurish." },
      { property: "og:description", content: "Anti-inflammatory meals backed by science." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/food-as-medicine" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Targeted Protocol"
      title="Food as Medicine System"
      tagline="Anti-inflammatory meals backed by science."
      body="Chronic inflammation is behind most of what ails us — joint pain, brain fog, fatigue, metabolic dysfunction. This system is built around ingredients proven to reduce it: omega-3s, polyphenols, antioxidants, and fiber-rich whole foods. No supplements required."
      price="$37"
      stripeUrl="https://buy.stripe.com/6oU3cvejo3lgcJSe0j6Vq09"
      imageUrl={img.url}
      imageAlt="Turmeric salmon plate"
      inside={[
        { t: "60 Anti-Inflammatory Recipes", d: "Every meal built around proven anti-inflammatory ingredients." },
        { t: "Inflammation Score Key", d: "Ingredient-level scoring so you understand every choice." },
        { t: "Symptom-Targeted Sequencing", d: "Meals ordered by the symptom they most directly address." },
        { t: "Omega-3 & Fiber Targets", d: "Daily and per-meal targets calibrated for measurable impact." },
        { t: "Weekly Protocol Framework", d: "Structured plan that turns recipes into a system." },
      ]}
      buyHeadline="Treat the root, not the symptom."
    />
  ),
});
