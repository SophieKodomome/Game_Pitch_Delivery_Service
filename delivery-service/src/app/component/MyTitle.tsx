"use client";

import { useEffect } from "react";
import gsap from "gsap";
import MySubtitle from "./MySubtitle";

export default function MyTitle() {
  useEffect(() => {
    const titleElement = document.querySelector("#title-container");
    const backElement = document.querySelector("#back-container");

    gsap.from(titleElement, {
      y: 360,
      duration: 0.8,
      ease: "power2.out",
      delay: 1,
    });

    gsap.from(backElement, {
      x: -12,
      y: -16,
      opacity: 0,
      duration: 0.8,
      ease: "back.out",
      delay: 1.8,
    });
  }, []);

  return (
    <div>
      <div className="overflow-hidden w-full h-[360px]">
        <div id="title-container" className=" text-[var(--my-white)] text-[180px] leading-40">
          <h1 className="relative font-keyute">
            Very Daily <br /> Delivery
          </h1>
          <h1 id="back-container" className="relative bottom-76 left-4 font-keyute-outline">
            Very Daily <br /> Delivery
          </h1>
        </div>
      </div>
      <MySubtitle />
    </div>
  );
}
