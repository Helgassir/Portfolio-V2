import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Image } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useRef, useEffect, useState, memo } from 'react';
import { useSpring, a } from '@react-spring/three';
import { useInView } from 'react-intersection-observer';

// Import des images depuis assets
import JSLogo from '../../assets/JS.webp';
import HTMLLogo from '../../assets/HTML.webp';
import CSSLogo from '../../assets/CSS.webp';

// Détection mobile simple
const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

interface FloatingLogoProps {
  url: string;
  finalX: number;
  y: number;
  z: number;
  fromDirection: 'left' | 'right';
  delay?: number;
}

const FloatingLogo = memo(function FloatingLogo({
  url,
  finalX,
  y,
  z,
  fromDirection,
  delay = 0,
}: FloatingLogoProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const initialOffset = fromDirection === 'left' ? -0.8 : 0.8;

  const { position, scale, opacity } = useSpring({
    from: {
      position: [finalX + initialOffset, y, z],
      scale: [0, 0, 0],
      opacity: 0,
    },
    to: async (next) => {
      await next({ opacity: 1, scale: [4, 4, 4] });
      await next({ position: [finalX, y, z] });
    },
    delay,
    config: { mass: 1, tension: 180, friction: 20 },
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
      ref.current.position.y = y + Math.sin(clock.getElapsedTime() * 1.5) * 0.15;
    }
  });

  return (
    <a.mesh
      position={position as unknown as [number, number, number]}
      scale={scale as unknown as [number, number, number]}
      ref={ref}
    >
      <a.meshBasicMaterial attach="material" transparent opacity={opacity} />
      <Image url={url} transparent />
    </a.mesh>
  );
});

function Scene3D() {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (controlsRef.current) {
        controlsRef.current.autoRotate = false;
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <FloatingLogo url={JSLogo} finalX={-3.5} y={2} z={-10} fromDirection="left" delay={200} />
        <FloatingLogo url={HTMLLogo} finalX={3.5} y={2} z={-10} fromDirection="right" delay={1000} />
        <FloatingLogo url={CSSLogo} finalX={0} y={-2} z={-10} fromDirection="left" delay={1600} />
      </Suspense>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </Canvas>
  );
}

export default function Background3D() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (inView && !isMobile) {
      setShouldRender(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-screen">
      {shouldRender && <Scene3D />}
    </div>
  );
}
