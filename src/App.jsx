import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/nav//Nav'
import ProductDetails from './components/productDetails/ProductDetails'
import Login from './pages/form/Login'
import Cart from './pages/cart/Cart'
import SignUp from './pages/form/SignUp'
import { AuthContextProvider } from './context/Context'
import Account from './pages/account/Account'
import ProtectedRoute from './components/ProtectedRoute'
import LoggedInBar from './components/loggedInBar/LoggedInBar'


export default function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Nav />
      <LoggedInBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/:cafeId" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  )
}

