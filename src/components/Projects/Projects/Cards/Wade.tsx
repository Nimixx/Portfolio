import React from 'react';

import { Link } from 'react-router-dom';
import NimixxImg from '../../../../assets/Wade_Thumb.webp';

export default function Wade() {
  return (
    <Link
      to={`/projects/wade`}
      className="min-h-96 project__card hover:shadow-purple-700 hover:outline-purple-400 bg-purple-800/30 backdrop-blur-sm"
    >
      <div className="w-80 h-44">
        <img
          src={NimixxImg}
          alt="Project thumbnail img"
          className="rounded-tl-xl rounded-tr-xl "
        />
      </div>
      <div className="w-80 mt-10 rounded-br-xl rounded-bl-xl flex flex-col justify-center items-center gap-5 p-5">
        <h2 className="text-sky-400 text-xl font-bold">Wade - Custom design</h2>
        <h3 className="text-yellow-400 text-lg -mt-5">SPA - Website</h3>
        <p className="text-gray-200 text-left">
          Designová stránka pro reprezentaci firmy. Jedná se moderní responzivní
          webovou aplikaci plnou animovaných prvků. Vzhled stránky je přímo od
          studia Wade. Děkuji studiu za příležitost realizovat tento nápaditý a
          moderní web.
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 mb-5 gap-3">
        <div className="px-3 py-0.5 rounded-md bg-gray-700 text-white font-medium relative ">
          <div className="h-3 w-3 rounded-full bg-orange-400 absolute -top-1 -right-1 animate-pulse"></div>
          <p>2023</p>
        </div>
        <p className="card__btn--text bg-blue-400">React</p>
        <p className="card__btn--text bg-pink-400">Sass</p>
        <p className="card__btn--text bg-yellow-500">Vite</p>
      </div>
    </Link>
  );
}
