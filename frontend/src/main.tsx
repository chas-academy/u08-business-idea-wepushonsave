/* eslint-disable react/react-in-jsx-scope */

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

// pages
import GameRules from './pages/game-docs/Game_rules.tsx';
import CardRules from './pages/game-docs/Card_rules.tsx';
import Threads from './pages/community/Threads.tsx';

// components
import CardInfo from './components/card/CardInfo.tsx';
import CardLegalities from './components/card/CardLegalities.tsx';
import CardMarket from './components/card/CardMarket.tsx';
import CardsArray from './components/card/CardsArray.tsx';

// layouts
import RootLayout from './layouts/RootLayout.tsx';
import CardLayout from './layouts/CardLayout.tsx';

// utils
import {singleCardLoader} from './utils/singleCardLoader.tsx';
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';
import {cardSetLoader} from './utils/cardSetLoader.tsx';
import SearchResults from './components/search/SearchResults.tsx';
import {cardSearchLoader} from './utils/cardSearchLoader.tsx';

// context
import {SearchProvider} from './components/search/SearchContext.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cards" element={<CardsArray />} loader={cardsArrayLoader} />
      <Route
        path="search"
        element={<SearchResults />}
        loader={cardSearchLoader}
      />

      <Route
        path="cards/:set"
        element={<CardsArray />}
        loader={({params}) => {
          return cardSetLoader({params});
        }}
      />
      <Route path="gamerules" element={<GameRules />} />
      <Route path="cardrules" element={<CardRules />} />
      <Route path="community" element={<Threads />} />

      <Route
        path="card/:id"
        element={<CardLayout />}
        loader={({params}) => {
          return singleCardLoader({params});
        }}>
        <Route
          path="info"
          element={<CardInfo />}
          loader={({params}) => {
            return singleCardLoader({params});
          }}
        />
        <Route
          path="market"
          element={<CardMarket />}
          loader={({params}) => {
            return singleCardLoader({params});
          }}
        />
        <Route
          path="legalities"
          element={<CardLegalities />}
          loader={({params}) => {
            return singleCardLoader({params});
          }}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SearchProvider>
    <RouterProvider router={router} />
  </SearchProvider>
);
