import React from 'react'
import Shop from './Shop'
import Experience from '../components/experience/Experience'
import Landing from '../components/landing/Landing'



export default function Home() {
  return (
    <div className='home'>
      <Experience />
      <Landing />
      <Shop />
    </div>
  )
}
