import React from 'react'
import "./productBtn.css"
import { Link } from 'react-router-dom'
import ProductDetails from '../productDetails/ProductDetails'



export default function ProductBtn({ cafe }) {
  return (
    // <div className='product-btn'>
      
    // </div>
    <Link className='product-btn' to={`/${cafe.id}`} state={{ cafe }} element={<ProductDetails />} >
      <p>{cafe.name}</p>
      <img src={cafe.image} alt="" />
    </Link>
  )
}
