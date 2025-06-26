import { useRef, Suspense, lazy } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';


const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Background3D = lazy(() => import('./components/3d/Background3D'));

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.2, 0.2, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      <Suspense fallback={null}>
        <motion.div
          className="fixed inset-0 -z-10"
          style={{ y: backgroundY, opacity }}
        >
          <Background3D />
        </motion.div>
      </Suspense>


      <div className="relative z-10 backdrop-blur-[2px]">
        <Navbar />

        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
