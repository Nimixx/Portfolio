import React from 'react';

import { Link } from 'react-router-dom';
import NimixxImg from '../../../../assets/Nimixx_Thumb.webp';

export default function Nimixx() {
  return (
    <Link
      to={`/projects/nimixx`}
      className="min-h-96 project__card hover:shadow-pink-700 hover:outline-pink-400 bg-pink-800/30 backdrop-blur-sm"
    >
      <div className="w-80 h-44">
        <img
          src={NimixxImg}
          alt="Project thumbnail img"
          className="rounded-tl-xl rounded-tr-xl "
        />
      </div>
      <div className="w-80 mt-10 rounded-br-xl rounded-bl-xl flex flex-col justify-center items-center gap-5 p-5">
        <h2 className="text-sky-400 text-xl font-bold">Nimixx - Osobní web</h2>
        <h3 className="text-yellow-400 text-lg -mt-5">SPA - Website</h3>
        <p className="text-gray-200 text-left">
          Moje malá skromná aplikace pomocí které vyprávím o tom kdo jsem, ale
          také ukazuji co všechno už jsem se naučil.
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 mb-5 gap-3">
        <div className="px-3 py-0.5 rounded-md bg-gray-700 text-white font-medium relative ">
          <div className="h-3 w-3 rounded-full bg-orange-400 absolute -top-1 -right-1 animate-pulse"></div>
          <p>2023</p>
        </div>
        <p className="card__btn--text bg-blue-400">React</p>
        <p className="card__btn--text bg-sky-400">Tailwind</p>
        <p className="card__btn--text bg-yellow-500">Vite</p>
      </div>
    </Link>
  );
}
