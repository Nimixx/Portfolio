import React from 'react';

import { Link } from 'react-router-dom';

export default function Pages() {
  return (
    <ul className="text-gray-300 font-medium flex__center gap-4">
      <li className="secondary__link">
        <Link to={`/`}>Domů</Link>
      </li>
      <li>/</li>
      <li className="secondary__link">
        <Link to={`/projects`}>Projekty</Link>
      </li>
      <li>/</li>
      <li className="secondary__link">
        <Link to={`/contacts`}>Kontakty</Link>
      </li>
    </ul>
  );
}
