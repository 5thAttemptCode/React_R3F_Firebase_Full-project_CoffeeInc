import React from 'react'
import './productBtn.css'

import { Link } from 'react-router-dom'

import ProductDetails from '../productDetails'


export default function ProductBtn({ data }) {

  return (
    <Link 
      className='product-btn' 
      to={`/${data.id}`}
      state={{data}}
      element={<ProductDetails />}
    >
      <p>{data.name}</p>
      <img src={data.image} alt="" />
    </Link>
  )
}

