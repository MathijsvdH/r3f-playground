import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <mesh onClick={() => console.log('click')}>
          <boxGeometry args={[5, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[2, 50, 5]} />
      </Canvas>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
