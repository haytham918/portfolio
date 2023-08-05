import React from 'react'
import './Capstone.css'
export const Vex = ({closeComponent}) => {
  return (
    <div className="detail-container">
      <a href={() => false}className='close-icon' onClick={closeComponent}>
        <i className='uil uil-times close'></i>
      </a>
      
    </div>
  )
}
