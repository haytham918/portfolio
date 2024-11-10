import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

import etcpic from "../assets/etc.png";
export const Blog = () => {
  const history = useNavigate();
  const navigateToPage = () => {
    history("/philosophy");
  };
  return (
    <div>
      <h2 className="section__title">Philosophy Statement</h2>
      <span className="section__subtitle">Experiences & Thoughts</span>
      <div className="container blog_container" onClick={navigateToPage}>
        Community I Am Passinoate About(Honors Application)
        <img alt="ETC-Logo" src={etcpic} className="etc_img"></img>
        <h4 className="check-out">Click to Read</h4>
      </div>
    </div>
  );
};
