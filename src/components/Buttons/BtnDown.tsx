import React from 'react';

import { BsArrowDownSquareFill } from 'react-icons/Bs';

interface btnProps {
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BtnDown(props: btnProps) {
  return (
    <button
      onClick={props.click}
      className='text-sky-300 text-4xl hidden xl:flex hover:text-sky-400 duration-500 outline outline-offset-4 outline-2 outline-sky-400 rounded-md'
    >
      <BsArrowDownSquareFill />
    </button>
  );
}
