import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useMotionValue, useSpring } from 'motion/react';
import { useFrame } from '@react-three/fiber';

export function EarthModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/stylized_planet.glb');
  const { actions } = useAnimations(animations, group);

  // Play animation if available
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Spring motion for Y-axis animation
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(0.3);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={props.rotation || [-Math.PI / 2, 0, 0]}
      scale={props.scale || 1.2}
      position={props.position || [0.6, 0, 0.3]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-1.53956547, -0.06378872, 0]}
          scale={[0.99999998, 1.00000002, 1.00000002]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Clouds}
                />
              </group>
              <group name="Planet_2">
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Planet}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/stylized_planet.glb');
