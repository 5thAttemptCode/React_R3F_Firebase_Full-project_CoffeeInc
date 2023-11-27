import React, { useContext } from 'react'
import '../style.css'

import { ShopContext } from '@/context/ShopContext'


export default function ItemInCart(props) {
  
  const { id, image, name, price } = props.data
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='item-in-cart'>
      <img src={image} alt="" />
      <div>
        <h1>{name}</h1>
        <br />
        <h3>${price}</h3>
        <br />
        <div>
          <button className='input' onClick={() => addToCart(id)}>+</button>
          <input className='input' type="text" value={cartItems[id]} readOnly={false} onChange={e => updateCartItemCount(Number(e.target.value, id))} />
          <button className='input' onClick={() => removeFromCart(id)}>-</button>
        </div>
      </div>
    </div>
  )
}
