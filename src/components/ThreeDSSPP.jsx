import React from "react";
import "./ThreeDSSPP.css";
import TDSSPPDemo from "../assets/3DSSPP-demo.png";
const ThreeDSSPP = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <img src={TDSSPPDemo} alt="3DSSPP-Demo" className="ThreeDSSPP-img"></img>
      <h3 className="subtitle">Figure of Example Application</h3>
      <div className="text-part">
        <h3 className="head-line">Automated 3DSSPP Software</h3>
        <h4 className="time-info">Oct. 2023 - Apr. 2024</h4>
        <h4 className="description">
          In my sophomore year at college, I had the privilege of contributing
          to the{" "}
          <a href="https://dpm.engin.umich.edu/">Dynamic Project Management </a>
          lab, led by Professor SangHyun Lee, on a project to renovate the
          3DSSPP Software, commissioned by VelocityEHS. Due to a Non-Disclosure
          Agreement, I'm limited in the specifics I can share. However, I can
          outline my contributions to this innovative endeavor.
        </h4>
        <h4 className="description">
          My role centered on reengineering the existing 3DSSPP software
          features to enable operation via command-line inputs and automated
          processes, bypassing the need for a graphical user interface. This
          redesign facilitated the swift extraction of user-provided
          information, generating output files and video frames with enhanced
          efficiency. The result was a significant acceleration in data creation
          and the capacity for seamless integration with other applications.
        </h4>
        <h4 className="description">
          This project was a deep dive into deciphering and refining legacy
          code, some of which was over eight years old. It marked my inaugural
          foray into developing a Windows MFC application and deepened my
          experience with C++ application in a novel domain. A notable aspect of
          my role was employing bash scripting and modifying legacy code to
          devise practical solutions, thereby sharpening my problem-solving
          skills.
        </h4>
        <h4 className="description end-text">
          The experience was not just about technical enhancement but also about
          applying my competencies in the realm of Civil & Environmental
          Engineering. It broadened my understanding of another engineering
          discipline, fostering a more multidisciplinary perspective in my
          approach to problem-solving and innovation.
        </h4>
      </div>
    </div>
  );
};

export default ThreeDSSPP;
