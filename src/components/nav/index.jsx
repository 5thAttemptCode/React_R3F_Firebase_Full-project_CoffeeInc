import React, { useContext, useRef, useState } from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import { ShoppingCartSimple, User, CheckCircle } from '@phosphor-icons/react'

import Menu from '@/components/menu/index'
import { ShopContext } from '@/context/ShopContext'
import { UserAuth } from '@/context/AuthContext'


export default function Nav() {

  //Menu
  const [ show, setShow ] = useState(false)
  const menuRef = useRef();
  
  //Item-in-Cart symbol
  const { cartItems } = useContext(ShopContext)
  const cartItemCount = Object.values(cartItems).reduce ((a, b) => a + b, 0)

  //Login-check
  const { user } = UserAuth()

  return (
    <>
      <nav>
        <div className="logo">
          <Link className='logo-btn' to="/">Coffee Inc.&trade;</Link>
        </div>
        <div className="items">
          {show ? null : 
            <>
              <Link className='user' to="/cart">
                <ShoppingCartSimple size={30} />
                {cartItemCount > 0 &&
                  <div className="cart-amount">
                    {cartItemCount}
                  </div>
                }
              </Link>
              <Link className='user' to="/account">
                <User size={30} />
                {user && <CheckCircle className='login-check' size={25} />}
              </Link>
            </>
          }
          <div className="menu-btn" onClick={() => setShow(!show)}>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      {show ? <Menu ref={menuRef} setShow={setShow} /> : null} 
    </>
  )
}
