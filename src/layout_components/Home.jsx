import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.css";
import { Blog } from "./Blog";
import { useLocation } from "react-router-dom";
const Home = () => {
  // Get the current location path
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="home section" id="about">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
        {/*Add Philosophy Statement for honors*/}
        {path === "/enghonors" ? <Blog /> : null}{" "}
      </div>
    </section>
  );
};

export default Home;
