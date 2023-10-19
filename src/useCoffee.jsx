
import { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';

const useCoffeeShop = () => {
 const [coffee, setCoffee] = useState([]);

 useEffect(() => {
    const coffeeRef = collection(db, "coffee");

    const q = query(coffeeRef);
    getDocs(q)
      .then((querySnapshot) => {
        let coffee = [];
        querySnapshot.docs.forEach((doc) => {
          coffee.push({ ...doc.data(), id: doc.id });
        });
        setCoffee(coffee);
      })
      .catch((err) => {
      });
 }, []);

 return coffee;
};

export default useCoffeeShop;
