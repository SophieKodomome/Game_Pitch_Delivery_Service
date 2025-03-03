import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";

export default function MyLoreSection() {
  gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger
  const sectionsRef = useRef(null);

  useGSAP(() => {
    // ✅ Splitting Text into Words
    const text = new SplitType("#text", { types: "words" });

    // ✅ Hover Effect on Words
    text.words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        gsap.to(word, {
          color: "#2563eb", // Change color (Tailwind blue-600)
          duration: 0.3,
          ease: "power2.out",
        });
      });

      word.addEventListener("mouseleave", () => {
        gsap.to(word, {
          color: "currentColor", // Reset color
          duration: 1,
          ease: "power2.out",
        });
      });
    });

    // ✅ Scroll Animation for Section
    gsap.from(sectionsRef.current, {
      opacity: 0,
      x: 180,
      duration: 1,
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section ref={sectionsRef} className="mb-16">
      <header className="mb-8">
        <h1 className="font-keyute-shadow text-[var(--my-primary)] text-6xl">
          Univers
        </h1>
      </header>
      <article id="text" className="w-3/6">
        L'agence de livraison familiale se retrouve endettée par les manigances
        d'un vazimba fallacieux et agent en immobilier. N'ayant pas les moyens
        pour une moto ou même un simple vélo, vous êtes chargé de livrer tous
        les colis des particuliers et des commerces locaux en un temps record à
        PIED. Heureusement, l'école buissonnière vous a appris à faire du
        parcours et vous connaissez aussi bien la ville que votre poche trouée.
        Mais est ce que ca sera suffisant pour sauver votre agence et le
        commerce local de la main du terrible saisie immobilière?
      </article>
    </section>
  );
}
