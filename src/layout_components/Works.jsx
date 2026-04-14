import React, { useEffect, useState } from "react";
import { projectsData } from "./WorkData";
import { WorksItems } from "./WorksItems";

export const Works = () => {
  const projectsNav = [{ name: "Project" }, { name: "Research" }];

  const [item, setItem] = useState({ name: "Project" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const newProjects = projectsData.filter((project) => {
      return project.category === item.name;
    });
    setProjects(newProjects);
  }, [item]);

  const handleClick = (name, index) => {
    setItem({ name });
    setActive(index);
  };

  return (
    <div className="app-container">
      <div className="mb-10 flex flex-wrap items-center justify-center gap-5 border-b border-[rgba(15,23,42,0.08)] pb-4 xs:justify-stretch md:mb-10 md:gap-5">
        {projectsNav.map((item, index) => {
          const isActive = active === index;
          return (
            <button
              onClick={() => {
                handleClick(item.name, index);
              }}
              className={`border-b-2 px-0 py-1 text-center font-medium transition duration-200 xs:flex-1 xs:basis-[calc(50%-0.75rem)] max-[350px]:w-full max-[350px]:basis-full ${
                isActive
                  ? "border-title text-title"
                  : "border-transparent text-textLight hover:border-title hover:text-title"
              }`}
              key={item.name}
              type="button"
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
