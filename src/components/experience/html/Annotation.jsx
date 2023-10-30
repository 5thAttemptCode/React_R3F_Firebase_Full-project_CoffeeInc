import { Html } from '@react-three/drei'
import React from 'react'
import "../experience.css"

export default function Menu() {
  return (
    <>
        <Annotation position={[0, 0, 0]} rotation-y={1.6}>
          <a className='shop' href="/shop">SHOP</a>
        </Annotation>

        <Annotation position={[ -0.2, 0.4, -0.9]}>
          <a className='about' href="/about">ABOUT</a>
        </Annotation>

        <Annotation position={[ 0.6, 0.6, -0.9]}>
          <a className='contact' href="/contact">CONTACT</a>
        </Annotation>
    </>
  )
}



function Annotation({ children, ...props }){
    return(
      <Html
        {...props}
        distanceFactor={1}
        transform
        occlude
      >
        {children}
      </Html>
    )
}
