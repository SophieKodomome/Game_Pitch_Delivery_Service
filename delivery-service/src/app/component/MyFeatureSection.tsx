import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function MyFeatureSection() {
  gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger
  const sectionsRef = useRef(null);

  useGSAP(() => {
    gsap.from(".feature-section", {
      opacity: 0,
      x: 180,
      duration: 1,
      stagger: 0.3, // ✅ Stagger animation between sections
      scrollTrigger: {
        trigger: sectionsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse", // ✅ Play on scroll, reverse on scroll up
      },
    });
  }, []);

  return (
    <section ref={sectionsRef} className="mb-16">
      <header className="feature-section mb-8">
        <h1 className="text-6xl font-keyute-shadow text-[var(--my-primary)]">
          Autre Feature
        </h1>
      </header>
      <section className="flex flex-col space-y-16">
        <section className="flex flex-row space-x-16">
          <section className="feature-section w-2/6 flex flex-row space-x-4">
            <h2 className="text-4xl text-[var(--my-primary)] w-72">
              Pixel <br /> Dunking <br /> (Steven)
            </h2>
            <p className="w-4/6">
              Le colis peut être lancé. Le joueur devient plus rapide mais il
              doit rattrape le colis
            </p>
          </section>
          <section className="feature-section w-2/6 flex flex-row space-x-4">
            <h2 className="text-4xl text-[var(--my-primary)] w-72">
              Cozy <br /> Ve? <br />
              (Angela)
            </h2>
            <p className="w-4/6">
              Le menu peut-être la boutique et la chambre du joueur qui
              peut-être customisable (Des badges en guise de trophées de jeu,
              une vrai carte comme carte du jeu, etc, etc).
            </p>
          </section>
        </section>
        <section className="flex flex-row space-x-16">
          <section className="feature-section w-2/6 flex flex-row space-x-4">
            <h2 className="text-4xl text-[var(--my-primary)] w-72">
              Night <br /> Shift <br />
              (Volahary)
            </h2>
            <p className="w-4/6">
              Le joueur peut devenir un fantôme et accéder a d'autre zone d'un
              même niveau.
            </p>
          </section>
          <section className="feature-section w-2/6 flex flex-row space-x-4">
            <h2 className="text-4xl text-[var(--my-primary)] w-72">
              Bubble <br /> Sort <br />
              (Mendrika)
            </h2>
            <p className="w-4/6">
              Des Ballons peuvent être utilisés comme tremplins pour se déplacer
              dans les niveau
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
