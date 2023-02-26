import React from 'react'
import  "./headerStyle.css"


export default function Header() {
 

  return (
    <div className='header'>
      <a className='logotype' href="/">VOSKERICH</a>
      <ul className='headerMenu'>
        <li> <a href="" >Ոսկերչական Զարդեր</a>  </li>
        <li> <a href="" >Արծաթե Զարդեր</a> </li>
        <li> <a href="" >Ժամացույցներ </a> </li>
        <li> <a href="" >Աքսեսուարներ </a> </li>
        <li> <a href="" >Ոսկերչական աշխարհ </a> </li>
      </ul>
    </div>
  )
}
