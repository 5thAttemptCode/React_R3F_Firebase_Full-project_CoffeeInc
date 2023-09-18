import React from 'react'
import { useLocation } from 'react-router-dom'
import "./productDetails.css"
import BuyNow from '../buyNow/BuyNow'



export default function ProductDetails() {

    const location = useLocation()
    const cafe = location.state.cafe

  return (
    <div className='product-details'>
      <div className="container image">
        <img src={cafe.image} alt="" />
      </div>
      <div className="container details">
        <div>
            <p className='name'>{cafe.name}</p>
            <p>{cafe.details}</p>
            <hr />
            <p>${cafe.price}</p>
            <br />
            <BuyNow />
        </div>
      </div>
    </div>
  )
}
