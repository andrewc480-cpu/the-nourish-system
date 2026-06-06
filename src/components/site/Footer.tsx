import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { PinterestIcon } from "./Header";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-linen">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl font-semibold text-charcoal">
            Nóurish<span className="text-sage">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Not a diet. Not a restriction. A smarter relationship with what ends up on your plate.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/70">Explore</h4>
          <ul className="space-y-2 text-sm text-charcoal/80">
            <li><Link to="/shop" className="hover:text-sage">Shop</Link></li>
            <li><Link to="/free-recipes" className="hover:text-sage">Free Recipes</Link></li>
            <li><Link to="/blog" className="hover:text-sage">Blog</Link></li>
            <li><Link to="/about" className="hover:text-sage">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/70">Follow</h4>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/nourish.recipes" className="flex items-center gap-2 text-sm text-charcoal/80 hover:text-sage">
              <Instagram className="h-4 w-4" /> @nourish.recipes
            </a>
          </div>
          <a href="https://pinterest.com" className="mt-2 flex items-center gap-2 text-sm text-charcoal/80 hover:text-sage">
            <PinterestIcon className="h-4 w-4" /> Pinterest
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nóurish. All rights reserved.
      </div>
    </footer>
  );
}
