import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import NimixxWeb from '../assets/Nimixx_web.webp';
import DesktopSidebar from '../components/Projects/Projects/Sidebars/Wade/DesktopSidebar';
import MobileSidebar from '../components/Projects/Projects/Sidebars/Wade/MobileSidebar';

export default function WadePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-w-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-fuchsia-200 origin-left z-10"
        style={{ scaleX }}
      />

      <div className="m-auto w-full xl:w-3/5 flex justify-center items-center xl:justify-start xl:items-start flex-col xl:flex-row mt-20 gap-14">
        <DesktopSidebar />
        <MobileSidebar />
        <motion.div
          initial={{ opacity: 0, translateX: 60 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.3 }}
          className="w-4/5 h-4/5 flex justify-start items-start flex-col gap-5"
        >
          <h2 className="sky-blue project__heading">
            Underline Videoproduction
          </h2>
          <h3 className="orange-yellow tertiary__heading">Úvod</h3>
          <p className="text-gray-200 text-lg">
            Při tvorbě stránky pro prezentaci mých projektů a informací o mně
            jsem zvolil jasnou strategii. Udělat stránku co možná nejvíc
            jednoduchou, tak aby vše bylo hned po ruce a nikdo nemusel prohlížet
            web dlouho jen pro to, aby našel nějaké moje projekty anebo kontakt
            na mě. Z toho důvodu stránka neobsahuje prakticky ani žádnou
            navigaci a celý layout je v jednotném designu.
          </p>
          <p className="text-gray-200 text-lg">
            Vše se odehrává na hlavní stránce, kde je možné najít veškeré
            potřebné informace o mně. Místo navigačního menu jsou pouze linky na
            důležité sociální sítě a můj Github.
          </p>
          <img
            src={NimixxWeb}
            alt=""
            className="rounded-xl my-5 outline  outline-2 outline-purple-400/50 shadow-lg shadow-purple-400/50"
          />
          <h3 className="lime-green project__heading">Postup</h3>
          <p className="text-gray-200 text-lg">
            Řešení pro moji webovou stránku bylo jasné už od začátku. Rád
            pracuji v Reactu a rozhodně rád styluju pomocí TailwidCSS. Zároveň
            jsem chtěl udržet kód co možná nejmenší, ale také dobře
            strukturovaný. Na takto jednoduchou stránku se možná zdá použití
            Reactu jako zbytečně složité. ale i tak jsem ho zvolil hlavně z
            důvodu že v době kdy jsem psal tento web jsem s reactem začínal a
            chtěl jsem ho použít jako novou techologii se kterou se učím
            pracovat.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
