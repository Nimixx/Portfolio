import React from 'react';

import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="section__wrapper">
      <div className="w-2/3 m-auto grid-2 place-items-center">
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="place-self-center text-fuchsia-400 text-2xl hidden xl:block"
        >
          Html / CSS / Sass / Javascript / TypeSript
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="text-yellow-200 secondary__heading hidden xl:block"
        >
          Všechno se sem nevejde... ale každopádně se rád naučím co bude
          potřeba.
        </motion.p>

        <div className="section__text--wrapper">
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            id="aboutTitle"
            className="section__heading purple-pink"
          >
            Co dokážu
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-2xl"
          >
            Všechno co už jsem se naučil a ještě naučím
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-xl"
          >
            Jinak se zaměřuji na tvorbu webových stránek a aplikací. Nejraději
            pracuju v reactu, ale nedělá mi problém postavit projekt v jiném
            frameworku. Vždy se snažím vybrat řešení, které je vhodné pro
            konkrétní projekt.
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="text-yellow-200 secondary__heading block xl:hidden"
        >
          Všechno se sem nevejde... ale každopádně se rád naučím co bude
          potřeba.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateX: -60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="place-self-center"
        >
          <p className="text-sky-400 text-2xl hidden xl:block">
            React / Vue / TailWindCSS / Material UI / Vite
          </p>
        </motion.div>
      </div>
    </div>
  );
}
