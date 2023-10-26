import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export default function ItemInCart(props) {
    const { id, image, name, price } = props.data
    const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext)

  return (
    <div className='item-in-cart'>
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() => addToCart(id)}>+</button>
            <input type="text" value={cartItems[id]} readOnly={false} onChange={e => updateCartItemCount(Number(e.target.value, id))} />
            <button onClick={() => removeFromCart(id)}>-</button>
        </div>
    </div>
  )
}
