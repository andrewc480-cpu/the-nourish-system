import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { useState } from "react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.43.22-.93 1.4-5.94 1.4-5.94s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.07-4.88-5.02-4.88-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.9 2.74.1.12.11.22.08.34l-.33 1.36c-.05.22-.17.27-.4.16-1.5-.7-2.43-2.88-2.43-4.64 0-3.78 2.74-7.25 7.91-7.25 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.21 7.45-1.22 0-2.36-.63-2.75-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.13A12 12 0 1 0 12 0z"/>
  </svg>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/free-recipes", label: "Free Recipes" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-2xl font-semibold tracking-tight text-charcoal">
          nóurish<span className="text-gold">.</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-sage"
              activeProps={{ className: "text-sm font-medium text-sage" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 border-l border-border pl-5">
            <a href="https://instagram.com/nourish.recipes" aria-label="Instagram" className="text-charcoal/70 transition-colors hover:text-sage">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://pinterest.com" aria-label="Pinterest" className="text-charcoal/70 transition-colors hover:text-sage">
              <PinterestIcon className="h-5 w-5" />
            </a>
          </div>
        </nav>
        <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-charcoal" />
            <span className="block h-0.5 w-6 bg-charcoal" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-charcoal">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { PinterestIcon };
