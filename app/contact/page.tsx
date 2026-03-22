"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telephone",
    value: "07 69 74 84 12",
    href: "tel:0769748412",
    desc: "Du lundi au samedi, 8h - 19h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "grenade.autoecole@gmail.com",
    href: "mailto:grenade.autoecole@gmail.com",
    desc: "Reponse sous 24 a 48h",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "13C Allees Alsace Lorraine, 31330 Grenade",
    href: "https://maps.google.com/?q=13C+Allees+Alsace+Lorraine+31330+Grenade",
    desc: "France - Haute-Garonne",
  },
  {
    icon: Clock3,
    label: "Horaires",
    value: "Lun - Sam : 8h00 - 19h00",
    href: null,
    desc: "Ferme les dimanches et jours feries",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main>
        <section
          className="bg-navy pb-16 pt-28 md:pb-20 md:pt-36"
          aria-label="En-tete contact"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-green">
              Contact
            </p>
            <h1 className="mb-5 text-balance font-display text-4xl font-bold text-white md:text-5xl">
              Parlons de votre projet
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/60">
              Vous souhaitez vous inscrire, obtenir un devis ou simplement poser
              une question ? Notre equipe est la pour vous aider.
            </p>
          </div>
        </section>

        <section
          className="bg-background py-16 md:py-24"
          aria-label="Informations de contact et formulaire"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="flex flex-col gap-6 lg:col-span-2">
                <address className="flex flex-col gap-4 not-italic">
                  {contactInfo.map(({ icon: Icon, label, value, href, desc }) => {
                    const Wrapper = href ? "a" : "div";
                    const wrapperProps = href
                      ? {
                          href,
                          ...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {}),
                          className:
                            "group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                          "aria-label": `${label} : ${value}`,
                        }
                      : {
                          className:
                            "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm",
                        };

                    return (
                      <Wrapper
                        key={label}
                        {...(wrapperProps as React.HTMLAttributes<HTMLElement>)}
                      >
                        <span className="group-hover:bg-green flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-light transition-colors duration-200">
                          <Icon
                            className="h-5 w-5 text-green transition-colors duration-200 group-hover:text-white"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="mb-0.5 text-xs font-medium text-muted-foreground">
                            {label}
                          </p>
                          <p className="text-sm font-semibold leading-snug text-foreground">
                            {value}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </address>

                <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
                  <iframe
                    title="Carte de localisation - Grenade Auto-Ecole"
                    src="https://www.google.com/maps?q=13C%20Allees%20Alsace%20Lorraine%2C%2031330%20Grenade&z=16&output=embed"
                    className="min-h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        13C Allees Alsace Lorraine
                      </p>
                      <p className="text-xs text-muted-foreground">31330 Grenade, France</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=13C+Allees+Alsace+Lorraine+31330+Grenade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-green underline-offset-2 transition-colors duration-200 hover:text-[#e33292]"
                      aria-label="Ouvrir dans Google Maps"
                    >
                      Ouvrir Google Maps
                    </a>
                  </div>
                </div>

                <a
                  href="tel:0769748412"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-navy py-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy/90"
                  aria-label="Appeler le 07 69 74 84 12"
                >
                  <Phone className="h-4 w-4 text-green" aria-hidden="true" />
                  Appeler directement - 07 69 74 84 12
                </a>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-light">
                        <CheckCircle2 className="h-8 w-8 text-green" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                          Message envoye !
                        </h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          Merci pour votre message. Nous vous repondrons dans les
                          plus brefs delais, generalement sous 24 a 48h.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="mt-2 rounded-xl"
                        onClick={() => setSubmitted(false)}
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
                        Envoyer un message
                      </h2>
                      <p className="mb-8 text-sm text-muted-foreground">
                        Remplissez le formulaire ci-dessous et nous vous repondrons
                        rapidement.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                        aria-label="Formulaire de contact"
                        noValidate
                      >
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="contact-name"
                              className="text-sm font-medium text-foreground"
                            >
                              Prenom et nom
                            </label>
                            <Input
                              id="contact-name"
                              name="name"
                              placeholder="Jean Dupont"
                              required
                              className="h-11 rounded-xl"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="contact-email"
                              className="text-sm font-medium text-foreground"
                            >
                              Adresse email
                            </label>
                            <Input
                              id="contact-email"
                              name="email"
                              type="email"
                              placeholder="jean@exemple.fr"
                              required
                              className="h-11 rounded-xl"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Telephone{" "}
                            <span className="font-normal text-muted-foreground">
                              (facultatif)
                            </span>
                          </label>
                          <Input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="06 XX XX XX XX"
                            className="h-11 rounded-xl"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Sujet
                          </label>
                          <Input
                            id="contact-subject"
                            name="subject"
                            placeholder="Inscription - Permis B, Devis, Question..."
                            required
                            className="h-11 rounded-xl"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-message"
                            className="text-sm font-medium text-foreground"
                          >
                            Votre message
                          </label>
                          <Textarea
                            id="contact-message"
                            name="message"
                            placeholder="Bonjour, je souhaite m'inscrire pour une formation..."
                            required
                            rows={5}
                            className="resize-none rounded-xl"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full rounded-xl bg-green font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-dark hover:shadow-md"
                        >
                          <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                          Envoyer le message
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          Vos donnees sont traitees conformement a notre{" "}
                          <a
                            href="/confidentialite"
                            className="underline transition-colors duration-200 hover:text-foreground"
                          >
                            politique de confidentialite
                          </a>
                          .
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
