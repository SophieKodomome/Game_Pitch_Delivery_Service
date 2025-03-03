import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function MyGameplaySecondSection() {
  gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger
  const sectionsRef = useRef(null);

  useGSAP(() => {
    gsap.from(".more-section", {
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
      <section className="flex flex-row space-x-16">
        <section className="more-section flex flex-row space-x-4 w-2/6">
          <aside className="text-8xl text-[var(--my-primary)]">1.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">La vitesse</h1>
            <p>
              L'accélération permet de nouvelle feature tel que du grinding,
              courir sur l'eau ou marcher sur les murs.
            </p>
          </section>
        </section>
        <section className="more-section flex flex-row space-x-4 w-2/6">
          <aside className="text-8xl text-[var(--my-primary)]">2.</aside>
          <section className="flex flex-col space-y-2">
            <h1 className="text-4xl border-b-2 pb-2">Game Feel</h1>
            <p>
              Si le base concept est simple, le game feel devrait ajouter du
              punch à l'expérience un feedback visuel et sonore direct des
              actions du joueurs. (The Juice).
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
