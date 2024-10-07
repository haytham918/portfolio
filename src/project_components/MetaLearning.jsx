import React from "react";
import rlCover from "../assets/rlCover.jpg";
import "./MetaLearning.css";

const MetaLearning = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <img
        src={rlCover}
        alt="MetaLearning-Img"
        className="metalearning-img"
      ></img>
      <h3 className="subtitle">
        High Level View of Meta-Reinforcment Learning
      </h3>
      <div className="text-part">
        <h3 className="headline">
          Meta-Reinforcement Learning of Human-Robot Collaboration
        </h3>
        <h4 className="time-info">May 2024 — Aug. 2024</h4>

        <h4 className="description">
          In Winter 2024, under the supervision of{" "}
          <a
            href="https://cee.engin.umich.edu/people/lee-sanghyun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. SangHyun Lee
          </a>
          , I am involved in upgrading a reinforcement learning model for
          movement analysis. This model has been significantly enhanced through
          the integration of over 30 versatile input and output channels using
          the <span style={{ color: "violet" }}> OpenAI Gym </span> framework,
          which has improved its ability to explore and exploit dynamic
          interactions. These improvements have resulted in a notable increase
          in predictive accuracy for the system, making it more responsive to
          variations in human gestures and movements.
        </h4>

        <h4 className="description">
          In addition to upgrading the model, I optimized the classification
          algorithms by employing NumPy vectorization, which dramatically
          increased processing speed and efficiency. This optimization has been
          crucial for providing real-time feedback during movement analysis, a
          vital requirement for applications that involve fast and accurate
          interpretation of human motion.
        </h4>

        <h4 className="description">
          Furthermore, I leveraged cloud computing resources, specifically the
          <span style={{ color: "violet" }}>
            {" "}
            Great Lakes high-performance computing cluster
          </span>{" "}
          at the University of Michigan, to handle the intensive computational
          demands of the project. These resources allowed for the
          parallelization of model training processes, reducing the time
          required for simulations and ensuring that the model could be
          fine-tuned with large datasets efficiently.
        </h4>

        <h4 className="description end-text">
          This project has not only enhanced my expertise in reinforcement
          learning and algorithmic optimization, but it has also provided
          valuable experience in using cloud computing for large-scale machine
          learning tasks. The resulting improvements position the model for
          impactful applications in areas such as ergonomic assessment and
          robotic movement analysis, where real-time feedback and accuracy are
          paramount.
        </h4>
      </div>
    </div>
  );
};

export default MetaLearning;
