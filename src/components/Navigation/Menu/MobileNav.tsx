import React from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const HandleToggle = () => {
    document.getElementById('mobileNav')?.classList.toggle('hidden');
  };

  return (
    <nav id="mobileNav" className="w-full hidden md:hidden">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-5 bg-black-500 flex justify-center items-center shadow-lg shadow-black-700"
      >
        <ul className="flex justify-center items-center flex-col gap-4 text-white text-xl font-semibold">
          <li>
            <Link onClick={HandleToggle} to={`/`}>
              Domů
            </Link>
          </li>
          <li>
            <Link onClick={HandleToggle} to={`/projects`}>
              Projekty
            </Link>
          </li>
          <li>
            <Link onClick={HandleToggle} to={`/contacts`}>
              Kontakty
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
