import { ShieldCheck, Users, MapPin, Star } from "lucide-react";

const badges = [
  {
    icon: Star,
    title: "35 ans d'expérience",
    desc: "Une auto-école de confiance depuis 1990",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    desc: "Un suivi adapté à chaque élève, à votre rythme",
  },
  {
    icon: MapPin,
    title: "Auto-école locale",
    desc: "Ancrage fort dans la communauté de Grenade",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité avant tout",
    desc: "La sécurité routière au cœur de notre pédagogie",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-16 bg-background"
      aria-label="Nos engagements"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-light">
                <Icon className="w-5 h-5 text-green" aria-hidden="true" />
              </div>
              <dt className="font-display font-semibold text-foreground text-base leading-snug">
                {title}
              </dt>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
