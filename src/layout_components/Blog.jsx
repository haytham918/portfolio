import React from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";

export const Blog = () => {
  const history = useNavigate();
  const navigateToPage = () => {
    history("/philosophy");
  };
  return (
    <div className="container blog_container" onClick={navigateToPage}>
      Philosophy Statement
      
      <h4 className="check-out">Read About It</h4>
    </div>
  );
};
