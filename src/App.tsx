import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import './index.css';

export default function App() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-black-900 via-black-600 to-black-900'>
      <ScrollRestoration />
      <Navigation />
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

//bg-background bg-no-repeat bg-cover bg-center bg-fixed relative
