import React, { useState } from "react";
import { Capstone } from "../project_components/Capstone";
import { Vex } from "../project_components/Vex";
import { Warehouse } from "../project_components/Warehouse";
import { Ambient } from "../project_components/Ambient";
import { useNavigate } from "react-router-dom";
import ThreeDSSPP from "../project_components/ThreeDSSPP";
import JishoGPT from "../project_components/JishoGPT";
import "iconify-icon";
import Expectile from "../project_components/Expectile";
import Mercury from "../project_components/Mercury";
import FairnessWeb from "../project_components/FairnessWeb";

export const WorksItems = ({ item }) => {
  const history = useNavigate();
  const [showComponent, setComponent] = useState(false);
  let openComponent = () => {
    setComponent(true);
  };
  if (item.title === "Universal Converter Web App") {
    openComponent = () => {
      history("/converter");
    };
  }

  // let hrefLink = () => false;
  // if (item.id === 10) {
  //   hrefLink =
  //     "https://docs.google.com/document/d/1W2UxzEufvzUFMtvvxZtFbr-SXE1dEpVJ/edit";
  // } else if (item.id === 11) {
  //   hrefLink =
  //     "https://docs.google.com/document/d/1rVV0qFgJWr93O9DXIFsgCS70Jzi1bjP6/edit";
  // } else if (item.id === 12) {
  //   hrefLink =
  //     "https://docs.google.com/document/d/1ucFK-MBJ8KPvFT034nsqrBablplPT48mP7rNmZRTSQ8/edit";
  // }

  const closeComponent = () => {
    setComponent(false);
  };
  let component;
  let descriptText;
  if (item.title === "Linear Programming Capstone") {
    component = <Capstone closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "VEX Robotics Competition") {
    component = <Vex closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Warehouse Robot") {
    component = <Warehouse closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Ambient Learning Mobile App") {
    component = <Ambient closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Universal Converter Web App") {
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Automated 3DSSPP Software") {
    component = <ThreeDSSPP closeComponent={closeComponent}></ThreeDSSPP>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "JishoGPT") {
    component = <JishoGPT closeComponent={closeComponent}></JishoGPT>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (
    item.title === "Low-Rank Expectile Analysis of Diurnal Heart Rates"
  ) {
    component = <Expectile closeComponent={closeComponent}></Expectile>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Mercury - QoS Memory System") {
    component = <Mercury closeComponent={closeComponent}></Mercury>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.title === "Fairness in Educational Models") {
    component = <FairnessWeb closeComponent={closeComponent}></FairnessWeb>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else {
    descriptText = <h4 className="check-out">Description Soon :&#41;</h4>;
  }

  let project_icon = null;
  if (item.title === "Ambient Learning Mobile App") {
    project_icon = (
      <>
        <iconify-icon
          icon="skill-icons:react-light"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="logos:aws-lambda"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:mongodb"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:postgresql-light"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  } else if (item.title === "Universal Converter Web App") {
    project_icon = (
      <>
        <iconify-icon
          icon="skill-icons:react-light"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  } else if (item.title === "Automated 3DSSPP Software") {
    project_icon = (
      <>
        <iconify-icon
          icon="skill-icons:cpp"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:bash-dark"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  } else if (item.title === "JishoGPT") {
    project_icon = (
      <>
        <iconify-icon
          icon="skill-icons:nextjs-dark"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:expressjs-light"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:mongodb"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="bi:stripe"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  } else if (item.title === "Warehouse Robot") {
    project_icon = (
      <iconify-icon
        icon="skill-icons:processing-light"
        width="1.5em"
        height="1.5em"
      ></iconify-icon>
    );
  } else if (item.title === "Linear Programming Capstone") {
    project_icon = (
      <iconify-icon
        icon="skill-icons:python-light"
        width="1.5em"
        height="1.5em"
      ></iconify-icon>
    );
  } else if (
    item.title === "Low-Rank Expectile Analysis of Diurnal Heart Rates"
  ) {
    project_icon = (
      <iconify-icon
        icon="skill-icons:python-light"
        width="1.5em"
        height="1.5em"
      ></iconify-icon>
    );
  } else if (item.title === "Mercury - QoS Memory System") {
    project_icon = (
      <>
        <iconify-icon
          icon="skill-icons:cpp"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:docker"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  } else if (item.title === "Fairness in Educational Models") {
    project_icon = (
      <>
        <iconify-icon
          icon="logos:jupyter"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>{" "}
        <iconify-icon
          icon="skill-icons:python-light"
          width="1.5em"
          height="1.5em"
        ></iconify-icon>
      </>
    );
  }

  return (
    <>
      <a
        href={() => false}
        className="work__card"
        key={item.id}
        onClick={openComponent}
      >
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">{item.title}</h3>
        <div>{project_icon}</div>
        {descriptText}
      </a>
      {showComponent ? component : null}
    </>
  );
};
