import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bug(props) {
  const bugRef = useRef();
    const bugModel = useGLTF('/assets/models/bug/bug.glb');
  return (
    <mesh ref={bugRef} position-x={-2} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.3} castShadow={true}>
          <primitive object={bugModel.scene} />
        </mesh>
  );
}
export default Bug;