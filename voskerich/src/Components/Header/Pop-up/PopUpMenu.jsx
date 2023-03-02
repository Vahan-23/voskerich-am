import React from 'react'
import './popUpStyle.css'
import  "../headerStyle.css"

 function PopUpMenuGold() {
  return (

    <div className="popup-menu">
      <ul>
      <a href=""><li> Ոսկե Ականջօղեր</li></a>
      <a href=""> <li>Ոսկե Ապարանջաններ</li></a>
      <a href=""> <li>Ոսկե Վզնոցներ</li></a>
      <a href=""> <li>Ոսկե Մատանիներ</li></a>
      </ul>
    </div>
  )
}

function PopUpMenuSilver() {
  return (

    <div className="popup-menu">
      <ul>
      <a href=""><li>Արծաթյա Ականջօղեր</li></a>
      <a href=""><li>Արծաթյա Ապարանջաններ</li></a>
      <a href=""><li>Արծաթյա Վզնոցներ</li></a>
      <a href=""><li>Արծաթյա Մատանիներ</li></a>
      </ul>
    </div>
  )
}


export { PopUpMenuGold , PopUpMenuSilver };