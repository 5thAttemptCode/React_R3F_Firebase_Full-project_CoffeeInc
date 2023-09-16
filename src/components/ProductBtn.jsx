import React from 'react'
import "./css/productBtn.css"


export default function ProductBtn({ cafe }) {
  return (
    <div className='product-btn'>
      <p>{cafe.name}</p>
      <img src={cafe.image} alt="" />
    </div>
  )
}
