import React from "react";
import "./Work.css";
import { Works } from "./Works";

export const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Selected work</h2>
      <span className="section__subtitle">
        Projects and research highlights across systems, ML, and product.
      </span>
      <Works />
    </section>
  );
};
