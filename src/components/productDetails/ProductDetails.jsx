import React, { useContext } from 'react'
import "./productDetails.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


 export default function ProductDetails() {

  const navigate = useNavigate()

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

      <div className="container product-info">
        <div className="details">
          <h2>{name}</h2>
          <p>${price}</p>
          <br />
          <p>{details}</p>
        </div>
        <br />
        <br />
        <button className='add-cart' onClick={() => addToCart(id)}>
          Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
        <br />
        <button className='to-cart' onClick={() => navigate("/cart")} >
          Go to Checkout
        </button>
      </div>

    </div>
  );
}
