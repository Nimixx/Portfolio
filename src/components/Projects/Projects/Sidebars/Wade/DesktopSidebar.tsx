import React from 'react';
import { motion } from 'framer-motion';
import UnderlineImg from '../../../../../assets/Wade_Thumb.webp';
import ReactImg from '../../../../../assets/react.svg';
import JsImg from '../../../../../assets/typescript.svg';
import TailImg from '../../../../../assets/tailwindcss.svg';
import ViteImg from '../../../../../assets/vite.svg';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default function DesktopSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -60 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full xl:w-72 xl:pb-5 rounded-xl hidden xl:flex items-center gap-8 flex-col outline outline-2 outline-purple-400 bg-purple-400/10 backdrop-blur-sm shadow-xl shadow-purple-400/50"
    >
      <img src={UnderlineImg} alt="" className="rounded-tl-xl rounded-tr-xl" />
      <div className="grid grid-rows-7 grid-cols-1 gap-8">
        <div className="flex justify-center items-center gap-3">
          <p className="text-gray-300 font-medium">2022 - 2023</p>
          <div className="h-3 w-3 rounded-full bg-orange-400 animate-pulse"></div>
        </div>
        <h2 className="text-sky-400 text-2xl font-semibold place-self-center">
          Technologie
        </h2>
        <div className="grid grid-rows-2 grid-cols-3 gap-3">
          <img
            src={ReactImg}
            alt=""
            className="w-16 px-1.5 react rounded-lg shadow-lg shadow-blue-400/20 hover:shadow-blue-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={JsImg}
            alt=""
            className="w-16 px-1.5 py-2 rounded-lg shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={TailImg}
            alt=""
            className="w-16 px-1.5 tail rounded-lg shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={ViteImg}
            alt=""
            className="w-16 px-1.5 py-2 rounded-lg shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
        </div>
        <h2 className="text-yellow-200 text-2xl font-semibold place-self-center">
          Knihovny
        </h2>
        <ul className="text-gray-300 text-center font-medium flex gap-1 flex-col">
          <li>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              className="hover:text-fuchsia-400 duration-500 ease-in-out"
              rel="noreferrer"
            >
              Framer Motion
            </a>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons"
              target="_blank"
              className="hover:text-fuchsia-400 duration-500 ease-in-out"
              rel="noreferrer"
            >
              React Icons
            </a>
          </li>
          <li>
            <a
              href="https://react-icons.github.io/react-icons"
              target="_blank"
              className="hover:text-fuchsia-400 duration-500 ease-in-out"
              rel="noreferrer"
            >
              React Router
            </a>
          </li>
        </ul>
        <h2 className="text-purple-300 text-2xl font-semibold place-self-center">
          Odkazy
        </h2>
        <div className="flex justify-center items-center gap-3">
          <a
            href="https://www.youtube.com/@underlinevideoproduction7850"
            target="_blank"
            className="text-red-400 text-4xl hover:text-red-300 duration-500 ease-in-out"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            className="text-sky-400 text-2xl hover:text-sky-300 duration-500 ease-in-out"
            href="https://www.facebook.com/UnderlineVideoprod/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="px-3 py-0.5 text-black-900 font-bold bg-yellow-400 rounded-lg shadow-xl shadow-black hover:bg-yellow-300 duration-500 ease-in-out"
            href="/"
          >
            Live web
          </a>
        </div>
      </div>
    </motion.div>
  );
}
