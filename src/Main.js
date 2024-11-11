import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Converter from "./Converter/Converter";
import Philosophy from "./project_components/Philosophy";

const Main = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/converter" Component={Converter} />
        <Route exact path="/enghonors" Component={App} />
        <Route exact path="/philosophy" Component={Philosophy}/>
      </Routes>
    </HashRouter>
  );
};

export default Main;
