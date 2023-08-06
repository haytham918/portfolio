import React, { useState } from 'react'
import homepage from '../assets/homePage.png'
import loadingpage from '../assets/loadingPage.png'
import tfCard from '../assets/tfCard.png'
import sessionReview from '../assets/sessionReview.png'
import answerCard from '../assets/answerCard.png'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './Ambient.css'
export const Ambient = ({closeComponent}) => {
  const data = [
    { src: homepage, alt: "Ambient Learning" },
    { src: loadingpage, alt: "Ambient Learning" },
    { src: tfCard, alt: "Ambient Learning" },
    { src: answerCard, alt: "Ambient Learning" },
    {src: sessionReview, alt: 'Ambient Learning'}
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
          Ambient Learning Mobile App
        </h3>
        <h4 className="time-info">
          May 2023 — Present
        </h4>
        <h4 className='description'></h4>
      </div>
    </div>
  );
}
