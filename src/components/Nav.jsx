import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/contact"}>CONTACT</Link>
    </nav>
  )
}
