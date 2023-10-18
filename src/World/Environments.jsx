import { Environment, Cloud, Stars} from "@react-three/drei";

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

        </>
    )
}

export default Environments;