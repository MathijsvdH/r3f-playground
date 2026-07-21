import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei"
import gsap from 'gsap'



function Sailboat() {
  const { scene } = useGLTF('/sailboat.glb')
  const SailboatRef = useRef(scene)
  const { camera } = useThree()

  useFrame((state) => {
    if (SailboatRef.current) {
      SailboatRef.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.05
      SailboatRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.03
    }


  })
  const handleClick = () => {
    gsap.to(
      camera.position, {
      x: 3000,
      y: 900,
      z: 1800,
      duration: 1,
      onUpdate: () => {
        camera.lookAt(0, 0, 0)
      },
    }
    )
  }
  return <primitive object={SailboatRef.current} onClick={() => handleClick()} onPointerOver={() => console.log('hover')} />
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [3000, 900, 1800], near: 0.1, far: 10000 }}>
        <OrbitControls />
        <Sailboat />
        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 2, 5]} />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
