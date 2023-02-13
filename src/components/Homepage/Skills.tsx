import React from 'react';

import { motion } from 'framer-motion';
import BtnUp from '../Buttons/BtnUp';
import BtnDown from '../Buttons/BtnDown';

export default function Skills() {
  const handleClickUp = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const handleClickDown = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div id='skills' className='section__wrapper'>
      <div className='w-2/3 m-auto grid-2 place-items-center gap-10'>
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center hidden xl:block'
        >
          <span className='text-orange-400 text-xl font-normal'>HTML</span>{' '}
          <span className='text-sky-300 text-2xl font-medium'>CSS</span>{' '}
          <span className='text-pink-400 text-4xl font-semibold'>Sass</span>{' '}
          <span className='text-blue-400 text-6xl font-bold'>TypeScript</span>{' '}
          <span className='text-yellow-400 text-2xl font-semibold'>
            JavaScript
          </span>
        </motion.div>
        <motion.a
          href=''
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='text-pink-400 tertiary__heading font-bold underline underline-offset-8 decoration-purple-500 duration-500 hover:decoration-amber-400 hidden xl:block'
        >
          Koukni na můj kompletní Tech Stack 👊
        </motion.a>
        <div className='section__text--wrapper'>
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            id='aboutTitle'
            className='section__heading purple-pink'
          >
            Co umím ?
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className='text-red-400 text-2xl'
          >
            Pracovat s tím co už jsem se naučil 💡
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 text-xl'
          >
            Jinak se zaměřuji na tvorbu webových stránek a aplikací. Nejraději
            pracuju v reactu. Vždy se ale snažím použité techologie na projektu
            přizpůsobit konkrétnímu problému.
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='text-yellow-200 secondary__heading block xl:hidden'
        ></motion.p>
        <motion.div
          initial={{ opacity: 0, translateX: -60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center'
        >
          <span className='text-green-400 text-xl font-light'>Vue</span>{' '}
          <span className='text-yellow-300 text-2xl font-medium'>API</span>{' '}
          <span className='text-sky-400 text-4xl font-semibold'>Tailwind</span>{' '}
          <span className='text-blue-500 text-6xl font-bold'>React</span>{' '}
          <span className='text-purple-300 text-4xl font-semibold'>Redux</span>{' '}
        </motion.div>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <BtnUp click={handleClickUp} />
        <BtnDown click={handleClickDown} />
      </div>
    </div>
  );
}
