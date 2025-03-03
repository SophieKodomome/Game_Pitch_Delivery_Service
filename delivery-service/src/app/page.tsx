"use client"; // ✅ Required for Next.js with GSAP

import MyTitle from "./component/MyTitle";
import MyConceptSection from "./component/MyConceptSections";
import MyGameplaySection from "./component/MyGameplaySection";
import MyGameplaySecondSection from "./component/MyGameplaySecondSection";
import MyFeatureSection from "./component/MyFeatureSection";

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
          <section>
            <h1>Univers</h1>
            <p>
              L'agence de livraison familiale se retrouve endettée par les
              manigances d'un vazimba fallacieux et agent en immobilier. N'ayant
              pas les moyens pour une moto ou même un simple vélo, vous êtes
              chargé de livrer tous les colis des particuliers et des commerces
              locaux en un temps record à PIED. Heureusement, l'école
              buissonnière vous a appris à faire du parcours et vous connaissez
              aussi bien la ville que votre poche trouée. Mais est ce que ca
              sera suffisant pour sauver votre agence et le commerce local de la
              main du terrible saisie immobilière?
            </p>
          </section>
        </article>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center h-64">
        Made with love
      </footer>
    </div>
  );
}
