import {
  Environment,
  EnvironmentCube,
  OrbitControls,
  Sky,
} from "@react-three/drei"
import React, { useRef, useState, useEffect } from "react"
import { Avatar } from "./Avatar"
import { DirectionalLight } from "three"
import { useControls } from "leva"

function Experience() {
  const { animation } = useControls({
    animation: {
      value: "wave",
      options: ["wave", "walk", "stand", "look"],
    },
  })

  return (
    <>
      <OrbitControls zoomSpeed={1} />
      <group position={[0, -1, 0]}>
        <directionalLight
          // ref={directionalLightRef}
          color="blue"
          intensity={1}
          position={[-5, -1, 0]}
          castShadow
        />
        <Sky />
        <Environment preset="sunset" />
        <Avatar animation={animation} />
        <directionalLight
          // ref={directionalLightRef}
          color="white"
          intensity={1}
          position={[10, 5, 0]}
          castShadow
        />
      </group>
      {/* <ambientLight intensity={0.6} /> */}
    </>
  )
}

export default Experience
