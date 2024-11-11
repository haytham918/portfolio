import React, { useState } from "react";
import "./Capstone.css";
import "./Vex.css";
import roboticsCover from "../assets/roboticsCover.jpeg";
import roboticsimg1 from "../assets/roboticsimg1.jpeg";
import roboticsimg2 from "../assets/roboticsimg2.jpeg";
import roboticsimg3 from "../assets/roboticsimg3.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import CloseButton from "../layout_components/CloseButton";
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
      <CloseButton closeComponent={closeComponent} />
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
          During my high school years, I was an active participant in the VEX
          Robotics Competition, collaborating with four teammates to secure a
          spot in the New Jersey State Competition. My journey with robotics
          didn’t end with graduation; I returned as a mentor for a team from my
          alma mater, leading them to achieve a remarkable 5th place in the New
          Jersey State Championship.
        </h4>
        <h4 className="description">
          In the 2022-2023 season, the competition’s focus was on the precise
          manipulation of small disks, with additional points awarded for each
          foam tile contacted by a team's robot. Our robot design was
          strategically divided into three key components: a robust Base, a
          precise Disk Launcher, and an innovative String Launcher.
        </h4>
        <h4 className="description">
          In my role as a mentor, my primary responsibility was to orchestrate
          the team's efforts, ensuring that our strategic objectives were
          aligned and that progress was consistent. Beyond coordination, I
          actively engaged in the design and programming of the robot's
          foundational base, its disk launch mechanism, and the unique string
          launch system. My contributions were pivotal in integrating rubber
          bands and pneumatics into the design, enabling the simultaneous launch
          of five strings with remarkable precision and distance.
        </h4>
        <h4 className="description end-text">
          This mentorship experience enriched me professionally and personally.
          It honed my leadership skills, particularly in project coordination
          and team dynamics. Technically, it deepened my understanding of
          mechanical design and programming in a competitive setting.
          Importantly, it underscored the value of patience, clear
          communication, and the power of collaborative problem-solving.
          Mentoring not only allowed me to impact young enthusiasts positively
          but also facilitated a deeper appreciation for innovation and the
          pursuit of engineering excellence.
        </h4>
      </div>
    </div>
  );
};
