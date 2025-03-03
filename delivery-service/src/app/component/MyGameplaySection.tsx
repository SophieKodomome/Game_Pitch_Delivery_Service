import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import SplitType from "split-type";

export default function MyGameplaySection() {
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
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

  }, []);

  return (
    <section ref={sectionsRef} className="gameplay-section mb-16">
      <header className="mb-8">
        <h1 className="font-keyute-shadow text-[var(--my-primary)] text-6xl">Gameplay</h1>
      </header>
      <article id="text" className="w-3/6">
        Le jeu est un 2.5D (susceptible de changement) Speed Platformer (Sonic,
        Céleste, Pizza Tower) qui se découpe en niveaux à longueur moyenne. Le
        but du jeu à court terme (dans un niveau), est de livrer un colis à une
        adresse en un temps donné. La note sera déterminée en 3 points : le temps
        de livraison, l'état du colis, et la performance du joueur via des tricks.
      </article>
    </section>
  );
}
