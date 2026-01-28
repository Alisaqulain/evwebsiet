'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Lights Component
 * Provides realistic ambient, directional, and point lighting for the 3D scene
 */
export default function Lights() {
  const pointLightRef = useRef<THREE.PointLight>(null)

  // Subtle animation for point light
  useFrame((state) => {
    if (pointLightRef.current) {
      pointLightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3
      pointLightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 3
    }
  })

  return (
    <>
      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Main directional light (sun) */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Secondary directional light for fill */}
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#3b82f6" />
      
      {/* Animated point light for dynamic highlights */}
      <pointLight
        ref={pointLightRef}
        position={[3, 5, 3]}
        intensity={0.8}
        color="#1a5f3f"
        distance={20}
        decay={2}
      />
      
      {/* Rim light for edge definition */}
      <pointLight
        position={[-3, 3, -3]}
        intensity={0.6}
        color="#3b82f6"
        distance={15}
        decay={2}
      />
    </>
  )
}

