"use client";

import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

export default function MySubtitle() {
  useEffect(() => {
    const subTitle = new SplitType("#sub-title", { types: "chars" });
    // Initial entrance animation
    gsap.from(subTitle.chars, {
      duration: 0.2,
      opacity: 0,
      ease: "back",
      stagger: 0.04,
      color: "currentColor",
      delay: 1.4,
    });
  }, []);
  return (
    <sub id="sub-title" className="text-3xl text-[var(--my-white)]">
      Presentation Pitch & Exercice de gsap.
    </sub>
  );
}
