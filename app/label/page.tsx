import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  ClipboardList,
  ShieldCheck,
  Users,
  Clock3,
  MessageSquare,
  CreditCard,
  Award,
  CheckCircle2,
} from "lucide-react";

const labelSections = [
  {
    id: "objectifs",
    icon: Target,
    title: "Objectifs de la formation",
    badge: "Pédagogie",
    content: `Notre programme de formation vise à former des conducteurs responsables, autonomes et respectueux du code de la route. Chaque élève suit un parcours structuré incluant : la maîtrise du véhicule, la gestion des situations de trafic complexes, la connaissance approfondie du code de la route et le développement d'une conduite éco-responsable. Nos objectifs pédagogiques sont alignés sur le référentiel national officiel.`,
    points: [
      "Maîtrise technique du véhicule",
      "Comportement responsable sur la route",
      "Gestion des situations d'urgence",
      "Éco-conduite et respect de l'environnement",
      "Autonomie du conducteur",
    ],
  },
  {
    id: "suivi",
    icon: ClipboardList,
    title: "Suivi post-permis",
    badge: "Accompagnement",
    content: `Obtenir son permis n'est que le début. Nous proposons un suivi post-permis pour les nouveaux conducteurs afin de renforcer leur confiance et consolider leurs acquis. Ce suivi comprend des rendez-vous de conduite accompagnée après l'obtention du permis, des conseils personnalisés et un accès à des ressources pédagogiques complémentaires.`,
    points: [
      "Séances de conduite post-permis disponibles",
      "Conseils sur l'entretien du véhicule",
      "Accès aux ressources en ligne",
      "Suivi de la période probatoire",
    ],
  },
  {
    id: "evaluation",
    icon: Award,
    title: "Évaluation initiale",
    badge: "Diagnostic",
    content: `Avant de débuter votre formation, nous réalisons une évaluation complète de votre niveau. Cela nous permet d'adapter le nombre d'heures, le rythme et la méthode pédagogique à votre profil. L'évaluation porte sur vos connaissances théoriques et pratiques, votre comportement au volant si vous avez déjà conduit, et vos objectifs personnels.`,
    points: [
      "Entretien d'accueil personnalisé",
      "Évaluation de conduite sur route (si déjà conduit)",
      "Test de connaissances du code",
      "Définition d'un parcours de formation sur mesure",
    ],
  },
  {
    id: "reglement",
    icon: ShieldCheck,
    title: "Règlement intérieur",
    badge: "Organisation",
    content: `Notre règlement intérieur garantit un cadre serein et bienveillant pour tous nos élèves. Il définit les droits et devoirs de chacun, les modalités de réservation et d'annulation des leçons, les règles de comportement au sein de l'auto-école, ainsi que les procédures en cas de litige.`,
    points: [
      "Annulation minimum 48h à l'avance",
      "Respect mutuel élèves / moniteurs",
      "Tenue appropriée exigée",
      "Ponctualité requise",
      "Politique de remboursement transparente",
    ],
  },
  {
    id: "aac-cs",
    icon: Users,
    title: "Avantages AAC & CS",
    badge: "Conduite accompagnée",
    content: `L'Apprentissage Anticipé de la Conduite (AAC) et la Conduite Supervisée (CS) offrent de nombreux avantages. Des études montrent que les conducteurs formés via ces filières ont significativement moins d'accidents dans les premières années. En plus d'une meilleure sécurité, ces filières offrent des avantages tarifaires à l'examen et permettent de réduire la période probatoire.`,
    points: [
      "Réduction du risque d'accident de 50 %",
      "Tarif préférentiel à l'examen",
      "Permis en 2 ans au lieu de 3",
      "Plus grande confiance au volant",
      "Accompagnateur formé par nos soins",
    ],
  },
  {
    id: "horaires",
    icon: Clock3,
    title: "Horaires et disponibilités",
    badge: "Planning",
    content: `Nous nous adaptons à votre emploi du temps. Nos créneaux de conduite sont disponibles du lundi au samedi, de 8h à 19h. Les cours de code ont lieu en salle et en ligne. Nous proposons également des créneaux tôt le matin ou en soirée pour les personnes qui travaillent.`,
    points: [
      "Lundi — Samedi : 8h00 — 19h00",
      "Cours de code en salle et à distance",
      "Créneaux matin, midi, soir disponibles",
      "Réservation en ligne ou par téléphone",
    ],
  },
  {
    id: "reclamations",
    icon: MessageSquare,
    title: "Gestion des réclamations",
    badge: "Qualité",
    content: `La satisfaction de nos élèves est notre priorité. Si vous avez une réclamation ou une remarque, plusieurs canaux sont disponibles : en vous adressant directement à l'accueil, par email à grenade.autoecole@gmail.com, ou par courrier postal. Toute réclamation est traitée dans un délai de 10 jours ouvrés. En cas de désaccord persistant, nous vous orienterons vers les voies de médiation adaptées.`,
    points: [
      "Traitement sous 10 jours ouvrés",
      "Contact direct ou par email",
      "Médiateur de la consommation disponible",
      "Suivi de chaque dossier",
    ],
  },
  {
    id: "financement",
    icon: CreditCard,
    title: "Financement & aides",
    badge: "Budget",
    content: `Nous vous aidons à financer votre permis de conduire. Plusieurs solutions existent : le Compte Personnel de Formation (CPF) pour les demandeurs d'emploi, l'aide au permis de conduire de 1 200 € pour les jeunes de 15 à 25 ans, des facilités de paiement en plusieurs fois. N'hésitez pas à nous contacter pour étudier les options disponibles selon votre situation.`,
    points: [
      "CPF — Compte Personnel de Formation",
      "Aide permis jeune (15-25 ans) — 1 200 €",
      "Paiement en 3 fois sans frais",
      "Devis gratuit et sans engagement",
    ],
  },
];

