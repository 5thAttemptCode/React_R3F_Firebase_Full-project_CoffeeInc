import React, { useContext } from 'react'
import './style.css'

import { useNavigate } from 'react-router-dom'

import ItemInCart from './itemInCart/index'
import { ShopContext } from '@/context/ShopContext'
import PayPalButton from '@/utils/paypal'
import useCoffeeShop from '@/utils/useCoffee'


export default function Cart() {
  
  const navigate = useNavigate()

  //context
  const { coffee, isLoading } = useCoffeeShop()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount().toFixed(2) //two digist after period

  if (isLoading) {
    return <div>Loading...</div>
  } 

  return (
    <div className='cart'>
      <h1>YOUR CART</h1>
      <br />

      <div>
        <div className='in-cart'>
          {coffee.map((cafe) => {
            if (cartItems[cafe.id] !== 0) {
              return <ItemInCart key={cafe.id} data={cafe} />
            }
          })}
        </div>

        <div className='sticky'>
          <div>
            {totalAmount > 0 ? (
              <div className='total'>
                <hr />
                <br />
                <h3>Total: &nbsp; &nbsp; ${totalAmount}</h3>
                <hr />
                <hr />
                <br />
                <br />
                <div className="paypal" >
                  <PayPalButton totalAmount={totalAmount}/>
                </div>
              </div>
              ) : (
                null
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

