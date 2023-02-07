import React from 'react';

import AvatarImg from '../../assets/avatar.webp';

export default function Avatar() {
  return (
    <>
      <img
        className="w-20 p-1 rounded-full border-2-solid-pink-400 shadow-2xl hover:shadow-pink-300 hover:bg-pink-300/10 duration500"
        src={AvatarImg}
        alt=""
      />
    </>
  );
}
