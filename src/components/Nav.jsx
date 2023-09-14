import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export default function Nav() {

  const [ show, setShow ] = useState(false)
  return (
    <>
      <nav>
          <div className="logo">
            <Link className='logo-btn' to="/">Coffee Inc.&trade;</Link>
            <span>45°35'19.68"N 9°11'52.44"W</span>
          </div>

          <div className="menu-btn" onClick={() => setShow(!show)}>
            <div></div>
            <div></div>
          </div>
      </nav>
      {show? <Menu /> : null}
    </>
  )
}
