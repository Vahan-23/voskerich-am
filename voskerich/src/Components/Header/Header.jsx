import React from 'react'
import "./headerStyle.css"
import { useState } from 'react';
import { PopUpMenuGold , PopUpMenuSilver } from '././Pop-up/PopUpMenu';

export default function Header() {
  const [showPopMenuGold, setShowPopMenuGold] = useState(false);
  const [showPopMenuSilver, setShowPopMenuSilver] = useState(false);

  const handleMouseOverGold = () => {
    setShowPopMenuGold(true);
  };
  const handleMouseOverSilver = () => {
    setShowPopMenuSilver(true);
  };
 
  const handleMouseOut = () => {
    setShowPopMenuGold(false);
    setShowPopMenuSilver(false);
  };

  return (
    <div className='header'>
      <a className='logotype' href="/">VOSKERICH</a>
      <ul className='headerMenu'>
        <li onMouseOver={handleMouseOverGold} onMouseOut={handleMouseOut} > <a href="/Golds" className='menuAfleax' >Ոսկերչական Զարդեր</a>
          <div className="navigation"></div>
          <div>
            {showPopMenuGold && <PopUpMenuGold />}
          </div>  
        </li>
        <li onMouseOver={handleMouseOverSilver} onMouseOut={handleMouseOut} > <a href="/Golds" className='menuAfleax' >Արծաթե Զարդեր </a>
          <div className="navigation"></div>
          <div>
            {showPopMenuSilver && <PopUpMenuSilver />}
          </div> 
        </li>
        <li > <a href="/Golds" className='menuAfleax' >Ժամացույցներ</a>
          <div className="navigation"></div>  
        </li>
        <li> <a href="/Golds" className='menuAfleax' >Աքսեսուարներ</a>
          <div className="navigation"></div>

        </li>
        <li   > <a href="/Golds" className='menuAfleax' >Ոսկերչական աշխարհ</a>
          <div className="navigation"></div>
        </li>
      </ul>
    </div>
  )
}
