import { SiteLayout } from "@/components/site/Layout";

export type ProductPageProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  body: string;
  price: string;
  oldPrice?: string;
  saveLabel?: string;
  stripeUrl: string;
  imageUrl: string;
  imageAlt: string;
  insideTitle?: string;
  inside: { t: string; d: string }[];
  buyHeadline: string;
};

const BG = "#F7F5F1";
const TEXT = "#1C1C1C";
const SAGE = "#7D9B76";
const GOLD = "#C9A84C";
const MUTED = "#9A9590";
const LINEN = "#F2EDE4";

function Eyebrow({ children, color = SAGE }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="font-sans text-xs font-medium uppercase tracking-[0.3em]" style={{ color }}>
      {children}
    </span>
  );
}

export function ProductPage(p: ProductPageProps) {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: BG, color: TEXT }}>
        {/* HERO */}
        <section className="grid md:grid-cols-2">
          <div className="aspect-[4/5] md:aspect-auto md:min-h-[640px] overflow-hidden">
            <img src={p.imageUrl} alt={p.imageAlt} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-14 md:py-20">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.05] md:text-6xl" style={{ color: TEXT }}>
              {p.title}
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl italic leading-relaxed" style={{ color: TEXT }}>
              {p.tagline}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: TEXT }}>
              {p.body}
            </p>
            <div className="mt-8 flex items-baseline gap-4">
              {p.oldPrice && (
                <span className="font-sans text-lg line-through" style={{ color: MUTED }}>{p.oldPrice}</span>
              )}
              <span className="font-sans text-3xl" style={{ color: GOLD, fontWeight: 300 }}>{p.price}</span>
              {p.saveLabel && (
                <span className="font-sans text-xs uppercase tracking-[0.2em]" style={{ color: SAGE }}>{p.saveLabel}</span>
              )}
            </div>
            <a
              href={p.stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-3 px-8 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, color: BG }}
            >
              Get Instant Access
            </a>
            <p className="mt-5 font-sans text-xs" style={{ color: MUTED }}>
              Instant digital download · Yours forever
            </p>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section style={{ backgroundColor: TEXT }}>
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-3xl">
              <Eyebrow color={GOLD}>What's Inside</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl" style={{ color: BG }}>
                {p.insideTitle ?? (
                  <>
                    Everything you need.<br />
                    Nothing you don't.
                  </>
                )}
              </h2>
            </div>
            <div
              className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-3"
              style={{ backgroundColor: "rgba(247,245,241,0.15)" }}
            >
              {p.inside.map((c, i) => (
                <div key={c.t + i} className="p-8" style={{ backgroundColor: TEXT }}>
                  <div className="font-display text-2xl font-medium" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-medium" style={{ color: BG }}>{c.t}</h3>
                  {c.d && (
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUY BLOCK */}
        <section style={{ backgroundColor: LINEN }}>
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <Eyebrow>Get It Now</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              {p.buyHeadline}
            </h2>
            <div className="mt-8 flex items-baseline justify-center gap-4">
              {p.oldPrice && (
                <span className="font-sans text-xl line-through" style={{ color: MUTED }}>{p.oldPrice}</span>
              )}
              <span className="font-sans text-4xl" style={{ color: GOLD, fontWeight: 300 }}>{p.price}</span>
              {p.saveLabel && (
                <span className="font-sans text-xs uppercase tracking-[0.2em]" style={{ color: SAGE }}>{p.saveLabel}</span>
              )}
            </div>
            <a
              href={p.stripeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 px-10 py-4 font-sans text-sm font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
              style={{ backgroundColor: SAGE, color: BG }}
            >
              Get Instant Access — {p.price}
            </a>
            <p className="mt-6 font-sans text-xs" style={{ color: MUTED }}>
              Instant digital download · Yours forever · One-time purchase · No subscription.
            </p>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
