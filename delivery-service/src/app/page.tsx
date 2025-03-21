"use client"; // ✅ Required for Next.js with GSAP

import MyTitle from "./component/MyTitle";
import MyConceptSection from "./component/MyConceptSections";
import MyGameplaySection from "./component/MyGameplaySection";
import MyGameplaySecondSection from "./component/MyGameplaySecondSection";
import MyFeatureSection from "./component/MyFeatureSection";
import MyLoreSection from "./component/MyLoreSection";

export default function Home() {
  return (
    <div>
      <main>
        <header className="relative px-8 pb-16 bg-[url(/img/background_01.png)] bg-no-repeat bg-cover bg-center mb-16">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative pt-32">
            <MyTitle />
          </div>
        </header>
        <article className="px-8">
          <MyConceptSection />
          <MyGameplaySection />
          <MyGameplaySecondSection />
          <MyFeatureSection />
          <MyLoreSection />
        </article>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-64">
        Made with love
      </footer>
    </div>
  );
}
