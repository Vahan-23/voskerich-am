import React from 'react'
import './popUpStyle.css'
import "../headerStyle.css"
import { useState } from 'react';
import right from './right.png'

function PopUpMenuGold() {
  const [hovered, setHovered] = useState(false);
  const [hoveredRing, setHoveredRing] = useState(false);
  
  const [showPopMenuGold, setShowPopMenuGold] = useState(false);
  const [showPopMenuGoldRing , setShowPopMenuGoldRing] = useState(false);

  const showMens = document.getElementById('showMens');

  const showSubMenu = () => {
    setShowPopMenuGold(true);
    setHovered(true);
  }

  const showSubMenuRing = () =>{
    setShowPopMenuGoldRing(true);
    setHoveredRing(true);
  }
  const hideSubMenu = () => {
    setShowPopMenuGold(false);
    setShowPopMenuGoldRing(false);
    setHovered(false);
    setHoveredRing(false);
  }

  return (
    <div className="popUp">
      <div className="popup-menu">
        <ul>
          <a href=""><li> Ոսկե Ականջօղեր</li></a>
          <a href=""> <li>Ոսկե Ապարանջաններ</li></a>
          <a  onMouseOver={showSubMenu} onMouseOut={hideSubMenu} id='showMens' href=""> <li className={hovered ? 'hovered' : ''} >Ոսկե Վզնոցներ <img className='right' src={right} alt="" /> </li></a>
          <a  onMouseOver={showSubMenuRing} onMouseOut={hideSubMenu} id='showMens' href=""> <li className={hoveredRing ? 'hoveredRing' : ''} >Ոսկե Մատանիներ <img className='right' src={right} alt="" /></li></a>
        </ul>
      </div>
      {showPopMenuGold && <div onMouseOver={showSubMenu} onMouseOut={hideSubMenu} className="mens" >
        <h3>Ոսկե Վզնոցներ</h3>
        <ul>
          <a href=""><li>Տղամարդկանց Վզնոցներ</li></a>
          <a href=""><li>Կանացի Վզնոցներ</li></a>
        </ul>
      </div>
      }
       {showPopMenuGoldRing && <div onMouseOver={showSubMenuRing} onMouseOut={hideSubMenu} className="mens" >
       <h3>Ոսկե Մատանիներ</h3>
       <ul>
       <a href=""><li>Տղամարդկանց Մատանիներ</li></a>
       <a href=""><li>Կանացի Մատանիներ</li></a>
     </ul>
        
    </div>}
  </div>
  )

}

function PopUpMenuSilver() {

  const [hovered, setHovered] = useState(false);
  const [hoveredSilverRing, setHoveredSivlerRing] = useState(false);
  const [showPopMenuSilverRing , setShowPopMenuSilverRing] = useState(false);
  const [showPopMenuSilver, setShowPopMenuSilver] = useState(false);

  const showSubMenu = () => {
    setShowPopMenuSilver(true);
    setHovered(true);
  }
  const showSubMenuRing = () => {
    setShowPopMenuSilverRing(true);
    setHoveredSivlerRing(true);
    setHoveredSivlerRing(true);
  }

  const hideSubMenu = () => {
    setShowPopMenuSilver(false);
    setShowPopMenuSilverRing(false);
    setHovered(false);
    setHoveredSivlerRing(false);
  }

  return (
    <div className="popUp">
    <div className="popup-menu">
      <ul>
        <a href=""><li>Արծաթյա Ականջօղեր</li></a>
        <a href=""><li>Արծաթյա Ապարանջաններ</li></a>
        <a onMouseOver={showSubMenu} onMouseOut={hideSubMenu} id="showMens"  href=""><li className={hovered ? 'hovered' : ''}>Արծաթյա Վզնոցներ <img className='right' src={right} alt="" /></li></a>
        <a onMouseOver={showSubMenuRing} onMouseOut={hideSubMenu} id='showMens' href=""><li  className={hoveredSilverRing ? 'hoveredRing' : ''} >Արծաթյա Մատանիներ <img className='right' src={right} alt="" /></li></a>
      </ul>
    </div>
    {showPopMenuSilver && <div onMouseOver={showSubMenu} onMouseOut={hideSubMenu} className="mens" >
          <h3>Արծաթյա Վզնոցներ </h3>
        <ul>
          <a href=""><li>Տղամարդկանց Վզնոցներ</li></a>
          <a href=""><li>Կանացի Վզնոցներ</li></a>
        </ul>
      </div>}
      {showPopMenuSilverRing && <div onMouseOver={showSubMenuRing} onMouseOut={hideSubMenu} className="mens" >
        <h3>Արծաթյա Մատանիներ</h3>
        <ul>
          <a href=""><li>Տղամարդկանց Մատանիներ</li></a>
          <a href=""><li>Կանացի Մատանիներ</li></a>
        </ul>
      </div>}
    </div>
  )
}


export { PopUpMenuGold, PopUpMenuSilver };