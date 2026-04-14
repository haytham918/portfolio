import React from "react";
import "iconify-icon";
import { experienceData } from "./ExperienceData";

const renderLogo = (logo) => {
  if (logo.type === "icon") {
    return (
      <span
        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white"
        aria-label={logo.label}
      >
        <iconify-icon icon={logo.value} width="1.5em" height="1.5em" />
      </span>
    );
  }

  return (
    <span
      className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white"
      aria-label={logo.label}
    >
      <img src={logo.value} alt={logo.label} className="h-full w-full object-contain" />
    </span>
  );
};

const Experience = () => {
  return (
    <section className="app-section" id="experience">
      <h2 className="app-section-title">Experience</h2>
      <span className="app-section-subtitle">Research, teaching, and industry.</span>

      <div className="app-container max-w-[1040px]">
        <div className="relative grid gap-4 md:grid-cols-3 md:gap-5">
          <div className="absolute bottom-2 left-[1.1rem] top-2 w-px bg-gradient-to-b from-[rgba(15,23,42,0.08)] via-[rgba(15,23,42,0.2)] to-[rgba(15,23,42,0.08)] md:hidden"></div>
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-[rgba(15,23,42,0.08)] via-[rgba(15,23,42,0.2)] to-[rgba(15,23,42,0.08)] md:block"></div>

          {experienceData.map((item) => (
            <article key={item.id} className="relative pl-10 md:pl-0 md:pt-4">
              <span className="absolute left-[1.1rem] top-6 h-[0.95rem] w-[0.95rem] rounded-full bg-accent shadow-[0_0_0_0.5rem_var(--body-color)] md:left-1/2 md:top-[1.55rem] md:-translate-x-1/2" aria-hidden="true" />
              <div className="grid gap-3 rounded-[1.5rem] border border-border bg-white/90 p-4 shadow-sm md:min-h-[260px] md:justify-items-center md:gap-3 md:px-5 md:pb-6 md:pt-12 md:text-center">
                {renderLogo(item.logo)}
                <span className="text-[0.86rem] text-textLight md:text-[0.92rem]">{item.period}</span>
                <h3 className="text-[1.1rem] font-semibold text-title md:text-[1.2rem]">
                  {item.title}
                </h3>
                <p className="text-text">{item.organization}</p>
                {item.areas ? (
                  <ul className="grid gap-1.5 text-[0.86rem] text-textLight md:text-center md:text-[0.92rem]">
                    {item.areas.map((area) => (
                      <li key={area} className="list-none before:mr-1.5 before:text-title before:content-['•']">
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
