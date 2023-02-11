import React from 'react';

import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import DesktopNav from './Menu/DesktopNav';
import { RxHamburgerMenu } from 'react-icons/Rx';
import SocialNav from './Menu/SocialNav';
import MobileNav from './Menu/MobileNav';

export default function Navigation() {
  const HandleToggle = () => {
    document.getElementById('mobileNav')?.classList.toggle('hidden');
  };
  return (
    <nav id='nav' className='w-full flex items-end flex-col'>
      <div className='nav-wrapper'>
        <Link to={`/`}>
          <Avatar />
        </Link>
        <div className='flex-center gap-16'>
          <DesktopNav />
          <SocialNav />
        </div>
        <button
          onClick={HandleToggle}
          className='text-white text-4xl md:hidden'
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <MobileNav />
    </nav>
  );
}
