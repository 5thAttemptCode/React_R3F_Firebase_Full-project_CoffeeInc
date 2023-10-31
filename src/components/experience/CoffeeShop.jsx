/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/Shop.gltf -o src/components/experience/CoffeeShop.jsx -r public
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CoffeeShop(props) {
  const { nodes, materials } = useGLTF('/shop.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={nodes.Cube001.material} position={[0.059, 0.202, 0.438]} scale={[0.272, 0.189, 0.732]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.Material} position={[-0.856, 0, 0.362]} scale={[0.141, 1.002, 1.002]} />
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[-0.942, 0.649, -0.788]} scale={[0.05, 0.012, 0.208]} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[-0.942, 0.772, -0.552]} scale={[0.05, 0.012, 0.208]} />
      <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-0.34, 0.491, 0.364]} scale={[0.122, 0.135, 0.197]} />
      <mesh geometry={nodes.Cube003.geometry} material={nodes.Cube003.material} position={[-0.942, 0.91, -0.368]} scale={[0.05, 0.012, 0.208]} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[0.517, 0.728, -0.925]} rotation={[0, -Math.PI / 2, 0]} scale={[0.067, 0.012, 0.208]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[0.736, 0.655, -0.92]} scale={[0.013, 0.085, 0.072]} />
      <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0.296, 0.655, -0.92]} scale={[0.013, 0.085, 0.072]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.003']} />
    </group>
  )
}

useGLTF.preload('/shop.gltf')