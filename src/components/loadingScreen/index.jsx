import React, { useEffect } from 'react'
import './style.css'

import { useProgress } from '@react-three/drei'


export default function LoadingScreen({ started, onStarted }) {

  const { progress } = useProgress()

  useEffect(() => {
    if (progress >= 100){
      onStarted()
    }
  }, [progress, onStarted])

  return (
    <div className={`loading-screen ${started ? "loading-screen--started" : ""}`}>
      <div className="press">
        <div className="lid"></div>
        <div className="stamp"></div>
      </div>
      <br />
      <p>Coffee is brewing...</p>
    </div>
  )
}
