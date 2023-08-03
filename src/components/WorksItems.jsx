import React from 'react'

export const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.img} alt='' className='work__img'/>
      <h3 className="work__title">{item.name}</h3>
      <a href="" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}
