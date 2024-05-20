import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';

// components
import CardInfo from './components/card/CardInfo.tsx';
import CardLegalities from './components/card/CardLegalities.tsx';
import CardMarket from './components/card/CardMarket.tsx';

// layouts
import RootLayout from './layouts/RootLayout.tsx';
import CardLayout from './layouts/CardLayout.tsx';
import CardTestLegalities from './components/card/CardTestLegalities.tsx';

// utils
import CardImage from './components/CardImage.tsx';
import {singleCardLoader} from './utils/singleCardLoader.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="card" element={<CardLayout />}>
        <Route index element={<CardImage />} />
        <Route
          path="test"
          element={<CardTestLegalities />}
          loader={singleCardLoader}
        />
        {/* <Route path="info" element={<CardInfo />} loader={scryfallLoader} />
        <Route path="market" element={<CardMarket />} loader={scryfallLoader} />
        <Route
          path="legalities"
          element={<CardLegalities />}
          loader={scryfallLoader}
        /> */}
      </Route>
    </Route>
  )
);

/* const router = createBrowserRouter([
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
]); */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
