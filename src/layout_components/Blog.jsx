import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import philcover from "../assets/philstatement.webp";

export const Blog = () => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate("/philosophy");
  };
  return (
    <div className="container blog_container" onClick={navigateToPage}>
      Philosophy Statement
      <img
        src={philcover}
        alt="Philosophy-Statemeent Cover"
        className="statement-cover"
      />
      <h4 className="check-out">Read About It</h4>
    </div>
  );
};
