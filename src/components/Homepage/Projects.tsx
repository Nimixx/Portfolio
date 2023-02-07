import React from 'react';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="section__wrapper">
      <div className="w-2/3 m-auto grid-2 place-items-center">
        <div className="section__text--wrapper">
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            id="aboutTitle"
            className="uppercase text-6xl font-bold lime-green"
          >
            Co bude dál ?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-2xl"
          >
            Stále se budu snažit zlepšovat v tom co mě baví
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-xl"
          >
            Věřím že v budoucnu budu moct pracovat jako FrontEnd developer a
            tvorbou stránek se budu živit. Mým cílem je tak z mého koníčku
            udělat zaměstání.
          </motion.p>
        </div>
        <div className="place-self-center rounded-full border-solid border-2 border-fuchsia-400 p-1  duration-500 shadow-2xl shadow-fuchsia-300/30 hover:shadow-fuchsia-300/40 hidden xl:block">
          <a
            className="text-gray-400 text-8xl hover:text-fuchsia-200 duration-500 ease-in-out "
            href="https://github.com/Nimixx"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center items-center gap-4 place-self-center"
        >
          <span className="mt-5 text-4xl py-3 px-2 rounded-sm bg-red-400 border-solid border-2 border-red-200 p-2  duration-500 ease-in-out shadow-xl shadow-red-300/30 ">
            💽
          </span>
          <Link
            to={`/projects`}
            className="mt-5 text-lime-200 font-bold text-lg md:text-xl uppercase rounded-sm border-solid border-2 border-sky-400 p-2  duration-500 ease-in-out shadow-2xl hover:shadow-sky-300/50 hover:rounded-lg "
          >
            Moje projekty
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-fuchsia-400 text-6xl font-bold hidden xl:block">
            Projekty jsou to nejvíc co mohu ukázat <span>🪐</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
