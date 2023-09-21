import React, { createContext, useState } from 'react'
import { db } from "../firebase.config"
import { collection, getDocs } from "firebase/firestore"


export const ShopContext = createContext(null)

const coffeeRef = collection(db, "coffee")

//This function will get the array and create and object to represent the initial state of the cart
const getDefaultCart = async () => {
    let cart = {}
    const snapshot = await getDocs(coffeeRef);
    snapshot.docs.forEach((doc) => {
      cart[doc.id] = 0;})
      console.log(cart);
    for (let i = 1; i < coffeeRef.length + 1; i++){
        cart[i]= 0
    }
    return cart
}


export const ShopContextProvider = (props) => {

  const [ cartItems, setCartItems ] = useState(getDefaultCart([]))


  const addToCart = (itemId) => {

    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  console.log(cartItems);
 
  const contextValue = { cartItems, addToCart, removeFromCart }
  
  return  <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}


