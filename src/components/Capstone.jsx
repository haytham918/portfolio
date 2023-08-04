import React from 'react'
import './Capstone.css'
export const Capstone = ({closeComponent}) => {
  return (
    <div className='detail-container'>
      <a className='close-icon' onClick={closeComponent}>
        <i className='uil uil-times close'></i>
      </a>
      <iframe src='https://www.youtube.com/embed/j4yqDeWVyC8' width='85%' height='35%' className='youtube-video'>
      </iframe>
      <h3 className='subtitle'>Video of Capstone Presentation</h3>
    </div>
  )
}
