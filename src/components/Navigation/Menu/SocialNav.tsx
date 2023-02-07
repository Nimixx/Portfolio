import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RxNotionLogo } from 'react-icons/Rx';
import { SiFrontendmentor } from 'react-icons/Si';

export default function SocialNav() {
  return (
    <>
      <ul className="social__menu hidden lg:flex">
        <li className="hover__link--social">
          <a
            className="hover__link"
            href="https://github.com/Nimixx"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="hover__link--social">
          <a
            className="hover__link"
            href="https://www.linkedin.com/in/tade%C3%A1%C5%A1-thelen-540728250/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="hover__link--social">
          <a
            className="hover__link"
            href="https://www.frontendmentor.io/profile/Nimixx"
            target="_blank"
            rel="noreferrer"
          >
            <SiFrontendmentor />
          </a>
        </li>
        <li className="hover__link--social">
          <a
            className="hover__link"
            href="https://nimixx.notion.site/68f33040d6404a268054002895433be6?v=72dabceccf5c44b8818ddd35b3de3b99"
            target="_blank"
            rel="noreferrer"
          >
            <RxNotionLogo />
          </a>
        </li>
      </ul>
    </>
  );
}
