import { Center, Float, Html, Text, Text3D } from "@react-three/drei"
import { useEffect } from "react";
import { Color } from "three";

const AboutMeText = () => {
    return (
        <><Html position={[-0.1, 1, 2]} center distanceFactor={7}>
            <h2 onClick={() => alert("Hola me llamo Stefhania me dicen Yion")} 
                className="aboutme-text">Click here</h2>
        </Html>
                <Text
                    font="/assets/fonts/Bangers-Regular.ttf"
                    fontSize={0.1}
                    color={new Color(0xFF0080)}
                    position-y={2}
                    maxWidth={2}
                    textAlign="center"
                >
                </Text>
        </>
        )
    }
    
    export default AboutMeText;