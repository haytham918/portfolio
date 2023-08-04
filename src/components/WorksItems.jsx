import React, { useState } from 'react'
import { Capstone } from './Capstone';

export const WorksItems = ({item}) => {
  const [showComponent, setComponent] = useState(false);
  const openComponent = () => {
    setComponent(true);
   
  }

  const closeComponent = () => {
    setComponent(false);
  }
  let component;
  if(item.title === 'Linear Programming Capstone'){
    component = <Capstone closeComponent={closeComponent}/>
  }
  return (
    <>
    <a className="work__card" key={item.id} onClick={openComponent}>
      <img src={item.image} alt='' className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
    </a>
    {showComponent? component : null}
    </>
  )
}
