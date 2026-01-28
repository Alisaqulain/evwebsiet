'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Lights from './Lights'
import RickshawModel from './RickshawModel'

/**
 * Loading fallback component
 */
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-royal-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-royal-green text-lg">Loading 3D Model...</p>
      </div>
    </div>
  )
}

interface SceneProps {
  modelPath?: string
}

/**
 * Scene Component
 * Main 3D scene container with camera, controls, and environment
 */
export default function Scene({ modelPath }: SceneProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <Lights />

          {/* Environment for reflections */}
          <Environment preset="city" />

          {/* Ground shadows */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4.5}
          />

          {/* 3D E-Rickshaw Model */}
          <RickshawModel modelPath={modelPath} hovered={hovered} />

          {/* Camera controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={15}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate={true}
            autoRotateSpeed={1.2}
            dampingFactor={0.05}
            enableDamping={true}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

