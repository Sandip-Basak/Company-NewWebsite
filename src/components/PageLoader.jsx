import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';

const WormholeEffect = () => {
  const lineRef = useRef();

  const [positions, colors, speeds] = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 2 * 3);
    const colors = new Float32Array(count * 2 * 3);
    const speeds = new Float32Array(count);
    const starColors = [0xffffff, 0x20e6ff]; // White, Gold, Orange, Light Blue, Sky Blue
    // const starColors = [0xffffff, 0xffa500, 0xadd8e6, 0x20e6ff, 0x8f00ff]; // White, Gold, Orange, Light Blue, Sky Blue

    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;

      positions[i6] = x;
      positions[i6 + 1] = y;
      positions[i6 + 2] = z;

      positions[i6 + 3] = x;
      positions[i6 + 4] = y;
      positions[i6 + 5] = z;

      speeds[i] = Math.random() * 10 + 15;

      const headColor = new THREE.Color(starColors[Math.floor(Math.random() * starColors.length)]);
      headColor.toArray(colors, i6);

      const tailColor = headColor.clone().lerp(new THREE.Color(0x000000), 0.5); // Darken the head color for the tail
      tailColor.toArray(colors, i6 + 3);
    }
    return [positions, colors, speeds];
  }, []);

  useFrame((state, delta) => {
    const positions = lineRef.current.geometry.attributes.position.array;
    const elapsedTime = state.clock.getElapsedTime();

    const startTime = 1.0;
    const transitionDuration = 2.0;

    let progress = 0;
    if (elapsedTime > startTime) {
      progress = Math.min((elapsedTime - startTime) / transitionDuration, 1.0);
    }

    for (let i = 0; i < positions.length / 6; i++) {
      const i6 = i * 6;
      const initialSpeed = 2;
      const maxSpeed = speeds[i];
      const speed = initialSpeed + (maxSpeed - initialSpeed) * progress;

      positions[i6 + 2] += speed * delta;
      positions[i6 + 5] = positions[i6 + 2] - progress * 2.0;

      if (positions[i6 + 2] > 15) {
        positions[i6 + 2] = -15;
        positions[i6 + 5] = -15;
      }
    }
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial vertexColors={true} />
    </lineSegments>
  );
};

const PageLoader = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <Canvas camera={{ position: [0, 0, 0.1], fov: 75 }}>
        <Suspense fallback={null}>
          <WormholeEffect />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PageLoader;
