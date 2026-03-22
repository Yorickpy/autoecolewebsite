import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveGrid from "@/components/home/interactive-grid";
import HeroTitle from "@/components/home/hero-title";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      aria-label="Presentation"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <InteractiveGrid />
        <div className="absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-green opacity-10 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-green opacity-5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 md:py-40 lg:px-8 lg:py-48">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2">
            <Badge className="rounded-full border-green/20 bg-green/15 px-4 py-1.5 text-sm font-medium text-green">
              <ShieldCheck className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              35 ans d'experience - Grenade, 31330
            </Badge>
          </div>

          <HeroTitle />

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-2xl bg-green px-8 py-6 text-base font-semibold text-white shadow-lg shadow-green/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-xl hover:shadow-green/30"
            >
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-2xl border-white/20 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Link href="/formations">Voir les formations</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="tel:0769748412"
              className="flex items-center gap-2.5 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
              aria-label="Appeler le 07 69 74 84 12"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              07 69 74 84 12 - Appelez-nous directement
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
