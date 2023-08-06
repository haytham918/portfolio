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
      <h3 className="subtitle">Pictures of VEX Robot</h3>
      <div className="text-part">
        <h3 className="headline">VEX Robotics Competition</h3>
        <h4 className="time-info">2021 — 2023</h4>
        <h4 className="description">
          During high school, I competed in the VEX Robotics Competition with
          four other teammates and qualified for New Jersey State Competition.
          After graduation, I mentored a robotics team from my high school and
          ranked 5th in New Jersey State Championship.
        </h4>
        <h4 className="description">
          In the 2022-2023 Season, the challenges focuses on the manipulation of
          small disks. The competition also awards points to each foam tile
          contacted by a team's robot. Our design has three main components: 1.
          Base 2. Disk Launcher 3. String Launcher.
        </h4>
        <h4 className="description end-text">
          As a mentor, I mostly coordinated the tasks between different team
          members to make sure we were on the right track. Moreover, I
          contributed to help design and program the robot's base, disk launch
          mechanism, and string launch mechanism. I helped implement the rubber
          bands and pneumatics that can guide and launch 5 strings far away
          simultaneously.
        </h4>
      </div>
    </div>
  );
};
