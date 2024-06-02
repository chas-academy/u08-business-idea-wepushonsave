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
import CardsArray from './components/card/CardsArray.tsx';
import SearchResults from './components/search/SearchResults.tsx';
import CardDisplay from './components/listOrGrid/CardsDisplay.tsx';

// layouts
import RootLayout from './layouts/RootLayout.tsx';

// utils
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';
import {cardSetLoader} from './utils/cardSetLoader.tsx';
import {cardSearchLoader} from './utils/cardSearchLoader.tsx';

//pages
import ProfilePage from './pages/profile/ProfilePage.tsx';
import ProfileDashboard from './pages/profile/ProfileDashboard.tsx';
import Login from './pages/login/Login.tsx';
import Register from './pages/register/Register.tsx';

// context
import {SearchProvider} from './components/search/SearchContext.tsx';
import DeckBuilder from './pages/deckbuilder/DeckBuilder.tsx';
import {singleCardLoader} from './utils/singleCardLoader.tsx';

//API Components
import SearchComponent from './mtgtombapi/algoritm/comRec.tsx';
import AllDecksComponent from './mtgtombapi/decks/allDecks.tsx';
import TopCommanders from './mtgtombapi/top-commanders/allTopCommanders.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cards" element={<CardsArray />} loader={cardsArrayLoader} />
      <Route path="gamerules" element={<GameRules />} />
      <Route path="cardrules" element={<CardRules />} />
      <Route
        path="cards-display/:listId"
        element={<CardDisplay />}
        loader={cardsArrayLoader}
      />

      <Route path="algoritm" element={<SearchComponent />} />
      <Route path="alldecks" element={<AllDecksComponent />} />
      <Route path="topcommander" element={<TopCommanders />} />

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
      <Route path="community" element={<Threads />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="profile-dashboard" element={<ProfileDashboard />} />
      <Route
        path="deck-builder"
        element={<DeckBuilder />}
        loader={singleCardLoader}
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SearchProvider>
    <RouterProvider router={router} />
  </SearchProvider>
);
