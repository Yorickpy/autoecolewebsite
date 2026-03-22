import { CheckCircle2, HeartHandshake, TrendingUp, Clock3 } from "lucide-react";

const points = [
  {
    icon: CheckCircle2,
    title: "Un taux de réussite élevé",
    desc: "Grâce à notre méthode pédagogique éprouvée et à un suivi rigoureux, nos élèves obtiennent leur permis avec un excellent taux de réussite.",
  },
  {
    icon: HeartHandshake,
    title: "Écoute et bienveillance",
    desc: "Chaque élève est unique. Nos moniteurs adaptent leur pédagogie à votre personnalité, vos besoins et votre niveau de départ.",
  },
  {
    icon: TrendingUp,
    title: "Des formations complètes",
    desc: "Du code à la conduite, nous proposons des formations variées pour tous les profils, avec des ressources modernes et des outils numériques.",
  },
  {
    icon: Clock3,
    title: "Horaires flexibles",
    desc: "Nous nous adaptons à votre emploi du temps. Cours en semaine, le week-end ou en soirée — trouvons ensemble le bon créneau.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-20 md:py-28 bg-background"
      aria-labelledby="why-us-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-2">
              Pourquoi nous choisir
            </p>
            <h2
              id="why-us-title"
              className="font-display font-bold text-foreground text-3xl md:text-4xl text-balance mb-5"
            >
              Une auto-école qui place l'humain au centre
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              Depuis plus de 35 ans, nous formons des conducteurs responsables
              et confiants. Notre engagement : votre réussite, à votre rythme,
              dans un cadre bienveillant et professionnel.
            </p>

            <dl className="flex flex-col gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-green-light">
                    <Icon className="w-5 h-5 text-green" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="font-display font-semibold text-foreground text-sm mb-1">
                      {title}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: "35+", label: "années d'expérience", bg: "bg-navy", text: "text-white", sub: "text-white/60" },
              { value: "4.8/5", label: "note moyenne Google", bg: "bg-green", text: "text-white", sub: "text-white/70" },
              { value: "100%", label: "suivi personnalisé", bg: "bg-green-light", text: "text-green-dark", sub: "text-green-dark/70" },
              { value: "Local", label: "ancré à Grenade", bg: "bg-secondary", text: "text-foreground", sub: "text-muted-foreground" },
            ].map(({ value, label, bg, text, sub }) => (
              <div
                key={label}
                className={`${bg} rounded-2xl p-7 flex flex-col gap-1`}
              >
                <span className={`font-display font-bold text-4xl ${text}`}>
                  {value}
                </span>
                <span className={`text-sm font-medium ${sub}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
