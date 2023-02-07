import React from 'react';
import QRCodImg from '../../../assets/QRCode.webp';

export default function QrCode() {
  return (
    <a
      className="min-h-96 project__card hover:shadow-lime-200 hover:outline-lime-200"
      href="https://nimixx.github.io/QR-Code/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-80 h-44">
        <img
          src={QRCodImg}
          alt="Project thumbnail img"
          className="rounded-tl-xl rounded-tr-xl "
        />
      </div>
      <div className="w-80 mt-10 rounded-br-xl rounded-bl-xl flex flex-col justify-center items-center gap-5 p-5">
        <h2 className="text-sky-400 text-xl font-bold">QR-Code - challenge</h2>
        <h3 className="text-yellow-400 text-lg -mt-5">Frontend Mentor</h3>
        <p className="text-gray-200 text-left">
          Jednoduchý QR-Code komponent vytvořný v rámci platformy Frontend
          Mentor.
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 mb-5 gap-3">
        <div className="px-3 py-0.5 rounded-md bg-gray-700 text-white font-medium relative ">
          <div className="h-3 w-3 rounded-full bg-green-400 absolute -top-1 -right-1"></div>
          <p>2022</p>
        </div>

        <p className="card__btn--text bg-yellow-400">Html</p>
        <p className="card__btn--text bg-pink-400">Sass</p>
      </div>
    </a>
  );
}
