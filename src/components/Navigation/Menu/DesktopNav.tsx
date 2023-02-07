import React from 'react';

import { Link } from 'react-router-dom';

export default function DesktopNav() {
  return (
    <>
      <ul className="link__wrapper">
        <li className="hover__link">
          <Link to={`/`}>Domů</Link>
        </li>
        <li>
          <Link className="project__btn" to={`/projects`}>
            Projekty
          </Link>
        </li>
        <li className="hover__link">
          <Link to={`/contacts`}>Kontakty</Link>
        </li>
      </ul>
    </>
  );
}
