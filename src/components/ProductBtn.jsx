import React from 'react'

export default function ProductBtn({ cafe }) {
  return (
    <div className='product-btn'>
      <p>{cafe.name}</p>
    </div>
  )
}
