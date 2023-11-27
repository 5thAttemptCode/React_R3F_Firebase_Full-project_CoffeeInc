import React from 'react'
import './style.css'

import PageHeading from '@/components/pageHeading/index'


export default function LandingPage() {
  
  return (
    <div className='landing'>
      <PageHeading text="welcome to" />
      <PageHeading text="Coffee Inc" />
      <br />
      <h3>Your One-Stop Shop for All Things Coffee!</h3>
      <br />
    </div>
  )
}
