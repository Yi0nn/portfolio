
const Floor = () => {
    
    return(
        <mesh position-y={-0.5} rotation-x={-Math.PI / 2} receiveShadow ={true}>
            <planeGeometry attach="geometry" args={[12, 12]} />
            <meshStandardMaterial attach="material" color="pink" />
        </mesh>
    )
}

export default Floor;