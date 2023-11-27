import React, { useEffect } from 'react'
import './style.css'

import gsap from 'gsap'
import { Link } from 'react-router-dom'


const Menu = React.forwardRef(({ setShow, ...props }, ref) => {

  useEffect(() => {
    gsap.fromTo(ref.current, {
      y: "-100vh",
    }, {
      y: "0%",
      duration: 0.4,
      ease: "Power2.easeInOut"
    })
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target === ref.current) {
        setShow(false) 
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [ref, setShow]); 

  return (
    <ul ref={ref} {...props} className='menu'>
      <Link onClick={() => setShow(false)} to={"/about"}>ABOUT&nbsp;&nbsp;</Link>
      <Link onClick={() => setShow(false)} to={"/contact"}>CONTACT&nbsp;&nbsp;</Link>
      <Link onClick={() => setShow(false)} to={"/shop"}>SHOP&nbsp;&nbsp;</Link>
    </ul>
  )
})

export default Menu;