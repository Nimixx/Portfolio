import React from 'react';

import { Link } from 'react-router-dom';

import AvatarImg from '../../assets/avatar.webp';

export default function Avatar() {
  return (
    <>
      <Link to={`/`}>
        <img
          className='w-20 p-1 rounded-full border-2-solid-pink-400 hover:rotate-180 duration500'
          src={AvatarImg}
          alt=''
        />
      </Link>
    </>
  );
}
