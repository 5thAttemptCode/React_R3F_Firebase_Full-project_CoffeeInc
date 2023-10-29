import React, { useContext } from "react"
import './buyNow.css'

import { ShopContext } from '../../context/ShopContext'
import useCoffeeShop from "../../utils/useCoffee"


export default function BuyNow({ cafe }) {

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[cafe.id];

  return (
    <div className='buy-now' onClick={() => addToCart(cafe.id)}>
      <div>
        <div>
          Add to Cart + {cartItemCount > 0 && <> ({cartItemCount})</>}
        </div>
      </div>
    </div>
  )
}
