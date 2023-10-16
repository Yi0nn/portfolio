import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./Info/Info";

const App = () => {
    return (
        <>
        <Info 
            nombre={"Stefhania Noguera"}
            biografia={"Student 2125854"}
         />
         <Canvas
            camera={{position: [2,0,5]}}
         >
            <Experience />
         </Canvas>
        </>
    )
}
export default App;