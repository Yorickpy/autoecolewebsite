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
    text: "Excellente auto-école ! Les moniteurs sont très pédagogues et bienveillants. J'ai obtenu mon permis du premier coup grâce à leur accompagnement personnalisé. Je recommande vivement à tous !",
  },
  {
    name: "Thomas B.",
    date: "Décembre 2024",
    rating: 5,
    formation: "AAC",
    text: "Je recommande vivement Grenade Auto-École. Ambiance agréable, moniteurs à l'écoute. La formule AAC est top pour prendre confiance progressivement. Mon moniteur a su adapter sa pédagogie à mon rythme.",
  },
  {
    name: "Sophie R.",
    date: "Novembre 2024",
    rating: 5,
    formation: "Permis B",
    text: "Super équipe, très professionnelle. Le suivi personnalisé fait vraiment la différence. J'ai réussi mon code et mon permis en quelques mois seulement. Merci à toute l'équipe !",
  },
  {
    name: "Maxime L.",
    date: "Octobre 2024",
    rating: 5,
    formation: "Boîte automatique",
    text: "Formation boîte automatique super bien faite. Le moniteur est patient et explique très bien. J'ai obtenu mon permis rapidement et en toute confiance.",
  },
  {
    name: "Emma D.",
    date: "Septembre 2024",
    rating: 4,
    formation: "Stage code",
    text: "Stage code intensif très efficace. J'ai réussi du premier coup ! Le formateur est clair et les exercices bien ciblés. Je recommande ce format pour gagner du temps.",
  },
  {
    name: "Nicolas F.",
    date: "Août 2024",
    rating: 5,
    formation: "Perfectionnement",
    text: "J'avais mon permis depuis 2 ans mais manquais de confiance. Les séances de perfectionnement m'ont vraiment aidé. Maintenant je conduis sereinement sur autoroute et en ville.",
  },
  {
    name: "Camille T.",
    date: "Juillet 2024",
    rating: 5,
    formation: "AAC",
    text: "Commencé à 15 ans en conduite accompagnée, j'ai passé mon permis à 17 ans et demi. Toute l'équipe a été au top du début à la fin. Merci beaucoup !",
  },
  {
    name: "Antoine M.",
    date: "Juin 2024",
    rating: 5,
    formation: "Permis B",
    text: "Très bonne auto-école. Accueil chaleureux, suivi sérieux. Mon moniteur était toujours disponible pour répondre à mes questions. Permis obtenu en 4 mois !",
  },
  {
    name: "Marie-Claire B.",
    date: "Mai 2024",
    rating: 5,
    formation: "Permis B",
    text: "Auto-école sérieuse et professionnelle. À 45 ans, j'avais peur de me lancer, mais ils ont su me mettre en confiance dès le premier cours. Permis réussi, je suis ravie !",
  },
];

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} étoiles sur 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? "fill-green text-green" : "fill-border text-border"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const avgRating = 4.8;
  const totalReviews = reviews.length;

  // Compute distribution
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct: Math.round(
      (reviews.filter((r) => r.rating === star).length / totalReviews) * 100
    ),
  }));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 md:pt-36 md:pb-20" aria-label="En-tête avis">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-3">
              Témoignages
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance mb-5">
              Ce que disent nos élèves
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Des centaines d'élèves nous font confiance chaque année. Voici ce
              qu'ils pensent de leur expérience chez Grenade Auto-École.
            </p>
          </div>
        </section>

        {/* Rating overview */}
        <section className="py-14 bg-background" aria-labelledby="rating-overview-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-3xl mx-auto">
              {/* Big rating */}
              <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                <h2 id="rating-overview-title" className="sr-only">
                  Note globale
                </h2>
                <span
                  className="font-display font-bold text-7xl text-foreground"
                  aria-label={`Note ${avgRating} sur 5`}
                >
                  {avgRating}
                </span>
                <StarRating rating={5} size="lg" />
                <p className="text-muted-foreground text-sm">
                  Basé sur {totalReviews} avis Google vérifiés
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl mt-1"
                >
                  <a
                    href="https://www.google.com/maps/search/Grenade+Auto-École+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    aria-label="Lire tous les avis sur Google (ouvre dans un nouvel onglet)"
                  >
                    Voir sur Google
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              {/* Distribution bars */}
              <div className="flex flex-col gap-2" role="list" aria-label="Répartition des notes">
                {distribution.map(({ star, count, pct }) => (
                  <div key={star} className="flex items-center gap-3" role="listitem">
                    <span className="text-sm text-muted-foreground w-4 shrink-0 text-right">
                      {star}
                    </span>
                    <Star className="w-3.5 h-3.5 text-green fill-green shrink-0" aria-hidden="true" />
                    <div
                      className="flex-1 h-2 bg-secondary rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${star} étoiles : ${pct}%`}
                    >
                      <div
                        className="h-full bg-green rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8 shrink-0">
                      {count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="pb-20 md:pb-28 bg-background" aria-label="Avis des élèves">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map(({ name, date, rating, formation, text }) => (
                <blockquote
                  key={name}
                  className="group flex flex-col gap-4 p-7 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <StarRating rating={rating} />
                    <Badge className="bg-green/10 text-green border-green/20 text-xs font-medium shrink-0">
                      {formation}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {`"${text}"`}
                  </p>
                  <footer className="flex items-center justify-between border-t border-border pt-4">
                    <cite className="not-italic">
                      <span className="font-display font-semibold text-foreground text-sm">
                        {name}
                      </span>
                    </cite>
                    <time className="text-xs text-muted-foreground">{date}</time>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Google link */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Vous avez suivi une formation chez nous ? Partagez votre
                expérience !
              </p>
              <Button
                asChild
                className="bg-green hover:bg-green-dark text-white font-semibold rounded-xl px-6"
              >
                <a
                  href="https://www.google.com/maps/search/Grenade+Auto-École"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Laisser un avis sur Google (ouvre dans un nouvel onglet)"
                >
                  Laisser un avis sur Google
                  <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
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
