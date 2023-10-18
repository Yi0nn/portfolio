import { Environment, Cloud, Stars, Sky} from "@react-three/drei";

const Environments = () => {
    return(
        <>
            <Stars
            radius={100} 
            depth={50} 
            count={5000} 
            factor={2} 
            saturation={0} 
            />
            
            <Cloud
            opacity={0.5}
            speed={0.4} 
            width={50} 
            depth={5} 
            segments={20} 
            position-y={20}
            />

            <Sky
            sunPosition={[0, 0, -1]} // Coloca el sol debajo del horizonte
            inclination={0.2}       // Ajusta la inclinación para simular el atardecer
            azimuth={180} // Ajusta el ángulo azimutal 
            mieCoefficient={0.005}  // Ajusta la dispersión atmosférica
            elevation={5}           // Ajusta la elevación del sol
            mieDirectionalG={0.07}   // Ajusta la luminosidad del sol
            rayleigh={3}        // Ajusta la dispersión de Rayleigh
            turbidity={10}         // Ajusta la claridad del cielo]
            exposure={0.5}
            />


        </>
    )
}

export default Environments;