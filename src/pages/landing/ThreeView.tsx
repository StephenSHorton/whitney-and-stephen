import React, { FC, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import InvitePic from "assets/images/Invite.png";

// const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

const ThreeView: FC = () => {
	return (
		<div className="fixed w-full h-full">
			<div className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
				<img src={InvitePic} alt="Invitation" className="select-none" />
			</div>
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

export default ThreeView;
