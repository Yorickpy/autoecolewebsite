"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Car, Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Label Qualite", href: "/label" },
  { label: "Avis", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isTopBar = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-navy/80 shadow-lg shadow-black/10 backdrop-blur-md"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Grenade Auto-Ecole - Accueil"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green text-white shadow-sm shadow-black/15">
            <Car className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-sm font-bold tracking-tight",
                isTopBar ? "text-white" : "text-foreground"
              )}
            >
              Grenade
            </span>
            <span
              className={cn(
                "text-[10px] font-medium uppercase tracking-widest",
                isTopBar ? "text-white/72" : "text-muted-foreground"
              )}
            >
              Auto-Ecole
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? isTopBar
                        ? "bg-[#e33292]/18 text-white ring-1 ring-[#e33292]/35"
                        : "bg-[#e33292]/12 text-[#e33292]"
                      : isTopBar
                        ? "text-white/90 hover:bg-white/10 hover:text-white"
                        : "text-foreground hover:bg-green-light hover:text-green"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0769748412"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
              isTopBar
                ? "text-white/82 hover:text-white"
                : "text-muted-foreground hover:text-[#e33292]"
            )}
            aria-label="Appeler le 07 69 74 84 12"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>07 69 74 84 12</span>
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-xl bg-green px-5 font-medium text-white shadow-sm transition-all duration-200 hover:bg-green-dark hover:shadow-md"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                isTopBar
                  ? "text-white hover:bg-white/10 hover:text-white"
                  : "text-foreground"
              )}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-background p-0">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border px-6 pb-4 pt-6">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green text-white">
                    <Car className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-bold text-foreground">
                    Grenade Auto-Ecole
                  </span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Fermer le menu">
                    <X className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Menu mobile">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                          isActive
                            ? "bg-[#e33292]/12 text-[#e33292]"
                            : "text-foreground hover:bg-green-light hover:text-green"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-3 px-4 pb-8">
                <a
                  href="tel:0769748412"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary hover:text-[#e33292]"
                >
                  <Phone className="h-4 w-4 text-green" aria-hidden="true" />
                  07 69 74 84 12
                </a>
                <Button
                  asChild
                  className="w-full rounded-xl bg-green font-medium text-white hover:bg-green-dark"
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
