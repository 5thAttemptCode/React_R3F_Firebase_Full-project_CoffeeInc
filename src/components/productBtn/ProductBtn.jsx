import React from 'react'
import "./productBtn.css"


export default function ProductBtn({ cafe }) {
  return (
    <div className='product-btn'>
      <p>{cafe.name}</p>
      <img src={cafe.image} alt="" />
    </div>
  )
}
