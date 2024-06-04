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
import CardDisplay from './components/listOrGrid/CardsDisplay.tsx';

// layouts
import RootLayout from './layouts/RootLayout.tsx';

// utils
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';
import {cardSetLoader} from './utils/cardSetLoader.tsx';

//pages
import ProfilePage from './pages/profile/ProfilePage.tsx';
import ProfileDashboard from './pages/profile/ProfileDashboard.tsx';
import Login from './pages/login/Login.tsx';
import Register from './pages/login/Register.tsx';

// context
import {SearchProvider} from './components/search/SearchContext.tsx';
import DeckBuilder from './pages/deckbuilder/DeckBuilder.tsx';
import {singleCardLoader} from './utils/singleCardLoader.tsx';

//API Components
import AllDecksComponent from './mtgtombapi/decks/allDecks.tsx';
import TopCommanders from './mtgtombapi/top-commanders/allTopCommanders.tsx';
import CommanderRecSearch from './mtgtombapi/algoritm/comRec.tsx';
import CommanderDetails from './mtgtombapi/top-commanders/commanderDetails.tsx';
import AllThemes from './mtgtombapi/theme/allThemes.tsx';
import AuthenticatedRoute from './routes/authentificatedRoute.tsx';
import Navigation2 from './pages/login/UserNav.tsx';
import MyDecks from './pages/deckbuilder/MyDecks.tsx';

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

      <Route path="algoritm" element={<CommanderRecSearch />} />
      <Route path="alldecks" element={<AllDecksComponent />} />
      <Route path="topcommander" element={<TopCommanders />} />
      <Route path="/commander/:name" element={<CommanderDetails />} />
      <Route path="allthemes" element={<AllThemes />} />
      <Route path="usernav" element={<Navigation2 />} />

      <Route
        path="cards/:set"
        element={<CardsArray />}
        loader={({params}) => {
          return cardSetLoader({params});
        }}
      />
      <Route path="community" element={<Threads />} />
      <Route path="/profile" element={<AuthenticatedRoute />}>
        <Route path="" element={<ProfilePage />} />
      </Route>
      <Route path="profile-dashboard" element={<ProfileDashboard />} />
      <Route
        path="deck-builder"
        element={<DeckBuilder />}
        loader={singleCardLoader}
      />
      <Route path="my-decks" element={<MyDecks />} />
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
