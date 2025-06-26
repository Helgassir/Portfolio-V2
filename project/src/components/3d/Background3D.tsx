import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { useRef } from 'react';

function FloatingCode({ text, position }: { text: string; position: [number, number, number] }) {
  const ref = useRef<any>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.002;
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <Text3D
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.1}
      position={position}
      ref={ref}
    >
      {text}
      <meshStandardMaterial color="#14b8a6" />
    </Text3D>
  );
}

export default function Background3D() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />

      <FloatingCode text="console.log('Hello');" position={[-3, 0, -10]} />
      <FloatingCode text="SELECT * FROM users;" position={[2, -1, -12]} />
      <FloatingCode text="def greet(): return 'Hi'" position={[0, 2, -14]} />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
    </Canvas>
  );
}
