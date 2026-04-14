import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HashLink
      to="#about"
      className={`fixed right-4 z-tooltip rounded-md bg-title px-2 py-1.5 text-container transition-all duration-300 hover:bg-titleDark lg:right-10 ${
        showScroll ? "bottom-12 opacity-85" : "-bottom-20 opacity-0"
      }`}
    >
      <i className="uil uil-arrow-up text-[1.25rem] lg:text-[1.5rem]"></i>
    </HashLink>
  );
};
