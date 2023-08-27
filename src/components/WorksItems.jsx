import React, { useState } from "react";
import { Capstone } from "./Capstone";
import { Vex } from "./Vex";
import { Warehouse } from "./Warehouse";
import { Ambient } from "./Ambient";
import { useNavigate } from "react-router-dom";

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

  const closeComponent = () => {
    setComponent(false);
  };
  let component;
  if (item.id === 1) {
    component = <Capstone closeComponent={closeComponent} />;
  } else if (item.id === 2) {
    component = <Vex closeComponent={closeComponent} />;
  } else if (item.id === 4) {
    component = <Warehouse closeComponent={closeComponent} />;
  } else if (item.id === 6) {
    component = <Ambient closeComponent={closeComponent} />;
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
        <h3 className="work__title">{item.title}{item.id === 6?  <i className="uil uil-apple-alt" /> : null}{item.id === 6? <i className="uil uil-google-play" /> : null}</h3>
        <h4 className="check-out">Learn More</h4>
      </a>
      {showComponent ? component : null}
    </>
  );
};
