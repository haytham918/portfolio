import React, { useState } from 'react'
import { Capstone } from './Capstone';
import Converter from '../Converter/Converter';

export const WorksItems = ({item}) => {
  const [showComponent, setComponent] = useState(false);
  const openComponent = () => {
    setComponent(true);
   
  }

  const closeComponent = () => {
    setComponent(false);
  }
  let component;
  if(item.id === 1){
    component = <Capstone closeComponent={closeComponent}/>
  }else if(item.id === 2){
    component = <Converter closeConverter={closeComponent}/>
  }
  console.log(showComponent)
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
