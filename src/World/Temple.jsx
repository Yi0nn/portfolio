
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Temple(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/models/temple/temple.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="RootNode_(gltf_orientation_matrix)_0"
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="RootNode_(model_correction_matrix)_1">
                  <group
                    name="1f92bd673cfa44f282f72c88ea188458fbx_2"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="_3">
                      <group name="RootNode_4">
                        <group
                          name="pCylinder3_5"
                          position={[1.817, 1.487, -1.338]}
                          scale={[0.213, 0.989, 0.213]}
                        >
                          <group name="pCylinder3_phong2_0_6">
                            <mesh
                              name="Object_10"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_10.geometry}
                              material={materials.phong2}
                            />
                          </group>
                          <group name="pCylinder3_phong50_0_7">
                            <mesh
                              name="Object_12"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_12.geometry}
                              material={materials.phong50}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube2_8"
                          position={[0, 2.972, 0]}
                          scale={[4.202, 0.72, 3.635]}
                        >
                          <group name="pCube2_phong31_0_9">
                            <mesh
                              name="Object_15"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_15.geometry}
                              material={materials.phong31}
                            />
                          </group>
                          <group name="pCube2_phong44_0_10">
                            <mesh
                              name="Object_17"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_17.geometry}
                              material={materials.phong44}
                            />
                          </group>
                          <group name="pCube2_phong43_0_11">
                            <mesh
                              name="Object_19"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_19.geometry}
                              material={materials.phong43}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder42_830"
                          position={[1.817, 0.446, -1.338]}
                          scale={[0.271, 0.096, 0.271]}
                        >
                          <group name="pCylinder42_phong2_0_831">
                            <mesh
                              name="Object_22"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_22.geometry}
                              material={materials.phong2}
                            />
                          </group>
                          <group name="pCylinder42_phong51_0_832">
                            <mesh
                              name="Object_24"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_24.geometry}
                              material={materials.phong51}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder43_833"
                          position={[1.817, 2.482, -1.338]}
                          scale={[0.271, 0.138, 0.271]}
                        >
                          <group name="pCylinder43_phong50_0_834">
                            <mesh
                              name="Object_27"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_27.geometry}
                              material={materials.phong50}
                            />
                          </group>
                          <group name="pCylinder43_phong2_0_835">
                            <mesh
                              name="Object_29"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_29.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder44_836"
                          position={[1.817, 1.487, 1.325]}
                          scale={[0.213, 0.989, 0.213]}
                        >
                          <group name="pCylinder44_phong2_0_837">
                            <mesh
                              name="Object_32"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_32.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder45_838"
                          position={[1.817, 2.482, 1.325]}
                          scale={[0.271, 0.138, 0.271]}
                        >
                          <group name="pCylinder45_phong50_0_839">
                            <mesh
                              name="Object_35"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_35.geometry}
                              material={materials.phong50}
                            />
                          </group>
                          <group name="pCylinder45_phong2_0_840">
                            <mesh
                              name="Object_37"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_37.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder46_841"
                          position={[1.817, 0.446, 1.325]}
                          scale={[0.271, 0.096, 0.271]}
                        >
                          <group name="pCylinder46_phong2_0_842">
                            <mesh
                              name="Object_40"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_40.geometry}
                              material={materials.phong2}
                            />
                          </group>
                          <group name="pCylinder46_phong51_0_843">
                            <mesh
                              name="Object_42"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_42.geometry}
                              material={materials.phong51}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder47_844"
                          position={[-1.845, 2.523, -1.338]}
                          scale={[0.271, 0.138, 0.271]}
                        >
                          <group name="pCylinder47_phong50_0_845">
                            <mesh
                              name="Object_45"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_45.geometry}
                              material={materials.phong50}
                            />
                          </group>
                          <group name="pCylinder47_phong2_0_846">
                            <mesh
                              name="Object_47"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_47.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder48_847"
                          position={[-1.845, 1.487, -1.338]}
                          scale={[0.213, 0.989, 0.213]}
                        >
                          <group name="pCylinder48_phong2_0_848">
                            <mesh
                              name="Object_50"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_50.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder49_849"
                          position={[-1.845, 0.446, -1.338]}
                          scale={[0.271, 0.096, 0.271]}
                        >
                          <group name="pCylinder49_phong2_0_850">
                            <mesh
                              name="Object_53"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_53.geometry}
                              material={materials.phong2}
                            />
                          </group>
                          <group name="pCylinder49_phong51_0_851">
                            <mesh
                              name="Object_55"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_55.geometry}
                              material={materials.phong51}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder50_852"
                          position={[-1.845, 1.487, 1.325]}
                          scale={[0.213, 0.989, 0.213]}
                        >
                          <group name="pCylinder50_phong2_0_853">
                            <mesh
                              name="Object_58"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_58.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder51_854"
                          position={[-1.845, 0.446, 1.325]}
                          scale={[0.271, 0.096, 0.271]}
                        >
                          <group name="pCylinder51_phong2_0_855">
                            <mesh
                              name="Object_61"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_61.geometry}
                              material={materials.phong2}
                            />
                          </group>
                          <group name="pCylinder51_phong51_0_856">
                            <mesh
                              name="Object_63"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_63.geometry}
                              material={materials.phong51}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder52_857"
                          position={[-1.845, 2.482, 1.325]}
                          scale={[0.271, 0.138, 0.271]}
                        >
                          <group name="pCylinder52_phong50_0_858">
                            <mesh
                              name="Object_66"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_66.geometry}
                              material={materials.phong50}
                            />
                          </group>
                          <group name="pCylinder52_phong2_0_859">
                            <mesh
                              name="Object_68"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_68.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube17_860"
                          position={[-0.001, 0.021, -1.558]}
                          rotation={[0, 0, Math.PI / 2]}
                          scale={[0.072, 3.246, 0.049]}
                        >
                          <group name="pCube17_lambert1_0_861">
                            <mesh
                              name="Object_71"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_71.geometry}
                              material={materials.lambert1}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube23_862"
                          position={[-0.029, 1.286, -1.595]}
                          rotation={[-Math.PI, 0, -Math.PI]}
                          scale={[1, 1, 0.251]}
                        >
                          <group name="pCube23_phong8_0_863">
                            <mesh
                              name="Object_74"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_74.geometry}
                              material={materials.phong8}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube24_864"
                          position={[-1.926, 1.286, -0.257]}
                          rotation={[0, -Math.PI / 2, 0]}
                          scale={[1, 1, 0.251]}
                        >
                          <group name="pCube24_phong8_0_865">
                            <mesh
                              name="Object_77"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_77.geometry}
                              material={materials.phong8}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube25_866"
                          position={[1.828, 2.163, 0]}
                          scale={[0.1, 0.172, 2.299]}
                        >
                          <group name="pCube25_phong27_0_867">
                            <mesh
                              name="Object_80"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_80.geometry}
                              material={materials.phong27}
                            />
                          </group>
                          <group name="pCube25_phong45_0_868">
                            <mesh
                              name="Object_82"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_82.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="pCube25_phong46_0_869">
                            <mesh
                              name="Object_84"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_84.geometry}
                              material={materials.phong46}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube26_870"
                          position={[1.828, 2.28, 0]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={[0.17, 0.172, 0.768]}
                        >
                          <group name="pCube26_phong46_0_871">
                            <mesh
                              name="Object_87"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_87.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube26_phong27_0_872">
                            <mesh
                              name="Object_89"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_89.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube35_874"
                          position={[-1.277, 2.163, 1.338]}
                          rotation={[0, -Math.PI / 2, 0]}
                          scale={[0.1, 0.172, 1.707]}
                        >
                          <group name="pCube35_phong46_0_875">
                            <mesh
                              name="Object_92"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_92.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube35_phong45_0_876">
                            <mesh
                              name="Object_94"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_94.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="pCube35_phong27_0_877">
                            <mesh
                              name="Object_96"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_96.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube36_878"
                          position={[-0.665, 2.358, 1.338]}
                          rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          scale={[0.17, 0.172, 0.708]}
                        >
                          <group name="pCube36_phong46_0_879">
                            <mesh
                              name="Object_99"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_99.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube36_phong27_0_880">
                            <mesh
                              name="Object_101"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_101.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube39_881"
                          position={[0.624, 2.358, 1.338]}
                          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                          scale={[0.17, 0.172, 0.708]}
                        >
                          <group name="pCube39_phong46_0_882">
                            <mesh
                              name="Object_104"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_104.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube39_phong27_0_883">
                            <mesh
                              name="Object_106"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_106.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube40_884"
                          position={[1.236, 2.163, 1.338]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={[0.1, 0.172, 1.707]}
                        >
                          <group name="pCube40_phong46_0_885">
                            <mesh
                              name="Object_109"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_109.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube40_phong45_0_886">
                            <mesh
                              name="Object_111"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_111.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="pCube40_phong27_0_887">
                            <mesh
                              name="Object_113"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_113.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube49_891"
                          position={[1.828, 0.845, 0]}
                          scale={[0.11, 0.089, 2.299]}
                        >
                          <group name="pCube49_phong27_0_892">
                            <mesh
                              name="Object_116"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_116.geometry}
                              material={materials.phong27}
                            />
                          </group>
                          <group name="pCube49_phong45_0_893">
                            <mesh
                              name="Object_118"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_118.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="pCube49_phong46_0_894">
                            <mesh
                              name="Object_120"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_120.geometry}
                              material={materials.phong46}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube50_895"
                          position={[1.828, 0.379, 0]}
                          scale={[0.11, 0.089, 2.299]}
                        >
                          <group name="pCube50_phong2_0_896">
                            <mesh
                              name="Object_123"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_123.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder113_897"
                          position={[1.826, 0.625, 0]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[0.048, 1.213, 0.048]}
                        >
                          <group name="pCylinder113_phong27_0_898">
                            <mesh
                              name="Object_126"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_126.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder114_899"
                          position={[1.826, 0.728, 0]}
                          scale={[0.033, 0.147, 0.033]}
                        >
                          <group name="pCylinder114_phong27_0_900">
                            <mesh
                              name="Object_129"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_129.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube52_901"
                          position={[1.826, 0.637, 0.831]}
                          scale={0.122}
                        >
                          <group name="pCube52_phong19_0_902">
                            <mesh
                              name="Object_132"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_132.geometry}
                              material={materials.phong19}
                            />
                          </group>
                          <group name="pCube52_phong53_0_903">
                            <mesh
                              name="Object_134"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_134.geometry}
                              material={materials.phong53}
                            />
                          </group>
                          <group name="pCube52_phong54_0_904">
                            <mesh
                              name="Object_136"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_136.geometry}
                              material={materials.phong54}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder115_905"
                          position={[1.826, 0.728, 0.831]}
                          scale={[0.033, 0.154, 0.033]}
                        >
                          <group name="pCylinder115_phong27_0_906">
                            <mesh
                              name="Object_139"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_139.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder116_907"
                          position={[1.826, 0.728, 0.43]}
                          scale={[0.033, 0.147, 0.033]}
                        >
                          <group name="pCylinder116_phong27_0_908">
                            <mesh
                              name="Object_142"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_142.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder117_909"
                          position={[1.826, 0.728, -0.816]}
                          scale={[0.033, 0.154, 0.033]}
                        >
                          <group name="pCylinder117_phong27_0_910">
                            <mesh
                              name="Object_145"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_145.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder118_911"
                          position={[1.826, 0.728, -0.415]}
                          scale={[0.033, 0.147, 0.033]}
                        >
                          <group name="pCylinder118_phong27_0_912">
                            <mesh
                              name="Object_148"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_148.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group name="pCube63_914" scale={[4.101, 0.411, 3.305]}>
                          <group name="pCube63_phong13_0_915">
                            <mesh
                              name="Object_151"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_151.geometry}
                              material={materials.phong13}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube64_916"
                          position={[0, 0.3, 0]}
                          scale={[4.202, 0.15, 3.386]}
                        >
                          <group name="pCube64_phong55_0_917">
                            <mesh
                              name="Object_154"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_154.geometry}
                              material={materials.phong55}
                            />
                          </group>
                          <group name="pCube64_phong24_0_918">
                            <mesh
                              name="Object_156"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_156.geometry}
                              material={materials.phong24}
                            />
                          </group>
                          <group name="pCube64_phong56_0_919">
                            <mesh
                              name="Object_158"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_158.geometry}
                              material={materials.phong56}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube66_921"
                          position={[0, 0.01, -0.058]}
                          scale={[0.723, 1.03, 1.03]}
                        >
                          <group name="pCube66_phong13_0_922">
                            <mesh
                              name="Object_161"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_161.geometry}
                              material={materials.phong13}
                            />
                          </group>
                          <group name="pCube66_phong33_0_923">
                            <mesh
                              name="Object_163"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_163.geometry}
                              material={materials.phong33}
                            />
                          </group>
                          <group name="pCube66_phong35_0_924">
                            <mesh
                              name="Object_165"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_165.geometry}
                              material={materials.phong35}
                            />
                          </group>
                          <group name="pCube66_phong34_0_925">
                            <mesh
                              name="Object_167"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_167.geometry}
                              material={materials.phong34}
                            />
                          </group>
                        </group>
                        <group name="pCube67_926">
                          <group name="pCube67_phong24_0_927">
                            <mesh
                              name="Object_170"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_170.geometry}
                              material={materials.phong24}
                            />
                          </group>
                          <group name="pCube67_phong57_0_928">
                            <mesh
                              name="Object_172"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_172.geometry}
                              material={materials.phong57}
                            />
                          </group>
                          <group name="pCube67_phong55_0_929">
                            <mesh
                              name="Object_174"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_174.geometry}
                              material={materials.phong55}
                            />
                          </group>
                          <group name="pCube67_phong36_0_930">
                            <mesh
                              name="Object_176"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_176.geometry}
                              material={materials.phong36}
                            />
                          </group>
                        </group>
                        <group name="polySurface1430_931">
                          <group name="polySurface1485_932">
                            <group name="polySurface1485_phong4_0_933">
                              <mesh
                                name="Object_180"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_180.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1486_934">
                            <group name="polySurface1486_phong3_0_935">
                              <mesh
                                name="Object_183"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_183.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1487_936">
                            <group name="polySurface1487_phong3_0_937">
                              <mesh
                                name="Object_186"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_186.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1488_938">
                            <group name="polySurface1488_phong1_0_939">
                              <mesh
                                name="Object_189"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_189.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1488_phong40_0_940">
                              <mesh
                                name="Object_191"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_191.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1489_941"
                            position={[0, -1.193, 0]}
                            scale={[1, 1.597, 1]}
                          >
                            <group name="polySurface1489_phong4_0_942">
                              <mesh
                                name="Object_194"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_194.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1490_943">
                            <group name="polySurface1490_phong3_0_944">
                              <mesh
                                name="Object_197"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_197.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1491_945">
                            <group name="polySurface1491_phong1_0_946">
                              <mesh
                                name="Object_200"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_200.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1491_phong40_0_947">
                              <mesh
                                name="Object_202"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_202.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="polySurface1433_948"
                          position={[-0.034, 0, 0]}
                          scale={[-1, 1, 1]}
                        >
                          <group name="polySurface1499_949">
                            <group name="polySurface1499_phong4_0_950">
                              <mesh
                                name="Object_206"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_206.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1500_951">
                            <group name="polySurface1500_phong3_0_952">
                              <mesh
                                name="Object_209"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_209.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1501_953">
                            <group name="polySurface1501_phong3_0_954">
                              <mesh
                                name="Object_212"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_212.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1502_955">
                            <group name="polySurface1502_phong1_0_956">
                              <mesh
                                name="Object_215"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_215.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1502_phong40_0_957">
                              <mesh
                                name="Object_217"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_217.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1503_958"
                            position={[0, -1.193, 0]}
                            scale={[1, 1.597, 1]}
                          >
                            <group name="polySurface1503_phong4_0_959">
                              <mesh
                                name="Object_220"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_220.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1504_960">
                            <group name="polySurface1504_phong3_0_961">
                              <mesh
                                name="Object_223"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_223.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1505_962">
                            <group name="polySurface1505_phong1_0_963">
                              <mesh
                                name="Object_226"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_226.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1505_phong40_0_964">
                              <mesh
                                name="Object_228"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_228.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="polySurface1434_965"
                          position={[-0.034, 0, -0.02]}
                          rotation={[-Math.PI, 0, -Math.PI]}
                        >
                          <group name="polySurface1506_966">
                            <group name="polySurface1506_phong4_0_967">
                              <mesh
                                name="Object_232"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_232.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1507_968">
                            <group name="polySurface1507_phong3_0_969">
                              <mesh
                                name="Object_235"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_235.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1508_970">
                            <group name="polySurface1508_phong3_0_971">
                              <mesh
                                name="Object_238"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_238.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1509_972">
                            <group name="polySurface1509_phong1_0_973">
                              <mesh
                                name="Object_241"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_241.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1509_phong40_0_974">
                              <mesh
                                name="Object_243"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_243.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1510_975"
                            position={[0, -1.193, 0]}
                            scale={[1, 1.597, 1]}
                          >
                            <group name="polySurface1510_phong4_0_976">
                              <mesh
                                name="Object_246"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_246.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1511_977">
                            <group name="polySurface1511_phong3_0_978">
                              <mesh
                                name="Object_249"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_249.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1512_979">
                            <group name="polySurface1512_phong1_0_980">
                              <mesh
                                name="Object_252"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_252.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1512_phong40_0_981">
                              <mesh
                                name="Object_254"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_254.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="polySurface1435_982"
                          position={[0, 0, -0.02]}
                          rotation={[-Math.PI, 0, Math.PI]}
                          scale={[-1, 1, 1]}
                        >
                          <group name="polySurface1492_983">
                            <group name="polySurface1492_phong4_0_984">
                              <mesh
                                name="Object_258"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_258.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1493_985">
                            <group name="polySurface1493_phong3_0_986">
                              <mesh
                                name="Object_261"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_261.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1494_987">
                            <group name="polySurface1494_phong3_0_988">
                              <mesh
                                name="Object_264"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_264.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1495_989">
                            <group name="polySurface1495_phong1_0_990">
                              <mesh
                                name="Object_267"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_267.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1495_phong40_0_991">
                              <mesh
                                name="Object_269"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_269.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1496_992"
                            position={[0, -1.193, 0]}
                            scale={[1, 1.597, 1]}
                          >
                            <group name="polySurface1496_phong4_0_993">
                              <mesh
                                name="Object_272"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_272.geometry}
                                material={materials.phong4}
                              />
                            </group>
                          </group>
                          <group name="polySurface1497_994">
                            <group name="polySurface1497_phong3_0_995">
                              <mesh
                                name="Object_275"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_275.geometry}
                                material={materials.phong3}
                              />
                            </group>
                          </group>
                          <group name="polySurface1498_996">
                            <group name="polySurface1498_phong1_0_997">
                              <mesh
                                name="Object_278"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_278.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1498_phong40_0_998">
                              <mesh
                                name="Object_280"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_280.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube69_999"
                          position={[1.199, -0.344, 1.941]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube69_phong28_0_1000">
                            <mesh
                              name="Object_283"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_283.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube71_1001"
                          position={[1.696, -0.347, 1.962]}
                          rotation={[0, 1.553, 0]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube71_phong29_0_1002">
                            <mesh
                              name="Object_286"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_286.geometry}
                              material={materials.phong29}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube72_1003"
                          position={[1.352, -0.347, 2.41]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube72_phong20_0_1004">
                            <mesh
                              name="Object_289"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_289.geometry}
                              material={materials.phong20}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube73_1005"
                          position={[1.865, -0.343, 2.308]}
                          scale={[0.41, 0.03, 0.41]}
                        >
                          <group name="pCube73_phong28_0_1006">
                            <mesh
                              name="Object_292"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_292.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube74_1007"
                          position={[1.542, -0.341, 2.713]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube74_phong29_0_1008">
                            <mesh
                              name="Object_295"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_295.geometry}
                              material={materials.phong29}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube75_1009"
                          position={[1.111, -0.343, 2.655]}
                          rotation={[0, 0.716, 0]}
                          scale={[0.41, 0.03, 0.41]}
                        >
                          <group name="pCube75_phong28_0_1010">
                            <mesh
                              name="Object_298"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_298.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube76_1011"
                          position={[1.344, -0.347, 3.037]}
                          rotation={[0, 0.716, 0]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube76_phong28_0_1012">
                            <mesh
                              name="Object_301"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_301.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube77_1013"
                          position={[2.221, -0.353, 1.941]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube77_phong28_0_1014">
                            <mesh
                              name="Object_304"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_304.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube78_1015"
                          position={[2.171, -0.347, 2.106]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube78_phong29_0_1016">
                            <mesh
                              name="Object_307"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_307.geometry}
                              material={materials.phong29}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube79_1017"
                          position={[1.941, -0.347, 2.734]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube79_phong20_0_1018">
                            <mesh
                              name="Object_310"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_310.geometry}
                              material={materials.phong20}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube80_1019"
                          position={[2.457, -0.347, 2.597]}
                          rotation={[-Math.PI, 0.14, -Math.PI]}
                          scale={[0.41, 0.024, 0.41]}
                        >
                          <group name="pCube80_phong28_0_1020">
                            <mesh
                              name="Object_313"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_313.geometry}
                              material={materials.phong28}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube81_1021"
                          position={[1.071, -0.282, 2.971]}
                          rotation={[0, -1.1, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube81_phong21_0_1022">
                            <mesh
                              name="Object_316"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_316.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube82_1023"
                          position={[0.905, -0.299, 2.93]}
                          rotation={[0, -0.122, 0]}
                          scale={[0.186, 0.107, 0.102]}
                        >
                          <group name="pCube82_phong30_0_1024">
                            <mesh
                              name="Object_319"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_319.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube83_1025"
                          position={[2.215, -0.282, 1.438]}
                          rotation={[-Math.PI, 0.419, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube83_phong21_0_1026">
                            <mesh
                              name="Object_322"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_322.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube84_1027"
                          position={[2.397, -0.3, 1.534]}
                          rotation={[-Math.PI, 0.14, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube84_phong21_0_1028">
                            <mesh
                              name="Object_325"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_325.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube85_1029"
                          position={[2.272, -0.282, 1.148]}
                          rotation={[-Math.PI, 1.117, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube85_phong30_0_1030">
                            <mesh
                              name="Object_328"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_328.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube86_1031"
                          position={[2.286, -0.28, 0.937]}
                          rotation={[0, 1.449, 0]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube86_phong21_0_1032">
                            <mesh
                              name="Object_331"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_331.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube87_1033"
                          position={[2.461, -0.283, 0.875]}
                          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube87_phong21_0_1034">
                            <mesh
                              name="Object_334"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_334.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube88_1035"
                          position={[2.328, -0.282, 0.574]}
                          rotation={[-Math.PI, 0.262, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube88_phong21_0_1036">
                            <mesh
                              name="Object_337"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_337.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube89_1037"
                          position={[2.513, -0.282, 0.667]}
                          rotation={[-Math.PI, -0.367, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube89_phong30_0_1038">
                            <mesh
                              name="Object_340"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_340.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube90_1039"
                          position={[2.349, -0.282, 0.128]}
                          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube90_phong21_0_1040">
                            <mesh
                              name="Object_343"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_343.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube91_1041"
                          position={[2.247, -0.3, 1.315]}
                          rotation={[-Math.PI, 0.489, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube91_phong21_0_1042">
                            <mesh
                              name="Object_346"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_346.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube92_1043"
                          position={[2.396, -0.283, 1.081]}
                          rotation={[-3.044, 0.236, -3.134]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube92_phong21_0_1044">
                            <mesh
                              name="Object_349"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_349.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube93_1045"
                          position={[2.415, -0.282, 1.391]}
                          rotation={[-Math.PI, -0.367, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube93_phong30_0_1046">
                            <mesh
                              name="Object_352"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_352.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube94_1047"
                          position={[2.438, -0.3, 1.231]}
                          rotation={[-Math.PI, -0.419, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube94_phong21_0_1048">
                            <mesh
                              name="Object_355"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_355.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube95_1049"
                          position={[2.366, -0.282, 0.375]}
                          rotation={[-Math.PI, -1.536, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube95_phong30_0_1050">
                            <mesh
                              name="Object_358"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_358.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube96_1051"
                          position={[2.306, -0.302, 0.739]}
                          rotation={[0, 1.484, 0]}
                          scale={[0.215, 0.102, 0.117]}
                        >
                          <group name="pCube96_phong30_0_1052">
                            <mesh
                              name="Object_361"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_361.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube97_1053"
                          position={[2.351, -0.282, -0.069]}
                          rotation={[-Math.PI, 1.03, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube97_phong30_0_1054">
                            <mesh
                              name="Object_364"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_364.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube98_1055"
                          position={[2.347, -0.28, -0.279]}
                          rotation={[0, 1.536, 0]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube98_phong21_0_1056">
                            <mesh
                              name="Object_367"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_367.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube99_1057"
                          position={[2.349, -0.302, -0.478]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={[0.215, 0.102, 0.117]}
                        >
                          <group name="pCube99_phong30_0_1058">
                            <mesh
                              name="Object_370"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_370.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube100_1059"
                          position={[2.332, -0.282, -0.631]}
                          rotation={[-Math.PI, -0.017, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube100_phong21_0_1060">
                            <mesh
                              name="Object_373"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_373.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube101_1061"
                          position={[2.309, -0.3, -0.788]}
                          rotation={[-Math.PI, 0.052, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube101_phong21_0_1062">
                            <mesh
                              name="Object_376"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_376.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube102_1063"
                          position={[2.281, -0.28, -0.975]}
                          rotation={[-Math.PI, 1.257, -Math.PI]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube102_phong30_0_1064">
                            <mesh
                              name="Object_379"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_379.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube103_1065"
                          position={[2.644, -0.3, 1.24]}
                          rotation={[0, -1.134, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube103_phong21_0_1066">
                            <mesh
                              name="Object_382"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_382.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube104_1067"
                          position={[2.488, -0.269, -0.161]}
                          rotation={[-3.066, 0.461, 3.125]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube104_phong21_0_1068">
                            <mesh
                              name="Object_385"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_385.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube105_1069"
                          position={[2.619, -0.308, 0.248]}
                          rotation={[-3.087, -0.743, 3.122]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube105_phong30_0_1070">
                            <mesh
                              name="Object_388"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_388.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube106_1071"
                          position={[2.538, -0.292, 0.393]}
                          rotation={[-3.058, 0.792, 3.121]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube106_phong21_0_1072">
                            <mesh
                              name="Object_391"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_391.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube107_1073"
                          position={[2.527, -0.284, 0.085]}
                          rotation={[-2.979, -0.089, -3.117]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube107_phong21_0_1074">
                            <mesh
                              name="Object_394"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_394.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube108_1075"
                          position={[2.58, -0.306, 1.03]}
                          rotation={[3.039, -0.186, -3.083]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube108_phong30_0_1076">
                            <mesh
                              name="Object_397"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_397.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube109_1077"
                          position={[2.617, -0.283, 1.478]}
                          rotation={[0, 1.065, 0]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube109_phong30_0_1078">
                            <mesh
                              name="Object_400"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_400.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube110_1079"
                          position={[2.23, -0.282, -1.363]}
                          rotation={[-Math.PI, -1.536, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube110_phong21_0_1080">
                            <mesh
                              name="Object_403"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_403.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube111_1081"
                          position={[2.204, -0.269, -1.616]}
                          rotation={[-3.066, 0.461, 3.125]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube111_phong21_0_1082">
                            <mesh
                              name="Object_406"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_406.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube112_1083"
                          position={[2.258, -0.282, -1.151]}
                          rotation={[-Math.PI, -0.367, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube112_phong21_0_1084">
                            <mesh
                              name="Object_409"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_409.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube113_1085"
                          position={[2.392, -0.308, -1.318]}
                          rotation={[-3.087, -0.743, 3.122]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube113_phong30_0_1086">
                            <mesh
                              name="Object_412"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_412.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube114_1087"
                          position={[2.486, -0.28, -1.039]}
                          rotation={[0, 1.536, 0]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube114_phong21_0_1088">
                            <mesh
                              name="Object_415"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_415.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube115_1089"
                          position={[2.521, -0.283, -0.505]}
                          rotation={[-Math.PI, -0.995, -Math.PI]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube115_phong21_0_1090">
                            <mesh
                              name="Object_418"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_418.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube116_1091"
                          position={[2.496, -0.302, 1.698]}
                          rotation={[0, 1.484, 0]}
                          scale={[0.215, 0.102, 0.117]}
                        >
                          <group name="pCube116_phong21_0_1092">
                            <mesh
                              name="Object_421"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_421.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube117_1093"
                          position={[-1.185, -0.302, 2.253]}
                          rotation={[0, 0.279, 0]}
                          scale={[0.215, 0.102, 0.117]}
                        >
                          <group name="pCube117_phong30_0_1094">
                            <mesh
                              name="Object_424"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_424.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube118_1095"
                          position={[-1.291, -0.306, 2.121]}
                          rotation={[2.711, 1.327, -2.644]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube118_phong21_0_1096">
                            <mesh
                              name="Object_427"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_427.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube119_1097"
                          position={[-1.467, -0.3, 2.15]}
                          rotation={[-Math.PI, -0.471, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube119_phong21_0_1098">
                            <mesh
                              name="Object_430"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_430.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube120_1099"
                          position={[-1.53, -0.3, 2.007]}
                          rotation={[-Math.PI, 1.117, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube120_phong30_0_1100">
                            <mesh
                              name="Object_433"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_433.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube121_1101"
                          position={[-1.691, -0.282, 1.991]}
                          rotation={[-Math.PI, 1.169, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube121_phong21_0_1102">
                            <mesh
                              name="Object_436"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_436.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube122_1103"
                          position={[-1.381, -0.283, 1.961]}
                          rotation={[-0.444, 1.347, 0.465]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube122_phong30_0_1104">
                            <mesh
                              name="Object_439"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_439.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube123_1105"
                          position={[-1.625, -0.283, 2.196]}
                          rotation={[-Math.PI, -0.908, -Math.PI]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube123_phong21_0_1106">
                            <mesh
                              name="Object_442"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_442.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube124_1107"
                          position={[-1.62, -0.3, 1.82]}
                          rotation={[0, 1.117, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube124_phong21_0_1108">
                            <mesh
                              name="Object_445"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_445.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube125_1109"
                          position={[-1.191, -0.284, 2]}
                          rotation={[0.017, -0.139, -0.037]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube125_phong21_0_1110">
                            <mesh
                              name="Object_448"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_448.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube126_1111"
                          position={[-1.452, -0.282, 1.839]}
                          rotation={[0, 0.489, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube126_phong21_0_1112">
                            <mesh
                              name="Object_451"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_451.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube127_1113"
                          position={[-1.834, -0.3, 1.978]}
                          rotation={[0, 1.466, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube127_phong21_0_1114">
                            <mesh
                              name="Object_454"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_454.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube128_1115"
                          position={[-1.745, -0.282, 1.792]}
                          rotation={[0, 1.187, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube128_phong30_0_1116">
                            <mesh
                              name="Object_457"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_457.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube129_1117"
                          position={[-1.203, -0.28, 1.837]}
                          rotation={[0, -0.087, 0]}
                          scale={[0.269, 0.135, 0.127]}
                        >
                          <group name="pCube129_phong30_0_1118">
                            <mesh
                              name="Object_460"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_460.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube130_1119"
                          position={[-1.402, -0.282, 2.28]}
                          rotation={[0, 0.192, 0]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube130_phong21_0_1120">
                            <mesh
                              name="Object_463"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_463.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube131_1121"
                          position={[-1.81, -0.282, 2.153]}
                          rotation={[-Math.PI, 0.454, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube131_phong30_0_1122">
                            <mesh
                              name="Object_466"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_466.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube132_1123"
                          position={[-1.977, -0.283, 2.071]}
                          rotation={[-2.967, 0.971, 3.07]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube132_phong21_0_1124">
                            <mesh
                              name="Object_469"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_469.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube133_1125"
                          position={[-2.072, -0.28, 1.861]}
                          rotation={[0, 1.518, 0]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube133_phong21_0_1126">
                            <mesh
                              name="Object_472"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_472.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube134_1127"
                          position={[-1.953, -0.283, 1.761]}
                          rotation={[-Math.PI, 0.122, -Math.PI]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube134_phong21_0_1128">
                            <mesh
                              name="Object_475"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_475.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube135_1129"
                          position={[-1.936, -0.299, 1.906]}
                          rotation={[0.649, 1.4, -0.546]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube135_phong30_0_1130">
                            <mesh
                              name="Object_478"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_478.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube136_1131"
                          position={[-1.156, -0.296, 2.69]}
                          rotation={[-2.05, -1.34, -2.024]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube136_phong30_0_1132">
                            <mesh
                              name="Object_481"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_481.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube137_1133"
                          position={[-1.933, -0.28, 2.713]}
                          rotation={[-Math.PI, 0.367, -Math.PI]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube137_phong21_0_1134">
                            <mesh
                              name="Object_484"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_484.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube138_1135"
                          position={[-1.732, -0.282, 2.777]}
                          rotation={[-Math.PI, -0.209, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube138_phong21_0_1136">
                            <mesh
                              name="Object_487"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_487.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube139_1137"
                          position={[-1.575, -0.3, 2.842]}
                          rotation={[-Math.PI, -0.838, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube139_phong30_0_1138">
                            <mesh
                              name="Object_490"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_490.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube140_1139"
                          position={[-1.464, -0.282, 2.903]}
                          rotation={[-Math.PI, -0.908, -Math.PI]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube140_phong21_0_1140">
                            <mesh
                              name="Object_493"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_493.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube141_1141"
                          position={[-1.461, -0.282, 2.697]}
                          rotation={[0, -1.449, 0]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube141_phong21_0_1142">
                            <mesh
                              name="Object_496"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_496.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube142_1143"
                          position={[-1.855, -0.302, 2.293]}
                          rotation={[-Math.PI, 0.384, -Math.PI]}
                          scale={[0.215, 0.102, 0.117]}
                        >
                          <group name="pCube142_phong21_0_1144">
                            <mesh
                              name="Object_499"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_499.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube143_1145"
                          position={[-1.658, -0.282, 2.34]}
                          rotation={[-Math.PI, 0.087, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube143_phong30_0_1146">
                            <mesh
                              name="Object_502"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_502.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube144_1147"
                          position={[-1.632, -0.3, 2.482]}
                          rotation={[0, 0.192, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube144_phong21_0_1148">
                            <mesh
                              name="Object_505"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_505.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube145_1149"
                          position={[-1.611, -0.3, 2.637]}
                          rotation={[0, -1.396, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube145_phong30_0_1150">
                            <mesh
                              name="Object_508"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_508.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube146_1151"
                          position={[-1.767, -0.283, 2.64]}
                          rotation={[-2.938, -1.081, -2.931]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube146_phong30_0_1152">
                            <mesh
                              name="Object_511"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_511.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube147_1153"
                          position={[-1.809, -0.306, 2.462]}
                          rotation={[2.086, -1.455, 2.167]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube147_phong21_0_1154">
                            <mesh
                              name="Object_514"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_514.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube148_1155"
                          position={[-1.946, -0.283, 2.558]}
                          rotation={[-Math.PI, -0.541, -Math.PI]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube148_phong21_0_1156">
                            <mesh
                              name="Object_517"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_517.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube149_1157"
                          position={[-1.484, -0.283, 2.457]}
                          rotation={[0, 1.361, 0]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube149_phong21_0_1158">
                            <mesh
                              name="Object_520"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_520.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube150_1159"
                          position={[-1.301, -0.282, 2.574]}
                          rotation={[0, -0.733, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube150_phong21_0_1160">
                            <mesh
                              name="Object_523"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_523.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube151_1161"
                          position={[-1.326, -0.3, 2.749]}
                          rotation={[-Math.PI, -1.187, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube151_phong21_0_1162">
                            <mesh
                              name="Object_526"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_526.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube152_1163"
                          position={[-1.248, -0.299, 2.846]}
                          rotation={[2.892, -1.143, 3.009]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube152_phong21_0_1164">
                            <mesh
                              name="Object_529"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_529.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube153_1165"
                          position={[-1.177, -0.28, 2.457]}
                          rotation={[0, -1.553, 0]}
                          scale={[0.235, 0.135, 0.127]}
                        >
                          <group name="pCube153_phong21_0_1166">
                            <mesh
                              name="Object_532"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_532.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube154_1167"
                          position={[-1.272, -0.283, 2.99]}
                          rotation={[0, -0.401, 0]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube154_phong30_0_1168">
                            <mesh
                              name="Object_535"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_535.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube155_1169"
                          position={[-1.344, -0.299, 2.405]}
                          rotation={[3.039, -0.055, -3.052]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube155_phong21_0_1170">
                            <mesh
                              name="Object_538"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_538.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube156_1171"
                          position={[-1.176, -0.307, 2.119]}
                          rotation={[3.074, 0.027, -3.109]}
                          scale={[0.136, 0.103, 0.098]}
                        >
                          <group name="pCube156_phong30_0_1172">
                            <mesh
                              name="Object_541"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_541.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube157_1173"
                          position={[-2.011, -0.282, 2.372]}
                          rotation={[-Math.PI, 0.698, -Math.PI]}
                          scale={[0.253, 0.13, 0.138]}
                        >
                          <group name="pCube157_phong30_0_1174">
                            <mesh
                              name="Object_544"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_544.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube158_1175"
                          position={[-2.015, -0.3, 2.21]}
                          rotation={[-Math.PI, 0.681, -Math.PI]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube158_phong21_0_1176">
                            <mesh
                              name="Object_547"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_547.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube159_1177"
                          position={[-2.133, -0.282, 2.085]}
                          rotation={[0, -0.733, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube159_phong30_0_1178">
                            <mesh
                              name="Object_550"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_550.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube160_1179"
                          position={[-2.185, -0.282, 1.718]}
                          rotation={[0, -1.309, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube160_phong30_0_1180">
                            <mesh
                              name="Object_553"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_553.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube161_1181"
                          position={[-2.216, -0.3, 1.904]}
                          rotation={[0, 0.82, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube161_phong21_0_1182">
                            <mesh
                              name="Object_556"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_556.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube162_1183"
                          position={[-2.143, -0.284, 2.258]}
                          rotation={[0.017, 0.105, -0.041]}
                          scale={[0.199, 0.128, 0.109]}
                        >
                          <group name="pCube162_phong21_0_1184">
                            <mesh
                              name="Object_559"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_559.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube163_1185"
                          position={[-2.133, -0.282, 2.74]}
                          rotation={[0, -0.105, 0]}
                          scale={[0.226, 0.13, 0.124]}
                        >
                          <group name="pCube163_phong30_0_1186">
                            <mesh
                              name="Object_562"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_562.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube164_1187"
                          position={[-2.188, -0.282, 2.45]}
                          rotation={[0, -0.611, 0]}
                          scale={[0.272, 0.13, 0.149]}
                        >
                          <group name="pCube164_phong30_0_1188">
                            <mesh
                              name="Object_565"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_565.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube165_1189"
                          position={[-2.082, -0.3, 2.575]}
                          rotation={[0, 1.292, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube165_phong30_0_1190">
                            <mesh
                              name="Object_568"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_568.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube166_1191"
                          position={[-1.841, -0.283, 2.906]}
                          rotation={[0, -0.087, 0]}
                          scale={[0.237, 0.128, 0.13]}
                        >
                          <group name="pCube166_phong30_0_1192">
                            <mesh
                              name="Object_571"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_571.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube167_1193"
                          position={[-1.116, -0.303, 2.908]}
                          rotation={[3.041, 0.057, -3.058]}
                          scale={[0.205, 0.112, 0.106]}
                        >
                          <group name="pCube167_phong21_0_1194">
                            <mesh
                              name="Object_574"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_574.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube168_1195"
                          position={[-0.865, -0.3, 2.936]}
                          rotation={[0, -0.698, 0]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube168_phong21_0_1196">
                            <mesh
                              name="Object_577"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_577.geometry}
                              material={materials.phong21}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube169_1197"
                          position={[-1.017, -0.299, 3.034]}
                          rotation={[2.967, -0.938, 3.096]}
                          scale={[0.18, 0.103, 0.098]}
                        >
                          <group name="pCube169_phong30_0_1198">
                            <mesh
                              name="Object_580"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_580.geometry}
                              material={materials.phong30}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube179_1207"
                          position={[0.888, -0.194, 2.214]}
                          rotation={[0, 0.454, 0]}
                          scale={0.355}
                        >
                          <group name="pCube179_phong22_0_1208">
                            <mesh
                              name="Object_583"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_583.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube180_1209"
                          position={[2.734, -0.186, 2.863]}
                          rotation={[-Math.PI, 1.466, -Math.PI]}
                          scale={0.385}
                        >
                          <group name="pCube180_phong22_0_1210">
                            <mesh
                              name="Object_586"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_586.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube181_1211"
                          position={[4.211, -0.207, 2.468]}
                          rotation={[-Math.PI, 0.105, -Math.PI]}
                          scale={0.374}
                        >
                          <group name="pCube181_phong22_0_1212">
                            <mesh
                              name="Object_589"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_589.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube182_1213"
                          position={[0.491, -0.3, 3.504]}
                          rotation={[-0.074, 0.862, 0.131]}
                          scale={0.294}
                        >
                          <group name="pCube182_phong22_0_1214">
                            <mesh
                              name="Object_592"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_592.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube183_1215"
                          position={[3.473, -0.186, -1.753]}
                          rotation={[-Math.PI, -1.012, -Math.PI]}
                          scale={0.385}
                        >
                          <group name="pCube183_phong22_0_1216">
                            <mesh
                              name="Object_595"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_595.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube184_1217"
                          position={[2.039, -0.171, -2.771]}
                          rotation={[0, -1.309, 0]}
                          scale={0.447}
                        >
                          <group name="pCube184_phong22_0_1218">
                            <mesh
                              name="Object_598"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_598.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube185_1219"
                          position={[2.886, -0.194, 0.011]}
                          rotation={[-Math.PI, 1.257, -Math.PI]}
                          scale={0.355}
                        >
                          <group name="pCube185_phong22_0_1220">
                            <mesh
                              name="Object_601"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_601.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube186_1221"
                          position={[0.202, -0.176, 3.562]}
                          rotation={[-Math.PI, 0.419, -Math.PI]}
                          scale={0.374}
                        >
                          <group name="pCube186_phong22_0_1222">
                            <mesh
                              name="Object_604"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_604.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube187_1223"
                          position={[-1.357, -0.186, 1.165]}
                          rotation={[-Math.PI, -1.1, -Math.PI]}
                          scale={0.332}
                        >
                          <group name="pCube187_phong22_0_1224">
                            <mesh
                              name="Object_607"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_607.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube188_1225"
                          position={[-2.707, -0.19, 1.363]}
                          rotation={[0, -0.82, 0]}
                          scale={0.317}
                        >
                          <group name="pCube188_phong22_0_1226">
                            <mesh
                              name="Object_610"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_610.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube189_1227"
                          position={[-0.574, -0.179, 3.183]}
                          rotation={[-Math.PI, 0.768, -Math.PI]}
                          scale={0.363}
                        >
                          <group name="pCube189_phong22_0_1228">
                            <mesh
                              name="Object_613"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_613.geometry}
                              material={materials.phong22}
                            />
                          </group>
                        </group>
                        <group name="pCylinder125_1235">
                          <group name="polySurface1935_1236">
                            <group name="polySurface1935_phong5_0_1237">
                              <mesh
                                name="Object_617"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_617.geometry}
                                material={materials.phong5}
                              />
                            </group>
                          </group>
                          <group name="polySurface1936_1238">
                            <group name="polySurface1936_phong5_0_1239">
                              <mesh
                                name="Object_620"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_620.geometry}
                                material={materials.phong5}
                              />
                            </group>
                          </group>
                          <group name="polySurface1937_1240">
                            <group name="polySurface1937_phong49_0_1241">
                              <mesh
                                name="Object_623"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_623.geometry}
                                material={materials.phong49}
                              />
                            </group>
                          </group>
                          <group name="polySurface1938_1242">
                            <group name="polySurface1938_phong5_0_1243">
                              <mesh
                                name="Object_626"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_626.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1938_phong52_0_1244">
                              <mesh
                                name="Object_628"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_628.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1944_1245"
                            position={[-1.924, 1.088, 0]}
                            rotation={[0, 0, -Math.PI / 3]}
                          >
                            <group name="polySurface1944_phong5_0_1246">
                              <mesh
                                name="Object_631"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_631.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1944_phong52_0_1247">
                              <mesh
                                name="Object_633"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_633.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1945_1248"
                            position={[1.904, 1.122, 0]}
                            rotation={[0, 0, Math.PI / 3]}
                          >
                            <group name="polySurface1945_phong5_0_1249">
                              <mesh
                                name="Object_636"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_636.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1945_phong52_0_1250">
                              <mesh
                                name="Object_638"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_638.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1946_1251"
                            position={[-1.943, 3.298, 0]}
                            rotation={[0, 0, -2.094]}
                          >
                            <group name="polySurface1946_phong5_0_1252">
                              <mesh
                                name="Object_641"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_641.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1946_phong52_0_1253">
                              <mesh
                                name="Object_643"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_643.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1947_1254"
                            position={[1.884, 3.332, 0]}
                            rotation={[0, 0, 2.094]}
                          >
                            <group name="polySurface1947_phong5_0_1255">
                              <mesh
                                name="Object_646"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_646.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1947_phong52_0_1256">
                              <mesh
                                name="Object_648"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_648.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1948_1257"
                            position={[-0.04, 4.42, 0]}
                            rotation={[0, 0, -Math.PI]}
                          >
                            <group name="polySurface1948_phong5_0_1258">
                              <mesh
                                name="Object_651"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_651.geometry}
                                material={materials.phong5}
                              />
                            </group>
                            <group name="polySurface1948_phong52_0_1259">
                              <mesh
                                name="Object_653"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_653.geometry}
                                material={materials.phong52}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube203_1260"
                          position={[-1.799, 0.379, 0]}
                          scale={[0.11, 0.089, 2.299]}
                        >
                          <group name="pCube203_phong2_0_1261">
                            <mesh
                              name="Object_656"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_656.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube204_1262"
                          position={[0.019, 0.379, -1.467]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={[0.11, 0.089, 3.269]}
                        >
                          <group name="pCube204_phong2_0_1263">
                            <mesh
                              name="Object_659"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_659.geometry}
                              material={materials.phong2}
                            />
                          </group>
                        </group>
                        <group
                          name="group8_1268"
                          position={[-1.055, -0.02, 2.027]}
                          rotation={[0, Math.PI / 4, 0]}
                          scale={0.929}
                        >
                          <group
                            name="pCylinder127_1269"
                            position={[1.75, 0.159, 2.496]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[0.036, 0.008, 0.036]}
                          >
                            <group name="pCylinder127_phong9_0_1270">
                              <mesh
                                name="Object_663"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_663.geometry}
                                material={materials.phong9}
                              />
                            </group>
                          </group>
                          <group
                            name="pCylinder128_1271"
                            position={[2.072, 0.159, 2.496]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={[0.036, 0.008, 0.036]}
                          >
                            <group name="pCylinder128_phong9_0_1272">
                              <mesh
                                name="Object_666"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_666.geometry}
                                material={materials.phong9}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube227_1291"
                          position={[0.567, 3.243, 1.44]}
                          rotation={[0.436, 0, 0]}
                          scale={[0.142, 0.34, 0.043]}
                        >
                          <group name="pCube227_phong31_0_1292">
                            <mesh
                              name="Object_669"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_669.geometry}
                              material={materials.phong31}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1458_1293"
                          position={[-0.012, -0.219, 0.598]}
                          rotation={[-0.175, 0, 0]}
                        >
                          <group name="polySurface1513_1294">
                            <group name="polySurface1513_phong6_0_1295">
                              <mesh
                                name="Object_673"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_673.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1514_1296">
                            <group name="polySurface1514_phong6_0_1297">
                              <mesh
                                name="Object_676"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_676.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1515_1298">
                            <group name="polySurface1515_phong6_0_1299">
                              <mesh
                                name="Object_679"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_679.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1516_1300">
                            <group name="polySurface1516_phong6_0_1301">
                              <mesh
                                name="Object_682"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_682.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1517_1302">
                            <group name="polySurface1517_phong6_0_1303">
                              <mesh
                                name="Object_685"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_685.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1518_1304">
                            <group name="polySurface1518_phong6_0_1305">
                              <mesh
                                name="Object_688"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_688.geometry}
                                material={materials.phong6}
                              />
                            </group>
                          </group>
                          <group name="polySurface1519_1306">
                            <group name="polySurface1519_phong31_0_1307">
                              <mesh
                                name="Object_691"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_691.geometry}
                                material={materials.phong31}
                              />
                            </group>
                            <group name="polySurface1519_phong43_0_1308">
                              <mesh
                                name="Object_693"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_693.geometry}
                                material={materials.phong43}
                              />
                            </group>
                          </group>
                          <group name="polySurface1520_1309">
                            <group name="polySurface1520_phong43_0_1310">
                              <mesh
                                name="Object_696"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_696.geometry}
                                material={materials.phong43}
                              />
                            </group>
                            <group name="polySurface1520_phong31_0_1311">
                              <mesh
                                name="Object_698"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_698.geometry}
                                material={materials.phong31}
                              />
                            </group>
                          </group>
                          <group name="polySurface1521_1312">
                            <group name="polySurface1521_phong43_0_1313">
                              <mesh
                                name="Object_701"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_701.geometry}
                                material={materials.phong43}
                              />
                            </group>
                            <group name="polySurface1521_phong31_0_1314">
                              <mesh
                                name="Object_703"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_703.geometry}
                                material={materials.phong31}
                              />
                            </group>
                          </group>
                          <group name="polySurface1522_1315">
                            <group name="polySurface1522_phong31_0_1316">
                              <mesh
                                name="Object_706"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_706.geometry}
                                material={materials.phong31}
                              />
                            </group>
                            <group name="polySurface1522_phong43_0_1317">
                              <mesh
                                name="Object_708"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_708.geometry}
                                material={materials.phong43}
                              />
                            </group>
                          </group>
                          <group name="polySurface1523_1318">
                            <group name="polySurface1523_phong7_0_1319">
                              <mesh
                                name="Object_711"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_711.geometry}
                                material={materials.phong7}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube228_1320"
                          position={[-0.524, 3.243, 1.44]}
                          rotation={[0.436, 0, 0]}
                          scale={[0.142, 0.34, 0.043]}
                        >
                          <group name="pCube228_phong31_0_1321">
                            <mesh
                              name="Object_714"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_714.geometry}
                              material={materials.phong31}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1484_1322"
                          position={[0.02, -0.129, -0.089]}
                        >
                          <group name="polySurface1484_phong65_0_1323">
                            <mesh
                              name="Object_717"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_717.geometry}
                              material={materials.phong65}
                            />
                          </group>
                          <group name="polySurface1484_phong16_0_1324">
                            <mesh
                              name="Object_719"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_719.geometry}
                              material={materials.phong16}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube235_1327"
                          position={[0.589, 0, 0.464]}
                          rotation={[0, -0.262, 0]}
                        >
                          <group name="polySurface1540_1328">
                            <group name="polySurface1540_phong17_0_1329">
                              <mesh
                                name="Object_723"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_723.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1540_phong63_0_1330">
                              <mesh
                                name="Object_725"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_725.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1541_1331">
                            <group name="polySurface1541_phong17_0_1332">
                              <mesh
                                name="Object_728"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_728.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1541_phong64_0_1333">
                              <mesh
                                name="Object_730"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_730.geometry}
                                material={materials.phong64}
                              />
                            </group>
                          </group>
                          <group name="polySurface1542_1334">
                            <group name="polySurface1542_phong17_0_1335">
                              <mesh
                                name="Object_733"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_733.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1542_phong63_0_1336">
                              <mesh
                                name="Object_735"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_735.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1543_1337">
                            <group name="polySurface1543_phong17_0_1338">
                              <mesh
                                name="Object_738"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_738.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1543_phong63_0_1339">
                              <mesh
                                name="Object_740"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_740.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1544_1340">
                            <group name="polySurface1544_phong17_0_1341">
                              <mesh
                                name="Object_743"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_743.geometry}
                                material={materials.phong17}
                              />
                            </group>
                          </group>
                          <group name="polySurface1545_1342">
                            <group name="polySurface1545_phong18_0_1343">
                              <mesh
                                name="Object_746"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_746.geometry}
                                material={materials.phong18}
                              />
                            </group>
                            <group name="polySurface1545_phong62_0_1344">
                              <mesh
                                name="Object_748"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_748.geometry}
                                material={materials.phong62}
                              />
                            </group>
                          </group>
                          <group name="polySurface1546_1345">
                            <group name="polySurface1546_phong17_0_1346">
                              <mesh
                                name="Object_751"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_751.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1546_phong63_0_1347">
                              <mesh
                                name="Object_753"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_753.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1547_1348">
                            <group name="polySurface1547_phong17_0_1349">
                              <mesh
                                name="Object_756"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_756.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1547_phong63_0_1350">
                              <mesh
                                name="Object_758"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_758.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1548_1351">
                            <group name="polySurface1548_phong17_0_1352">
                              <mesh
                                name="Object_761"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_761.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1548_phong63_0_1353">
                              <mesh
                                name="Object_763"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_763.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1549_1354">
                            <group name="polySurface1549_phong17_0_1355">
                              <mesh
                                name="Object_766"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_766.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1549_phong63_0_1356">
                              <mesh
                                name="Object_768"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_768.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                          <group name="polySurface1550_1357">
                            <group name="polySurface1550_phong17_0_1358">
                              <mesh
                                name="Object_771"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_771.geometry}
                                material={materials.phong17}
                              />
                            </group>
                            <group name="polySurface1550_phong63_0_1359">
                              <mesh
                                name="Object_773"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_773.geometry}
                                material={materials.phong63}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube236_1360"
                          position={[-0.813, 0.402, 0.067]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={[2.584, 0.058, 1.475]}
                        >
                          <group name="pCube236_phong15_0_1361">
                            <mesh
                              name="Object_776"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_776.geometry}
                              material={materials.phong15}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube237_1362"
                          position={[-0.426, 0.463, 0.852]}
                          rotation={[0, 0.087, 0]}
                          scale={[0.539, 0.057, 0.51]}
                        >
                          <group name="pCube237_phong14_0_1363">
                            <mesh
                              name="Object_779"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_779.geometry}
                              material={materials.phong14}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube253_1370"
                          position={[0.791, 0.402, 0.067]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={[2.584, 0.058, 1.475]}
                        >
                          <group name="pCube253_phong15_0_1371">
                            <mesh
                              name="Object_782"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_782.geometry}
                              material={materials.phong15}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube255_1372"
                          position={[-0.072, -0.053, -1.618]}
                          rotation={[0, 0.262, 0]}
                          scale={[1.067, 1.138, 1.067]}
                        >
                          <group name="polySurface1806_1373">
                            <group name="polySurface1806_phong9_0_1374">
                              <mesh
                                name="Object_786"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_786.geometry}
                                material={materials.phong9}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube258_1444"
                          position={[-0.451, 0.463, -0.596]}
                          rotation={[0, Math.PI / 9, 0]}
                          scale={[0.539, 0.057, 0.51]}
                        >
                          <group name="pCube258_phong14_0_1445">
                            <mesh
                              name="Object_789"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_789.geometry}
                              material={materials.phong14}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube259_1446"
                          position={[0.979, 0.463, -0.69]}
                          rotation={[0, -0.262, 0]}
                          scale={[0.539, 0.057, 0.51]}
                        >
                          <group name="pCube259_phong14_0_1447">
                            <mesh
                              name="Object_792"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_792.geometry}
                              material={materials.phong14}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube260_1448"
                          position={[1.143, 0.463, 0.665]}
                          rotation={[0, 0.175, 0]}
                          scale={[0.539, 0.057, 0.51]}
                        >
                          <group name="pCube260_phong14_0_1449">
                            <mesh
                              name="Object_795"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_795.geometry}
                              material={materials.phong14}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder140_1450"
                          position={[-0.2, 0.004, -0.034]}
                          scale={[1, 1, 1.148]}
                        >
                          <group name="pCylinder140_phong7_0_1451">
                            <mesh
                              name="Object_798"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_798.geometry}
                              material={materials.phong7}
                            />
                          </group>
                        </group>
                        <group name="pCylinder146_1455">
                          <group name="polySurface1532_1456">
                            <group name="polySurface1532_phong11_0_1457">
                              <mesh
                                name="Object_802"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_802.geometry}
                                material={materials.phong11}
                              />
                            </group>
                          </group>
                          <group name="polySurface1533_1458">
                            <group name="polySurface1533_phong10_0_1459">
                              <mesh
                                name="Object_805"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_805.geometry}
                                material={materials.phong10}
                              />
                            </group>
                          </group>
                          <group name="polySurface1534_1460">
                            <group name="polySurface1534_phong61_0_1461">
                              <mesh
                                name="Object_808"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_808.geometry}
                                material={materials.phong61}
                              />
                            </group>
                          </group>
                          <group name="polySurface1535_1462">
                            <group name="polySurface1535_phong12_0_1463">
                              <mesh
                                name="Object_811"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_811.geometry}
                                material={materials.phong12}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCylinder147_1464"
                          position={[-0.395, 0.004, -1.58]}
                          rotation={[0, Math.PI / 9, 0]}
                          scale={[1, 1, 1.148]}
                        >
                          <group name="pCylinder147_phong7_0_1465">
                            <mesh
                              name="Object_814"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_814.geometry}
                              material={materials.phong7}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder148_1466"
                          position={[-0.666, 0, -1.811]}
                          rotation={[0, Math.PI / 4, 0]}
                        >
                          <group name="polySurface1536_1467">
                            <group name="polySurface1536_phong11_0_1468">
                              <mesh
                                name="Object_818"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_818.geometry}
                                material={materials.phong11}
                              />
                            </group>
                          </group>
                          <group name="polySurface1537_1469">
                            <group name="polySurface1537_phong10_0_1470">
                              <mesh
                                name="Object_821"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_821.geometry}
                                material={materials.phong10}
                              />
                            </group>
                          </group>
                          <group name="polySurface1538_1471">
                            <group name="polySurface1538_phong61_0_1472">
                              <mesh
                                name="Object_824"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_824.geometry}
                                material={materials.phong61}
                              />
                            </group>
                          </group>
                          <group name="polySurface1539_1473">
                            <group name="polySurface1539_phong12_0_1474">
                              <mesh
                                name="Object_827"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_827.geometry}
                                material={materials.phong12}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCylinder149_1475"
                          position={[1.455, 0.004, -1.449]}
                          rotation={[0, -0.175, 0]}
                          scale={[1, 1, 1.148]}
                        >
                          <group name="pCylinder149_phong7_0_1476">
                            <mesh
                              name="Object_830"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_830.geometry}
                              material={materials.phong7}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder150_1477"
                          position={[1.243, 0, -1.66]}
                          rotation={[0, 0.175, 0]}
                        >
                          <group name="polySurface1528_1478">
                            <group name="polySurface1528_phong11_0_1479">
                              <mesh
                                name="Object_834"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_834.geometry}
                                material={materials.phong11}
                              />
                            </group>
                          </group>
                          <group name="polySurface1529_1480">
                            <group name="polySurface1529_phong10_0_1481">
                              <mesh
                                name="Object_837"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_837.geometry}
                                material={materials.phong10}
                              />
                            </group>
                          </group>
                          <group name="polySurface1530_1482">
                            <group name="polySurface1530_phong61_0_1483">
                              <mesh
                                name="Object_840"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_840.geometry}
                                material={materials.phong61}
                              />
                            </group>
                          </group>
                          <group name="polySurface1531_1484">
                            <group name="polySurface1531_phong12_0_1485">
                              <mesh
                                name="Object_843"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_843.geometry}
                                material={materials.phong12}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCylinder151_1486"
                          position={[1.087, 0.004, -0.252]}
                          rotation={[0, Math.PI / 9, 0]}
                          scale={[1, 1, 1.148]}
                        >
                          <group name="pCylinder151_phong7_0_1487">
                            <mesh
                              name="Object_846"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_846.geometry}
                              material={materials.phong7}
                            />
                          </group>
                        </group>
                        <group
                          name="pCylinder152_1488"
                          position={[0.907, 0, -0.53]}
                          rotation={[0, Math.PI / 4, 0]}
                        >
                          <group name="polySurface1524_1489">
                            <group name="polySurface1524_phong11_0_1490">
                              <mesh
                                name="Object_850"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_850.geometry}
                                material={materials.phong11}
                              />
                            </group>
                          </group>
                          <group name="polySurface1525_1491">
                            <group name="polySurface1525_phong10_0_1492">
                              <mesh
                                name="Object_853"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_853.geometry}
                                material={materials.phong10}
                              />
                            </group>
                          </group>
                          <group name="polySurface1526_1493">
                            <group name="polySurface1526_phong61_0_1494">
                              <mesh
                                name="Object_856"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_856.geometry}
                                material={materials.phong61}
                              />
                            </group>
                          </group>
                          <group name="polySurface1527_1495">
                            <group name="polySurface1527_phong12_0_1496">
                              <mesh
                                name="Object_859"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_859.geometry}
                                material={materials.phong12}
                              />
                            </group>
                          </group>
                        </group>
                        <group name="polySurface1052_1497">
                          <group name="polySurface1551_1498">
                            <group name="polySurface1551_phong1_0_1499">
                              <mesh
                                name="Object_863"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_863.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1551_phong40_0_1500">
                              <mesh
                                name="Object_865"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_865.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1552_1501">
                            <group name="polySurface1552_phong1_0_1502">
                              <mesh
                                name="Object_868"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_868.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1552_phong40_0_1503">
                              <mesh
                                name="Object_870"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_870.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1553_1504">
                            <group name="polySurface1553_phong1_0_1505">
                              <mesh
                                name="Object_873"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_873.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1553_phong40_0_1506">
                              <mesh
                                name="Object_875"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_875.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1554_1507">
                            <group name="polySurface1554_phong1_0_1508">
                              <mesh
                                name="Object_878"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_878.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1554_phong40_0_1509">
                              <mesh
                                name="Object_880"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_880.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1555_1510">
                            <group name="polySurface1555_phong1_0_1511">
                              <mesh
                                name="Object_883"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_883.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1555_phong40_0_1512">
                              <mesh
                                name="Object_885"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_885.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1556_1513">
                            <group name="polySurface1556_phong1_0_1514">
                              <mesh
                                name="Object_888"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_888.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1556_phong40_0_1515">
                              <mesh
                                name="Object_890"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_890.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1557_1516">
                            <group name="polySurface1557_phong25_0_1517">
                              <mesh
                                name="Object_893"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_893.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1558_1518">
                            <group name="polySurface1558_phong1_0_1519">
                              <mesh
                                name="Object_896"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_896.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1558_phong40_0_1520">
                              <mesh
                                name="Object_898"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_898.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1559_1521">
                            <group name="polySurface1559_phong1_0_1522">
                              <mesh
                                name="Object_901"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_901.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1560_1523">
                            <group name="polySurface1560_phong1_0_1524">
                              <mesh
                                name="Object_904"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_904.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1561_1525">
                            <group name="polySurface1561_phong1_0_1526">
                              <mesh
                                name="Object_907"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_907.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1562_1527">
                            <group name="polySurface1562_phong1_0_1528">
                              <mesh
                                name="Object_910"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_910.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1563_1529">
                            <group name="polySurface1563_phong1_0_1530">
                              <mesh
                                name="Object_913"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_913.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1563_phong40_0_1531">
                              <mesh
                                name="Object_915"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_915.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1564_1532">
                            <group name="polySurface1564_phong25_0_1533">
                              <mesh
                                name="Object_918"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_918.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1565_1534">
                            <group name="polySurface1565_phong26_0_1535">
                              <mesh
                                name="Object_921"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_921.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1566_1536">
                            <group name="polySurface1566_phong25_0_1537">
                              <mesh
                                name="Object_924"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_924.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1567_1538">
                            <group name="polySurface1567_phong26_0_1539">
                              <mesh
                                name="Object_927"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_927.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1568_1540">
                            <group name="polySurface1568_phong25_0_1541">
                              <mesh
                                name="Object_930"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_930.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1569_1542">
                            <group name="polySurface1569_phong1_0_1543">
                              <mesh
                                name="Object_933"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_933.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1570_1544">
                            <group name="polySurface1570_phong26_0_1545">
                              <mesh
                                name="Object_936"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_936.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1571_1546">
                            <group name="polySurface1571_phong25_0_1547">
                              <mesh
                                name="Object_939"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_939.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1572_1548">
                            <group name="polySurface1572_phong1_0_1549">
                              <mesh
                                name="Object_942"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_942.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1573_1550">
                            <group name="polySurface1573_phong26_0_1551">
                              <mesh
                                name="Object_945"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_945.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1574_1552">
                            <group name="polySurface1574_phong1_0_1553">
                              <mesh
                                name="Object_948"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_948.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1575_1554">
                            <group name="polySurface1575_phong1_0_1555">
                              <mesh
                                name="Object_951"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_951.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1576_1556">
                            <group name="polySurface1576_phong1_0_1557">
                              <mesh
                                name="Object_954"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_954.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1577_1558">
                            <group name="polySurface1577_phong1_0_1559">
                              <mesh
                                name="Object_957"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_957.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1577_phong40_0_1560">
                              <mesh
                                name="Object_959"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_959.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1578_1561">
                            <group name="polySurface1578_phong1_0_1562">
                              <mesh
                                name="Object_962"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_962.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1579_1563">
                            <group name="polySurface1579_phong1_0_1564">
                              <mesh
                                name="Object_965"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_965.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1580_1565">
                            <group name="polySurface1580_phong1_0_1566">
                              <mesh
                                name="Object_968"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_968.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1581_1567">
                            <group name="polySurface1581_phong25_0_1568">
                              <mesh
                                name="Object_971"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_971.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1582_1569">
                            <group name="polySurface1582_phong26_0_1570">
                              <mesh
                                name="Object_974"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_974.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1583_1571">
                            <group name="polySurface1583_phong1_0_1572">
                              <mesh
                                name="Object_977"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_977.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1584_1573">
                            <group name="polySurface1584_phong25_0_1574">
                              <mesh
                                name="Object_980"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_980.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1585_1575">
                            <group name="polySurface1585_phong1_0_1576">
                              <mesh
                                name="Object_983"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_983.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1586_1577">
                            <group name="polySurface1586_phong1_0_1578">
                              <mesh
                                name="Object_986"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_986.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1587_1579">
                            <group name="polySurface1587_phong1_0_1580">
                              <mesh
                                name="Object_989"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_989.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1588_1581">
                            <group name="polySurface1588_phong26_0_1582">
                              <mesh
                                name="Object_992"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_992.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1589_1583">
                            <group name="polySurface1589_phong25_0_1584">
                              <mesh
                                name="Object_995"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_995.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1590_1585">
                            <group name="polySurface1590_phong1_0_1586">
                              <mesh
                                name="Object_998"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_998.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1591_1587">
                            <group name="polySurface1591_phong1_0_1588">
                              <mesh
                                name="Object_1001"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1001.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1592_1589">
                            <group name="polySurface1592_phong1_0_1590">
                              <mesh
                                name="Object_1004"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1004.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1593_1591">
                            <group name="polySurface1593_phong1_0_1592">
                              <mesh
                                name="Object_1007"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1007.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1594_1593">
                            <group name="polySurface1594_phong1_0_1594">
                              <mesh
                                name="Object_1010"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1010.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1595_1595">
                            <group name="polySurface1595_phong1_0_1596">
                              <mesh
                                name="Object_1013"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1013.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1596_1597">
                            <group name="polySurface1596_phong25_0_1598">
                              <mesh
                                name="Object_1016"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1016.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1597_1599">
                            <group name="polySurface1597_phong25_0_1600">
                              <mesh
                                name="Object_1019"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1019.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1598_1601">
                            <group name="polySurface1598_phong1_0_1602">
                              <mesh
                                name="Object_1022"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1022.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1599_1603">
                            <group name="polySurface1599_phong1_0_1604">
                              <mesh
                                name="Object_1025"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1025.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1599_phong40_0_1605">
                              <mesh
                                name="Object_1027"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1027.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1600_1606">
                            <group name="polySurface1600_phong25_0_1607">
                              <mesh
                                name="Object_1030"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1030.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1601_1608">
                            <group name="polySurface1601_phong1_0_1609">
                              <mesh
                                name="Object_1033"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1033.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1602_1610">
                            <group name="polySurface1602_phong1_0_1611">
                              <mesh
                                name="Object_1036"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1036.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1603_1612">
                            <group name="polySurface1603_phong1_0_1613">
                              <mesh
                                name="Object_1039"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1039.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1604_1614">
                            <group name="polySurface1604_phong1_0_1615">
                              <mesh
                                name="Object_1042"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1042.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1605_1616">
                            <group name="polySurface1605_phong1_0_1617">
                              <mesh
                                name="Object_1045"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1045.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1605_phong40_0_1618">
                              <mesh
                                name="Object_1047"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1047.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1606_1619">
                            <group name="polySurface1606_phong1_0_1620">
                              <mesh
                                name="Object_1050"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1050.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1606_phong40_0_1621">
                              <mesh
                                name="Object_1052"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1052.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1607_1622">
                            <group name="polySurface1607_phong1_0_1623">
                              <mesh
                                name="Object_1055"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1055.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1608_1624">
                            <group name="polySurface1608_phong1_0_1625">
                              <mesh
                                name="Object_1058"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1058.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1609_1626">
                            <group name="polySurface1609_phong1_0_1627">
                              <mesh
                                name="Object_1061"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1061.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1610_1628">
                            <group name="polySurface1610_phong1_0_1629">
                              <mesh
                                name="Object_1064"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1064.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1611_1630">
                            <group name="polySurface1611_phong1_0_1631">
                              <mesh
                                name="Object_1067"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1067.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1612_1632">
                            <group name="polySurface1612_phong1_0_1633">
                              <mesh
                                name="Object_1070"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1070.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1612_phong40_0_1634">
                              <mesh
                                name="Object_1072"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1072.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1613_1635">
                            <group name="polySurface1613_phong25_0_1636">
                              <mesh
                                name="Object_1075"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1075.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1614_1637">
                            <group name="polySurface1614_phong42_0_1638">
                              <mesh
                                name="Object_1078"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1078.geometry}
                                material={materials.phong42}
                              />
                            </group>
                            <group name="polySurface1614_phong41_0_1639">
                              <mesh
                                name="Object_1080"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1080.geometry}
                                material={materials.phong41}
                              />
                            </group>
                            <group name="polySurface1614_phong25_0_1640">
                              <mesh
                                name="Object_1082"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1082.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1615_1641">
                            <group name="polySurface1615_phong25_0_1642">
                              <mesh
                                name="Object_1085"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1085.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1616_1643">
                            <group name="polySurface1616_phong25_0_1644">
                              <mesh
                                name="Object_1088"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1088.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1616_phong41_0_1645">
                              <mesh
                                name="Object_1090"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1090.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1617_1646">
                            <group name="polySurface1617_phong1_0_1647">
                              <mesh
                                name="Object_1093"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1093.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1617_phong40_0_1648">
                              <mesh
                                name="Object_1095"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1095.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1618_1649">
                            <group name="polySurface1618_phong1_0_1650">
                              <mesh
                                name="Object_1098"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1098.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1618_phong40_0_1651">
                              <mesh
                                name="Object_1100"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1100.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1619_1652">
                            <group name="polySurface1619_phong25_0_1653">
                              <mesh
                                name="Object_1103"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1103.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1619_phong41_0_1654">
                              <mesh
                                name="Object_1105"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1105.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1620_1655">
                            <group name="polySurface1620_phong25_0_1656">
                              <mesh
                                name="Object_1108"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1108.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1620_phong41_0_1657">
                              <mesh
                                name="Object_1110"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1110.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1621_1658">
                            <group name="polySurface1621_phong25_0_1659">
                              <mesh
                                name="Object_1113"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1113.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1621_phong41_0_1660">
                              <mesh
                                name="Object_1115"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1115.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1622_1661">
                            <group name="polySurface1622_phong25_0_1662">
                              <mesh
                                name="Object_1118"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1118.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1622_phong41_0_1663">
                              <mesh
                                name="Object_1120"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1120.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1623_1664">
                            <group name="polySurface1623_phong25_0_1665">
                              <mesh
                                name="Object_1123"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1123.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1623_phong41_0_1666">
                              <mesh
                                name="Object_1125"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1125.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1624_1667">
                            <group name="polySurface1624_phong1_0_1668">
                              <mesh
                                name="Object_1128"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1128.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1624_phong40_0_1669">
                              <mesh
                                name="Object_1130"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1130.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1625_1670">
                            <group name="polySurface1625_phong25_0_1671">
                              <mesh
                                name="Object_1133"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1133.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1625_phong41_0_1672">
                              <mesh
                                name="Object_1135"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1135.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1626_1673">
                            <group name="polySurface1626_phong25_0_1674">
                              <mesh
                                name="Object_1138"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1138.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1626_phong41_0_1675">
                              <mesh
                                name="Object_1140"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1140.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1627_1676">
                            <group name="polySurface1627_phong25_0_1677">
                              <mesh
                                name="Object_1143"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1143.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1627_phong41_0_1678">
                              <mesh
                                name="Object_1145"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1145.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1628_1679">
                            <group name="polySurface1628_phong1_0_1680">
                              <mesh
                                name="Object_1148"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1148.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1628_phong40_0_1681">
                              <mesh
                                name="Object_1150"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1150.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1629_1682">
                            <group name="polySurface1629_phong1_0_1683">
                              <mesh
                                name="Object_1153"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1153.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1630_1684">
                            <group name="polySurface1630_phong26_0_1685">
                              <mesh
                                name="Object_1156"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1156.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1631_1686">
                            <group name="polySurface1631_phong1_0_1687">
                              <mesh
                                name="Object_1159"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1159.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1632_1688">
                            <group name="polySurface1632_phong26_0_1689">
                              <mesh
                                name="Object_1162"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1162.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1633_1690">
                            <group name="polySurface1633_phong25_0_1691">
                              <mesh
                                name="Object_1165"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1165.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1634_1692">
                            <group name="polySurface1634_phong1_0_1693">
                              <mesh
                                name="Object_1168"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1168.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1635_1694">
                            <group name="polySurface1635_phong26_0_1695">
                              <mesh
                                name="Object_1171"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1171.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1636_1696">
                            <group name="polySurface1636_phong1_0_1697">
                              <mesh
                                name="Object_1174"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1174.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1637_1698">
                            <group name="polySurface1637_phong26_0_1699">
                              <mesh
                                name="Object_1177"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1177.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1638_1700">
                            <group name="polySurface1638_phong1_0_1701">
                              <mesh
                                name="Object_1180"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1180.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1639_1702">
                            <group name="polySurface1639_phong25_0_1703">
                              <mesh
                                name="Object_1183"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1183.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1640_1704">
                            <group name="polySurface1640_phong1_0_1705">
                              <mesh
                                name="Object_1186"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1186.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1641_1706">
                            <group name="polySurface1641_phong26_0_1707">
                              <mesh
                                name="Object_1189"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1189.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1642_1708">
                            <group name="polySurface1642_phong1_0_1709">
                              <mesh
                                name="Object_1192"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1192.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1643_1710">
                            <group name="polySurface1643_phong1_0_1711">
                              <mesh
                                name="Object_1195"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1195.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1644_1712">
                            <group name="polySurface1644_phong25_0_1713">
                              <mesh
                                name="Object_1198"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1198.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1645_1714">
                            <group name="polySurface1645_phong1_0_1715">
                              <mesh
                                name="Object_1201"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1201.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1646_1716">
                            <group name="polySurface1646_phong1_0_1717">
                              <mesh
                                name="Object_1204"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1204.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1647_1718">
                            <group name="polySurface1647_phong26_0_1719">
                              <mesh
                                name="Object_1207"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1207.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1648_1720">
                            <group name="polySurface1648_phong1_0_1721">
                              <mesh
                                name="Object_1210"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1210.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1649_1722">
                            <group name="polySurface1649_phong26_0_1723">
                              <mesh
                                name="Object_1213"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1213.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1650_1724">
                            <group name="polySurface1650_phong1_0_1725">
                              <mesh
                                name="Object_1216"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1216.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1651_1726">
                            <group name="polySurface1651_phong1_0_1727">
                              <mesh
                                name="Object_1219"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1219.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1652_1728">
                            <group name="polySurface1652_phong1_0_1729">
                              <mesh
                                name="Object_1222"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1222.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1652_phong40_0_1730">
                              <mesh
                                name="Object_1224"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1224.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1653_1731">
                            <group name="polySurface1653_phong1_0_1732">
                              <mesh
                                name="Object_1227"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1227.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1654_1733">
                            <group name="polySurface1654_phong25_0_1734">
                              <mesh
                                name="Object_1230"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1230.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1655_1735">
                            <group name="polySurface1655_phong1_0_1736">
                              <mesh
                                name="Object_1233"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1233.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1655_phong40_0_1737">
                              <mesh
                                name="Object_1235"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1235.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1656_1738">
                            <group name="polySurface1656_phong25_0_1739">
                              <mesh
                                name="Object_1238"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1238.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1657_1740">
                            <group name="polySurface1657_phong1_0_1741">
                              <mesh
                                name="Object_1241"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1241.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1657_phong40_0_1742">
                              <mesh
                                name="Object_1243"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1243.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1658_1743">
                            <group name="polySurface1658_phong1_0_1744">
                              <mesh
                                name="Object_1246"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1246.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1658_phong40_0_1745">
                              <mesh
                                name="Object_1248"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1248.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1659_1746">
                            <group name="polySurface1659_phong25_0_1747">
                              <mesh
                                name="Object_1251"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1251.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1659_phong41_0_1748">
                              <mesh
                                name="Object_1253"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1253.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1660_1749">
                            <group name="polySurface1660_phong25_0_1750">
                              <mesh
                                name="Object_1256"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1256.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1660_phong41_0_1751">
                              <mesh
                                name="Object_1258"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1258.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1661_1752">
                            <group name="polySurface1661_phong25_0_1753">
                              <mesh
                                name="Object_1261"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1261.geometry}
                                material={materials.phong25}
                              />
                            </group>
                            <group name="polySurface1661_phong41_0_1754">
                              <mesh
                                name="Object_1263"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1263.geometry}
                                material={materials.phong41}
                              />
                            </group>
                          </group>
                          <group name="polySurface1662_1755">
                            <group name="polySurface1662_phong1_0_1756">
                              <mesh
                                name="Object_1266"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1266.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1662_phong40_0_1757">
                              <mesh
                                name="Object_1268"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1268.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1663_1758">
                            <group name="polySurface1663_phong1_0_1759">
                              <mesh
                                name="Object_1271"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1271.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1663_phong40_0_1760">
                              <mesh
                                name="Object_1273"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1273.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1664_1761">
                            <group name="polySurface1664_phong1_0_1762">
                              <mesh
                                name="Object_1276"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1276.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1664_phong40_0_1763">
                              <mesh
                                name="Object_1278"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1278.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1665_1764">
                            <group name="polySurface1665_phong1_0_1765">
                              <mesh
                                name="Object_1281"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1281.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1665_phong40_0_1766">
                              <mesh
                                name="Object_1283"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1283.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1666_1767">
                            <group name="polySurface1666_phong1_0_1768">
                              <mesh
                                name="Object_1286"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1286.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1666_phong40_0_1769">
                              <mesh
                                name="Object_1288"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1288.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1667_1770"
                            position={[-0.035, 0, 0]}
                          >
                            <group name="polySurface1667_phong1_0_1771">
                              <mesh
                                name="Object_1291"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1291.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1667_phong40_0_1772">
                              <mesh
                                name="Object_1293"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1293.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1668_1773">
                            <group name="polySurface1668_phong1_0_1774">
                              <mesh
                                name="Object_1296"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1296.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1668_phong40_0_1775">
                              <mesh
                                name="Object_1298"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1298.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1669_1776">
                            <group name="polySurface1669_phong1_0_1777">
                              <mesh
                                name="Object_1301"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1301.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1669_phong40_0_1778">
                              <mesh
                                name="Object_1303"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1303.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1670_1779">
                            <group name="polySurface1670_phong1_0_1780">
                              <mesh
                                name="Object_1306"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1306.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1671_1781"
                            position={[-0.035, 0, 0]}
                          >
                            <group name="polySurface1671_phong1_0_1782">
                              <mesh
                                name="Object_1309"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1309.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1671_phong40_0_1783">
                              <mesh
                                name="Object_1311"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1311.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1672_1784">
                            <group name="polySurface1672_phong25_0_1785">
                              <mesh
                                name="Object_1314"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1314.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1673_1786">
                            <group name="polySurface1673_phong1_0_1787">
                              <mesh
                                name="Object_1317"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1317.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1674_1788">
                            <group name="polySurface1674_phong1_0_1789">
                              <mesh
                                name="Object_1320"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1320.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1675_1790">
                            <group name="polySurface1675_phong25_0_1791">
                              <mesh
                                name="Object_1323"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1323.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1676_1792">
                            <group name="polySurface1676_phong25_0_1793">
                              <mesh
                                name="Object_1326"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1326.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1677_1794">
                            <group name="polySurface1677_phong1_0_1795">
                              <mesh
                                name="Object_1329"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1329.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1678_1796">
                            <group name="polySurface1678_phong1_0_1797">
                              <mesh
                                name="Object_1332"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1332.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1679_1798">
                            <group name="polySurface1679_phong1_0_1799">
                              <mesh
                                name="Object_1335"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1335.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1680_1800">
                            <group name="polySurface1680_phong25_0_1801">
                              <mesh
                                name="Object_1338"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1338.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1681_1802">
                            <group name="polySurface1681_phong25_0_1803">
                              <mesh
                                name="Object_1341"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1341.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1682_1804">
                            <group name="polySurface1682_phong26_0_1805">
                              <mesh
                                name="Object_1344"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1344.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1683_1806">
                            <group name="polySurface1683_phong26_0_1807">
                              <mesh
                                name="Object_1347"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1347.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1684_1808">
                            <group name="polySurface1684_phong1_0_1809">
                              <mesh
                                name="Object_1350"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1350.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1685_1810">
                            <group name="polySurface1685_phong1_0_1811">
                              <mesh
                                name="Object_1353"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1353.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1686_1812">
                            <group name="polySurface1686_phong25_0_1813">
                              <mesh
                                name="Object_1356"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1356.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1687_1814">
                            <group name="polySurface1687_phong1_0_1815">
                              <mesh
                                name="Object_1359"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1359.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1688_1816">
                            <group name="polySurface1688_phong25_0_1817">
                              <mesh
                                name="Object_1362"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1362.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1689_1818">
                            <group name="polySurface1689_phong26_0_1819">
                              <mesh
                                name="Object_1365"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1365.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1690_1820">
                            <group name="polySurface1690_phong1_0_1821">
                              <mesh
                                name="Object_1368"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1368.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1691_1822">
                            <group name="polySurface1691_phong1_0_1823">
                              <mesh
                                name="Object_1371"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1371.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1692_1824">
                            <group name="polySurface1692_phong25_0_1825">
                              <mesh
                                name="Object_1374"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1374.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1693_1826">
                            <group name="polySurface1693_phong1_0_1827">
                              <mesh
                                name="Object_1377"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1377.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1694_1828">
                            <group name="polySurface1694_phong25_0_1829">
                              <mesh
                                name="Object_1380"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1380.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1695_1830">
                            <group name="polySurface1695_phong26_0_1831">
                              <mesh
                                name="Object_1383"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1383.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1696_1832">
                            <group name="polySurface1696_phong25_0_1833">
                              <mesh
                                name="Object_1386"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1386.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1697_1834">
                            <group name="polySurface1697_phong1_0_1835">
                              <mesh
                                name="Object_1389"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1389.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1698_1836">
                            <group name="polySurface1698_phong25_0_1837">
                              <mesh
                                name="Object_1392"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1392.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1699_1838">
                            <group name="polySurface1699_phong1_0_1839">
                              <mesh
                                name="Object_1395"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1395.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1700_1840">
                            <group name="polySurface1700_phong1_0_1841">
                              <mesh
                                name="Object_1398"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1398.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1701_1842">
                            <group name="polySurface1701_phong26_0_1843">
                              <mesh
                                name="Object_1401"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1401.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1702_1844">
                            <group name="polySurface1702_phong1_0_1845">
                              <mesh
                                name="Object_1404"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1404.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1703_1846">
                            <group name="polySurface1703_phong1_0_1847">
                              <mesh
                                name="Object_1407"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1407.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1704_1848">
                            <group name="polySurface1704_phong1_0_1849">
                              <mesh
                                name="Object_1410"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1410.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1704_phong40_0_1850">
                              <mesh
                                name="Object_1412"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1412.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1705_1851"
                            position={[-0.035, 0, 0]}
                          >
                            <group name="polySurface1705_phong1_0_1852">
                              <mesh
                                name="Object_1415"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1415.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1705_phong40_0_1853">
                              <mesh
                                name="Object_1417"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1417.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1706_1854"
                            position={[-0.035, 0, 0]}
                          >
                            <group name="polySurface1706_phong1_0_1855">
                              <mesh
                                name="Object_1420"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1420.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1706_phong40_0_1856">
                              <mesh
                                name="Object_1422"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1422.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1707_1857">
                            <group name="polySurface1707_phong1_0_1858">
                              <mesh
                                name="Object_1425"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1425.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1708_1859">
                            <group name="polySurface1708_phong25_0_1860">
                              <mesh
                                name="Object_1428"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1428.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1709_1861">
                            <group name="polySurface1709_phong1_0_1862">
                              <mesh
                                name="Object_1431"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1431.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1710_1863">
                            <group name="polySurface1710_phong1_0_1864">
                              <mesh
                                name="Object_1434"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1434.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1711_1865">
                            <group name="polySurface1711_phong26_0_1866">
                              <mesh
                                name="Object_1437"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1437.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1712_1867">
                            <group name="polySurface1712_phong25_0_1868">
                              <mesh
                                name="Object_1440"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1440.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1713_1869">
                            <group name="polySurface1713_phong1_0_1870">
                              <mesh
                                name="Object_1443"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1443.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1714_1871">
                            <group name="polySurface1714_phong1_0_1872">
                              <mesh
                                name="Object_1446"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1446.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1715_1873">
                            <group name="polySurface1715_phong1_0_1874">
                              <mesh
                                name="Object_1449"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1449.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1716_1875">
                            <group name="polySurface1716_phong25_0_1876">
                              <mesh
                                name="Object_1452"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1452.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1717_1877">
                            <group name="polySurface1717_phong26_0_1878">
                              <mesh
                                name="Object_1455"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1455.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1718_1879">
                            <group name="polySurface1718_phong1_0_1880">
                              <mesh
                                name="Object_1458"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1458.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1719_1881">
                            <group name="polySurface1719_phong1_0_1882">
                              <mesh
                                name="Object_1461"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1461.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1720_1883">
                            <group name="polySurface1720_phong25_0_1884">
                              <mesh
                                name="Object_1464"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1464.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1721_1885">
                            <group name="polySurface1721_phong25_0_1886">
                              <mesh
                                name="Object_1467"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1467.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1722_1887">
                            <group name="polySurface1722_phong1_0_1888">
                              <mesh
                                name="Object_1470"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1470.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1723_1889">
                            <group name="polySurface1723_phong1_0_1890">
                              <mesh
                                name="Object_1473"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1473.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1724_1891">
                            <group name="polySurface1724_phong25_0_1892">
                              <mesh
                                name="Object_1476"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1476.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1725_1893">
                            <group name="polySurface1725_phong1_0_1894">
                              <mesh
                                name="Object_1479"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1479.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1726_1895">
                            <group name="polySurface1726_phong1_0_1896">
                              <mesh
                                name="Object_1482"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1482.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1727_1897">
                            <group name="polySurface1727_phong26_0_1898">
                              <mesh
                                name="Object_1485"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1485.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1728_1899">
                            <group name="polySurface1728_phong1_0_1900">
                              <mesh
                                name="Object_1488"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1488.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1729_1901">
                            <group name="polySurface1729_phong25_0_1902">
                              <mesh
                                name="Object_1491"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1491.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1730_1903">
                            <group name="polySurface1730_phong25_0_1904">
                              <mesh
                                name="Object_1494"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1494.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1731_1905">
                            <group name="polySurface1731_phong26_0_1906">
                              <mesh
                                name="Object_1497"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1497.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1732_1907">
                            <group name="polySurface1732_phong26_0_1908">
                              <mesh
                                name="Object_1500"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1500.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1733_1909">
                            <group name="polySurface1733_phong1_0_1910">
                              <mesh
                                name="Object_1503"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1503.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1734_1911">
                            <group name="polySurface1734_phong25_0_1912">
                              <mesh
                                name="Object_1506"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1506.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1735_1913">
                            <group name="polySurface1735_phong1_0_1914">
                              <mesh
                                name="Object_1509"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1509.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1736_1915">
                            <group name="polySurface1736_phong1_0_1916">
                              <mesh
                                name="Object_1512"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1512.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1737_1917">
                            <group name="polySurface1737_phong26_0_1918">
                              <mesh
                                name="Object_1515"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1515.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1738_1919">
                            <group name="polySurface1738_phong1_0_1920">
                              <mesh
                                name="Object_1518"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1518.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1739_1921">
                            <group name="polySurface1739_phong1_0_1922">
                              <mesh
                                name="Object_1521"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1521.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1740_1923">
                            <group name="polySurface1740_phong1_0_1924">
                              <mesh
                                name="Object_1524"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1524.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1741_1925">
                            <group name="polySurface1741_phong25_0_1926">
                              <mesh
                                name="Object_1527"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1527.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1742_1927">
                            <group name="polySurface1742_phong1_0_1928">
                              <mesh
                                name="Object_1530"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1530.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1743_1929">
                            <group name="polySurface1743_phong1_0_1930">
                              <mesh
                                name="Object_1533"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1533.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1744_1931">
                            <group name="polySurface1744_phong25_0_1932">
                              <mesh
                                name="Object_1536"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1536.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1745_1933">
                            <group name="polySurface1745_phong1_0_1934">
                              <mesh
                                name="Object_1539"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1539.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1746_1935">
                            <group name="polySurface1746_phong1_0_1936">
                              <mesh
                                name="Object_1542"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1542.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1747_1937">
                            <group name="polySurface1747_phong1_0_1938">
                              <mesh
                                name="Object_1545"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1545.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1748_1939">
                            <group name="polySurface1748_phong1_0_1940">
                              <mesh
                                name="Object_1548"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1548.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1749_1941">
                            <group name="polySurface1749_phong1_0_1942">
                              <mesh
                                name="Object_1551"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1551.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1750_1943"
                            position={[0.033, 0, 0]}
                          >
                            <group name="polySurface1750_phong1_0_1944">
                              <mesh
                                name="Object_1554"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1554.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1750_phong40_0_1945">
                              <mesh
                                name="Object_1556"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1556.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1751_1946"
                            position={[0.033, 0, 0.022]}
                          >
                            <group name="polySurface1751_phong1_0_1947">
                              <mesh
                                name="Object_1559"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1559.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1751_phong40_0_1948">
                              <mesh
                                name="Object_1561"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1561.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1752_1949">
                            <group name="polySurface1752_phong1_0_1950">
                              <mesh
                                name="Object_1564"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1564.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1752_phong40_0_1951">
                              <mesh
                                name="Object_1566"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1566.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1753_1952"
                            position={[0.033, 0, 0]}
                          >
                            <group name="polySurface1753_phong1_0_1953">
                              <mesh
                                name="Object_1569"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1569.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1753_phong40_0_1954">
                              <mesh
                                name="Object_1571"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1571.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1754_1955">
                            <group name="polySurface1754_phong1_0_1956">
                              <mesh
                                name="Object_1574"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1574.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1754_phong40_0_1957">
                              <mesh
                                name="Object_1576"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1576.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1755_1958">
                            <group name="polySurface1755_phong1_0_1959">
                              <mesh
                                name="Object_1579"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1579.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1755_phong40_0_1960">
                              <mesh
                                name="Object_1581"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1581.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group
                            name="polySurface1756_1961"
                            position={[0.033, 0, 0]}
                          >
                            <group name="polySurface1756_phong1_0_1962">
                              <mesh
                                name="Object_1584"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1584.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1756_phong40_0_1963">
                              <mesh
                                name="Object_1586"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1586.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1757_1964">
                            <group name="polySurface1757_phong1_0_1965">
                              <mesh
                                name="Object_1589"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1589.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1757_phong40_0_1966">
                              <mesh
                                name="Object_1591"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1591.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1758_1967">
                            <group name="polySurface1758_phong1_0_1968">
                              <mesh
                                name="Object_1594"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1594.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1758_phong40_0_1969">
                              <mesh
                                name="Object_1596"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1596.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1759_1970">
                            <group name="polySurface1759_phong1_0_1971">
                              <mesh
                                name="Object_1599"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1599.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1759_phong40_0_1972">
                              <mesh
                                name="Object_1601"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1601.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1760_1973">
                            <group name="polySurface1760_phong1_0_1974">
                              <mesh
                                name="Object_1604"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1604.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1760_phong40_0_1975">
                              <mesh
                                name="Object_1606"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1606.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1761_1976">
                            <group name="polySurface1761_phong1_0_1977">
                              <mesh
                                name="Object_1609"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1609.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1762_1978">
                            <group name="polySurface1762_phong1_0_1979">
                              <mesh
                                name="Object_1612"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1612.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1762_phong40_0_1980">
                              <mesh
                                name="Object_1614"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1614.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1763_1981">
                            <group name="polySurface1763_phong25_0_1982">
                              <mesh
                                name="Object_1617"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1617.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1764_1983">
                            <group name="polySurface1764_phong1_0_1984">
                              <mesh
                                name="Object_1620"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1620.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1765_1985">
                            <group name="polySurface1765_phong1_0_1986">
                              <mesh
                                name="Object_1623"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1623.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1765_phong40_0_1987">
                              <mesh
                                name="Object_1625"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1625.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1766_1988">
                            <group name="polySurface1766_phong1_0_1989">
                              <mesh
                                name="Object_1628"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1628.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1766_phong40_0_1990">
                              <mesh
                                name="Object_1630"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1630.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1767_1991">
                            <group name="polySurface1767_phong1_0_1992">
                              <mesh
                                name="Object_1633"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1633.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1768_1993">
                            <group name="polySurface1768_phong1_0_1994">
                              <mesh
                                name="Object_1636"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1636.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1768_phong40_0_1995">
                              <mesh
                                name="Object_1638"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1638.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1769_1996">
                            <group name="polySurface1769_phong1_0_1997">
                              <mesh
                                name="Object_1641"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1641.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1770_1998">
                            <group name="polySurface1770_phong1_0_1999">
                              <mesh
                                name="Object_1644"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1644.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1771_2000">
                            <group name="polySurface1771_phong25_0_2001">
                              <mesh
                                name="Object_1647"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1647.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1772_2002">
                            <group name="polySurface1772_phong1_0_2003">
                              <mesh
                                name="Object_1650"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1650.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1772_phong40_0_2004">
                              <mesh
                                name="Object_1652"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1652.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1773_2005">
                            <group name="polySurface1773_phong25_0_2006">
                              <mesh
                                name="Object_1655"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1655.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1774_2007">
                            <group name="polySurface1774_phong25_0_2008">
                              <mesh
                                name="Object_1658"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1658.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1775_2009">
                            <group name="polySurface1775_phong1_0_2010">
                              <mesh
                                name="Object_1661"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1661.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1776_2011">
                            <group name="polySurface1776_phong1_0_2012">
                              <mesh
                                name="Object_1664"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1664.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1777_2013">
                            <group name="polySurface1777_phong26_0_2014">
                              <mesh
                                name="Object_1667"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1667.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1778_2015">
                            <group name="polySurface1778_phong25_0_2016">
                              <mesh
                                name="Object_1670"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1670.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1779_2017">
                            <group name="polySurface1779_phong25_0_2018">
                              <mesh
                                name="Object_1673"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1673.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1780_2019">
                            <group name="polySurface1780_phong1_0_2020">
                              <mesh
                                name="Object_1676"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1676.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1780_phong40_0_2021">
                              <mesh
                                name="Object_1678"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1678.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1781_2022">
                            <group name="polySurface1781_phong1_0_2023">
                              <mesh
                                name="Object_1681"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1681.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1782_2024">
                            <group name="polySurface1782_phong1_0_2025">
                              <mesh
                                name="Object_1684"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1684.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1783_2026">
                            <group name="polySurface1783_phong1_0_2027">
                              <mesh
                                name="Object_1687"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1687.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1783_phong40_0_2028">
                              <mesh
                                name="Object_1689"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1689.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1784_2029">
                            <group name="polySurface1784_phong1_0_2030">
                              <mesh
                                name="Object_1692"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1692.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1785_2031">
                            <group name="polySurface1785_phong1_0_2032">
                              <mesh
                                name="Object_1695"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1695.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1786_2033">
                            <group name="polySurface1786_phong26_0_2034">
                              <mesh
                                name="Object_1698"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1698.geometry}
                                material={materials.phong26}
                              />
                            </group>
                          </group>
                          <group name="polySurface1787_2035">
                            <group name="polySurface1787_phong1_0_2036">
                              <mesh
                                name="Object_1701"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1701.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1788_2037">
                            <group name="polySurface1788_phong1_0_2038">
                              <mesh
                                name="Object_1704"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1704.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1788_phong40_0_2039">
                              <mesh
                                name="Object_1706"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1706.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1789_2040">
                            <group name="polySurface1789_phong1_0_2041">
                              <mesh
                                name="Object_1709"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1709.geometry}
                                material={materials.phong1}
                              />
                            </group>
                            <group name="polySurface1789_phong40_0_2042">
                              <mesh
                                name="Object_1711"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1711.geometry}
                                material={materials.phong40}
                              />
                            </group>
                          </group>
                          <group name="polySurface1790_2043">
                            <group name="polySurface1790_phong1_0_2044">
                              <mesh
                                name="Object_1714"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1714.geometry}
                                material={materials.phong1}
                              />
                            </group>
                          </group>
                          <group name="polySurface1791_2045">
                            <group name="polySurface1791_phong25_0_2046">
                              <mesh
                                name="Object_1717"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1717.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1792_2047">
                            <group name="polySurface1792_phong25_0_2048">
                              <mesh
                                name="Object_1720"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1720.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1793_2049">
                            <group name="polySurface1793_phong25_0_2050">
                              <mesh
                                name="Object_1723"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1723.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                          <group name="polySurface1794_2051">
                            <group name="polySurface1794_phong25_0_2052">
                              <mesh
                                name="Object_1726"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1726.geometry}
                                material={materials.phong25}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCylinder154_2053"
                          position={[0.636, 0.842, 2.379]}
                          rotation={[-Math.PI, Math.PI / 4, -1.745]}
                          scale={[0.878, 1, 0.968]}
                        >
                          <group name="pCylinder154_phong7_0_2054">
                            <mesh
                              name="Object_1729"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1729.geometry}
                              material={materials.phong7}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube261_2058"
                          position={[3.655, 0, -0.021]}
                          rotation={[-Math.PI, 0, -Math.PI]}
                        >
                          <group name="polySurface1839_2059">
                            <group name="polySurface1839_phong46_0_2060">
                              <mesh
                                name="Object_1733"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1733.geometry}
                                material={materials.phong46}
                              />
                            </group>
                            <group name="polySurface1839_phong27_0_2061">
                              <mesh
                                name="Object_1735"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1735.geometry}
                                material={materials.phong27}
                              />
                            </group>
                          </group>
                          <group name="polySurface1840_2062">
                            <group name="polySurface1840_phong45_0_2063">
                              <mesh
                                name="Object_1738"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1738.geometry}
                                material={materials.phong45}
                              />
                            </group>
                            <group name="polySurface1840_phong46_0_2064">
                              <mesh
                                name="Object_1740"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1740.geometry}
                                material={materials.phong46}
                              />
                            </group>
                            <group name="polySurface1840_phong27_0_2065">
                              <mesh
                                name="Object_1742"
                                castShadow
                                receiveShadow
                                geometry={nodes.Object_1742.geometry}
                                material={materials.phong27}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="pCube262_2066"
                          position={[-0.007, 0, 2.675]}
                          rotation={[-Math.PI, 0, -Math.PI]}
                        >
                          <group name="pCube262_phong45_0_2067">
                            <mesh
                              name="Object_1745"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1745.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="pCube262_phong46_0_2068">
                            <mesh
                              name="Object_1747"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1747.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="pCube262_phong27_0_2069">
                            <mesh
                              name="Object_1749"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1749.geometry}
                              material={materials.phong27}
                            />
                          </group>
                        </group>
                        <group name="polySurface1842_2070">
                          <group name="polySurface1842_phong46_0_2071">
                            <mesh
                              name="Object_1752"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1752.geometry}
                              material={materials.phong46}
                            />
                          </group>
                          <group name="polySurface1842_phong27_0_2072">
                            <mesh
                              name="Object_1754"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1754.geometry}
                              material={materials.phong27}
                            />
                          </group>
                          <group name="polySurface1842_phong45_0_2073">
                            <mesh
                              name="Object_1756"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1756.geometry}
                              material={materials.phong45}
                            />
                          </group>
                        </group>
                        <group name="polySurface1867_2074">
                          <group name="polySurface1867_phong27_0_2075">
                            <mesh
                              name="Object_1759"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1759.geometry}
                              material={materials.phong27}
                            />
                          </group>
                          <group name="polySurface1867_phong45_0_2076">
                            <mesh
                              name="Object_1761"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1761.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="polySurface1867_phong46_0_2077">
                            <mesh
                              name="Object_1763"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1763.geometry}
                              material={materials.phong46}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1934_2078"
                          position={[-0.323, 0, -0.054]}
                          rotation={[0, Math.PI / 2, 0]}
                        >
                          <group name="polySurface1934_phong27_0_2079">
                            <mesh
                              name="Object_1766"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1766.geometry}
                              material={materials.phong27}
                            />
                          </group>
                          <group name="polySurface1934_phong45_0_2080">
                            <mesh
                              name="Object_1768"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1768.geometry}
                              material={materials.phong45}
                            />
                          </group>
                          <group name="polySurface1934_phong46_0_2081">
                            <mesh
                              name="Object_1770"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1770.geometry}
                              material={materials.phong46}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube263_2082"
                          position={[1.826, 0.634, 0.429]}
                          scale={0.122}
                        >
                          <group name="pCube263_phong19_0_2083">
                            <mesh
                              name="Object_1773"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1773.geometry}
                              material={materials.phong19}
                            />
                          </group>
                          <group name="pCube263_phong53_0_2084">
                            <mesh
                              name="Object_1775"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1775.geometry}
                              material={materials.phong53}
                            />
                          </group>
                          <group name="pCube263_phong54_0_2085">
                            <mesh
                              name="Object_1777"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1777.geometry}
                              material={materials.phong54}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube264_2086"
                          position={[1.826, 0.634, -0.416]}
                          scale={0.122}
                        >
                          <group name="pCube264_phong19_0_2087">
                            <mesh
                              name="Object_1780"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1780.geometry}
                              material={materials.phong19}
                            />
                          </group>
                          <group name="pCube264_phong53_0_2088">
                            <mesh
                              name="Object_1782"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1782.geometry}
                              material={materials.phong53}
                            />
                          </group>
                          <group name="pCube264_phong54_0_2089">
                            <mesh
                              name="Object_1784"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1784.geometry}
                              material={materials.phong54}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube265_2090"
                          position={[1.826, 0.629, 0]}
                          scale={0.122}
                        >
                          <group name="pCube265_phong19_0_2091">
                            <mesh
                              name="Object_1787"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1787.geometry}
                              material={materials.phong19}
                            />
                          </group>
                          <group name="pCube265_phong53_0_2092">
                            <mesh
                              name="Object_1789"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1789.geometry}
                              material={materials.phong53}
                            />
                          </group>
                          <group name="pCube265_phong54_0_2093">
                            <mesh
                              name="Object_1791"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1791.geometry}
                              material={materials.phong54}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube266_2094"
                          position={[1.826, 0.637, -0.816]}
                          scale={0.122}
                        >
                          <group name="pCube266_phong19_0_2095">
                            <mesh
                              name="Object_1794"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1794.geometry}
                              material={materials.phong19}
                            />
                          </group>
                          <group name="pCube266_phong53_0_2096">
                            <mesh
                              name="Object_1796"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1796.geometry}
                              material={materials.phong53}
                            />
                          </group>
                          <group name="pCube266_phong54_0_2097">
                            <mesh
                              name="Object_1798"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1798.geometry}
                              material={materials.phong54}
                            />
                          </group>
                        </group>
                        <group
                          name="pCube267_2098"
                          position={[0, -0.297, 0]}
                          rotation={[-Math.PI, 0, -Math.PI]}
                          scale={[4.202, 0.15, 3.386]}
                        >
                          <group name="pCube267_phong55_0_2099">
                            <mesh
                              name="Object_1801"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1801.geometry}
                              material={materials.phong55}
                            />
                          </group>
                          <group name="pCube267_phong24_0_2100">
                            <mesh
                              name="Object_1803"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1803.geometry}
                              material={materials.phong24}
                            />
                          </group>
                          <group name="pCube267_phong56_0_2101">
                            <mesh
                              name="Object_1805"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1805.geometry}
                              material={materials.phong56}
                            />
                          </group>
                        </group>
                        <group name="polySurface1951_2102">
                          <group name="polySurface1951_phong9_0_2103">
                            <mesh
                              name="Object_1808"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1808.geometry}
                              material={materials.phong9}
                            />
                          </group>
                          <group name="polySurface1951_phong58_0_2104">
                            <mesh
                              name="Object_1810"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1810.geometry}
                              material={materials.phong58}
                            />
                          </group>
                          <group name="polySurface1951_phong60_0_2105">
                            <mesh
                              name="Object_1812"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1812.geometry}
                              material={materials.phong60}
                            />
                          </group>
                          <group name="polySurface1951_phong59_0_2106">
                            <mesh
                              name="Object_1814"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1814.geometry}
                              material={materials.phong59}
                            />
                          </group>
                          <group name="polySurface1951_phong32_0_2107">
                            <mesh
                              name="Object_1816"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1816.geometry}
                              material={materials.phong32}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1954_2110"
                          position={[-0.294, 0, -1.623]}
                          rotation={[0, 0.436, 0]}
                        >
                          <group name="polySurface1954_phong9_0_2111">
                            <mesh
                              name="Object_1819"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1819.geometry}
                              material={materials.phong9}
                            />
                          </group>
                          <group name="polySurface1954_phong58_0_2112">
                            <mesh
                              name="Object_1821"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1821.geometry}
                              material={materials.phong58}
                            />
                          </group>
                          <group name="polySurface1954_phong60_0_2113">
                            <mesh
                              name="Object_1823"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1823.geometry}
                              material={materials.phong60}
                            />
                          </group>
                          <group name="polySurface1954_phong59_0_2114">
                            <mesh
                              name="Object_1825"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1825.geometry}
                              material={materials.phong59}
                            />
                          </group>
                          <group name="polySurface1954_phong32_0_2115">
                            <mesh
                              name="Object_1827"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1827.geometry}
                              material={materials.phong32}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1955_2116"
                          position={[1.282, 0, -1.659]}
                          rotation={[0, 0.175, 0]}
                        >
                          <group name="polySurface1955_phong9_0_2117">
                            <mesh
                              name="Object_1830"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1830.geometry}
                              material={materials.phong9}
                            />
                          </group>
                          <group name="polySurface1955_phong58_0_2118">
                            <mesh
                              name="Object_1832"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1832.geometry}
                              material={materials.phong58}
                            />
                          </group>
                          <group name="polySurface1955_phong60_0_2119">
                            <mesh
                              name="Object_1834"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1834.geometry}
                              material={materials.phong60}
                            />
                          </group>
                          <group name="polySurface1955_phong59_0_2120">
                            <mesh
                              name="Object_1836"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1836.geometry}
                              material={materials.phong59}
                            />
                          </group>
                          <group name="polySurface1955_phong32_0_2121">
                            <mesh
                              name="Object_1838"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1838.geometry}
                              material={materials.phong32}
                            />
                          </group>
                        </group>
                        <group
                          name="polySurface1956_2122"
                          position={[1.29, 0, -0.325]}
                          rotation={[0, Math.PI / 9, 0]}
                        >
                          <group name="polySurface1956_phong9_0_2123">
                            <mesh
                              name="Object_1841"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1841.geometry}
                              material={materials.phong9}
                            />
                          </group>
                          <group name="polySurface1956_phong58_0_2124">
                            <mesh
                              name="Object_1843"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1843.geometry}
                              material={materials.phong58}
                            />
                          </group>
                          <group name="polySurface1956_phong60_0_2125">
                            <mesh
                              name="Object_1845"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1845.geometry}
                              material={materials.phong60}
                            />
                          </group>
                          <group name="polySurface1956_phong59_0_2126">
                            <mesh
                              name="Object_1847"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1847.geometry}
                              material={materials.phong59}
                            />
                          </group>
                          <group name="polySurface1956_phong32_0_2127">
                            <mesh
                              name="Object_1849"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1849.geometry}
                              material={materials.phong32}
                            />
                          </group>
                        </group>
                        <group name="pasted__polySurface1449_2128">
                          <group name="pasted__polySurface1449_phong58_0_2129">
                            <mesh
                              name="Object_1852"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1852.geometry}
                              material={materials.phong58}
                            />
                          </group>
                          <group name="pasted__polySurface1449_phong59_0_2130">
                            <mesh
                              name="Object_1854"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1854.geometry}
                              material={materials.phong59}
                            />
                          </group>
                          <group name="pasted__polySurface1449_phong9_0_2131">
                            <mesh
                              name="Object_1856"
                              castShadow
                              receiveShadow
                              geometry={nodes.Object_1856.geometry}
                              material={materials.phong9}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/temple/temple.glb");
