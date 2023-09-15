import React, { useEffect, useState } from 'react'
import { db } from "../firebase.config"
import { collection , getDocs, query} from "firebase/firestore"
import Product from '../components/Product'

export default function Shop() {

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
        console.log(err.message);
      })
  }, [])

  return (
    <div className='section shop'>
      <Product coffee={coffee} />
    </div>
  )
}
