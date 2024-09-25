import React, { useState } from "react";
import { Capstone } from "../project_components/Capstone";
import { Vex } from "../project_components/Vex";
import { Warehouse } from "../project_components/Warehouse";
import { Ambient } from "../project_components/Ambient";
import { useNavigate } from "react-router-dom";
import ThreeDSSPP from "../project_components/ThreeDSSPP";
import JishoGPT from "../project_components/JishoGPT";

export const WorksItems = ({ item }) => {
  const history = useNavigate();
  const [showComponent, setComponent] = useState(false);
  let openComponent = () => {
    setComponent(true);
  };
  if (item.id === 3) {
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
  if (item.id === 1) {
    component = <Capstone closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 2) {
    component = <Vex closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 4) {
    component = <Warehouse closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 6) {
    component = <Ambient closeComponent={closeComponent} />;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 3) {
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 8) {
    component = <ThreeDSSPP closeComponent={closeComponent}></ThreeDSSPP>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  } else if (item.id === 9) {
    component = <JishoGPT closeComponent={closeComponent}></JishoGPT>;
    descriptText = <h4 className="check-out">Learn More</h4>;
  }  else {
    descriptText = <h4 className="check-out">Description Soon :&#41;</h4>;
  }
  return (
    <>
      <a
        href={()=>false}
        className="work__card"
        key={item.id}
        onClick={openComponent}
      >
        <img src={item.image} alt="" className="work__img" />
        <h3 className="work__title">
          {item.title}
          {item.id === 6 ? <i className="uil uil-apple-alt" /> : null}
          {item.id === 6 ? <i className="uil uil-google-play" /> : null}
        </h3>
        {descriptText}
      </a>
      {showComponent ? component : null}
    </>
  );
};
