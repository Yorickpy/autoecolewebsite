import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Lucie M.",
    date: "Janvier 2025",
    rating: 5,
    text: "Excellente auto-école ! Les moniteurs sont très pédagogues et bienveillants. J'ai obtenu mon permis du premier coup grâce à leur accompagnement.",
  },
  {
    name: "Thomas B.",
    date: "Décembre 2024",
    rating: 5,
    text: "Je recommande vivement Grenade Auto-École. Ambiance agréable, moniteurs à l'écoute. La formule AAC est top pour prendre confiance progressivement.",
  },
  {
    name: "Sophie R.",
    date: "Novembre 2024",
    rating: 5,
    text: "Super équipe, très professionnel. Le suivi personnalisé fait vraiment la différence. J'ai réussi mon code et mon permis en quelques mois seulement.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} étoiles sur 5`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-green text-green" : "text-border"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function ReviewsPreview() {
  return (
    <section
      className="py-20 md:py-28 bg-navy"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-2">
              Témoignages
            </p>
            <h2
              id="reviews-title"
              className="font-display font-bold text-white text-3xl md:text-4xl"
            >
              Ce que disent nos élèves
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5" aria-label="Note 4,8 sur 5" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-green text-green"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-white font-display font-bold text-xl">4.8</span>
              <span className="text-white/50 text-sm">/5 sur Google</span>
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-200"
          >
            <Link href="/reviews">
              Tous les avis
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(({ name, date, rating, text }) => (
            <blockquote
              key={name}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-200"
            >
              <StarRating rating={rating} />
              <p className="text-white/80 text-sm leading-relaxed flex-1">{`"${text}"`}</p>
              <footer className="flex items-center justify-between">
                <cite className="not-italic font-semibold text-white text-sm">
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
