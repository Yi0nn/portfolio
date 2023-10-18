import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const WelcomeText = () => {
    const text = `Welcome!`

    return (
        <Center
            position-y={3}
            position-x={0}
            position-z={-1}
        >
            <Float
             speed={2} 
             rotationIntensity={1.5} 
             floatIntensity={1.5} 
            >
            <Text3D
                font={"/assets/fonts/Super Milk_Regular.json"}
                bevelEnabled
                bevelSize={0.01}
                bevelThickness={0.1}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={0.25}
            >
                {text}
                <meshStandardMaterial color={'pink'}/>
            </Text3D>
            </Float>
           
       
        </Center>

    )
}

export default WelcomeText;