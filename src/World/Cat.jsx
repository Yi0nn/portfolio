import { useEffect, useRef } from "react";
const { useGLTF } = require("@react-three/drei")

const Cat = () => {

    const penguinRef = useRef();
    const catModel = useGLTF('/assets/models/cat/scene.gltf')
    console.log(catModel);

    return (
        <mesh ref={penguinRef} position-x={2} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={200}>
            <primitive object = {catModel.scene} />
        </mesh>
    )

}
export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");
