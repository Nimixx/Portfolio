import React from 'react';

import About from '../components/Homepage/About';
import Title from '../components/Homepage/Title';

import { motion, useScroll, useSpring } from 'framer-motion';
import Skills from '../components/Homepage/Skills';
import Projects from '../components/Homepage/Projects';

export default function Homepage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="className='w-full min-h-screen flex-center flex-col overflow-hidden'">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-fuchsia-200 origin-left z-10"
        style={{ scaleX }}
      />
      <Title />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
