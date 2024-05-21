import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
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
import {singleCardLoader} from './utils/singleCardLoader.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="card" element={<CardLayout />} loader={singleCardLoader}>
        <Route
          path="test"
          element={<CardTestLegalities />}
          loader={singleCardLoader}
        />

        <Route path="info" element={<CardInfo />} loader={singleCardLoader} />

        <Route
          path="market"
          element={<CardMarket />}
          loader={singleCardLoader}
        />

        <Route
          path="legalities"
          element={<CardLegalities />}
          loader={singleCardLoader}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
