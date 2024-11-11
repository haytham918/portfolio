import React from "react";
import "./Capstone.css";
import reportPdf from "../assets/Final-Report.pdf";
import CloseButton from "../layout_components/CloseButton";
export const Warehouse = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <CloseButton closeComponent={closeComponent} />
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
          build a robot prototype capable of picking, palletizing, and
          transporting objects in a warehouse with three mechanical subsystems:
          the gantry frame, a scissor lift mechanism, and a claw mechanism.
        </h4>
        <h4 className="description">
          The goal of this project was the development of an automated system
          that alleviates the intense workload on package shipping center
          workers. This prototype is capable of carrying a maximum of three
          kilograms steadily.
        </h4>
        <h4 className="description">
          For user interaction, I developed a custom User Interface using
          Processing, featuring a 5x5 grid that mirrors the warehouse inventory.
          It includes intuitive buttons for item reallocation, retrieval, and
          storage, enabling users to efficiently select the mode and location
          for the objects directly on the screen.
        </h4>
        <h4 className="description">
          This project was not only a technical journey but also an invaluable
          opportunity to enhance my leadership and communication skills.
          Navigating through challenges, we forged a strong bond within the
          team, transforming professional collaboration into lasting
          friendships. It was a testament to how shared goals and teamwork can
          lead to both innovative solutions and meaningful connections.
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
