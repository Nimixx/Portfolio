import React from 'react';

import AvatarImg from '../../assets/avatar.webp';

export default function Avatar() {
  return (
    <>
      <img
        className="w-20 p-1 rounded-full border-2-solid-green-400 shadow-2xl hover:shadow-green-300/50 duration500"
        src={AvatarImg}
        alt=""
      />
    </>
  );
}
