import { Canvas } from "@react-three/fiber"
import { Avatar } from "./components/Avatar"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 2, 5], fov: 10 }}>
        <Experience />
      </Canvas>
      <h1>Hello world</h1>
    </>
  )
}

export default App
