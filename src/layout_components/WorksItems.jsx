import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Capstone } from "../project_components/Capstone";
import { Ambient } from "../project_components/Ambient";
import ThreeDSSPP from "../project_components/ThreeDSSPP";
import Expectile from "../project_components/Expectile";
import Mercury from "../project_components/Mercury";
import FairnessWeb from "../project_components/FairnessWeb";
import VCDive from "../project_components/VCDive";
import Multiverse from "../project_components/Multiverse";
import WhenPastMisleads from "../project_components/WhenPastMisleads";
import { Processor } from "../project_components/470Processor";
import "iconify-icon";

export const WorksItems = ({ item }) => {
  const history = useNavigate();
  const [showComponent, setComponent] = useState(false);
  let openComponent = () => {
    setComponent(true);
  };

  const closeComponent = () => {
    setComponent(false);
  };

  let component;
  let descriptText = <h4 className="text-[0.92rem] font-medium text-title">Learn more</h4>;
  let projectIcon = null;

  switch (item.title) {
    case "Linear Programming Capstone": {
      component = <Capstone closeComponent={closeComponent} />;
      projectIcon = (
        <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
      );
      break;
    }
    case "Ambient Learning Mobile App": {
      component = <Ambient closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="skill-icons:react-light" width="1.35em" height="1.35em" />
          <iconify-icon icon="logos:aws-lambda" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:mongodb" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:postgresql-light" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "Universal Converter Web App": {
      projectIcon = (
        <iconify-icon icon="skill-icons:react-light" width="1.35em" height="1.35em" />
      );
      openComponent = () => {
        history("/converter");
      };
      break;
    }
    case "Automated 3DSSPP Software": {
      component = <ThreeDSSPP closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="skill-icons:cpp" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:bash-dark" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "Low-Rank Expectile Representations of a Data Matrix, with Application to Diurnal Heart Rates": {
      component = <Expectile closeComponent={closeComponent} />;
      projectIcon = (
        <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
      );
      break;
    }
    case "Themis - QoS Memory System": {
      component = <Mercury closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="skill-icons:cpp" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:docker" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "Fairness in Educational Models": {
      component = <FairnessWeb closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="logos:jupyter" width="1.35em" height="1.35em" />
          <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "When the Past Misleads: Rethinking Training Data Expansion Under Temporal Distribution Shifts": {
      component = <WhenPastMisleads closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="logos:jupyter" width="1.35em" height="1.35em" />
          <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "VCDive": {
      component = <VCDive closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="skill-icons:nextjs-dark" width="1.35em" height="1.35em" />
          <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:flask-dark" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:cpp" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "Understanding Predictive Models of Student Success with a Multiverse Analysis": {
      component = <Multiverse closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="logos:jupyter" width="1.35em" height="1.35em" />
          <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    case "N-way Superscaler RISC-V Computer Architecture (EECS 470)": {
      component = <Processor closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="material-icon-theme:verilog" width="1.35em" height="1.35em" />
          <iconify-icon icon="file-icons:systemverilog" width="1.35em" height="1.35em" />
        </>
      );
      break;
    }
    default:
      descriptText = (
        <h4 className="text-[0.92rem] font-medium text-title">Description soon</h4>
      );
  }

  return (
    <>
      <button
        className="grid w-full content-start gap-4 rounded-[1.5rem] border border-border bg-white/90 p-4 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.16)] hover:shadow-md"
        key={item.id}
        onClick={openComponent}
        type="button"
      >
        <img
          src={item.image}
          alt={item.title}
          className={`h-[180px] w-full rounded-[calc(var(--radius-lg)-0.35rem)] md:h-[200px] lg:h-[220px] ${
            item.title === "Ambient Learning Mobile App"
              ? "bg-[#efeee7] object-contain p-3"
              : "object-cover"
          }`}
        />
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.86rem] text-textLight md:text-[0.92rem]">
            {item.category}
          </span>
          <span className="text-[0.92rem] font-medium text-title">View details</span>
        </div>
        <h3 className="text-[1.08rem] font-semibold leading-[1.35] text-title">
          {item.title}
        </h3>
        {projectIcon ? (
          <div className="flex flex-wrap gap-1.5 text-title">{projectIcon}</div>
        ) : (
          descriptText
        )}
      </button>
      {showComponent ? component : null}
    </>
  );
};
