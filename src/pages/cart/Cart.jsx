import React, { useContext } from 'react'
import "./cart.css"
import useCoffeeShop from '../../useCoffee'
import { ShopContext } from '../../context/ShopContext'
import ItemInCart from './ItemInCart'
import { useNavigate } from 'react-router-dom'


export default function Cart() {
  
  //Continue Shopping
  const navigate = useNavigate()


  const { coffee, isLoading } = useCoffeeShop()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount().toFixed(2) //two digist after period

  if (isLoading) {
    return <div>Loading...</div>
  } 

  return (
    <div className='cart'>
      <h1>YOUR CART</h1>
      <div>
        {coffee.map((cafe) => {
          if (cartItems[cafe.id] !== 0) {
            return <ItemInCart key={cafe.id} data={cafe} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div>
          <p>TOTAL ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>BUY NOW</button>
      </div>
      ) : (
        <h2>Your cart needs coffee!</h2>
      )}
    </div>
  )
}

