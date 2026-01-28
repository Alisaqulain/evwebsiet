'use client'

import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import * as THREE from 'three'

/**
 * Color transition sequence for the e-rickshaw - matching logo colors
 */
const COLOR_SEQUENCE = [
  new THREE.Color(0x1a5f3f), // Dark Green (bamboo stalk, crowns, text)
  new THREE.Color(0x4ade80), // Light Green (bamboo leaves)
  new THREE.Color(0x3b82f6), // Bright Blue (EV accent)
]

interface RickshawModelProps {
  modelPath?: string
  hovered: boolean
}

/**
 * ModelLoader Component
 * Handles loading of GLTF models
 */
function ModelLoader({ modelPath, groupRef, materialsRef, hovered }: {
  modelPath: string
  groupRef: React.RefObject<THREE.Group>
  materialsRef: React.MutableRefObject<MeshStandardMaterial[]>
  hovered: boolean
}) {
  const gltf = useGLTF(modelPath)
  const scale = hovered ? 1.1 : 1.0

  // Extract and store materials from the model (only once on mount)
  useEffect(() => {
    materialsRef.current = []
    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        
        if (child.material) {
          const material = new MeshStandardMaterial({
            color: new THREE.Color(0x1a5f3f),
            metalness: 0.8,
            roughness: 0.2,
            emissive: new THREE.Color(0x1a5f3f),
            emissiveIntensity: 0.2,
          })
          child.material = material
          materialsRef.current.push(material)
        }
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gltf])

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={gltf.scene} />
    </group>
  )
}

/**
 * RickshawModel Component
 * Displays the 3D e-rickshaw model with animated color transitions and interactions
 */
export default function RickshawModel({ modelPath, hovered }: RickshawModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [colorIndex, setColorIndex] = useState(0)
  const [targetColor, setTargetColor] = useState(COLOR_SEQUENCE[0])
  const [currentColor, setCurrentColor] = useState(COLOR_SEQUENCE[0])
  const materialsRef = useRef<MeshStandardMaterial[]>([])

  // Color transition animation
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLOR_SEQUENCE.length)
      setTargetColor(COLOR_SEQUENCE[(colorIndex + 1) % COLOR_SEQUENCE.length])
    }, 3000) // Change color every 3 seconds

    return () => clearInterval(interval)
  }, [colorIndex])

  // Smooth color interpolation and animations
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth floating animation with easing
      const floatOffset = Math.sin(state.clock.elapsedTime * 0.6) * 0.25
      groupRef.current.position.y = floatOffset

      // Smooth color transition
      const newColor = currentColor.clone().lerp(targetColor, delta * 0.8)
      setCurrentColor(newColor)

      // Apply color to all materials with hover glow effect
      const emissiveIntensity = hovered ? 0.5 : 0.25
      materialsRef.current.forEach((material) => {
        if (material) {
          material.color.copy(newColor)
          material.emissive.copy(newColor).multiplyScalar(emissiveIntensity)
        }
      })
    }
  })

  // Scale animation on hover
  const scale = hovered ? 1.1 : 1.0

  // If model path is provided, use ModelLoader; otherwise use placeholder
  if (modelPath) {
    return (
      <>
        <ModelLoader
          modelPath={modelPath}
          groupRef={groupRef}
          materialsRef={materialsRef}
          hovered={hovered}
        />
      </>
    )
  }

  // Placeholder geometry (e-rickshaw-like shape)
  return (
    <group ref={groupRef} scale={scale}>
      {/* Main body */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.2, 1.5]} />
        <meshStandardMaterial
          ref={(ref) => {
            if (ref) materialsRef.current[0] = ref
          }}
          color={currentColor}
          metalness={0.8}
          roughness={0.2}
          emissive={currentColor}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Driver cabin */}
      <mesh castShadow receiveShadow position={[0, 1.2, -0.3]}>
        <boxGeometry args={[1.2, 0.8, 0.6]} />
        <meshStandardMaterial
          ref={(ref) => {
            if (ref) materialsRef.current[1] = ref
          }}
          color={currentColor}
          metalness={0.7}
          roughness={0.3}
          emissive={currentColor}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Front wheel */}
      <mesh castShadow receiveShadow position={[0, 0.3, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial
          ref={(ref) => {
            if (ref) materialsRef.current[2] = ref
          }}
          color={currentColor}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Back wheels */}
      <mesh castShadow receiveShadow position={[-0.7, 0.3, -0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
        <meshStandardMaterial
          ref={(ref) => {
            if (ref) materialsRef.current[3] = ref
          }}
          color={currentColor}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh castShadow receiveShadow position={[0.7, 0.3, -0.6]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
        <meshStandardMaterial
          ref={(ref) => {
            if (ref) materialsRef.current[4] = ref
          }}
          color={currentColor}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </group>
  )
}

