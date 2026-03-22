"use client";

import { useEffect, useState } from "react";

const TYPED_TEXT = "en toute securite :)";

export default function HeroTitle() {
  const [typedText, setTypedText] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingDelay = 62;
    const startDelay = 700;
    let intervalId: number | null = null;
    let caretTimeoutId: number | null = null;
    let paragraphTimeoutId: number | null = null;

    const startTimeout = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setTypedText(TYPED_TEXT.slice(0, index));

        if (index >= TYPED_TEXT.length) {
          if (intervalId !== null) {
            window.clearInterval(intervalId);
          }

          paragraphTimeoutId = window.setTimeout(() => {
            setShowParagraph(true);
          }, 120);

          caretTimeoutId = window.setTimeout(() => {
            setShowCaret(false);
          }, 450);
        }
      }, typingDelay);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      if (intervalId !== null) window.clearInterval(intervalId);
      if (caretTimeoutId !== null) window.clearTimeout(caretTimeoutId);
      if (paragraphTimeoutId !== null) window.clearTimeout(paragraphTimeoutId);
    };
  }, []);

  return (
    <>
      <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="block animate-hero-bounce-in">
          Votre permis de conduire,
        </span>
        <span className="mt-2 block text-green">
          <span>{typedText}</span>
          {showCaret ? <span className="hero-type-caret ml-1" aria-hidden="true" /> : null}
        </span>
      </h1>

      <p
        className={`mb-10 max-w-2xl text-lg leading-relaxed text-pretty text-white/65 transition-all duration-700 md:text-xl ${
          showParagraph
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
      >
        Depuis 35 ans, Grenade Auto-Ecole vous accompagne avec un suivi
        personnalise et une pedagogie centree sur la securite routiere. Permis
        B, AAC, boite automatique et bien plus.
      </p>
    </>
  );
}
