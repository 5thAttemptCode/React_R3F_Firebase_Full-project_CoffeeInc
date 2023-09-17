import React from 'react'
import PageHeading from '../components/pageHeading/PageHeading'


export default function Contact() {
  return (
    <div className='section section-margin contact'>
      <PageHeading text="Let's get in touch" />
      <p className='paragraph'><span>email: </span>info@coffee.com</p>
      <p className='paragraph'><span>phone: </span>03 685 18700</p>
      <br />
      <br />
      <p className='paragraph'>Coffee Inc</p>
      <p className='paragraph'>Cafe Rd. 28</p>
      <p className='paragraph'>Northcote</p>
      <p className='paragraph'>3000 Melbourne, VIC</p>
      <br />
      <br />
      <a className='paragraph' href="https://www.facebook.com/" target='blank'>FACEBOOK</a>
      <a className='paragraph' href="https://www.instagram.com/" target='blank'>INSTAGRAM</a>
      <a className='paragraph' href="https://twitter.com/" target='blank'>TWITTER</a>
    </div>
  )
}
