import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Background3D from './components/3d/Background3D';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.2, 0.2, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY, opacity }}
      >
        <Background3D />
      </motion.div>

      <div className="relative z-10 backdrop-blur-[2px]">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;