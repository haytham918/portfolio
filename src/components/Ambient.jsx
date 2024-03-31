import React, { useState } from "react";
import homepage from "../assets/homePage.png";
import card from "../assets/card.png";
import sessionReview from "../assets/sessionReview.png";
import answerCard from "../assets/answerCard.png";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Ambient.css";
export const Ambient = ({ closeComponent }) => {
  const data = [
    { src: homepage, alt: "Ambient Learning" },
    { src: card, alt: "Ambient Learning" },
    { src: answerCard, alt: "Ambient Learning" },
    { src: sessionReview, alt: "Ambient Learning" },
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
      <div className="carousel-ambient">
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
      <h3 className="subtitle">Screenshots of Ambient Learning Mobile App</h3>
      <div className="text-part">
        <h3 className="headline">
          Ambient Learning Mobile App {"       "}
          <a
            href="https://apps.apple.com/us/app/ambient-learning/id6456572536"
            style={{ fontSize: "1.3rem", color: "blue" }}
          >
            <i className="uil uil-apple-alt" />
          </a>
          {"      /     "}
          <a
            href="https://play.google.com/store/apps/details?id=com.etc.ambientlearning&pcampaignid=APPU_1_ZdnbZNTTL4mfptQPq-ef6A0&pli=1"
            style={{ fontSize: "1.3rem", color: "blue" }}
          >
            <i className="uil uil-google-play" />
          </a>
        </h3>
        <h4 className="time-info">May 2023 — Aug. 2023</h4>
        <h4 className="description">
          In the summer of 2023, I embarked on an enriching internship as a
          full-stack developer at the Educational Technology Collective, under
          the guidance of Professor Christopher Brooks. Our project aimed to
          bolster student long-term retention using spaced repetition, a
          technique facilitated by software agents that monitor genuine learning
          activities, such as video watching and code writing, to support these
          activities with flashcard-style review opportunities.
        </h4>
        <h4 className="description">
          My team's contribution involved developing the Coursera Course
          Assistant Chrome Extension and a JupyterLab Extension. These tools
          capture pivotal learning moments, generating flashcards through
          learner-sourcing and advanced language processing models akin to
          ChatGPT. These flashcards are stored in a database for scheduled
          review intervals on a mobile app, enhancing the learning process.
        </h4>
        <h4 className="description">
          I was tasked with creating a cross-platform mobile app using the Ionic
          React framework. This app employs a user-friendly think/tap/swipe
          interaction pattern for an engaging learning experience. Learners
          interact with flashcards—flipping them for answers and swiping to
          self-assess knowledge. It supports both short-answer and
          multiple-choice formats, with additional feedback mechanisms allowing
          learners to request more on a topic or discard irrelevant flashcards.
        </h4>
        <h4 className="description">
          Additionally, I spearheaded the development of a spaced-repetition
          algorithm based on the <em>Super-Memo 2 </em> model, aiming for a 90%
          knowledge retention rate, verified through extensive testing with
          hundreds of evaluation sets. My efforts also led to a significant
          improvement in the system's efficiency: I enhanced the query time for
          cards by 72% through a MongoDB View and optimized API Gateway routes
          and Lambda function costs by 120%, alongside implementing Firebase
          Cloud Messaging for daily push notifications.
        </h4>
        <h4 className="description end-text">
          This internship not only expanded my technical skills but also
          provided valuable insights into the intersection of technology and
          education, demonstrating the profound impact of thoughtful software
          solutions on learning efficacy.
        </h4>
      </div>
    </div>
  );
};
