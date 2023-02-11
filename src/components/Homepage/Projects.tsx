import React from 'react';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className='section__wrapper'>
      <div className='w-2/3 m-auto grid-2 place-items-center gap-10'>
        <div className='section__text--wrapper'>
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            id='aboutTitle'
            className='uppercase text-6xl font-bold lime-green'
          >
            Co bude dál ?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className='text-rose-400 text-2xl'
          >
            Stále se budu snažit zlepšovat v tom co mě baví 🙏
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 text-xl'
          >
            Věřím že v budoucnu budu moct pracovat jako Front-end developer a
            tvorbou stránek se budu živit. Mým cílem je tak z mého koníčku
            udělat zaměstání.
          </motion.p>
        </div>
        <div className='place-self-center rounded-full border-solid border-2 border-fuchsia-400 p-1 shadow-xl hover:shadow-pink-800/60  duration-500 hidden xl:block group'>
          <a
            className='text-gray-200 text-8xl group-hover:text-pink-400 duration-500 ease-in-out'
            href='https://github.com/Nimixx'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 60 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center'
        >
          <Link to={`/projects`} className='project__btn--second'>
            Moje projekty
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center'
        >
          <p className='text-fuchsia-400 text-4xl font-bold hidden xl:block '>
            Projekty řeknou mnohem více <span>💾</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
