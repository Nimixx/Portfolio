import React from 'react';

import { BsFillArrowUpSquareFill } from 'react-icons/Bs';

interface btnProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BtnUp(props: btnProps) {
  return (
    <button
      onClick={props.click}
      className='text-rose-300 text-4xl hidden xl:flex hover:text-rose-400 duration-500 outline outline-offset-4 outline-2 outline-rose-400 rounded-md'
    >
      <BsFillArrowUpSquareFill />
    </button>
  );
}
