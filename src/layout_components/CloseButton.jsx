import React from "react";

const CloseButton = ({ closeComponent }) => {
  return (
    <button
      className="absolute right-5 top-3 cursor-pointer text-[2.5rem] text-title"
      onClick={closeComponent}
      type="button"
    >
      <i className="uil uil-times"></i>
    </button>
  );
};

export default CloseButton;
