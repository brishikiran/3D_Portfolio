import React, { useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ComputersModel = ({ isMobile }) => {
  const computerModel = useGLTF("./cosmonaut_on_a_rocket/scene.gltf");
  const [rotation, setRotation] = useState([0, 0, 0]);

  // Update the rotation of the object over time
  useFrame(({ clock }) => {
    // You can modify the rotation logic based on your desired animation
    const time = clock.getElapsedTime();
    setRotation([0, time, 0]);
  });

  return (
    <mesh rotation={rotation}>

<hemisphereLight intensity={0.15} groundColor="black" />
  <spotLight
    position={[-20, 50, 10]}
    angle={0.12}
    penumbra={1}
    intensity={1}
    castShadow
    shadow-mapSize={1024}
  />
  <pointLight intensity={1} />
  <primitive
    object={computerModel.scene}
    scale={isMobile ? 0.013 : 0.019}
    position={isMobile ? [0, -3, -0.2] : [0, -4, 1.5]}
    rotation={[0.02, 1, 0]}
  />

    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 2, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Preload all />
      <Suspense fallback={<CanvasLoader />}>
        <ComputersModel isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;



