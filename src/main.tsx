import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Projectpage from './pages/Projectpage';
import Contactpage from './pages/Contactpage';
import Underlinepage from './pages/Underlinepage';
import Nimixxpage from './pages/Nimixxpage';
import WadePage from './pages/Wadepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/projects',
        element: <Projectpage />,
      },
      {
        path: '/projects/underline',
        element: <Underlinepage />,
      },
      {
        path: '/projects/nimixx',
        element: <Nimixxpage />,
      },
      {
        path: '/projects/wade',
        element: <WadePage />,
      },
      {
        path: '/contacts',
        element: <Contactpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
