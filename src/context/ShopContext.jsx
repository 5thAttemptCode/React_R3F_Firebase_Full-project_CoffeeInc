import { createContext, useEffect, useState, useMemo } from "react"
import useCoffeeShop from '../utils/useCoffee'


export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {

  const [ cartItems, setCartItems ] = useState({})
  const { coffee, isLoading } = useCoffeeShop()

  const defaultCart = useMemo(() => {
    let defaultCart = {}
      coffee.forEach((item) => {
        defaultCart[item.id] = 0
      })
    return defaultCart
  }, [coffee]) 

  useEffect(() => {
    if (!isLoading) { //Add check for isLoading
      setCartItems(defaultCart)
    }
  }, [coffee, isLoading, defaultCart]) //Add 'defaultCart' to dependencies

  //___________________________________________
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = coffee.find((cafe) => String(cafe.id) === String(item))
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price
        } else {
          console.warn(`No coffee with the id ${item} is brewing...`)
        }
      }
    }
    return totalAmount
  }

  //___________________________________________
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }))
  }

  //___________________________________________
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  //___________________________________________
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  //___________________________________________
  const checkout = () => {
    setCartItems(getDefaultCart())
  }

  //___________________________________________
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}