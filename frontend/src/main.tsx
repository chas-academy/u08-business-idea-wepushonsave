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

// utils
import {singleCardLoader} from './utils/singleCardLoader.tsx';
import CardsArray from './components/card/CardsArray.tsx';
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cards" element={<CardsArray />} loader={cardsArrayLoader} />
      <Route path="card" element={<CardLayout />} loader={singleCardLoader}>
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
        RR
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
