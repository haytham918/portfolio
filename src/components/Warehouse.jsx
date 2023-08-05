import React from 'react'
import './Capstone.css'
import reportPdf from '../assets/Final-Report.pdf'
export const Warehouse = ({closeComponent}) => {
  return (
    <div className='detail-container'>
      <a href={() => false}className='close-icon' onClick={closeComponent}>
        <i className='uil uil-times close'></i>
      </a>
      <iframe title='Video of Warehouse Robot' src='https://www.youtube.com/embed/w0IdrNhn2UM' width='85%' height='45%' className='youtube-video'>
      </iframe>
      <h3 className='subtitle'>Video of Warehouse Robot</h3>
      <div className='text-part'>
      <h3 className='headline'>Warehouse Robot</h3>
      <h4 className='time-info'>Jan. 2023 — May 2023</h4>
      <h4 className='description'>In my senior year at high school, I did my capstone project that researched Linear Programming under the advising of Mr. Reed Coots and Dr. Greg Martin. I spent roughly ten months on this project, and finished with a 110-page paper and a schoolwide presentation.</h4>
      <h4 className='description'>Over the course of my capstone, I analyzed over 30 literatures on the history of the development of Linear Programming as well as its variant algorithms and applications. I studied the essense of the distinct algorithms such as the Simplex Method and the Graph Method, comparing their advantages and drawbacks. Then, I devised my own Python programs that solve optimization problems, which is the goal of Linear Programming, based on different algorithms.</h4>
      <h4 className='description'>Throughout the process, I gained a lot of experience conducting independent research and improved my academic writing skills with the help of my advisors.<br></br></h4>
      <a className='download-link' href={reportPdf} download='Warehouse-Robot-Report'>Check out our report</a>
      </div>
    </div>
  )
}
