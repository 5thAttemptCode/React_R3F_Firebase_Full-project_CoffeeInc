import React, { Suspense, useRef, useState } from 'react'
import './experience.css'

import { Canvas, useThree } from '@react-three/fiber'
import { Environment, PresentationControls, Html } from '@react-three/drei'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

import { CoffeeShop } from './model/CoffeeShop'
import LandingPage from '../landingPage'
import LoadingScreen from '../loadingScreen'


export default function Experience() {

  const [ start, setStart ] = useState(false)

  const experienceRef = useRef(null)

  const mobileView = window.innerWidth < 930

  return (
    <>
      <div className="canvas" ref={experienceRef}>
        <Canvas camera={{ fov: mobileView ? 55 : 35, position: [2.64, 1.18, 2.78] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <Environment preset="sunset" />
            <PresentationControls polar={[0, 0]} azimuth={[-0.5, 0.5]}>
              {start && 
                <>
                  <CoffeeShop position-y={-0.3} /> 
                  <MenuLinks experienceRef={experienceRef} />
                </>}
            </PresentationControls>
          </Suspense>
        </Canvas>
        <LandingPage />
      </div>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  )
}

function MenuLinks({ experienceRef }) {
  const { camera } = useThree()
  const navigate = useNavigate()
  const goToPage = (route, position) => {
    gsap.to(camera.position, { duration: 2, x: position[0], y: position[1], z: position[2], ease: "power4.out", 
                               onStart: () => gsap.to(experienceRef.current, { duration: 2, opacity: 0 }), 
                               onComplete: () => navigate(route)  
                             }
    )
  }

  return (
    <>
      <MenuLink position={[0, 0, 0]} rotation-y={1.6}>
        <button className='shop' onClick={() => goToPage('/shop', [0.24, 0.2, 0.11])}>SHOP</button>
      </MenuLink>

      <MenuLink position={[-0.2, 0.4, -0.9]}>
        <button className='about' onClick={() => goToPage('/about', [1.5, 1, 1.5])}>ABOUT</button>
      </MenuLink>

      <MenuLink position={[0.6, 0.6, -0.9]}>
        <button className='contact' onClick={() => goToPage('/contact', [1, 1.1, -0.3])}>CONTACT</button>
      </MenuLink>
    </>
  )
}

function MenuLink({ children, ...props }) {
  return (
    <Html {...props} distanceFactor={1} transform occlude>
      {children}
    </Html>
  )
}


