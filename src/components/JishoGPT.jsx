import React from 'react'

const JishoGPT = ({closeComponent}) => {
  return (
    <div className="detail-container">
        <a href={() => false} className="close-icon" onClick={closeComponent}>
        <i className="uil uil-times close"></i>
      </a>
    </div>
  )
}

export default JishoGPT;