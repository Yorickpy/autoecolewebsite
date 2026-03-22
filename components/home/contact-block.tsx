"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactBlock() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="py-20 md:py-28 bg-background"
      aria-labelledby="contact-block-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-green mb-2">
              Nous joindre
            </p>
            <h2
              id="contact-block-title"
              className="font-display font-bold text-foreground text-3xl md:text-4xl text-balance mb-5"
            >
              Une question ? Contactez-nous
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Notre équipe est disponible pour répondre à toutes vos questions
              sur les formations, les tarifs ou les inscriptions.
            </p>

            <address className="not-italic flex flex-col gap-5">
              <a
                href="tel:0769748412"
                className="flex items-center gap-4 group"
                aria-label="Appeler le 07 69 74 84 12"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-light group-hover:bg-green transition-colors duration-200">
                  <Phone
                    className="w-5 h-5 text-green group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Téléphone</p>
                  <p className="font-semibold text-foreground">07 69 74 84 12</p>
                </div>
              </a>

              <a
                href="mailto:grenade.autoecole@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Envoyer un email à grenade.autoecole@gmail.com"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-light group-hover:bg-green transition-colors duration-200">
                  <Mail
                    className="w-5 h-5 text-green group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <p className="font-semibold text-foreground">
                    grenade.autoecole@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-green-light">
                  <MapPin className="w-5 h-5 text-green" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Adresse</p>
                  <p className="font-semibold text-foreground">
                    13C Allées Alsace Lorraine
                    <br />
                    31330 Grenade, France
                  </p>
                </div>
              </div>
            </address>

            {/* Map placeholder */}
            <div
              className="mt-10 h-48 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden"
              role="img"
              aria-label="Carte de localisation — 13C Allées Alsace Lorraine, Grenade"
            >
              <div className="text-center">
                <MapPin className="w-8 h-8 text-green mx-auto mb-2" aria-hidden="true" />
                <p className="text-sm text-muted-foreground font-medium">
                  13C Allées Alsace Lorraine
                </p>
                <p className="text-xs text-muted-foreground">31330 Grenade</p>
                <a
                  href="https://maps.google.com/?q=13C+Allées+Alsace+Lorraine+31330+Grenade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-green hover:underline"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card rounded-2xl border border-border shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-green-light flex items-center justify-center">
                  <Send className="w-6 h-6 text-green" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl">
                  Message envoyé !
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
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
                <h3 className="font-display font-bold text-foreground text-xl mb-6">
                  Envoyer un message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  aria-label="Formulaire de contact"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jean Dupont"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean@exemple.fr"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Téléphone{" "}
                      <span className="text-muted-foreground font-normal">
                        (facultatif)
                      </span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Votre message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Bonjour, je souhaite avoir des informations sur..."
                      required
                      rows={4}
                      className="rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green hover:bg-green-dark text-white font-semibold rounded-xl py-5 shadow-sm transition-all duration-200 hover:shadow-md mt-1"
                  >
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    Envoyer le message
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
