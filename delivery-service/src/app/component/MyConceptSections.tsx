import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function MyConceptSection() {
  gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger
  const sectionsRef = useRef(null);

  useGSAP(() => {
    gsap.from(".fade-section", {
      opacity: 0,
      x: 180,
      duration: 1,
      stagger: 0.3, // ✅ Stagger animation between sections
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse", // ✅ Play on scroll, reverse on scroll up
      },
    });
  }, []);

  return (
    <section ref={sectionsRef} className="mb-16">
      <header className="fade-section mb-8">
        <h1 className="text-6xl font-keyute-shadow text-[var(--my-primary)]">Fiche Rapide</h1>
      </header>
      <section className="flex flex-row space-x-8">
        <section className="fade-section flex flex-row space-x-4">
          <aside className="text-8xl text-[var(--my-primary)]">1.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">Concept</h1>
            <p>
              Avec votre swag inhumain, frayez-vous un chemin dans la ville pour
              livrer vos colis à temps, avec style… et avec le colis en bon
              état.
            </p>
          </section>
        </section>
        <section className="fade-section flex flex-row space-x-4">
          <aside className="text-8xl text-[var(--my-primary)]">2.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">Genre</h1>
            <p>Plateformer 2.5D</p>
          </section>
        </section>
        <section className="fade-section flex flex-row space-x-4">
          <aside className="text-8xl text-[var(--my-primary)]">3.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">Plateforme</h1>
            <p>PC & Mobile</p>
          </section>
        </section>

        <section className="fade-section flex flex-row space-x-4">
          <aside className="text-8xl text-[var(--my-primary)]">4.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">Publique</h1>
            <p>9+</p>
          </section>
        </section>
      </section>
    </section>
  );
}
