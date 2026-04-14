import React from "react";
import Social from "./Social";
import Data from "./Data";
import headshot from "../assets/headshot2mb.jpg";

const Home = () => {
  return (
    <section
      className="app-section pt-[calc(var(--header-offset)+0.25rem)] md:pt-[calc(var(--header-offset)+1rem)]"
      id="about"
    >
      <div className="app-container grid gap-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[56px_minmax(0,1fr)_minmax(240px,0.8fr)] md:gap-7 lg:grid-cols-[72px_minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
          <Social />
          <Data />
          <div
            className="order-first aspect-[0.86] w-full max-w-[280px] justify-self-center border border-white/65 bg-cover bg-center bg-no-repeat shadow-md [border-radius:60%_40%_30%_70%_/_60%_30%_70%_40%] [box-shadow:inset_0_0_0_4px_rgb(255_255_255_/_24%),var(--tw-shadow)] animate-profile-blob md:order-none md:max-w-[320px] md:justify-self-start lg:max-w-[360px] lg:justify-self-center"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.06)), url(${headshot})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
