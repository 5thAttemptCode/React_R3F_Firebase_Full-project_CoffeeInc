import React from 'react'
import Shop from './Shop'
import Experience from '../components/Experience'
import Landing from '../components/Landing'



export default function Home() {
  return (
    <div className='home'>
      <Experience />
      <Landing />
      <Shop />
    </div>
  )
}
