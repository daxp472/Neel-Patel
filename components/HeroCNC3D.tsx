"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── CNC Machined Part Geometry ───────────────────────────────────────────────
function CNCSixSidedBlock({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  // Create a chamfered hexagonal prism-like shape using lathe geometry
  const outerProfile = useMemo(() => {
    // Define the 2D profile of a hex-block cross section (quarter profile)
    // We'll use a box with chamfered edges via a custom approach
    return null;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Slow auto-rotation
    groupRef.current.rotation.y += 0.004;

    // Subtle mouse parallax tilt
    groupRef.current.rotation.x +=
      (-mouseY * 0.3 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z +=
      (mouseX * 0.15 - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Main body — hexagonal prism approximation */}
      <CNCMainBody />
      {/* Top chamfer disc */}
      <CNCChamferRing position={[0, 0.52, 0]} />
      {/* Bottom chamfer disc */}
      <CNCChamferRing position={[0, -0.52, 0]} />
      {/* Center bore hole */}
      <CNCBore />
      {/* Machining detail lines */}
      <CNCGrooves />
    </group>
  );
}

function CNCMainBody() {
  const geom = useMemo(() => {
    const shape = new THREE.Shape();
    const r = 0.7;
    const sides = 6;
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 6;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();

    const extrudeSettings = {
      depth: 1.0,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 2,
    };

    const g = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    g.center();
    return g;
  }, []);

  return (
    <mesh geometry={geom} castShadow receiveShadow>
      <meshStandardMaterial
        color="#2a3540"
        metalness={0.92}
        roughness={0.18}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function CNCChamferRing({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.62, 0.035, 8, 6]} />
      <meshStandardMaterial
        color="#f97316"
        metalness={0.6}
        roughness={0.3}
        emissive="#f97316"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function CNCBore() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.18, 0.18, 1.2, 24]} />
      <meshStandardMaterial
        color="#080c10"
        metalness={0.98}
        roughness={0.05}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function CNCGrooves() {
  const groovePositions: [number, number, number][] = [
    [0, 0.2, 0],
    [0, 0, 0],
    [0, -0.2, 0],
  ];
  return (
    <>
      {groovePositions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.012, 6, 6]} />
          <meshStandardMaterial
            color="#1e2d3d"
            metalness={0.8}
            roughness={0.4}
          />
        </mesh>
      ))}
    </>
  );
}

// ─── Scene wrapper ─────────────────────────────────────────────────────────────
function Scene({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[3, 5, 2]}
        intensity={1.5}
        color="#ffffff"
      />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#f97316" />
      <pointLight position={[2, 2, -3]} intensity={0.5} color="#4a9eff" />
      <Environment preset="city" />
      <CNCSixSidedBlock mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function HeroCNC3D({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 3.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      <Scene mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}
