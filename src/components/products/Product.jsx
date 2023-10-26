import React from 'react'
import ProductBtn from '../productBtn/ProductBtn'
import "./product.css"
import useCoffeeShop from '../../useCoffee'


export default function Product() {
  
const {coffee, isLoading} = useCoffeeShop()
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
