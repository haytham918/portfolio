import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
const NavBar = ({ gotoUnit, gotoCurrency, gotoTime }) => {
  // Function to handle go back inside the converter
  const navigate = useNavigate();

  const handleClose = () => {
    // If there is back page
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/#");
    }
  };
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
          <a href={() => false} className="sections" onClick={handleClose}>
            <i className="uil uil-times"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
