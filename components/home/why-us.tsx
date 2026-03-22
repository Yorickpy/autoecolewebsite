import {
  Camera,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MapPin,
  TrendingUp,
} from "lucide-react";

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
    desc: "Nous nous adaptons à votre emploi du temps. Cours en semaine, le week-end ou en soirée, trouvons ensemble le bon créneau.",
  },
];

const stats = [
  {
    value: "35+",
    label: "années d'expérience",
    bg: "bg-navy",
    text: "text-white",
    sub: "text-white/60",
  },
  {
    value: "4.8/5",
    label: "note moyenne Google",
    bg: "bg-green",
    text: "text-white",
    sub: "text-white/70",
  },
  {
    value: "100%",
    label: "suivi personnalisé",
    bg: "bg-green-light",
    text: "text-green-dark",
    sub: "text-green-dark/70",
  },
  {
    value: "Local",
    label: "ancré à Grenade",
    bg: "bg-secondary",
    text: "text-foreground",
    sub: "text-muted-foreground",
  },
];

export default function WhyUs() {
  return (
    <section
      className="bg-background py-20 md:py-28"
      aria-labelledby="why-us-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green">
              Pourquoi nous choisir
            </p>
            <h2
              id="why-us-title"
              className="mb-5 text-balance font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              Une auto-école qui place l'humain au centre
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Depuis plus de 35 ans, nous formons des conducteurs responsables
              et confiants. Notre engagement : votre réussite, à votre rythme,
              dans un cadre bienveillant et professionnel.
            </p>

            <dl className="flex flex-col gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-light">
                    <Icon className="h-5 w-5 text-green" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="mb-1 text-sm font-semibold text-foreground">
                      {title}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-xl">
              <div
                className="aspect-[4/5] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(10, 29, 61, 0.08) 0%, rgba(10, 29, 61, 0.78) 100%), url('/vitrine-auto-ecole.jpg')",
                }}
                role="img"
                aria-label="Photo de la vitrine de Grenade Auto-Ecole"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="max-w-sm rounded-2xl border border-white/15 bg-navy/85 p-5 text-white backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-2 text-green">
                    <Camera className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                      Notre agence
                    </span>
                  </div>
                  <p className="font-display text-2xl font-bold leading-tight">
                    Une vraie devanture, facile à repérer au coeur de Grenade
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>13C Allées Alsace Lorraine, 31330 Grenade</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map(({ value, label, bg, text, sub }) => (
                <div
                  key={label}
                  className={`${bg} flex flex-col gap-1 rounded-2xl p-7`}
                >
                  <span className={`font-display text-4xl font-bold ${text}`}>
                    {value}
                  </span>
                  <span className={`text-sm font-medium ${sub}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
