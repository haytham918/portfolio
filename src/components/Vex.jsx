import React, { useState } from "react";
import "./Capstone.css";
import "./Vex.css";
import roboticsCover from "../assets/roboticsCover.jpeg";
import roboticsimg1 from "../assets/roboticsimg1.jpeg";
import roboticsimg2 from "../assets/roboticsimg2.jpeg";
import roboticsimg3 from "../assets/roboticsimg3.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export const Vex = ({ closeComponent }) => {
  const data = [
    { src: roboticsCover, alt: "VEX Robotics" },
    { src: roboticsimg1, alt: "VEX Robotics" },
    { src: roboticsimg2, alt: "VEX Robotics" },
    { src: roboticsimg3, alt: "VEX Robotics" },
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % 4);
  };
  const prevSlide = () => {
    if (slide === 0) {
      setSlide(3);
    } else {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <div className="carousel">
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
    </div>
  );
};
