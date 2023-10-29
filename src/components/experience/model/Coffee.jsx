import React  from 'react'
import { useGLTF } from '@react-three/drei'


export function Coffee( props ) {

  const { nodes, materials } = useGLTF('/coffee.gltf')
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.002']} position={[0, 0.946, 0]} />
    </group>
  )
}

useGLTF.preload('/coffee.gltf')
