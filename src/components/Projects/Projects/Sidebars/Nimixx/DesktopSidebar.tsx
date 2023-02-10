import React from 'react';
import { motion } from 'framer-motion';
import UnderlineImg from '../../../../../assets/Nimixx_Thumb.webp';

import { SiVite } from 'react-icons/Si';
import { SiTailwindcss } from 'react-icons/Si';
import { SiTypescript } from 'react-icons/Si';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiAffinity } from 'react-icons/Si';
import { SiNotion } from 'react-icons/Si';

export default function DesktopSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -60 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3 }}
      className='w-full xl:w-72 xl:pb-5 rounded-xl hidden xl:flex items-center gap-8 flex-col outline outline-2 outline-pink-400 bg-pink-400/10 backdrop-blur-sm shadow-xl shadow-pink-400/50 sticky top-10'
    >
      <img src={UnderlineImg} alt='' className='rounded-tl-xl rounded-tr-xl' />
      <div className='grid grid-rows-7 grid-cols-1 gap-8'>
        <div className='flex justify-center items-center gap-3'>
          <p className='text-gray-300 font-medium'>2022 - 2023</p>
          <div className='h-3 w-3 rounded-full bg-orange-400 animate-pulse'></div>
        </div>
        <h2 className='text-sky-400 text-2xl font-semibold place-self-center'>
          Technologie
        </h2>
        <div className='grid grid-rows-2 grid-cols-3 gap-3'>
          <i className='text-4xl p-4 text-sky-400 rounded-lg shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 hover:shadow-xl hover:-translate-y-1 duration-500 place-self-center'>
            <FaReact />
          </i>
          <i className='text-4xl p-4 text-blue-500 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:shadow-xl hover:-translate-y-1 duration-500 place-self-center'>
            <SiTypescript />
          </i>
          <i className='text-4xl p-4 text-sky-400 rounded-lg shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 hover:shadow-xl hover:-translate-y-1 duration-500'>
            <SiTailwindcss />
          </i>
          <i className='text-4xl p-4 text-purple-400 rounded-lg shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 hover:shadow-xl hover:-translate-y-1 duration-500'>
            <SiVite />
          </i>
          <i className='text-4xl p-4 text-yellow-400 rounded-lg shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:shadow-xl hover:-translate-y-1 duration-500'>
            <SiAffinity />
          </i>
        </div>
        <h2 className='text-yellow-200 text-2xl font-semibold place-self-center'>
          Knihovny
        </h2>
        <ul className='text-gray-300 text-center font-medium flex gap-1 flex-col'>
          <li>
            <a
              href='https://www.framer.com/motion/'
              target='_blank'
              className='hover:text-fuchsia-400 duration-500 ease-in-out'
              rel='noreferrer'
            >
              Framer Motion
            </a>
          </li>
          <li>
            <a
              href='https://react-icons.github.io/react-icons'
              target='_blank'
              className='hover:text-fuchsia-400 duration-500 ease-in-out'
              rel='noreferrer'
            >
              React Icons
            </a>
          </li>
          <li>
            <a
              href='https://react-icons.github.io/react-icons'
              target='_blank'
              className='hover:text-fuchsia-400 duration-500 ease-in-out'
              rel='noreferrer'
            >
              React Router
            </a>
          </li>
        </ul>
        <h2 className='text-purple-300 text-2xl font-semibold place-self-center'>
          Odkazy
        </h2>
        <div className='flex justify-center items-center gap-3'>
          <a
            href='https://www.youtube.com/@underlinevideoproduction7850'
            target='_blank'
            className='text-pink-400 text-4xl hover:text-pink-500 duration-500 ease-in-out'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            className='text-sky-400 text-4xl hover:text-sky-300 duration-500 ease-in-out'
            href='https://www.facebook.com/UnderlineVideoprod/'
            target='_blank'
            rel='noreferrer'
          >
            <SiNotion />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
