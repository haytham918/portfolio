import React from "react";

const socialLinkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/85 text-[1.2rem] text-title shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.2)] xs:h-[2.7rem] xs:w-[2.7rem] md:h-12 md:w-12";

const Social = () => {
  return (
    <div className="flex flex-row justify-start gap-[0.65rem] md:grid md:gap-[0.9rem]">
      <a
        href="https://www.linkedin.com/in/haythamtang/"
        className={socialLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://github.com/haytham918"
        className={socialLinkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
