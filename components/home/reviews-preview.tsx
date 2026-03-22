import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Lucie M.",
    date: "Janvier 2025",
    rating: 5,
    text: "Excellente auto-ecole ! Les moniteurs sont tres pedagogues et bienveillants. J'ai obtenu mon permis du premier coup grace a leur accompagnement.",
  },
  {
    name: "Thomas B.",
    date: "Decembre 2024",
    rating: 5,
    text: "Je recommande vivement Grenade Auto-Ecole. Ambiance agreable, moniteurs a l'ecoute. La formule AAC est top pour prendre confiance progressivement.",
  },
  {
    name: "Sophie R.",
    date: "Novembre 2024",
    rating: 5,
    text: "Super equipe, tres professionnel. Le suivi personnalise fait vraiment la difference. J'ai reussi mon code et mon permis en quelques mois seulement.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} etoiles sur 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-green text-green" : "text-border"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPreview() {
  return (
    <section className="bg-navy py-20 md:py-28" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green">
              Temoignages
            </p>
            <h2
              id="reviews-title"
              className="font-display text-3xl font-bold text-white md:text-4xl"
            >
              Ce que disent nos eleves
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5" aria-label="Note 4,8 sur 5" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-green text-green"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="font-display text-xl font-bold text-white">4.8</span>
              <span className="text-sm text-white/50">/5 sur Google · 47 avis</span>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start rounded-xl border-white/20 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 md:self-auto"
          >
            <Link href="/reviews">
              Tous les avis
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map(({ name, date, rating, text }) => (
            <blockquote
              key={name}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:bg-white/8"
            >
              <StarRating rating={rating} />
              <p className="flex-1 text-sm leading-relaxed text-white/80">{`"${text}"`}</p>
              <footer className="flex items-center justify-between">
                <cite className="text-sm font-semibold not-italic text-white">
                  {name}
                </cite>
                <time className="text-xs text-white/40">{date}</time>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
