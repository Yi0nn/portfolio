import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper, PointLightHelper, HemisphereLightHelper } from "three";

const Lights = () => {

    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 0.5, "white");

    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper, 1, "white");

    return <>
            <ambientLight intensity={0.2} />
            <pointLight position={[1.2,1,-0.3]} intensity={4} color={"pink"} castShadow={true} />
            <pointLight position={[4.7,1,-0.3]} intensity={4} color={"pink"}  />
            <pointLight position={[5,1,-3.3]} intensity={4} color={"pink"}  />
            <pointLight position={[1,1,-3.3]} intensity={4} color={"pink"} castShadow={true} />

            <pointLight position={[3,1.5,-2.5]} intensity={5} color={"pink"} />

            <spotLight position={[3, 4 , -0.8]} angle={90} intensity={20} color={"white"} penumbra={1} distance={8} />


        </>
}
export default Lights;
