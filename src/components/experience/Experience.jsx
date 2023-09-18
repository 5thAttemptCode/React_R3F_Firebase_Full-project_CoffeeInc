import React from 'react'
import { Canvas } from "@react-three/fiber"
import "./experience.css"
import { Coffee } from './Coffee'
import { SpotLight } from '@react-three/drei'



export default function Experience() {
  return (
    <div className='canvas'>
      <Canvas camera={{ position: [0, 5, 0], fov: 55 }}>

        <Coffee rotation-y={1.2} />
        <directionalLight intensity={2} position={[ 0, 4, 0]} />
        <SpotLight color="whitesmoke" position={[3, 3, -2]} castShadow  penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={10} intensity={4} />
        
        <mesh position={[0, 0, 2]} receiveShadow>
          <planeGeometry args={[50, 50]} />
          <meshPhongMaterial />
        </mesh>

      </Canvas>
    </div>
  )
}
