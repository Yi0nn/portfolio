import { useEffect, useRef } from "react";
const { useGLTF, useAnimations} = require("@react-three/drei")

const Cat = () => {

    const catRef = useRef();
    const catModel = useGLTF('/assets/models/cat/scene.gltf')
    const{animations} = catModel;
    const{actions} =useAnimations(animations, catRef);
    console.log(catModel);

    useEffect(() => {
        const action = actions["show_lc_001"]
        action.play()
    }, [])

    return (
        <mesh ref={catRef} position-x={2} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.5}>
            <primitive object = {catModel.scene} />
        </mesh>
    )

}
export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");
