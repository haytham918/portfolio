import React from "react";
import { Works } from "./Works";

export const Work = () => {
  return (
    <section className="app-section" id="portfolio">
      <h2 className="app-section-title">Selected work</h2>
      <span className="app-section-subtitle">
        Projects and research highlights across systems, ML, and product.
      </span>
      <Works />
    </section>
  );
};
