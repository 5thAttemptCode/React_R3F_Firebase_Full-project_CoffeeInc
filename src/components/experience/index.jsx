import React from 'react'
import './experience.css'

import { Canvas } from '@react-three/fiber'
import { CoffeeShop } from './CoffeeShop'
import { Environment, Html, PresentationControls } from '@react-three/drei'
import Menu from './html/Annotation'


export default function Experience() {

  return (
    <div className="experience">
      <div className='canvas'>
        <Canvas camera={{ fov: 35, position: [2.64, 1.18, 2.78] }}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />
          <PresentationControls  
            polar={[0, 0]}
            azimuth={[-0.5, 0.5]} 
          >
            <CoffeeShop position-y={-0.3} />
            <Menu />
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  )
}
