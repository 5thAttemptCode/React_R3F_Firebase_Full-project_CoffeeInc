import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './components/nav//Nav'
import ProductDetails from './components/productDetails/ProductDetails'


export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/:cafeId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

