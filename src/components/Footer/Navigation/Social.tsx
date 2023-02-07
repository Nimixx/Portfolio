import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Social() {
  return (
    <ul className="text-gray-500 text-2xl flex__center gap-4">
      <li className="primary__link">
        <a
          href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-thelen-540728250/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="primary__link">
        <a
          href="https://www.facebook.com/tadeas.thelen/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li className="primary__link">
        <a href="https://github.com/Nimixx" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </li>
    </ul>
  );
}
