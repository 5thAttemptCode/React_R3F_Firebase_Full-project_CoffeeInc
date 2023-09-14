import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className='menu'>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
    </ul>
  )
}
