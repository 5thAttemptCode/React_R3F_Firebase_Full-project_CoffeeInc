import React from 'react'

import PageHeading from '../components/pageHeading/index'
import Product from '../components/products/index'


export default function Shop() {

  return (
    <div className='section shop'>
      <PageHeading text="All of our products" />
      <Product />
    </div>
  )
}




