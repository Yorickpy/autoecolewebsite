"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactBlock() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className="bg-background py-20 md:py-28"
      aria-labelledby="contact-block-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-green">
              Nous joindre
            </p>
            <h2
              id="contact-block-title"
              className="mb-5 text-balance font-display text-3xl font-bold text-foreground md:text-4xl"
            >
              Une question ? Contactez-nous
            </h2>
            <p className="mb-10 leading-relaxed text-muted-foreground">
              Notre equipe est disponible pour repondre a toutes vos questions
              sur les formations, les tarifs ou les inscriptions.
            </p>

            <address className="flex flex-col gap-5 not-italic">
              <a
                href="tel:0769748412"
                className="group flex items-center gap-4"
                aria-label="Appeler le 07 69 74 84 12"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-light transition-colors duration-200 group-hover:bg-green">
                  <Phone
                    className="h-5 w-5 text-green transition-colors duration-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="mb-0.5 text-xs text-muted-foreground">Telephone</p>
                  <p className="font-semibold text-foreground">07 69 74 84 12</p>
                </div>
              </a>

              <a
                href="mailto:grenade.autoecole@gmail.com"
                className="group flex items-center gap-4"
                aria-label="Envoyer un email a grenade.autoecole@gmail.com"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-light transition-colors duration-200 group-hover:bg-green">
                  <Mail
                    className="h-5 w-5 text-green transition-colors duration-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="mb-0.5 text-xs text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">
                    grenade.autoecole@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-light">
                  <MapPin className="h-5 w-5 text-green" aria-hidden="true" />
                </span>
                <div>
                  <p className="mb-0.5 text-xs text-muted-foreground">Adresse</p>
                  <p className="font-semibold text-foreground">
                    13C Allees Alsace Lorraine
                    <br />
                    31330 Grenade, France
                  </p>
                </div>
              </div>
            </address>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
              <iframe
                title="Carte de localisation - Grenade Auto-Ecole"
                src="https://www.google.com/maps?q=13C%20Allees%20Alsace%20Lorraine%2C%2031330%20Grenade&z=16&output=embed"
                className="h-56 w-full border-0"
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
                  className="text-xs font-medium text-green transition-colors duration-200 hover:text-[#e33292]"
                >
                  Ouvrir Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-light">
                  <Send className="h-6 w-6 text-green" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Message envoye !
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous vous repondrons dans les plus brefs delais.
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
                <h3 className="mb-6 font-display text-xl font-bold text-foreground">
                  Envoyer un message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  aria-label="Formulaire de contact"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      Telephone{" "}
                      <span className="font-normal text-muted-foreground">
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
                      className="resize-none rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-1 w-full rounded-xl bg-green py-5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-dark hover:shadow-md"
                  >
                    <Send className="mr-2 h-4 w-4" aria-hidden="true" />
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
