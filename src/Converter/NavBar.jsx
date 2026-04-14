import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ({ activeIndex, gotoUnit, gotoCurrency, gotoTime }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/#");
    }
  };

  const tabs = [
    { label: "Units", onClick: gotoUnit, index: 1 },
    { label: "Currency", onClick: gotoCurrency, index: 2 },
    { label: "Time", onClick: gotoTime, index: 3 },
  ];

  return (
    <nav className="converter-nav">
      <div className="converter-nav-inner">
        <button className="converter-tab bg-white/12 text-white" onClick={gotoUnit} type="button">
          Converter
        </button>
        <div className="converter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`converter-tab ${
                activeIndex === tab.index ? "bg-white text-title" : ""
              }`}
              onClick={tab.onClick}
              type="button"
            >
              {tab.label}
            </button>
          ))}
          <button className="converter-tab" onClick={handleClose} type="button" aria-label="Close converter">
            <i className="uil uil-times"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
