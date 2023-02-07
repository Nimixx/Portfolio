import React from 'react';
import ReactImg from '../../../../../assets/react.svg';
import JsImg from '../../../../../assets/javascript.svg';
import TailImg from '../../../../../assets/tailwindcss.svg';
import ViteImg from '../../../../../assets/vite.svg';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default function MobileSidebar() {
  return (
    <div className="w-4/5 block xl:hidden">
      <div className="max-w-80 flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="flex justify-start items-center gap-2 sm:gap-5">
          <img
            src={ReactImg}
            alt=""
            className="w-12 sm:w-16 px-1.5 py-2.5 rounded-lg shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={JsImg}
            alt=""
            className="w-12 sm:w-16 px-1.5 py-2 rounded-lg shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={TailImg}
            alt=""
            className="w-16 px-1.5 tail rounded-lg shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
          <img
            src={ViteImg}
            alt=""
            className="w-12 sm:w-16 px-1.5 py-2 rounded-lg shadow-lg shadow-purple-400/20 hover:shadow-purple-400/40 hover:shadow-xl hover:-translate-y-1 duration-500"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="px-3 py-0.5 text-white font-bold bg-gray-800 rounded-lg shadow-xl shadow-black hidden sm:block">
            2023
          </p>

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
            className="px-3 py-0.5 text-black-900 font-bold bg-yellow-400 rounded-lg shadow-xl shadow-black hover:bg-orange-400 duration-500 ease-in-out"
            href="/"
          >
            Live web
          </a>
        </div>
      </div>
    </div>
  );
}
