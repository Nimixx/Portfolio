import React from 'react';

import { motion } from 'framer-motion';

import ReactImg from '../../assets/react.svg';

export default function Title() {
  const handleClick = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className='title__section--wrapper mt-60'>
      <motion.h1
        initial={{ opacity: 0, translateX: -60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className='primary__heading purple-pink'
      >
        Nimixx
        <span className='secondary__heading orange-yellow'>Tadeáš</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, translateX: 60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className='text-yellow-400 secondary__heading'
      >
        <span className='text-white'>Junior</span> Frontend{' '}
        <span className='text-white'>Developer</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='title__wrapper hidden md:flex'
      >
        <h3 className='text-sky-400 tertiary__heading'>
          Baví mě <span className='text-green-400'>moderní</span>,{' '}
          <span className='underline underline-offset-4 decoration-sky-200'>
            rychlé aplikace{' '}
          </span>
          a rád pracuju v Reactu
        </h3>
        <motion.img
          animate={{ rotate: 180 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
          }}
          className='w-10'
          src={ReactImg}
          alt=''
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='title__wrapper'
      >
        <i className='mt-5 text-4xl animate-bounce'>🤜</i>
        <button onClick={handleClick} className='story__btn'>
          Můj příběh
        </button>
      </motion.div>
    </div>
  );
}
