import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Car,
  Gauge,
  Baby,
  Target,
  BookOpen,
  GraduationCap,
  Repeat,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const formations = [
  {
    icon: Car,
    title: "Permis B — Boîte manuelle",
    badge: "Le plus demandé",
    badgeColor: "bg-green/10 text-green border-green/20",
    desc: "La formation au permis B classique vous prépare à conduire tous les véhicules légers à boîte manuelle. Inclut les cours de code et les leçons de conduite sur route.",
    benefits: [
      "Cours de code sur tablette ou en salle",
      "Leçons de conduite progressives",
      "Entraînement au parcours d'examen",
      "Suivi individualisé par votre moniteur",
      "Examen blanc avant le passage",
    ],
  },
  {
    icon: Gauge,
    title: "Permis B — Boîte automatique",
    badge: null,
    badgeColor: "",
    desc: "Idéal si vous souhaitez conduire une voiture automatique. La formation est plus rapide et nécessite moins d'heures de conduite. Parfait pour les zones urbaines.",
    benefits: [
      "Moins d'heures requises qu'en manuelle",
      "Conduite simplifiée sans embrayage",
      "Valable sur tous les véhicules automatiques",
      "Possibilité de conversion vers manuelle",
    ],
  },
  {
    icon: Baby,
    title: "Conduite accompagnée (AAC)",
    badge: "Dès 15 ans",
    badgeColor: "bg-navy/10 text-navy border-navy/20",
    desc: "L'Apprentissage Anticipé de la Conduite permet de commencer dès 15 ans. Vous accumulez de l'expérience aux côtés d'un accompagnateur adulte avant de passer l'examen.",
    benefits: [
      "Éligible dès 15 ans",
      "Minimum 3 000 km d'expérience",
      "Tarif préférentiel à l'examen",
      "Accompagnateur formé chez nous",
      "Moins de risques d'accident à 18 ans",
    ],
  },
  {
    icon: Target,
    title: "Conduite supervisée (CS)",
    badge: null,
    badgeColor: "",
    desc: "Pour les conducteurs déjà titulaires du permis depuis moins de 5 ans. Continuez à vous entraîner légalement avec un accompagnateur pour gagner en assurance.",
    benefits: [
      "Permis obtenu depuis moins de 5 ans",
      "Accumule de l'expérience en toute légalité",
      "Réduction de la période probatoire",
      "Accompagnateur désigné par vos soins",
    ],
  },
  {
    icon: BookOpen,
    title: "Stage de code intensif",
    badge: null,
    badgeColor: "",
    desc: "Préparez et réussissez le code de la route en quelques jours seulement grâce à notre stage intensif. Méthode éprouvée avec des séries d'entraînement complètes.",
    benefits: [
      "Stage sur 2 à 3 jours",
      "Séries d'exercices complètes",
      "Simulateur d'examen inclus",
      "Taux de réussite très élevé",
    ],
  },
  {
    icon: GraduationCap,
    title: "Perfectionnement conduite",
    badge: null,
    badgeColor: "",
    desc: "Vous avez déjà votre permis mais manquez de confiance ? Nos séances de perfectionnement vous aident à maîtriser tous les contextes de conduite.",
    benefits: [
      "Ouvert à tous les conducteurs",
      "Conduite sur autoroute",
      "Manœuvres et stationnement",
      "Conduite de nuit",
      "Conduite en conditions difficiles",
    ],
  },
  {
    icon: Repeat,
    title: "Passerelle auto → manuelle",
    badge: null,
    badgeColor: "",
    desc: "Vous avez le permis boîte automatique et souhaitez conduire des véhicules manuels ? Quelques heures de formation suffisent pour lever la restriction.",
    benefits: [
      "Nombre d'heures réduit",
      "Levée officielle de la restriction",
      "Suivi personnalisé",
      "Tarif avantageux",
    ],
  },
];

export default function FormationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-navy pt-28 pb-16 md:pt-36 md:pb-20" aria-label="En-tête formations">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-3">
              Nos formations
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance mb-5">
              Toutes nos formations disponibles
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Que vous soyez débutant ou conducteur confirmé, nous avons la
              formation adaptée à votre situation et à votre budget.
            </p>
          </div>
        </section>

        {/* Formations grid */}
        <section
          className="py-16 md:py-24 bg-background"
          aria-label="Détails des formations"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {formations.map(({ icon: Icon, title, badge, badgeColor, desc, benefits }) => (
                <article
                  key={title}
                  className="group bg-card rounded-2xl border border-border shadow-sm p-8 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-green-light">
                        <Icon className="w-5 h-5 text-green" aria-hidden="true" />
                      </div>
                      <h2 className="font-display font-bold text-foreground text-lg leading-snug text-balance">
                        {title}
                      </h2>
                    </div>
                    {badge && (
                      <Badge className={`${badgeColor} shrink-0 text-xs font-medium`}>
                        {badge}
                      </Badge>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>

                  {/* Benefits */}
                  <ul className="flex flex-col gap-2" aria-label={`Avantages de ${title}`}>
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 text-green shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full mt-auto bg-green hover:bg-green-dark text-white font-semibold rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <Link href="/contact" aria-label={`Demander des informations sur ${title}`}>
                      Demander des informations
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-green-light py-14" aria-label="Appel à l'action">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-3 text-balance">
              Vous ne savez pas quelle formation choisir ?
            </h2>
            <p className="text-muted-foreground mb-7">
              Contactez-nous et nous vous orienterons vers la formation la mieux
              adaptée à votre profil et votre budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green hover:bg-green-dark text-white font-semibold rounded-xl px-8"
              >
                <Link href="/contact">Prendre contact</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border rounded-xl px-8"
              >
                <a href="tel:0769748412">07 69 74 84 12</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
