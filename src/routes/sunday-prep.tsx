import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/17-Meal-Prep-Sunday-Plans.png.asset.json";

export const Route = createFileRoute("/sunday-prep")({
  head: () => ({
    meta: [
      { title: "The Sunday Prep System — Nóurish." },
      { name: "description", content: "Cook once. Eat well all week." },
      { property: "og:title", content: "The Sunday Prep System — Nóurish." },
      { property: "og:description", content: "Cook once. Eat well all week." },
      { property: "og:image", content: img.url },
      { name: "twitter:image", content: img.url },
    ],
    links: [{ rel: "canonical", href: "/sunday-prep" }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Lifestyle Framework"
      title="The Sunday Prep System"
      tagline="Cook once. Eat well all week."
      body="Sunday is the most powerful day of your nutritional week. This system teaches you how to use it — with 30 prep-ahead meal plans that turn 2 hours on Sunday into 5 days of clean, ready-to-eat food. No more scrambling. No more bad decisions."
      price="$17"
      stripeUrl="https://buy.stripe.com/00w8wPb7c8FA39i3lF6Vq0g"
      imageUrl={img.url}
      imageAlt="Meal prep containers"
      inside={[
        { t: "30 Weekly Prep Plans", d: "A full year of Sundays, fully mapped out." },
        { t: "2-Hour Sunday Schedules", d: "Step-by-step cook timelines so nothing stalls." },
        { t: "Storage & Reheating Guides", d: "Keep food tasting fresh on Day 5." },
        { t: "Mix-And-Match Combinations", d: "Components that recombine into different meals." },
        { t: "Shopping Lists Per Week", d: "Pre-built, organized by store section." },
      ]}
      buyHeadline="Reclaim your weekday."
    />
  ),
});
