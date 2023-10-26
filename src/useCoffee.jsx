import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';


const useCoffeeShop = () => {
  const [coffee, setCoffee] = useState([])
  const [isLoading, setIsLoading] = useState(true) //New loading state

  useEffect(() => {
    setIsLoading(true) //Start loading state
    const coffeeRef = collection(db, "coffee")
    const q = query(coffeeRef)
    getDocs(q)
      .then((querySnapshot) => {
        let coffee = []
        querySnapshot.docs.forEach((doc) => {
          coffee.push({ ...doc.data(), id: doc.id })
        })
        setCoffee(coffee)
        setIsLoading(false) //Stop loading state when complete
      })
      .catch((err) => {
      })
  }, [])

  return { coffee, isLoading } //Return isLoading as well
};
export default useCoffeeShop