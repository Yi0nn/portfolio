import { Environment, Sparkles, Stars} from "@react-three/drei";

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
            
        </>
    )
}

export default Environments;