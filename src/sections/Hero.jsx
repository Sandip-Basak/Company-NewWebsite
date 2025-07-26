import { Canvas, useFrame } from "@react-three/fiber";
import {HeroText} from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";
// import { EarthModel } from '../components/EarthModel';
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import {Loader} from "../components/Loader";

// export const Hero = () => {

//    const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
//    const isTablet = useMediaQuery({  minWidth: 640, maxWidth: 1023 });
//    const isMobile = useMediaQuery({ maxWidth: 639 });
 
//    // Props for EarthModel
//    let earthProps = {};
 
//    if (isLaptop) {
//     earthProps = {
//       scale: 0.7,
//       position: [-1.5, -0.5, 0.9],
//     };
//   } else if (isTablet) {
//     earthProps = {
//       scale: 0.8,
//       position: [-0.55, -0.3, 0.9],
//     };
//   } else if (isMobile) {
//     earthProps = {
//       scale: 0.5,
//       position: [-0.55, 0.1, 0.9],
//     };
//   }


 
//   return (
//     <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start m-8">
//       <HeroText />
//       <figure
//         className="absolute inset-0"
//         style={{ width: "100vw", height: "100vh" }}
//       >
//         <Canvas camera={{ position: [0, 0.6, 3] }}>
//         <ambientLight intensity={0.4} /> 
//           <directionalLight
//             position={[0, 1, 3]}
//             intensity={1.2}
//             castShadow
//           />
//           <Suspense fallback={<Loader />}>
//             <Float position={earthProps.position}>
//               <EarthModel scale={earthProps.scale} />
//             </Float>
//             <Rig />
//           </Suspense>
//         </Canvas>
//       </figure>
//     </section>
//   );
// };

// function Rig() {
//   return useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
// }


export const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.19}
                position={isMobile && [0, -3.3, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

