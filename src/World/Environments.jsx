import { Environment, Sparkles, Stars} from "@react-three/drei";

const Environments = () => {
    return(
        <>
            <Sparkles 
            color="pink"
            count={50}
            size={5}
            fade={false}
            speed={0.2}
            scale={6}
            />

            <Stars
            radius={100} 
            depth={50} 
            count={5000} 
            factor={2} 
            saturation={0} 
            />
            
        </>
    )
}

export default Environments;