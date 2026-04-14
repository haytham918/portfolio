import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="mt-16 pb-6 xs:pb-10 md:mt-24">
      <div className="app-container rounded-[1.5rem] border border-border bg-white/85 p-4 shadow-sm xs:p-6 md:rounded-[2rem] md:p-8">
        <h2 className="mb-4 text-center text-[1.5rem] font-semibold text-title">
          Haytham Tang
        </h2>
        <p className="mb-8 text-center text-textLight">
          Software engineer with a focus on product, systems, and research.
        </p>

        <ul className="mb-8 flex flex-wrap justify-center gap-2.5 xs:gap-3.5">
          <li className="w-full xs:w-auto">
            <HashLink
              to="#about"
              className="block rounded-full border border-border bg-surface px-4 py-2.5 text-center text-[0.86rem] text-title md:text-[0.92rem]"
            >
              About
            </HashLink>
          </li>
          <li className="w-full xs:w-auto">
            <HashLink
              to="#experience"
              className="block rounded-full border border-border bg-surface px-4 py-2.5 text-center text-[0.86rem] text-title md:text-[0.92rem]"
            >
              Experience
            </HashLink>
          </li>
          <li className="w-full xs:w-auto">
            <HashLink
              to="#portfolio"
              className="block rounded-full border border-border bg-surface px-4 py-2.5 text-center text-[0.86rem] text-title md:text-[0.92rem]"
            >
              Work
            </HashLink>
          </li>
          <li className="w-full xs:w-auto">
            <HashLink
              to="#contact"
              className="block rounded-full border border-border bg-surface px-4 py-2.5 text-center text-[0.86rem] text-title md:text-[0.92rem]"
            >
              Contact
            </HashLink>
          </li>
        </ul>

        <div className="flex justify-center gap-3.5">
          <a
            href="https://www.linkedin.com/in/haythamtang/"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[1.125rem] text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/haytham918"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[1.125rem] text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="mt-7 block text-center text-[0.75rem] text-textLight md:text-[0.8rem]">
          © Haytham Tang. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
