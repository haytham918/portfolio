import React from "react"
import './Footer.css'
const Footer = (props) => {
  return(
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Haytham Tang
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link" onClick={() => props.handleNav('#about')}>About</a>
          </li>

          <li>
            <a href="portfolio" className="footer__link" onClick={() => props.handleNav('#portfolio')}>Portfolio</a>
          </li>


        </ul>

        <div className="footer__social">
        <a href="https://linkedin.com" className="footer__social-link" target="_bliank" >
        <i className='uil uil-linkedin-alt'></i>
      </a>
      <a href="https://github.com/haytham918" className="footer__social-link" target="_bliank">
        <i className='uil uil-github-alt'></i>
      </a>
      
        </div>
        <span className="footer__copy">&#169; Haytham Tang. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer;