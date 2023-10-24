import React, { useContext } from 'react'
import "./productDetails.css"
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


 export default function ProductDetails() {

  //Get the data for each product
  const location = useLocation()
  const data = location.state.data
  const { id, name, details, price, image } = data

  //context
  const { addToCart, cartItems } = useContext(ShopContext)
  const cartItemCount = cartItems[id];

  return (
    <div className="product-details">
      <div className="container image">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{details}</p>
      </div>
      <button onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
}
