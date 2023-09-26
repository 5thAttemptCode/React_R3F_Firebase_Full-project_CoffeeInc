import { createContext, useEffect, useState } from "react";
import { db } from "../firebase.config";
import { collection, query } from "firebase/firestore";

export const ShopContext = createContext(null);

const coffeeRef = () => {
    
  const [ coffee, setCoffee ] = useState()

  useEffect(() => {
    const coffeeRef = collection(db, "coffee")
    const q = query(coffeeRef)
    getDocs(q)
      .then((querySnapshot) => {
        let coffee = []
        querySnapshot.docs.forEach((doc) => {
          coffee.push({ ...doc.data(), id: doc.id})
        })
        setCoffee(coffee)
      })
      .catch(err => {
      })
     
  }, [])
}


const getDefaultCart = () => {

  let cart = {};
  for (let i = 1; i < coffeeRef.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = coffeeRef.find((cafe) => cafe.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("HELLO");
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};