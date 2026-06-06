import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { MoodyImage } from "@/components/site/MoodyImage";
import heroImage from "@/assets/nourish-hero.png.asset.json";
import bundleImage from "@/assets/nourish-bundle.png.asset.json";
import breakfastImage from "@/assets/nourish-breakfast.png.asset.json";
import lunchImage from "@/assets/nourish-lunch.png.asset.json";
import dinnerImage from "@/assets/nourish-dinner.png.asset.json";
import smoothieImage from "@/assets/nourish-smoothie.png.asset.json";
import snacksImage from "@/assets/nourish-snacks-v2.png.asset.json";
import dessertsImage from "@/assets/nourish-desserts.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nóurish. — Eat Well. Every Single Day." },
      { name: "description", content: "180 tested recipes for every meal, every craving, every lifestyle." },
      { property: "og:title", content: "Nóurish. — Eat Well. Every Single Day." },
      { property: "og:description", content: "180 tested recipes for every meal, every craving, every lifestyle." },
    ],
  }),
  component: Index,
});

const categories = [
  {
    name: "Breakfast",
    image: breakfastImage.url,
    alt: "French toast topped with berries and powdered sugar",
    position: "center 58%",
  },
  {
    name: "Lunch",
    image: lunchImage.url,
    alt: "Mediterranean lunch bowl with hummus, quinoa, vegetables, and chickpeas",
    position: "center center",
  },
  {
    name: "Dinner",
    image: dinnerImage.url,
    alt: "Roasted salmon with asparagus and lemon",
    position: "center 60%",
  },
  {
    name: "Smoothies",
    image: smoothieImage.url,
    alt: "Berry smoothie in a glass topped with strawberries and blueberries",
    position: "center 45%",
  },
  {
    name: "Snacks",
    image: snacksImage.url,
    alt: "Bowl of fresh guacamole with tortilla chips, lime, and cilantro on a slate board",
    position: "center center",
  },
  {
    name: "Desserts",
    image: dessertsImage.url,
    alt: "Chocolate lava cake with vanilla ice cream",
    position: "center 48%",
  },
];

const trends = [
  { name: "GLP-1", description: "High protein meals designed for Ozempic and Wegovy users" },
  { name: "Gut Health", description: "Fiber-first recipes that support a healthier microbiome" },
  { name: "Food as Medicine", description: "Anti-inflammatory meals that work as hard as you do" },
  { name: "Real Food Reset", description: "30 days of clean eating with zero ultra-processed ingredients" },
  { name: "Plant-Based", description: "Whole food plant-based meals with 30g or more of protein" },
];

const testimonials = [
  { quote: "These recipes completely changed how I think about weeknight dinners. Every single one is a keeper.", name: "Sarah K.", role: "Brooklyn, NY" },
  { quote: "I went from ordering takeout 4 nights a week to cooking every day. The recipes are that approachable. Best $99 I've spent this year.", name: "", role: "" },
];

function Index() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[600px] w-full overflow-hidden bg-charcoal">
          <img
            src={heroImage.url}
            alt="Roasted vegetable and quinoa bowl on a moody wooden table by candlelight"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "right center" }}
          />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-20 md:pb-28">
            <span className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-white/70">
              The Nóurish Collection — 2026
            </span>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] text-white md:text-7xl lg:text-8xl">
              Eat Well.<br />Every Single Day.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/85 md:text-xl">
              180 tested recipes for every meal, every craving, every lifestyle.
            </p>
            <a
              href="#bundle"
              className="mt-10 inline-flex items-center gap-3 bg-sage px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-sage-foreground transition-all hover:bg-sage/90"
            >
              Get the Complete Bundle — $99
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col items-baseline justify-between gap-4 md:flex-row">
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">Collections</span>
            <h2 className="mt-3 font-display text-4xl font-medium text-charcoal md:text-5xl">
              Built for how you actually eat.
            </h2>
          </div>
          <Link to="/shop" className="text-sm font-medium text-charcoal/70 underline-offset-4 hover:text-sage hover:underline">
            Browse the full shop →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group block"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-linen">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  style={{ objectPosition: c.position }}
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-medium text-charcoal">{c.name}</h3>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-charcoal/50 transition-colors group-hover:text-sage">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TRENDS */}
      <section className="bg-linen py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">What's Trending</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-charcoal md:text-4xl">
              Eat with intention.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {trends.map((t) => (
              <a key={t.name} href="#" className="block max-w-[280px]">
                <span className="inline-block rounded-full border border-charcoal/15 bg-background px-6 py-3 font-display text-base text-charcoal transition-all hover:border-sage hover:bg-sage hover:text-sage-foreground">
                  {t.name}
                </span>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BUNDLE CTA */}
      <section id="bundle" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="aspect-[5/6] w-full overflow-hidden bg-linen">
            <img
              src={bundleImage.url}
              alt="Herb-butter steak sliced on a wooden board with rosemary and candlelight"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">The Complete Bundle</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl">
              180 recipes. One library. Everything you'll ever cook.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              The entire Nóurish catalog, organized by goal, protein, and prep time. Lifetime access, instant download, recipe updates included.
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-2xl font-medium text-charcoal" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>$99.99</span>
              <span className="text-sm text-muted-foreground line-through">$240</span>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-3 bg-sage px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-sage-foreground transition-all hover:bg-sage/90">
              Get Instant Access →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-linen py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 max-w-2xl font-display text-3xl font-medium text-charcoal md:text-4xl">
            From the kitchens of real people.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-charcoal/10 bg-background p-8">
                <div className="font-display text-4xl leading-none text-sage">"</div>
                <blockquote className="mt-3 font-display text-lg leading-relaxed text-charcoal">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-sans text-sm font-medium text-charcoal">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">Free Download</span>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl">
          Get 7 Free Recipes
        </h2>
        <p className="mt-3 text-muted-foreground">— straight to your inbox.</p>
        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border border-charcoal/20 bg-background px-5 py-4 font-sans text-sm text-charcoal placeholder:text-charcoal/40 focus:border-sage focus:outline-none"
          />
          <button
            type="submit"
            className="bg-sage px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-sage-foreground transition-all hover:bg-sage/90"
          >
            Send Recipes
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-sm text-sage">Check your inbox — your recipes are on the way.</p>
        )}
      </section>
    </SiteLayout>
  );
}
