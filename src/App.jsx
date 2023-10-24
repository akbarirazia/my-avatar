import { Canvas } from "@react-three/fiber"
import { useState } from "react"

import Experience from "./components/Experience"

function App() {
  const [loading, setLoading] = useState(true)
  // const location = useLocation()
  window.onload = () => {
    setLoading(false)
  }
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Canvas shadows camera={{ position: [-2, 0, 6], fov: 20 }}>
          <Experience />
          {/* <pointLight position={[10, 10, 10]} /> */}
        </Canvas>
      )}
    </>
  )
}

export default App
