import React from 'react'
import { Link } from 'react-router-dom'
import "./menu.css"


export default function Menu() {

  return(
    <ul className='menu'>
        <Link className='linkColor' to={"/about"}>ABOUT</Link>
        <Link className='linkColor' to={"/contact"}>CONTACT</Link>
        <Link className='linkColor' to={"/"}>SHOP</Link>
    </ul>
  )
}
