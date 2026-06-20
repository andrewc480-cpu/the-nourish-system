import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import aboutMission from "@/assets/about-mission.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nóurish." },
      { name: "description", content: "We believe food should do more. A recipe brand for people who take their health seriously." },
      { property: "og:title", content: "About — Nóurish." },
      { property: "og:description", content: "We believe food should do more. A recipe brand for people who take their health seriously." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: aboutMission.url },
      { name: "twitter:image", content: aboutMission.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About — Nóurish.",
          description: "We believe food should do more. A recipe brand for people who take their health seriously.",
          url: "/about",
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-sage">Our Mission</span>
        <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-charcoal md:text-7xl">
          We Believe Food<br />Should Do More.
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <img src={aboutMission.url} alt="Fresh vegetables, herbs, lentils, and grains arranged on a rustic wooden table" className="aspect-[16/9] w-full object-cover" />
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24">
        <div className="space-y-6 font-display text-xl leading-relaxed text-charcoal/90 md:text-2xl">
          <p>
            Nóurish<span className="text-sage">.</span> is a recipe brand for people who take their health seriously.
          </p>
          <p>Not a diet. Not a restriction. A smarter relationship with what ends up on your plate.</p>
          <p>
            Every system is built around a clear nutritional goal — more protein, better gut health, lower inflammation, or a full reset.
          </p>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {[
            { k: "180+", v: "Tested recipes" },
            { k: "18", v: "PROTOCOLS & FRAMEWORKS" },
            { k: "100%", v: "Whole food" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl font-medium text-gold">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-charcoal/60">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
