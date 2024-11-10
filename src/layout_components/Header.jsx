import React, { useState } from "react";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  // Check my current location for heading redirection
  const location = useLocation();
  const path = location.pathname;

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (header) {
      if (this.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    }
  });

  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a
          href={path !== "/enghonors" ? "/" : "#enghonors"}
          onClick={() => window.location.reload()}
          className="nav__logo"
        >
          Haytham Tang
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <HashLink
                to="#about"
                className={
                  props.activeNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => {
                  props.handleNav("#about");
                  showMenu(false);
                }}
              >
                <i className="uil uil-user nav__icon"></i> About
              </HashLink>
            </li>

            <li className="nav__item">
              <HashLink
                to="#portfolio"
                className={
                  props.activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => {
                  props.handleNav("#portfolio");
                  showMenu(false);
                }}
              >
                <i className="uil uil-file-alt nav__icon"></i> Portfolio
              </HashLink>
            </li>

            <li className="nav__item">
              <HashLink
                to="#contact"
                className={
                  props.activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => {
                  props.handleNav("#contact");
                  showMenu(false);
                }}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </HashLink>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
