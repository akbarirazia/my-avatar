import React, { useEffect, useRef } from "react"
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { useControls } from "leva"

export function Avatar(props) {
  const { nodes, materials } = useGLTF("./models/avatar.glb")
  const group = useRef()
  const { animation } = props
  const { headFollow, cursorFollow } = useControls({
    headFollow: false,
    cursorFollow: false,
  })
  // const initialHeadRotation = new THREE.Quaternion()

  const { animations: walkingAnimation } = useFBX("animation/DrunkWalk.fbx")
  const { animations: standingAnimation } = useFBX("animation/StandingIdle.fbx")
  const { animations: lookingAnimation } = useFBX(
    "animation/NervouslyLookAround.fbx"
  )
  walkingAnimation[0].name = "walk"
  standingAnimation[0].name = "stand"
  lookingAnimation[0].name = "look"

  const { actions } = useAnimations(
    [walkingAnimation[0], standingAnimation[0], lookingAnimation[0]],
    group
  )

  useEffect(() => {
    actions[animation].reset().fadeIn(0.2).play()
    return () => {
      actions[animation].reset().fadeOut(0.2)
    }
  }, [animation])
  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position)
    }

    // else {
    //   group.current.getObjectByName("Head").quaternion.copy(initialHeadRotation)
    // }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
      group.current.getObjectByName("Head").lookAt(target)
    }
  })
  // useEffect(() => {
  //   initialHeadRotation.copy(group.current.getObjectByName("Head").quaternion)
  // }, [])

  return (
    <group {...props} dispose={null} ref={group}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />

        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />

        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./models/avatar.glb")
