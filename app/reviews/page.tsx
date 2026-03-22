import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Lucie M.",
    date: "Janvier 2025",
    rating: 5,
    formation: "Permis B",
    text: "Excellente auto-ecole ! Les moniteurs sont tres pedagogues et bienveillants. J'ai obtenu mon permis du premier coup grace a leur accompagnement personnalise. Je recommande vivement a tous !",
  },
  {
    name: "Thomas B.",
    date: "Decembre 2024",
    rating: 5,
    formation: "AAC",
    text: "Je recommande vivement Grenade Auto-Ecole. Ambiance agreable, moniteurs a l'ecoute. La formule AAC est top pour prendre confiance progressivement. Mon moniteur a su adapter sa pedagogie a mon rythme.",
  },
  {
    name: "Sophie R.",
    date: "Novembre 2024",
    rating: 5,
    formation: "Permis B",
    text: "Super equipe, tres professionnelle. Le suivi personnalise fait vraiment la difference. J'ai reussi mon code et mon permis en quelques mois seulement. Merci a toute l'equipe !",
  },
  {
    name: "Maxime L.",
    date: "Octobre 2024",
    rating: 5,
    formation: "Boite automatique",
    text: "Formation boite automatique super bien faite. Le moniteur est patient et explique tres bien. J'ai obtenu mon permis rapidement et en toute confiance.",
  },
  {
    name: "Emma D.",
    date: "Septembre 2024",
    rating: 4,
    formation: "Stage code",
    text: "Stage code intensif tres efficace. J'ai reussi du premier coup ! Le formateur est clair et les exercices bien cibles. Je recommande ce format pour gagner du temps.",
  },
  {
    name: "Nicolas F.",
    date: "Aout 2024",
    rating: 5,
    formation: "Perfectionnement",
    text: "J'avais mon permis depuis 2 ans mais manquais de confiance. Les seances de perfectionnement m'ont vraiment aide. Maintenant je conduis sereinement sur autoroute et en ville.",
  },
  {
    name: "Camille T.",
    date: "Juillet 2024",
    rating: 5,
    formation: "AAC",
    text: "Commence a 15 ans en conduite accompagnee, j'ai passe mon permis a 17 ans et demi. Toute l'equipe a ete au top du debut a la fin. Merci beaucoup !",
  },
  {
    name: "Antoine M.",
    date: "Juin 2024",
    rating: 5,
    formation: "Permis B",
    text: "Tres bonne auto-ecole. Accueil chaleureux, suivi serieux. Mon moniteur etait toujours disponible pour repondre a mes questions. Permis obtenu en 4 mois !",
  },
  {
    name: "Marie-Claire B.",
    date: "Mai 2024",
    rating: 5,
    formation: "Permis B",
    text: "Auto-ecole serieuse et professionnelle. A 45 ans, j'avais peur de me lancer, mais ils ont su me mettre en confiance des le premier cours. Permis reussi, je suis ravie !",
  },
];

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-6 w-6",
  };

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} etoiles sur 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${i < rating ? "fill-green text-green" : "fill-border text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = 4.8;
  const totalReviews = 47;
  const distribution = [
    { star: 5, count: 44 },
    { star: 4, count: 1 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 2 },
  ].map(({ star, count }) => ({
    star,
    count,
    pct: Math.round((count / totalReviews) * 100),
  }));

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-navy pb-16 pt-28 md:pb-20 md:pt-36" aria-label="En-tete avis">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green">
              Temoignages
            </p>
            <h1 className="mb-5 text-balance font-display text-4xl font-bold text-white md:text-5xl">
              Ce que disent nos eleves
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/60">
              Des centaines d'eleves nous font confiance chaque annee. Voici ce
              qu'ils pensent de leur experience chez Grenade Auto-Ecole.
            </p>
          </div>
        </section>

        <section className="bg-background py-14" aria-labelledby="rating-overview-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
                <h2 id="rating-overview-title" className="sr-only">
                  Note globale
                </h2>
                <span
                  className="font-display text-7xl font-bold text-foreground"
                  aria-label={`Note ${avgRating} sur 5`}
                >
                  {avgRating}
                </span>
                <StarRating rating={5} size="lg" />
                <p className="text-sm text-muted-foreground">
                  Base sur {totalReviews} avis Google verifies
                </p>
                <Button asChild variant="outline" size="sm" className="mt-1 rounded-xl">
                  <a
                    href="https://www.google.com/maps/search/Grenade+Auto-Ecole+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    aria-label="Lire tous les avis sur Google"
                  >
                    Voir sur Google
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-col gap-2" role="list" aria-label="Repartition des notes">
                {distribution.map(({ star, count, pct }) => (
                  <div key={star} className="flex items-center gap-3" role="listitem">
                    <span className="w-4 shrink-0 text-right text-sm text-muted-foreground">
                      {star}
                    </span>
                    <Star className="h-3.5 w-3.5 shrink-0 fill-green text-green" aria-hidden="true" />
                    <div
                      className="h-2 flex-1 overflow-hidden rounded-full bg-secondary"
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${star} etoiles : ${pct}%`}
                    >
                      <div className="h-full rounded-full bg-green" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-8 shrink-0 text-xs text-muted-foreground">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background pb-20 md:pb-28" aria-label="Avis des eleves">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map(({ name, date, rating, formation, text }) => (
                <blockquote
                  key={name}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-2">
                    <StarRating rating={rating} />
                    <Badge className="shrink-0 border-green/20 bg-green/10 text-xs font-medium text-green">
                      {formation}
                    </Badge>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{`"${text}"`}</p>
                  <footer className="flex items-center justify-between border-t border-border pt-4">
                    <cite className="font-display text-sm font-semibold not-italic text-foreground">
                      {name}
                    </cite>
                    <time className="text-xs text-muted-foreground">{date}</time>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Vous avez suivi une formation chez nous ? Partagez votre experience !
              </p>
              <Button
                asChild
                className="rounded-xl bg-green px-6 font-semibold text-white hover:bg-green-dark"
              >
                <a
                  href="https://www.google.com/maps/search/Grenade+Auto-Ecole"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Laisser un avis sur Google"
                >
                  Laisser un avis sur Google
                  <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
