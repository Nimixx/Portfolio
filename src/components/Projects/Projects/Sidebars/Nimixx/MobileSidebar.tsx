import React from 'react';

import { SiVite } from 'react-icons/Si';
import { SiTailwindcss } from 'react-icons/Si';
import { SiTypescript } from 'react-icons/Si';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/Si';

export default function MobileSidebar() {
  return (
    <div className='w-4/5 block xl:hidden'>
      <div className='max-w-80 flex flex-col lg:flex-row justify-between items-center gap-5'>
        <div className='flex justify-start items-center gap-2 sm:gap-5'>
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
        </div>
        <div className='flex justify-center items-center gap-4'>
          <p className='px-3 py-0.5 text-white font-bold bg-gray-800 rounded-lg shadow-xl shadow-black hidden sm:block'>
            2023
          </p>

          <a
            href='https://www.youtube.com/@underlinevideoproduction7850'
            target='_blank'
            className='text-red-400 text-4xl hover:text-red-300 duration-500 ease-in-out'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
          <a
            className='text-sky-400 text-2xl hover:text-sky-300 duration-500 ease-in-out'
            href='https://www.facebook.com/UnderlineVideoprod/'
            target='_blank'
            rel='noreferrer'
          >
            <SiNotion />
          </a>
        </div>
      </div>
    </div>
  );
}
