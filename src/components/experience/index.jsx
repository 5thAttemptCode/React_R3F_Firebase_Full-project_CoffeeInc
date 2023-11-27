import React, { Suspense, useRef, useState, useEffect } from 'react'
import './style.css'

import { Canvas, useThree } from '@react-three/fiber'
import { Environment, PresentationControls, Html } from '@react-three/drei'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

import { CoffeeShop } from './model/CoffeeShop'
import LandingPage from '@/components/landingPage'
import LoadingScreen from '@/components/loadingScreen'


function AspectWrapper(props) {
  const { camera } = useThree();

  const mql = window.matchMedia("(max-width: 930px)");
  const mobileView = mql.matches;

  useEffect(() => {
    if (mobileView) {
      camera.fov = 55;
    } else {
      camera.fov = 35;
    }
    camera.position.set(2.64, 1.18, 2.78);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, [camera, mobileView]);

  return null;
}

export default function Experience() {

  const [ start, setStart ] = useState(false)
  const [ isMobileView, setIsMobileView ] = useState(window.innerWidth < 930)

  const experienceRef = useRef(null)

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 930);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="canvas" ref={experienceRef}>
        <Canvas key={isMobileView} camera={{ fov: isMobileView ? 55 : 35, position: [2.64, 1.18, 2.78] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <Environment preset="sunset" />
            <PresentationControls global polar={[0, 0]} azimuth={[-0.5, 0.4]}>
              {start && 
                <>
                  <CoffeeShop position-y={-0.3} /> 
                  <MenuLinks experienceRef={experienceRef} />
                </>
              }
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
      <MenuLink position={[-0.02, 0.1, -0.2]} rotation-y={1.6}>
        <button className='shop-btn' onClick={() => goToPage('/shop', [0.24, 0.2, 0.11])}>SHOP</button>
      </MenuLink>

      <MenuLink position={[-0.2, 0.5, -0.95]}>
        <button className='shop-btn' onClick={() => goToPage('/about', [1.5, 1, 1.5])}>ABOUT</button>
      </MenuLink>

      <MenuLink position={[-0.14, 0.3, -0.95]}>
        <button className='shop-btn' onClick={() => goToPage('/contact', [1, 1.1, -0.3])}>CONTACT</button>
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
