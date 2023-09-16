import React from 'react'
import Header from './Header'
import "./css/landing.css"


export default function Landing() {
  return (
    <div className='landing'>
      <Header text="all about" />
      <Header text="Coffee" />
    </div>
  )
}
