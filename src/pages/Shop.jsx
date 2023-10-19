import React from 'react'
import Product from '../components/products/Product'
import PageHeading from '../components/pageHeading/PageHeading'


export default function Shop() {

  return (
    <div className='section shop'>
      <PageHeading text="All of our products" />
      <Product />
    </div>
  )
}




