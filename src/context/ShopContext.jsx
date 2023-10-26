import { createContext, useEffect, useState } from "react";
import useCoffeeShop from "../useCoffee";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [ cartItems, setCartItems ] = useState({})
  const { coffee, isLoading } = useCoffeeShop()

  useEffect(() => {
    if (!isLoading) { //Add check for isLoading
      let defaultCart = {}
      coffee.forEach((item) => {
          defaultCart[item.id] = 0
      })
      setCartItems(defaultCart)
    }
  }, [coffee, isLoading])

  //___________________________________________
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = coffee.find((cafe) => String(cafe.id) === String(item))
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price
        } else {
          console.warn(`No item found with id ${item}`)
        }
      }
    }
    return totalAmount;
  };

  //___________________________________________
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
  };

  //___________________________________________
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  };

  //___________________________________________
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  };

  //___________________________________________
  const checkout = () => {
    setCartItems(getDefaultCart())
  };

  //___________________________________________
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  // console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};