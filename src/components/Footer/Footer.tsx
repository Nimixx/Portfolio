import React from 'react';
import Pages from './Navigation/Pages';
import Social from './Navigation/Social';

export default function Footer() {
  return (
    <div className="footer__wrapper">
      <Social />
      <div className="w-36 h-2 border-b-4 border-gray-700"></div>
      <Pages />

      <p className="text-sm text-gray-600 font-medium">
        2023 © Všechna práva vyhrazena Tadeáš Thelen
      </p>
    </div>
  );
}
