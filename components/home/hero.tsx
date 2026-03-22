import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      aria-label="Présentation"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Green glow top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-green opacity-10 blur-3xl" />
        {/* Subtle bottom left */}
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-green opacity-5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge className="bg-green/15 text-green border-green/20 font-medium px-4 py-1.5 text-sm rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" aria-hidden="true" />
              35 ans d'expérience — Grenade, 31330
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-white text-balance leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Votre permis de conduire,{" "}
            <span className="text-green">en toute sécurité</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-pretty">
            Depuis 35 ans, Grenade Auto-École vous accompagne avec un suivi
            personnalisé et une pédagogie centrée sur la sécurité routière.
            Permis B, AAC, boîte automatique et bien plus.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-green hover:bg-green-dark text-white font-semibold rounded-2xl px-8 py-6 text-base shadow-lg shadow-green/25 transition-all duration-200 hover:shadow-xl hover:shadow-green/30 hover:-translate-y-0.5"
            >
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white bg-white/5 hover:bg-white/10 font-semibold rounded-2xl px-8 py-6 text-base backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link href="/formations">Voir les formations</Link>
            </Button>
          </div>

          {/* Phone */}
          <div className="mt-10 flex items-center gap-3">
            <a
              href="tel:0769748412"
              className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-200 text-sm font-medium"
              aria-label="Appeler le 07 69 74 84 12"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              07 69 74 84 12 — Appelez-nous directement
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
