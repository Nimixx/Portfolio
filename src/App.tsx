import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './index.css';

export default function App() {
  return (
    <div className="bg-black-600">
      <ScrollRestoration />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
