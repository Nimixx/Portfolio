import React from 'react';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div id="about" className="section__wrapper">
      <div className="w-2/3 m-auto grid-2 place-items-center">
        <div className="section__text--wrapper">
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            id="aboutTitle"
            className="section__heading orange-yellow"
          >
            Kdo jsem ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-2xl"
          >
            Pohodář a člověk co se nebojí nových věcí
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-xl"
          >
            Každý den se snažím vždy naučit něco nového tak abych si mohl další
            den říct že jsem zase o něco blíže k tomu co bych v životě chtěl.
            Kromě psaní webů a aplikací mám rád jízdu na kole a sportvoní
            aktivity.
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="place-self-center text-purple-400 text-2xl hidden xl:block"
        >
          Baví mě psát moderní webové aplikace
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="place-self-center text-pink-400 text-2xl hidden xl:block"
        >
          Nejraději mám React a TailwindCSS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sky-400 secondary__heading"
        >
          Jo a opravdu hodně mám rád kávu <span>☕</span>
        </motion.h2>
      </div>
    </div>
  );
}
