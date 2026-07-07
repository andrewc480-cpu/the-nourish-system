
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
          <div className="mt-5 flex gap-4">
            <a
              href="https://www.instagram.com/nourish.recipes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#1C1C1C] transition-colors hover:text-[#7D9B76]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.pinterest.com/nourish_recipes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="text-[#1C1C1C] transition-colors hover:text-[#7D9B76]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.401.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nourish.recipes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#1C1C1C] transition-colors hover:text-[#7D9B76]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.8-.1 3.354.903 4.225 2.504.466.85.7 1.9.7 2.98v8.75a6.94 6.94 0 0 1-6.94 6.94 6.902 6.902 0 0 1-4.68-1.82 6.947 6.947 0 0 1-2.26-5.12 6.947 6.947 0 0 1 6.95-6.95c.24 0 .48.012.713.036V9.03a3.407 3.407 0 0 0-2.42 1.004 3.4 3.4 0 0 0-.994 2.407 3.406 3.406 0 0 0 3.41 3.41 3.39 3.39 0 0 0 2.42-.998l.04-.046V.02h2.855z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className={headingClass}>The System</h4>
          <ul className="space-y-2.5 font-sans text-sm font-light text-charcoal">
            <li><a href="/system" className="transition-colors hover:text-sage">The Nourish System</a></li>
            <li><a href="/glp1" className="transition-colors hover:text-sage">GLP-1 Nutrition</a></li>
            <li><a href="/gut-health" className="transition-colors hover:text-sage">Gut Health</a></li>
            <li><a href="/metabolic-health" className="transition-colors hover:text-sage">Metabolic Health</a></li>
            <li><a href="/cognitive-performance" className="transition-colors hover:text-sage">Cognitive Performance</a></li>
            <li><a href="/longevity" className="transition-colors hover:text-sage">Longevity & Healthspan</a></li>
            <li><a href="/hormonal-health" className="transition-colors hover:text-sage">Hormonal Health</a></li>
            <li><a href="/bundle" className="transition-colors hover:text-sage">The Complete Bundle</a></li>
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
