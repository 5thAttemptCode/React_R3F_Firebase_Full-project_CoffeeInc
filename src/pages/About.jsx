import React from 'react'

import PageHeading from '../components/pageHeading/index'


export default function About() {

  return (
    <div className='section section-margin about'>
      <PageHeading text="Our mission" />
      <p className='paragraph'>Coffee Inc was founded in 2008 by speciality coffee pioneers, Timo and Henry. Synonymous with Melbourne coffee culture, 
        we’ve grown to be a dynamic team of talented coffee professionals, all sharing a wealth of experience and passion for what we do.
        Focused on wholesale, we choose to work with, train and support like-minded businesses wishing to serve our mindfully sourced and 
        skillfully roasted coffee to the best of their ability. By working together and supporting our partners across the supply chain,
        we strengthen our relationships, build expertise and contribute towards placing Melbourne speciality coffee & culture on the map. 
        We pride ourselves on the exceptional quality coffee and equipment we source, buy, import, and deliver internationally.
      </p>
    </div>
  )
}
