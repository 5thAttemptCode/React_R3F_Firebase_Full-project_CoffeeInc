import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import ProductDetails from '@/components/productDetails'


export default function ProductBtn({ data }) {
  return (
    <Link className='product-btn'
      to={`/shop/${data.id}`}
      state={{data}}
      element={<ProductDetails />}
    >
      <img src={data.image} alt="" />
      <p>{data.name}</p>
      <p className='price'>${data.price}</p>
    </Link>
  )
}
