import React from "react";
import "./ScrollUp.css";
import { HashLink } from "react-router-hash-link";
export const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (scrollUp) {
      if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    }
  });
  return (
    <HashLink to="#about" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </HashLink>
  );
};
