import { useTexture } from "@react-three/drei";

const Floor = () => {

    const PATH = "/assets/materials/grass/textures/"
    const propsTexture = useTexture({
            map: PATH + 'aerial_grass_rock_diff_1k.jpg',
        normalMap: PATH + 'aerial_grass_rock_nor_gl_1k.jpg',
        roughnessMap: PATH + 'aerial_grass_rock_rough_1k.jpg',

    })

    return(
        <mesh position-y={-0.5} rotation-x={-Math.PI / 2} receiveShadow ={true}>
            <planeGeometry attach="geometry" args={[12, 12]} />
            <meshStandardMaterial { ... propsTexture} roughness={-2} metalness={-2} />
        </mesh>
    )
}

export default Floor;