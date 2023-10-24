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
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-red-500 animate-spin"></div>
          </div>
        </div>
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
