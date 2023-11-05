import React from 'react'
import './productBtn.css'

import { Link } from 'react-router-dom'

import ProductDetails from '../productDetails'


export default function ProductBtn({ data }) {
  return (
    <Link className='product-btn'
      to={`/shop/${data.id}`}
      state={{data}}
      element={<ProductDetails />}
    >
      <img src={data.image} alt="" />
      <p>{data.name}</p>
    </Link>
  )
}
