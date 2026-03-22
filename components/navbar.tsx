"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X, Phone, Car } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Label Qualité", href: "/label" },
  { label: "Avis", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Grenade Auto-École — Accueil"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green text-white shadow-sm">
            <Car className="w-5 h-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-tight text-foreground">
              Grenade
            </span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
              Auto-École
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  pathname === link.href
                    ? "text-green bg-green-light"
                    : "text-foreground hover:text-green hover:bg-green-light"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0769748412"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-green transition-colors duration-200"
            aria-label="Appeler le 07 69 74 84 12"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>07 69 74 84 12</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-green hover:bg-green-dark text-white font-medium rounded-xl px-5 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0 bg-background">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-green text-white">
                    <Car className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="font-display font-bold text-sm text-foreground">
                    Grenade Auto-École
                  </span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Fermer le menu">
                    <X className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </SheetClose>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "text-green bg-green-light"
                          : "text-foreground hover:text-green hover:bg-green-light"
                      )}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-auto px-4 pb-8 flex flex-col gap-3">
                <a
                  href="tel:0769748412"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-green" aria-hidden="true" />
                  07 69 74 84 12
                </a>
                <Button
                  asChild
                  className="w-full bg-green hover:bg-green-dark text-white font-medium rounded-xl"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Nous contacter
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
