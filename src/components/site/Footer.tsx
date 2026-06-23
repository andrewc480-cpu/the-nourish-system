
const exploreLinks = [
  { href: "/free-recipes", label: "Free Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const headingClass =
  "mb-5 font-sans uppercase text-[10px] tracking-[0.16em] text-[#9A9590]";

export function Footer() {
  return (
    <footer className="mt-24 bg-linen">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl font-semibold text-charcoal">
            nóurish<span className="text-gold">.</span>
          </div>
          <p className="mt-3 font-display italic text-[#9A9590]">
            Eat Well. Every Single Day.
          </p>
          <p className="mt-6 font-sans text-[11px] text-[#9A9590]">
            © 2026 The Nourish System. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className={headingClass}>The System</h4>
          <ul className="space-y-2.5 font-sans text-sm font-light text-charcoal">
            {systemLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-sage">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={headingClass}>Explore</h4>
          <ul className="space-y-2.5 font-sans text-sm font-light text-charcoal">
            {exploreLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-sage">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="mx-auto max-w-7xl px-6"
        style={{ borderTop: "1px solid rgba(28,28,28,0.09)" }}
      >
        <p className="py-6 text-center font-display italic text-[11px] text-[#9A9590]">
          Food is information. Every meal sends a signal.
        </p>
      </div>
    </footer>
  );
}
