import React, { useEffect, useState } from "react";
import { projectsData } from "./WorkData";
import { WorksItems } from "./WorksItems";
import { useLocation } from "react-router-dom";

export const Works = () => {
  // Check current location path
  const location = useLocation();
  const path = location.pathname;

  // Portfolio Category
  const projectsNav = [
    {
      name: "Project",
    },
    {
      name: "Research",
    },
    path === "/enghonors" ? { name: "Honors" } : null,
  ];

  const [item, setItem] = useState({ name: "Project" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const newProjects = projectsData.filter((project) => {
      return project.category === item.name;
    });
    setProjects(newProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          if (!item) return null; // If there is no "Honors"
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
