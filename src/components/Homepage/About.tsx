import React from 'react';

import { motion } from 'framer-motion';
import BtnUp from '../Buttons/BtnUp';
import BtnDown from '../Buttons/BtnDown';

export default function About() {
  const handleClickUp = () => {
    document.getElementById('nav')?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const handleClickDown = () => {
    document.getElementById('skills')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div id='about' className='section__wrapper'>
      <div className='w-2/3 m-auto grid-1 xl:grid-2 place-items-center gap-10 '>
        <div className='section__text--wrapper'>
          <motion.h2
            initial={{ opacity: 0, translateX: -60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            id='aboutTitle'
            className='section__heading orange-yellow'
          >
            Kdo jsem ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, translateX: 60 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            className='text-pink-200 text-2xl'
          >
            Pohodář a člověk co se nebojí nových věcí 🔥
          </motion.p>
          <motion.p
            initial={{ opacity: 0, translateY: 60 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 text-xl'
          >
            Jmenuji se Tadeáš a kromě všech mých koníčků mě především baví
            využívat v práci vše co jsem se dosud naučil. Při psaní webových
            aplikací kladu důraz na jednoduchost a přehlednost. Někdy mám ale
            náladu ukázat i trochu něco více ze mně. To se pak můžete tešit na
            web plný barev a trochu nestadartního rozložení.
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center text-purple-400 font-semibold text-2xl hidden xl:block'
        >
          Baví mě psát moderní webové aplikace 🔮
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateX: -60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='place-self-center text-rose-400 font-semibold text-4xl hidden xl:block'
        >
          Rád se 👨‍🎓 učím nové dovednosti
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className='text-sky-400 secondary__heading'
        >
          Jo a opravdu hodně mám rád kávu <span>☕</span>
        </motion.h2>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <BtnUp click={handleClickUp} />
        <BtnDown click={handleClickDown} />
      </div>
    </div>
  );
}
