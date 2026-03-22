import Link from "next/link";
import { Car, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Label Qualité", href: "/label" },
  { label: "Avis", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const formations = [
  { label: "Permis B", href: "/formations" },
  { label: "Boîte automatique", href: "/formations" },
  { label: "Conduite accompagnée (AAC)", href: "/formations" },
  { label: "Conduite supervisée (CS)", href: "/formations" },
  { label: "Stage code", href: "/formations" },
  { label: "Perfectionnement", href: "/formations" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
              aria-label="Grenade Auto-École — Accueil"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-green text-white">
                <Car className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="font-display font-bold text-base text-navy-foreground">
                Grenade Auto-École
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Depuis 35 ans votre sécurité est notre priorité. Auto-école locale
              à Grenade, Haute-Garonne.
            </p>
            <a
              href="https://www.google.com/maps/search/Grenade+Auto-École"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-green hover:text-white transition-colors duration-200 font-medium"
              aria-label="Voir sur Google Maps (ouvre dans un nouvel onglet)"
            >
              Voir sur Google Maps
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Formations
            </h2>
            <ul className="flex flex-col gap-2.5" role="list">
              {formations.map((f) => (
                <li key={f.label}>
                  <Link
                    href={f.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h2>
            <address className="not-italic flex flex-col gap-4">
              <a
                href="tel:0769748412"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
                aria-label="Appeler le 07 69 74 84 12"
              >
                <Phone
                  className="w-4 h-4 text-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                07 69 74 84 12
              </a>
              <a
                href="mailto:grenade.autoecole@gmail.com"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200 break-all"
                aria-label="Envoyer un email à grenade.autoecole@gmail.com"
              >
                <Mail
                  className="w-4 h-4 text-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                grenade.autoecole@gmail.com
              </a>
              <span className="flex items-start gap-3 text-sm text-white/70">
                <MapPin
                  className="w-4 h-4 text-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                13C Allées Alsace Lorraine
                <br />
                31330 Grenade, France
              </span>
            </address>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Grenade Auto-École. Tous droits
            réservés.
          </p>
          <nav aria-label="Liens légaux">
            <ul className="flex items-center gap-4" role="list">
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-white transition-colors duration-200"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="hover:text-white transition-colors duration-200"
                >
                  Confidentialité
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
