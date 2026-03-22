import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Label Qualite", href: "/label" },
  { label: "Avis", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const formations = [
  { label: "Permis B", href: "/formations" },
  { label: "Boite automatique", href: "/formations" },
  { label: "Conduite accompagnee (AAC)", href: "/formations" },
  { label: "Conduite supervisee (CS)", href: "/formations" },
  { label: "Stage code", href: "/formations" },
  { label: "Perfectionnement", href: "/formations" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center gap-2"
              aria-label="Grenade Auto-Ecole - Accueil"
            >
              <Image
                src="/grenade-logo.png"
                alt="Logo Grenade Auto-Ecole"
                width={320}
                height={110}
                className="h-auto w-[185px] object-contain sm:w-[210px]"
              />
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-white/60">
              Depuis 35 ans votre securite est notre priorite. Auto-ecole locale
              a Grenade, Haute-Garonne.
            </p>
            <a
              href="https://www.google.com/maps/search/Grenade+Auto-Ecole"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-green transition-colors duration-200 hover:text-white"
              aria-label="Voir sur Google Maps"
            >
              Voir sur Google Maps
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Formations
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {formations.map((formation) => (
                <li key={formation.label}>
                  <Link
                    href={formation.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {formation.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h2>
            <address className="flex flex-col gap-4 not-italic">
              <a
                href="tel:0769748412"
                className="group flex items-start gap-3 text-sm text-white/70 transition-colors duration-200 hover:text-white"
                aria-label="Appeler le 07 69 74 84 12"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                07 69 74 84 12
              </a>
              <a
                href="mailto:grenade.autoecole@gmail.com"
                className="flex items-start gap-3 break-all text-sm text-white/70 transition-colors duration-200 hover:text-white"
                aria-label="Envoyer un email a grenade.autoecole@gmail.com"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                grenade.autoecole@gmail.com
              </a>
              <span className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden="true" />
                13C Allees Alsace Lorraine
                <br />
                31330 Grenade, France
              </span>
            </address>
          </div>
        </div>

        <Separator className="mb-6 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Grenade Auto-Ecole. Tous droits reserves.</p>
          <nav aria-label="Liens legaux">
            <ul className="flex items-center gap-4" role="list">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="transition-colors duration-200 hover:text-white"
                >
                  Confidentialite
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
