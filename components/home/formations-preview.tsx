import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Car, Gauge, Baby, GraduationCap, BookOpen, Target, Repeat } from "lucide-react";

const formations = [
  {
    icon: Car,
    title: "Permis B",
    badge: "Populaire",
    desc: "La formation classique pour conduire une voiture manuelle. Cours de code et leçons de conduite adaptés à votre rythme.",
  },
  {
    icon: Gauge,
    title: "Boîte automatique",
    badge: null,
    desc: "Apprenez à conduire avec une transmission automatique. Idéal pour simplifier votre expérience de conduite.",
  },
  {
    icon: Baby,
    title: "Conduite accompagnée (AAC)",
    badge: "Dès 15 ans",
    desc: "Commencez à conduire dès 15 ans avec un accompagnateur. Accumule de l'expérience avant l'examen.",
  },
  {
    icon: Target,
    title: "Conduite supervisée (CS)",
    badge: null,
    desc: "Après l'obtention du permis, continuez à vous entraîner en toute légalité avec un accompagnateur expérimenté.",
  },
  {
    icon: BookOpen,
    title: "Stage code",
    badge: null,
    desc: "Préparez efficacement le code de la route en stage intensif. Une méthode éprouvée pour réussir rapidement.",
  },
  {
    icon: GraduationCap,
    title: "Perfectionnement",
    badge: null,
    desc: "Améliorez votre niveau de conduite avec des leçons ciblées pour conducteurs déjà titulaires du permis.",
  },
  {
    icon: Repeat,
    title: "Passerelle auto → manuelle",
    badge: null,
    desc: "Vous avez le permis boîte auto ? Convertissez-le en boîte manuelle avec un nombre réduit de leçons.",
  },
];

export default function FormationsPreview() {
  return (
    <section
      className="py-20 md:py-28 bg-secondary"
      aria-labelledby="formations-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-2">
              Nos formations
            </p>
            <h2
              id="formations-title"
              className="font-display font-bold text-foreground text-3xl md:text-4xl text-balance"
            >
              Toutes les formations disponibles
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto rounded-xl border-border text-foreground hover:bg-green hover:text-white hover:border-green transition-all duration-200"
          >
            <Link href="/formations">
              Voir toutes les formations
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {formations.map(({ icon: Icon, title, badge, desc }) => (
            <article
              key={title}
              className="group flex flex-col bg-card rounded-2xl border border-border shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-light">
                  <Icon className="w-5 h-5 text-green" aria-hidden="true" />
                </div>
                {badge && (
                  <Badge className="bg-green/10 text-green border-green/20 text-xs font-medium">
                    {badge}
                  </Badge>
                )}
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {desc}
              </p>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="self-start -ml-2 text-green hover:text-green-dark hover:bg-green-light font-medium rounded-xl px-3 transition-colors duration-200"
              >
                <Link href="/formations" aria-label={`En savoir plus sur ${title}`}>
                  En savoir plus
                  <ArrowRight
                    className="w-3.5 h-3.5 ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
