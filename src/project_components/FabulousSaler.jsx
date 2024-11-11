import React from "react";
import CloseButton from "../layout_components/CloseButton";
const FabulousSaler = ({ closeComponent }) => {
  return (
    <div className="detail-container">
      <CloseButton closeComponent={closeComponent} />
      <iframe
        title="Video of Fabulous Saler"
        src="https://www.youtube.com/embed/M7JNln26pdI"
        width="85%"
        height="45%"
        className="youtube-video"
      ></iframe>
      <h3 className="subtitle">Video of Fabulous Saler</h3>
      <div className="text-part">
        <h3 className="headline">
          <a
            href="https://devpost.com/software/fabulous-helper"
            rel="noopner noreferrer"
            target="_blank"
          >
            Fabulous Saler
          </a>
        </h3>
        <h4 className="time-info">June 2024 — July 2024</h4>
        <h4 className="description">
          During the summer of 2024, I led the development of Fabulous Helper,
          an AI-powered recommendation system designed to deliver personalized
          electronic device suggestions. Built using{" "}
          <span style={{ color: "violet" }}> React</span> for the front-end and
          <span style={{ color: "violet" }}> Express.js </span> for the
          back-end, the platform utilized the{" "}
          <span style={{ color: "violet" }}> OpenAI API</span> to generate
          intelligent recommendations based on user preferences. These
          recommendations included key product features, images, and direct
          shopping links, providing users with a seamless experience to discover
          and purchase the most suitable devices.
        </h4>

        <h4 className="description">
          As the team lead, I coordinated a group of five developers and focused
          on building the backend infrastructure while managing the overall
          project scope. One of the key technical challenges was ensuring the
          accuracy and timeliness of product data. To solve this, I wrote{" "}
          <span style={{ color: "violet" }}>Python</span> scripts to web scrape
          over 20 different shopping sites. These scripts continuously gathered
          and updated product information, ensuring that the recommendation
          system was not only effective but also up-to-date with the latest
          device offerings.
        </h4>

        <h4 className="description end-text">
          This project, hosted on Devpost, highlights the powerful combination
          of AI and web scraping to provide personalized shopping experiences.
          Working on Fabulous Helper deepened my experience in AI integration,
          full-stack development, and team collaboration, further refining my
          skills in using modern web technologies to solve real-world problems.
        </h4>
      </div>
    </div>
  );
};

export default FabulousSaler;
