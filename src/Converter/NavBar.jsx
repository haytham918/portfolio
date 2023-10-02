import React from "react";
import "./NavBar.css";
const NavBar = ({ gotoUnit, gotoCurrency, gotoTime }) => {
  return (
    <nav className="converter">
      <a href={() => false} onClick={gotoUnit} className="converter-name">
        Converter
      </a>
      <ul>
        <li>
          <a href={() => false} onClick={gotoUnit} className="sections">
            Units
          </a>
        </li>
        <li>
          <a href={() => false} onClick={gotoCurrency} className="sections">
            Currency
          </a>
        </li>
        <li>
          <a href={() => false} onClick={gotoTime} className="sections">
            Time
          </a>
        </li>

        <li className="close-it">
          <a href="/#/honors" className="sections">
            <i className="uil uil-times"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
