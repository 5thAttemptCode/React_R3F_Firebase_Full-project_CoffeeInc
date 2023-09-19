import React from 'react'
import ProductBtn from './ProductBtn'
import "./css/product.css"


export default function Product({coffee}) {
  return (
    <div className='product'>
      {coffee && coffee.map((cafe) =>
        <ProductBtn key={cafe.id} cafe={cafe} />)}
    </div>
  )
}