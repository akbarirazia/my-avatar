import {
  Environment,
  EnvironmentCube,
  OrbitControls,
  Sky,
} from "@react-three/drei"
import React, { useRef, useState, useEffect } from "react"
import { Avatar } from "./Avatar"
import { DirectionalLight } from "three"

function Experience() {
  // useEffect(() => {
  //   console.log(avatar.positionY)
  // }, [avatar.position])
  const avatarRef = useRef(null)

  useEffect(() => {
    console.log(avatarRef.current.position)
  }, [])

  return (
    <>
      <OrbitControls zoomSpeed={1} />
      <group position={[0, -1.5, 0]} rotation={[0, -0.8, 0]} ref={avatarRef}>
        <directionalLight
          // ref={directionalLightRef}
          color="blue"
          intensity={1}
          position={[-5, -1, 0]}
          castShadow
        />
        <Sky />
        <Environment preset="sunset" />
        <Avatar />
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
