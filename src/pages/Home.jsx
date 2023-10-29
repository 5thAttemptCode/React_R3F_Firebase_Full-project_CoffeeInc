import React from 'react'

import Experience from '../components/experience/index'
import Landing from '../components/landing/index'
import Shop from './Shop'


export default function Home() {
  
  return (
    <div className='home'>
      <Experience />
      <Landing />
      <Shop />
    </div>
  )
}
