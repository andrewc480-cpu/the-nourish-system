import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/11-Real-Food-Reset.png.asset.json";

export const Route = createFileRoute("/real-food-reset")({
  head: () => ({
    meta: [
      { title: "Real Food Reset Protocol — Nóurish." },
      { name: "description", content: "Strip the noise. Rebuild the basics." },
      { property: "og:title", content: "Real Food Reset Protocol — Nóurish." },
      { property: "og:description", content: "Strip the noise. Rebuild the basics." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/real-food-reset" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Targeted Protocol"
      title="Real Food Reset Protocol"
      tagline="Strip the noise. Rebuild the basics."
      body="No ultra-processed ingredients. No artificial sweeteners. No ingredients you can't pronounce. The Real Food Reset is a 30-day protocol built entirely around whole foods — designed to recalibrate your palate, restore your energy, and rebuild a foundation of clean, consistent eating."
      price="$37"
      stripeUrl="https://buy.stripe.com/14A6oHb7c4pkeS009t6Vq0a"
      imageUrl={img.url}
      imageAlt="Real food reset bowl"
      inside={[
        { t: "30 Days Of Whole-Food Meals", d: "A full month of meals built without compromise." },
        { t: "Zero Ultra-Processed", d: "No artificial sweeteners, seed oils, or industrial ingredients." },
        { t: "Pantry Reset Guide", d: "What to remove, what to replace, and what to stock." },
        { t: "Label-Reading Cheat Sheet", d: "Spot the marketing dressed up as health food." },
        { t: "Week 5 Reintroduction Plan", d: "How to leave the protocol without losing the gains." },
      ]}
      buyHeadline="Thirty days back to the basics."
    />
  ),
});
