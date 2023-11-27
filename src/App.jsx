import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from '@/context/AuthContext'
import { ShopContextProvider } from '@/context/ShopContext'

import About from '@/pages/About'
import Account from '@/pages/account/index'
import Cart from '@/pages/cart/index'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Login from '@/pages/form/Login'
import Nav from '@/components/nav//index'
import ProductDetails from '@/components/productDetails/index'
import ProtectedRoute from '@/utils/ProtectedRoute'
import SignUp from '@/pages/form/SignUp'
import Shop from '@/pages/Shop'
import useViewportHeight from '@/utils/useViewPortHeight'


export default function App() {

  useViewportHeight()
  
  return (
    <ShopContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Nav />
            <Routes>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/shop' element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
              <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ShopContextProvider>
  )
}

