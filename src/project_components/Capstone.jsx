import React from "react";
import "./Capstone.css";
import capstonePdf from "../assets/Linear-Programming-Capstone.pdf";
export const Capstone = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <iframe
        title="Video of Capstone Presentation"
        src="https://www.youtube.com/embed/j4yqDeWVyC8"
        width="85%"
        height="45%"
        className="youtube-video"
      ></iframe>
      <h3 className="subtitle">Video of Capstone Presentation</h3>
      <div className="text-part">
        <h3 className="headline">Linear Programming Capstone Research</h3>
        <h4 className="time-info">Aug. 2021 — May 2022</h4>
        <h4 className="description">
          In my senior year of high school, under the mentorship of Mr. Reed
          Coots and Dr. Greg Martin, I embarked on a capstone project centered
          around Linear Programming, dedicating ten months to produce a
          comprehensive 110-page research paper complemented by a school-wide
          presentation.
        </h4>
        <h4 className="description">
          This capstone project entailed an in-depth analysis of over thirty
          pieces of literature, tracing the historical evolution of Linear
          Programming and its various algorithms and applications. I delved into
          the essence of notable algorithms such as the Simplex Method and the
          Graph Method, evaluating their respective benefits and limitations.
          Further, I crafted custom Python programs to tackle optimization
          problems—the core objective of Linear Programming—leveraging different
          algorithmic approaches.
        </h4>
        <h4 className="description">
          This endeavor not only honed my capabilities in conducting rigorous
          independent research but also significantly refined my academic
          writing skills. The guidance from my advisors was instrumental in
          cultivating a sophisticated understanding of complex mathematical
          concepts and their practical applications. This project underscored
          the value of interdisciplinary scholarship and marked a pivotal moment
          in my academic journey, reinforcing my commitment to leveraging
          computational tools to solve real-world challenges.<br></br>
        </h4>
        <a className="download-link" href={capstonePdf} download="LP-Paper">
          Check out the paper
        </a>
      </div>
    </div>
  );
};
