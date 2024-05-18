import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from 'react';

// Components
import CardInfo from './components/card/CardInfo.tsx';
import CardLegalities from './components/card/CardLegalities.tsx';
import CardMarket from './components/card/CardMarket.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App></App>
        <Link to={'info'}>Info</Link> |{' '}
        <Link to={'legalities'}>Legalities</Link> |{' '}
        <Link to={'market'}>Market</Link>
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        path: 'info',
        element: <CardInfo></CardInfo>,
      },
      {
        path: 'legalities',
        element: <CardLegalities></CardLegalities>,
      },
      {
        path: 'market',
        element: <CardMarket></CardMarket>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
