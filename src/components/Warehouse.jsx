import React from "react";
import "./Capstone.css";
import reportPdf from "../assets/Final-Report.pdf";
export const Warehouse = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <iframe
        title="Video of Warehouse Robot"
        src="https://www.youtube.com/embed/w0IdrNhn2UM"
        width="85%"
        height="45%"
        className="youtube-video"
      ></iframe>
      <h3 className="subtitle">Video of Warehouse Robot</h3>
      <div className="text-part">
        <h3 className="headline">Warehouse Robot</h3>
        <h4 className="time-info">Jan. 2023 — May 2023</h4>
        <h4 className="description">
          In my first-year engineering class, I led a team of five people to
          build a robot prototype capable of picking, palletizing, and transporting
          objects in a warehouse with three mechanical subsystems: the gantry
          frame, a scissor lift mechanism, and a claw mechanism.
        </h4>
        <h4 className="description">
          The goal of this project was the development of an automated system
          that alleviates the intense workload on package shipping center
          workers. This prototype is capable of carrying a maximum of three
          kilograms steadily.
        </h4>
        <h4 className="description">
          For the prototype, I designed a custom User-Interface using
          Processing, which is a a 5x5 grid representing the warehouse inventory
          with buttons for item reallocation, retrieval, and storage. The user
          can easily select the mode and location for objects by clicking
          options on the screen.
        </h4>
        <a
          className="download-link"
          href={reportPdf}
          download="Warehouse-Robot-Report"
        >
          Check out our report
        </a>
      </div>
    </div>
  );
};
