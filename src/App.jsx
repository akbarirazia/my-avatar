import { Canvas } from "@react-three/fiber"

import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-2, 0, 6], fov: 20 }}>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
