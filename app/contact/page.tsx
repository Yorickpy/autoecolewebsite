"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock3, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "07 69 74 84 12",
    href: "tel:0769748412",
    desc: "Du lundi au samedi, 8h — 19h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "grenade.autoecole@gmail.com",
    href: "mailto:grenade.autoecole@gmail.com",
    desc: "Réponse sous 24 à 48h",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "13C Allées Alsace Lorraine, 31330 Grenade",
    href: "https://maps.google.com/?q=13C+Allées+Alsace+Lorraine+31330+Grenade",
    desc: "France — Haute-Garonne",
  },
  {
    icon: Clock3,
    label: "Horaires",
    value: "Lun — Sam : 8h00 — 19h00",
    href: null,
    desc: "Fermé les dimanches et jours fériés",
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
        {/* Hero */}
        <section className="bg-navy pt-28 pb-16 md:pt-36 md:pb-20" aria-label="En-tête contact">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-3">
              Contact
            </p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl text-balance mb-5">
              Parlons de votre projet
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Vous souhaitez vous inscrire, obtenir un devis ou simplement poser
              une question ? Notre équipe est là pour vous aider.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-16 md:py-24 bg-background" aria-label="Informations de contact et formulaire">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left — Contact info */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Contact cards */}
                <address className="not-italic flex flex-col gap-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, desc }) => {
                    const Wrapper = href ? "a" : "div";
                    const wrapperProps = href
                      ? {
                          href,
                          ...(href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {}),
                          className:
                            "group flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200",
                          "aria-label": `${label} : ${value}`,
                        }
                      : {
                          className:
                            "flex items-start gap-4 p-5 bg-card rounded-2xl border border-border shadow-sm",
                        };

                    return (
                      <Wrapper key={label} {...(wrapperProps as React.HTMLAttributes<HTMLElement>)}>
                        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-green-light shrink-0 group-hover:bg-green transition-colors duration-200">
                          <Icon
                            className="w-5 h-5 text-green group-hover:text-white transition-colors duration-200"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-0.5">
                            {label}
                          </p>
                          <p className="font-semibold text-foreground text-sm leading-snug">
                            {value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                        </div>
                      </Wrapper>
                    );
                  })}
                </address>

                {/* Map placeholder */}
                <div
                  className="flex-1 min-h-48 rounded-2xl bg-secondary border border-border flex flex-col items-center justify-center gap-3 p-6 text-center"
                  role="img"
                  aria-label="Carte de localisation — 13C Allées Alsace Lorraine, 31330 Grenade"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-light flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      13C Allées Alsace Lorraine
                    </p>
                    <p className="text-xs text-muted-foreground">31330 Grenade, France</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=13C+Allées+Alsace+Lorraine+31330+Grenade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green hover:text-green-dark font-medium underline underline-offset-2 transition-colors duration-200"
                    aria-label="Ouvrir dans Google Maps (ouvre dans un nouvel onglet)"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>

                {/* Phone CTA */}
                <a
                  href="tel:0769748412"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors duration-200"
                  aria-label="Appeler le 07 69 74 84 12"
                >
                  <Phone className="w-4 h-4 text-green" aria-hidden="true" />
                  Appeler directement — 07 69 74 84 12
                </a>
              </div>

              {/* Right — Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center gap-5 py-20 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-green" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-foreground text-2xl mb-2">
                          Message envoyé !
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Merci pour votre message. Nous vous répondrons dans les
                          plus brefs délais, généralement sous 24 à 48h.
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="rounded-xl mt-2"
                        onClick={() => setSubmitted(false)}
                      >
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-foreground text-2xl mb-2">
                        Envoyer un message
                      </h2>
                      <p className="text-muted-foreground text-sm mb-8">
                        Remplissez le formulaire ci-dessous et nous vous répondrons
                        rapidement.
                      </p>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                        aria-label="Formulaire de contact"
                        noValidate
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label
                              htmlFor="contact-name"
                              className="text-sm font-medium text-foreground"
                            >
                              Prénom et nom
                            </label>
                            <Input
                              id="contact-name"
                              name="name"
                              placeholder="Jean Dupont"
                              required
                              className="rounded-xl h-11"
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
                              className="rounded-xl h-11"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-phone"
                            className="text-sm font-medium text-foreground"
                          >
                            Téléphone{" "}
                            <span className="text-muted-foreground font-normal">
                              (facultatif)
                            </span>
                          </label>
                          <Input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            placeholder="06 XX XX XX XX"
                            className="rounded-xl h-11"
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
                            placeholder="Inscription — Permis B, Devis, Question..."
                            required
                            className="rounded-xl h-11"
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
                            className="rounded-xl resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-green hover:bg-green-dark text-white font-semibold rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
                        >
                          <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                          Envoyer le message
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Vos données sont traitées conformément à notre{" "}
                          <a
                            href="/confidentialite"
                            className="underline hover:text-foreground transition-colors duration-200"
                          >
                            politique de confidentialité
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
