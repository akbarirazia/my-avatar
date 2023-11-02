import { Canvas } from "@react-three/fiber"
import { useState } from "react"

import Experience from "./components/Experience"
import Spinner from "./components/Spinner"

function App() {
  const [loading, setLoading] = useState(false)

  // window.onload = () => {
  //   setLoading(false)
  // }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Canvas shadows camera={{ position: [-2, 0, 6], fov: 20 }}>
          <Experience />
          {/* <pointLight position={[10, 10, 10]} /> */}
        </Canvas>
      )}
    </>
    // <Canvas shadows camera={{ position: [-2, 0, 6], fov: 20 }}>
    //   <Experience />
    //   {/* <pointLight position={[10, 10, 10]} /> */}
    // </Canvas>
  )
}

export default App
