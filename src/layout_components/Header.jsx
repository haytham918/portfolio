import React, { useEffect, useState } from "react";
import "./Header.css";
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
    <header className={`header${isScrolled ? " scroll-header" : ""}`}>
      <nav className="nav container">
        <HashLink to="#about" className="nav__logo">
          Haytham Tang
        </HashLink>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <HashLink
                  to={item.id}
                  className={
                    activeNav === item.id ? "nav__link active-link" : "nav__link"
                  }
                  onClick={() => {
                    handleNav(item.id);
                    setToggle(false);
                  }}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle((value) => !value)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
