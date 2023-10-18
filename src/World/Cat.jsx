import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei"; 

const Cat = () => {
    const catRef = useRef();
    const catModel = useGLTF('/assets/models/cat/scene.gltf');

    const [play, setPlay] = useState(false);
    const [hitSound] = useState(() => new Audio('/assets/sounds/sonido.wav'))

    const { animations } = catModel;
    const { actions } = useAnimations(animations, catRef);
    console.log(catModel);

    useEffect(() => {
        const action = actions["show_lc_001"];
        action.play();

        if (catModel.scenes.length) {
            const scene = catModel.scenes[0];
            scene.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }
        if (play) {
            hitSound.currentTime = 0
            hitSound.volume = Math.random()
            hitSound.play();
        }
    }, [play]);

    return (
        <mesh ref={catRef} position-x={2} position-y={-0.5} position-z={2} rotation-y={-Math.PI * -0.03} scale={0.5} castShadow={true}>
            <primitive object={catModel.scene} />
        </mesh>
    );
};

export default Cat;
useGLTF.preload("/assets/models/cat/scene.gltf");
