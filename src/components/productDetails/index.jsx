import React, { useContext } from 'react'
import './style.css'

import { useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '@/context/ShopContext'


export default function ProductDetails() {

  const navigate = useNavigate()

  //get the data for each product
  const location = useLocation()
  const data = location.state.data
  const { id, name, details, price, image } = data

  //context
  const { addToCart, cartItems } = useContext(ShopContext)

  return (
    <div className="product-details">
      <div className="container image">
        <img src={image} alt="" />
      </div>
      <div className="container product-info">
        <div className="details">
          <h2>{name}</h2>
          <br />
          <p>{details}</p>
          <hr />
          <p>${price}</p>
        </div>
        <br />
        <br />
        <button className='add-cart' onClick={() => addToCart(id)}>
          Add to Cart
        </button>
        <br />
        <button className='to-cart' onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
      </div>
    </div>
  )
}
