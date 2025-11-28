"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BubbleSphere({ 
  position, 
  radius, 
  speed 
}: { 
  position: [number, number, number], 
  radius: number, 
  speed: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Very gentle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * (speed * 0.2);
      meshRef.current.rotation.y = state.clock.elapsedTime * (speed * 0.3);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 12, 12]} />
      <meshStandardMaterial
        color="#121b2f"
        transparent
        opacity={0.012}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
}

const ThreeBackground = () => {
  const bubbles = useMemo(() => {
    // Reduced from 10 to 6 bubbles for better performance
    return Array.from({ length: 6 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30 - 15
      ] as [number, number, number],
      radius: Math.random() * 2 + 1.5,
      speed: Math.random() * 0.3 + 0.15,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%',
        }}
        gl={{ 
          alpha: true, 
          antialias: false, 
          powerPreference: "low-power",
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        {bubbles.map((bubble, index) => (
          <BubbleSphere
            key={index}
            position={bubble.position}
            radius={bubble.radius}
            speed={bubble.speed}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;