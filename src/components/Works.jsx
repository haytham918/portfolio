import React, { useEffect, useState } from 'react'
import { projectsData } from './WorkData'
import { projectsNav } from './WorkData'
import { WorksItems } from './WorksItems'
export const Works = () => {
  const [item, setItem] = useState({name: 'Projects'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
   const newProjects = projectsData.filter((project) => {
    return project.category === item.name;
   })
   setProjects(newProjects);
  }, [item])

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent});
    setActive(index);
  }
  return (
    <div>
    <div className="work__filters">
      {projectsNav.map((item, index) => {
        return(
          <span onClick={(e) => {handleClick(e, index);}} className={`${active === index ? 'active-work' : ""} work__item`} key={index}>{item.name}</span>
        )
      })}
    </div>

    <div className="work__container container grid">
      {projects.map((item) => {
        return <WorksItems item={item} key={item.id} />;
      })}
    </div>
    </div>
  )
}
