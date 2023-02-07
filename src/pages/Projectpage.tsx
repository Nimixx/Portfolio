import React from 'react';

import ProjectStatus from '../components/Projects/ProjectStatus';
import Nimixx from '../components/Projects/Projects/Cards/Nimixx';
import Underline from '../components/Projects/Projects/Cards/Underline';

import { motion, useScroll, useSpring } from 'framer-motion';
import QrCode from '../components/Projects/Challenges/QRCode';

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="project__wrapper">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-fuchsia-200 origin-left z-10"
        style={{ scaleX }}
      />
      <motion.section
        initial={{ opacity: 0, translateX: -60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className="card__wrapper"
      >
        <h2 className="tertiary__heading lime-green">Projekty</h2>
        <p className="text-gray-400 font-medium ">
          Všechny moje projekty na jednom místě
        </p>
        <div className="w-40 h-2 border-b-4 border-gray-700"></div>
        <div className="flex justify-center items-center gap-5">
          <ProjectStatus />
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="project__card--wrapper"
      >
        {/* 
    Project cards
    */}
        <Underline />
        <Nimixx />
      </motion.div>
      <motion.section
        initial={{ opacity: 0, translateX: 60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className="card__wrapper"
      >
        <h2 className="tertiary__heading orange-yellow">Challenges</h2>

        <div className="w-40 h-2 border-b-4 border-gray-700"></div>
        <div className="flex justify-center items-center gap-5">
          <ProjectStatus />
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className="project__card--wrapper"
      >
        {/* 
    Challendge cards
    */}
        <QrCode />
      </motion.div>
    </div>
  );
}
