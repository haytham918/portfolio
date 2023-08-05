import React from 'react';
import './NavBar.css'
const NavBar = ({gotoUnit, gotoCurrency, gotoTime, closeConverter}) => {  return (
    <nav className='converter'>
     <a onClick={gotoUnit} className='converter-name'>Converter</a>
      <ul>
        <li>
        <a onClick={gotoUnit} className='sections'>Units</a>
        </li>
        <li>
        <a onClick={gotoCurrency} className='sections'>Currency</a>
        </li>
        <li>
        <a onClick={gotoTime} className='sections'>Time</a>
        </li>

        <li className='close-it'>
        <a onClick={closeConverter} className='sections'><i className='uil uil-times'></i></a>
        </li>
      </ul>
      </nav>
   
  );
}

export default NavBar;

