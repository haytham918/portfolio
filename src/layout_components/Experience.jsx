import React from "react";
import "iconify-icon";
import "./Experience.css";
import { experienceData } from "./ExperienceData";

const renderLogo = (logo) => {
  if (logo.type === "icon") {
    return (
      <span className="experience__logo experience__logo--icon" aria-label={logo.label}>
        <iconify-icon icon={logo.value} width="1.5em" height="1.5em" />
      </span>
    );
  }

  return (
    <span className="experience__logo experience__logo--image" aria-label={logo.label}>
      <img src={logo.value} alt={logo.label} className="experience__logo-image" />
    </span>
  );
};

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">Research, teaching, and industry.</span>

      <div className="experience__container container">
        <div className="experience__track">
          {experienceData.map((item) => (
            <article className="experience__step" key={item.id}>
              <span className="experience__progress" aria-hidden="true" />
              <div className="experience__card">
                {renderLogo(item.logo)}
                <span className="experience__period">{item.period}</span>
                <h3 className="experience__title">{item.title}</h3>
                <p className="experience__organization">{item.organization}</p>
                {item.areas ? (
                  <ul className="experience__areas">
                    {item.areas.map((area) => (
                      <li className="experience__area" key={area}>
                        {area}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
