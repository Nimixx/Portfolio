import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import './index.css';

export default function App() {
  return (
    <div className="bg-background bg-no-repeat bg-cover bg-center bg-fixed">
      <ScrollRestoration />
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
