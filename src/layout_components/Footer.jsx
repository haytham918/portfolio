import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Haytham Tang</h2>
        <p className="footer__lead">
          Software engineer with a focus on product, systems, and research.
        </p>

        <ul className="footer__list">
          <li>
            <HashLink to="#about" className="footer__link">
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#experience" className="footer__link">
              Experience
            </HashLink>
          </li>
          <li>
            <HashLink to="#portfolio" className="footer__link">
              Work
            </HashLink>
          </li>
          <li>
            <HashLink to="#contact" className="footer__link">
              Contact
            </HashLink>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/haythamtang/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/haytham918"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">© Haytham Tang. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
