import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Capstone } from "../project_components/Capstone";
import { Vex } from "../project_components/Vex";
import { Warehouse } from "../project_components/Warehouse";
import { Ambient } from "../project_components/Ambient";
import ThreeDSSPP from "../project_components/ThreeDSSPP";
import JishoGPT from "../project_components/JishoGPT";
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
  let descriptText = <h4 className="check-out">Learn more</h4>;
  let projectIcon = null;

  switch (item.title) {
    case "Linear Programming Capstone": {
      component = <Capstone closeComponent={closeComponent} />;
      projectIcon = (
        <iconify-icon icon="material-icon-theme:python" width="1.35em" height="1.35em" />
      );
      break;
    }
    case "VEX Robotics Competition": {
      component = <Vex closeComponent={closeComponent} />;
      break;
    }
    case "Warehouse Robot": {
      component = <Warehouse closeComponent={closeComponent} />;
      projectIcon = (
        <iconify-icon icon="skill-icons:processing-light" width="1.35em" height="1.35em" />
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
    case "JishoGPT": {
      component = <JishoGPT closeComponent={closeComponent} />;
      projectIcon = (
        <>
          <iconify-icon icon="skill-icons:nextjs-dark" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:expressjs-light" width="1.35em" height="1.35em" />
          <iconify-icon icon="skill-icons:mongodb" width="1.35em" height="1.35em" />
          <iconify-icon icon="bi:stripe" width="1.35em" height="1.35em" />
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
    case "SMART Goals": {
      openComponent = () => {
        window.open(
          "https://docs.google.com/document/d/1ucFK-MBJ8KPvFT034nsqrBablplPT48mP7rNmZRTSQ8/edit?tab=t.0"
        );
      };
      break;
    }
    case "Competency Worksheet": {
      openComponent = () => {
        window.open(
          "https://docs.google.com/document/d/1rVV0qFgJWr93O9DXIFsgCS70Jzi1bjP6/edit"
        );
      };
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
      descriptText = <h4 className="check-out">Description soon</h4>;
  }

  return (
    <>
      <button className="work__card" key={item.id} onClick={openComponent}>
        <img src={item.image} alt={item.title} className="work__img" />
        <div className="work__meta">
          <span className="work__category">{item.category}</span>
          <span className="check-out">View details</span>
        </div>
        <h3 className="work__title">{item.title}</h3>
        {projectIcon ? <div className="work__icon-row">{projectIcon}</div> : descriptText}
      </button>
      {showComponent ? component : null}
    </>
  );
};
