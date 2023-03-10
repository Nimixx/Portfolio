import React from 'react';
import { motion } from 'framer-motion';
import Avatar from '../assets/avatar.webp';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export default function Contacts() {
  return (
    <div className="w-full min-h-screen flex__center gap-20 -mt-28 ">
      <motion.section
        initial={{ opacity: 0, translateX: -60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-10"
      >
        <img
          className="w-40 rounded-xl border-solid border-2 border-pink-400 p-1 duration-500 shadow-2xl shadow-pink-300/30 hover:shadow-pink-300/60"
          src={Avatar}
          alt="creator avatar"
        />
        <ul className="text-gray-400 text-2xl flex-center gap-4">
          <li className="hover__link--social">
            <a
              className="hover__link"
              href="https://github.com/Nimixx"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li className="hover__link--social">
            <a
              className="hover__link"
              href="https://github.com/Nimixx"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="hover__link--social">
            <a
              className="hover__link"
              href="https://github.com/Nimixx"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </li>
          <li className="hover__link--social">
            <a
              className="hover__link"
              href="https://github.com/Nimixx"
              target="_blank"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, translateX: 60 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-start items-start flex-col gap-4 w-1/4"
      >
        <h2 className="text-white text-4xl font-bold">Tade???? Thelen</h2>
        <p className="text-gray-400 text-lg font-base">
          V p????pad?? ??e hled??te n??koho kdo V??m ud??l?? modern?? prezenta??n?? web tak
          jsem zde pro V??s. Nebojte se mn?? kontaktovat a m????eme se pod??vat na to
          co pro V??s mohu ud??lat. Te????m se na Va??e n??pady. Kontaktovat mn??
          m????ete v??dy pomoc?? emailu, nebo klidn?? jak??koliv soci??ln?? sit??.
        </p>

        <h2 className="text-yellow-300 text-xl font-semibold">
          Email: info@nimixx.cz
        </h2>
        <h2 className="text-purple-300 text-xl font-semibold">
          Discord: Nimixx#7777
        </h2>
      </motion.section>
    </div>
  );
}
