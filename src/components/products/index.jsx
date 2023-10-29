import React from 'react'
import './product.css'

import ProductBtn from '../productBtn/index'
import useCoffeeShop from '../../utils/useCoffee'


export default function Product() {
  
  const { coffee, isLoading } = useCoffeeShop()
  if (isLoading) {
    return <div>Loading...</div>
  } 

  return (
    <div className='product'>
      {coffee.map((cafe) =>
        <ProductBtn 
          key={cafe.id} 
          data={cafe} 
        />
      )}
    </div>
  )
}