export default function LabelPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 md:pt-36 md:pb-20" aria-label="En-tête label qualité">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-3">
              Label qualité
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance mb-5">
              Notre engagement qualité
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Transparence, pédagogie et professionnalisme. Découvrez tout ce
              qui fait la qualité de notre formation et de notre accompagnement.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-green" aria-label="Chiffres clés">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "35+", label: "ans d'expérience" },
                { value: "4.8/5", label: "note Google" },
                { value: "8", label: "formations proposées" },
                { value: "100%", label: "suivi personnalisé" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display font-bold text-white text-3xl">
                    {value}
                  </dd>
                  <span className="text-white/70 text-sm">{label}</span>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Cards grid (top 4) */}
        <section className="py-16 md:py-24 bg-background" aria-labelledby="label-overview-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="label-overview-title"
              className="font-display font-bold text-foreground text-2xl md:text-3xl mb-10 text-balance"
            >
              Les piliers de notre qualité
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {labelSections.slice(0, 4).map(({ id, icon: Icon, title, badge, points }) => (
                <div
                  key={id}
                  className="bg-card rounded-2xl border border-border shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-light">
                      <Icon className="w-5 h-5 text-green" aria-hidden="true" />
                    </div>
                    <Badge className="bg-secondary text-muted-foreground border-0 text-xs">
                      {badge}
                    </Badge>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base leading-snug">
                    {title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {points.slice(0, 3).map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 text-green shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-muted-foreground leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Accordion for details */}
            <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-6 text-balance">
              Informations détaillées
            </h2>
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {labelSections.map(({ id, icon: Icon, title, content, points }) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="bg-card rounded-2xl border border-border shadow-sm px-6 data-[state=open]:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="hover:no-underline py-5 gap-4">
                    <span className="flex items-center gap-3 text-left">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-light shrink-0">
                        <Icon className="w-4 h-4 text-green" aria-hidden="true" />
                      </span>
                      <span className="font-display font-semibold text-foreground text-base">
                        {title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {content}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 text-green shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-sm text-foreground">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
