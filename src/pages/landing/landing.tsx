import React, { FC, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

const Landing: FC = () => {
  return (
    <div>
      <div className="fixed w-screen h-screen">
        <Canvas>
          <OrbitControls autoRotate={true} autoRotateSpeed={0.5} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-3, 0, 0]} />
          <Box position={[3, 0, 0]} />
          <Box position={[0, 0, 3]} />
          <Box position={[0, 0, -3]} />
        </Canvas>
      </div>
    </div>
  );
};

const Box = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "gray" : "white"} />
    </mesh>
  );
};

export default Landing;
