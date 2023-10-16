import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Cat from "./World/Cat";

const Experience = ({ title, info }) => {
  const boxRef = useRef();
  const coneRef = useRef();
  const sphereRef = useRef();
  const torusRef = useRef();

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
    coneRef.current.position.y = Math.sin(state.clock.getElapsedTime());
    sphereRef.current.rotation.x = Math.cos(state.clock.getElapsedTime()); 
    sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime()) + 5; 
    torusRef.current.position.x = Math.sin(state.clock.getElapsedTime()) + 5;
  });

  return (
    <>

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Cat/>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef} position={[-5.5, 0, -5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFC0CB" />
        </mesh>
        <mesh ref={coneRef} position={[-3, 0, -5]}>
            <coneGeometry args={[1, 2, 8]} />
            <meshPhongMaterial color="#DB7093" />
        </mesh>
        <mesh ref={sphereRef} position={[0, 0, -5]}>
            <sphereGeometry args={[1, 32, 16]} />
            <meshToonMaterial color="#FF69B4" />
        </mesh>
        <mesh ref={torusRef} position={[3, 0, -5]}>
            <torusGeometry args={[1, 0.4, 50, 500]} />
            <meshLambertMaterial color="#FFB6C1" />
        </mesh>
    </>
  );
};

export default Experience;
