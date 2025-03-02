"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function MyTitle() {
  const title = useRef<HTMLElement>(null);

  const back = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(title.current, {
      y: 360,
      duration: 0.8,
      ease: "power2.out",
      delay: 1,
    });

    gsap.from(back.current, {
      x: -12,
      y: -16,
      opacity: 0,
      duration: 0.8,
      ease: "back.out",
      delay: 1.8,
    });
  }, {});
  return (
    <div>
      <div className="overflow-hidden w-full h-[360px]">
        <div
          ref={title}
          className=" justify-self-center text-[var(--my-primary)] text-[180px] leading-40"
        >
          <h1 className="relative font-keyute">
            Very Daily <br /> Delivery
          </h1>
          <h1
            ref={back}
            className="relative bottom-76 left-4 font-keyute-outline"
          >
            Very Daily <br /> Delivery
          </h1>
        </div>
      </div>
      <sub className="font-extralight text-4xl">
        Presentation Pitch & Exercice de gsap
      </sub>
    </div>
  );
}
