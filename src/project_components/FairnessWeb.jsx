import React, { useState } from "react";
import "./FairnessWeb.css"
import fairnessWebCover from "../assets/fairnessWebCover.jpg";
import fairnessWebDataProcessing from "../assets/fairnessWebImg2.jpg";
import fairnessWebPipeline from "../assets/fairnessWebImg1.jpg";
import fairnessWebMultiverse from "../assets/fairnessWebImg3.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const FairnessWeb = ({ closeComponent }) => {
  const data = [
    { src: fairnessWebCover, alt: "Website Cover Page" },
    { src: fairnessWebDataProcessing, alt: "Data Processing Page" },
    { src: fairnessWebPipeline, alt: "Customize Pipeline Page" },
    { src: fairnessWebMultiverse, alt: "Multiverse Analysis Page" },
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    if (slide === 0) setSlide(data.length - 1);
    else setSlide(slide - 1);
  };

  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <div className="carousel-fairness">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={idx === slide ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, id) => {
            return (
              <button
                id={id}
                onClick={() => setSlide(id)}
                className={
                  id === slide ? "indicator" : "indicator indicator-inactive"
                }
                key={id}
              ></button>
            );
          })}
        </span>
      </div>
      <h3 className="subtitle">
        Screenshots of Fairness in Educational Models Website
      </h3>
      <div className="text-part">
        <h3 className="headline">
          <a
            href="https://haythamtang.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fairness in Educational Models Website
          </a>
        </h3>
        <h4 className="time-info">May 2024 — July 2024</h4>
        <h4 className="description">
          In the summer of 2024, I worked under the supervision of{" "}
          <a
            href="https://www.si.umich.edu/people/christopher-brooks"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dr. Christopher Brooks
          </a>{" "}
          to build an advanced platform for bias detection and mitigation in
          machine learning models. The goal of this project was to create a tool
          that would allow educators, researchers, and developers to explore and
          address bias in educational machine learning models, providing a
          critical lens on how models can perpetuate or correct inequities in
          real-world applications.
        </h4>
        <h4 className="description">
          I developed an interactive website using{" "}
          <span style={{ color: "violet" }}> Streamlit</span> and{" "}
          <span style={{ color: "violet" }}>Python</span>, which served as a
          user-friendly interface for showcasing the underlying complexities of
          bias in machine learning. This platform walks users through different
          methods of detecting bias within ML models, and importantly, provides
          strategies for remediation. By making these bias remediation
          techniques more accessible, the platform enhances the overall
          understanding of fairness in ML models, particularly in an educational
          context where fairness is paramount. Users can interact with various
          models and datasets to see how bias manifests, and more crucially, how
          different strategies can mitigate these biases.
        </h4>
        <h4 className="description">
          One of the critical aspects of the project was the creation of
          synthetic datasets. These datasets are carefully designed to mimic
          private or sensitive data without exposing actual user data, allowing
          developers to test and refine their models safely. This step was
          crucial for ensuring that bias remediation techniques could be tested
          in secure environments, particularly when dealing with sensitive
          educational data. These synthetic datasets also supported a detailed
          multiverse analysis—a process in which multiple model configurations
          are explored to evaluate their fairness. By analyzing 10,000 different
          model configurations, we were able to pinpoint the model-building
          choices that lead to increased bias, as well as those that
          significantly reduce it.
        </h4>
        <h4 className="description">
          The interactive platform enables users to visualize how different
          models perform under various conditions, emphasizing the importance of
          model fairness and bias reduction strategies. This project not only
          contributes to the field of fair machine learning but also offers a
          practical tool that can be used in educational environments to promote
          more equitable outcomes.
        </h4>
        <h4 className="description end-text">
          Through this work, I have deepened my expertise in machine learning
          fairness, synthetic data generation, and web-based data visualization,
          all of which have a broad impact on improving the transparency and
          ethics of machine learning models in practice.
        </h4>
      </div>
    </div>
  );
};

export default FairnessWeb;
