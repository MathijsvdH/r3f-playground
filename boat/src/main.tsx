import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei"


function Sailboat() {
  const { scene } = useGLTF('/sailboat.glb')
  const SailboatRef = useRef(scene)

  useFrame((state) => {
    if (SailboatRef.current) {
      SailboatRef.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.05
      SailboatRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.03
    }
  })

  return <primitive object={SailboatRef.current} onClick={() => console.log('click')} onPointerOver={() => console.log('hover')} />
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [20, 10, 10], near: 0.1, far: 10000 }}>
        <OrbitControls />
        <Sailboat />
        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 2, 5]} />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
