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
        <h3 className="headline">Ambient Learning Mobile App  {"       "}
        <a href="https://apps.apple.com/us/app/ambient-learning/id6456572536" style={{fontSize: '1.3rem', color: 'blue'}}><i className="uil uil-apple-alt" /></a>{"      /     "}
        <a href="https://play.google.com/store/apps/details?id=com.etc.ambientlearning&pcampaignid=APPU_1_ZdnbZNTTL4mfptQPq-ef6A0&pli=1" style={{fontSize: '1.3rem', color: 'blue'}}><i className="uil uil-google-play" /></a>
        </h3>
        <h4 className="time-info">May 2023 — Aug. 2023</h4>
        <h4 className="description">
          In summer 2023, I interned as a full-stack developer at Educational
          Technology Collective coordinated by Professor Christopher Brooks. I
          worked on this project to build software systems which support student
          long-term retention through spaced repetition. This is done through
          the use of software agents which observe authentic learning activities
          such as watching video or writing code, and then supporting these
          learning activities with flashcard-style review opportunities.
        </h4>
        <h4 className="description">
          My colleagues developed the Coursera Course Assistant Chrome Extension
          and JupyterLab Extension that will capture learner's learning moments
          and generate flashcards with learner-sourcing and language processing
          model like chatGTP. These flashcards are then pushed into the database
          for learners to review with scheduled review interval on mobile app.
        </h4>
        <h4 className="description">
          I developed the cross-platform mobile app using Ionic React framework.
          Interaction in the application follows a think/tap/swipe pattern,
          where the learner reads the question and considers it, taps the card
          to flip it over and see the correct answer, then swipes to indicate a
          self-assessment of their knowledge of the card, with a swipe left to
          indicate they did not correctly know the question and a swipe right to
          indicate they did correctly know the question. Both short answer and
          multiple choice questions are available depending upon the content,
          and for multiple choice questions the learner can either self-assess
          their knowledge or make a choice if they believe they know the correct
          answer.
        </h4>
        <h4 className="description">
          In this app we have also implemented two other forms of learner
          feedback, a swipe up which indicates that the learner would like
          another flashcard on the same topic, or a swipe down to indicate that
          the learner believes the flashcard is a poor card and would not like
          to see it again in the future.
        </h4>
        <h4 className="description">
          Furthermore, I researched and tested with hundreds of evaluation sets
          to model a space-repetition algorithm that calculates the review
          period to maintain a 90% knowledge retention based on the{" "}
          <em>Super-Memo 2</em> algorithm. 
        </h4>
        <h4 className="description">
         In addition, I improved the query time of cards by 72% by implementing a MongoDB View, optimizing 6 API Gateway routes and Lambda function costs by 120%. Deployed Firebase Cloud Messaging that enabled daily push notifications.
        </h4>
      </div>
    </div>
  );
};
