import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { id: "#about", label: "About", icon: "uil-user" },
  { id: "#experience", label: "Experience", icon: "uil-briefcase-alt" },
  { id: "#portfolio", label: "Work", icon: "uil-file-alt" },
  { id: "#contact", label: "Contact", icon: "uil-message" },
];

const Header = ({ activeNav, handleNav }) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 24);
    };

    const closeMenu = () => {
      setToggle(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-fixed bg-transparent pointer-events-none md:pointer-events-auto md:top-0 md:border-b md:backdrop-blur-[14px] md:transition-all md:duration-200 ${
        isScrolled
          ? "md:border-border md:bg-[rgba(248,250,252,0.92)] md:shadow-header"
          : "md:border-transparent md:bg-[rgba(248,250,252,0.78)]"
      }`}
    >
      <nav className="app-container flex h-auto items-center justify-end gap-4 md:h-[var(--header-height)] md:justify-between">
        <HashLink
          to="#about"
          className="hidden text-base font-semibold tracking-[-0.03em] text-title md:block"
        >
          Haytham Tang
        </HashLink>

        <div
          className={`fixed left-3 right-3 top-6 rounded-[1.25rem] px-[0.9rem] pb-4 pt-[1.1rem] opacity-0 transition duration-200 pointer-events-none -translate-y-4 xs:left-4 xs:right-4 xs:px-4 xs:pb-[1.15rem] md:static md:translate-y-0 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:pb-0 md:pt-0 md:opacity-100 md:shadow-none md:backdrop-blur-none md:pointer-events-auto ${
            toggle
              ? "pointer-events-auto translate-y-0 opacity-100 border border-border bg-[rgba(248,250,252,0.97)] shadow-floating backdrop-blur-[18px]"
              : ""
          }`}
        >
          <ul className="grid grid-cols-1 gap-[0.9rem] xs:grid-cols-2 md:flex md:items-center md:gap-6">
            {navItems.map((item) => {
              const active = activeNav === item.id;

              return (
                <li key={item.id}>
                  <HashLink
                    to={item.id}
                    className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-center text-[0.92rem] font-medium transition duration-200 md:w-auto md:rounded-none md:px-0 md:py-1 ${
                      active ? "text-titleDark" : "text-text hover:text-titleDark"
                    }`}
                    onClick={() => {
                      handleNav(item.id);
                      setToggle(false);
                    }}
                  >
                    <i className={`uil ${item.icon} text-base md:hidden`}></i>
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 hidden h-0.5 w-full origin-center bg-title transition duration-200 md:block ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </HashLink>
                </li>
              );
            })}
          </ul>

          <i
            className="uil uil-times absolute right-[0.85rem] top-3 cursor-pointer text-[1.2rem] text-title md:hidden"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/95 text-[1.1rem] text-title shadow-fab md:hidden max-[350px]:h-9 max-[350px]:w-9"
          onClick={() => setToggle((value) => !value)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
