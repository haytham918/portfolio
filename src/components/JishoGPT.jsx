import React from "react";
import { useState } from "react";
import "./JishoGPT.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import JishoDemo from "../assets/jishouse.jpg";
import JishoDef from "../assets/jishouse2.jpg";
const JishoGPT = ({ closeComponent }) => {
  const jishodata = [
    { src: JishoDemo, alt: "Jisho Search" },
    { src: JishoDef, alt: "Jisho Result" },
  ];

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % 2);
  };
  const prevSlide = () => {
    if (slide === 0) {
      setSlide(1);
    } else {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="detail-container">
      <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
      <div className="carousel-jisho">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {jishodata.map((item, index) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={index}
              className={index === slide ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {jishodata.map((_, id) => {
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
        Screenshots of Looking Up Computer on JishoGPT{" "}
      </h3>
      <div className="text-part">
        <h3 className="headline">
          <a href="https://jisho-gpt-monorepo.vercel.app/">JishoGPT</a>
        </h3>
        <h4 className="time-info">Sep. 2023 — Dec. 2023</h4>
        <h4 className="description">
          In response to the growing popularity of ChatGPT, I joined forces with
          my high school friend{" "}
          <a href="https://vincentbai.com">Vincent Bai </a>(NYU'24, TikTok) to
          create JishoGPT, a pioneering Japanese Dictionary powered by OpenAI's
          GPT technology. Our platform caters to users seeking definitions for
          words in English, Japanese, or Kanji, offering a comprehensive and
          dynamic language tool.
        </h4>
        <h4 className="description">
          JishoGPT stands out by presenting detailed lookup results in several
          key segments: Meaning, Dictionary Definition, Synonyms/Antonyms, and
          Usage Contexts in Pop Culture. The Meaning segment elucidates the
          word's literal interpretation and pronunciation, while the Dictionary
          Definition outlines its grammatical role and traditional meaning. For
          a more nuanced understanding, Synonyms/Antonyms are provided where
          applicable, and the Usage Contexts segment delves into the word's
          relevance and interpretation within modern pop culture, akin to an
          Urban Dictionary approach.
        </h4>
        <h4 className="description">
          Opting for a tech stack that includes Next.js and MongoDB, we've
          crafted a responsive and user-friendly website. Our database hosts a
          curated list of frequently searched words, ensuring swift access to
          their definitions. Should a search query not yield results from our
          database, JishoGPT leverages OpenAI APIs to dynamically generate and
          subsequently store the information, thus enriching the database and
          accelerating future searches. While initially considering an etymology
          segment, we decided against it to maintain focus on the most valued
          features by our users.
        </h4>

        <h4 className="description end-text">
          Despite scrapping plans for an authentication service due to market
          size considerations, the project was a significant opportunity for me
          to deepen my front-end and back-end development skills, specifically
          with Next.js and MongoDB. It was a fulfilling collaboration that not
          only strengthened my technical abilities but also contributed a
          meaningful and innovative tool to the language learning community.
        </h4>
      </div>
    </div>
  );
};

export default JishoGPT;
