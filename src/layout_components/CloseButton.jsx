import React from "react";
import "./CloseButton.css";
const CloseButton = ({ closeComponent }) => {
  return (
    <button className="close-icon" onClick={closeComponent}>
      <i className="uil uil-times close"></i>
    </button>
  );
};

export default CloseButton;
