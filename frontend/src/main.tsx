import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

// components
import CardInfo from './components/card/CardInfo.tsx';
import CardLegalities from './components/card/CardLegalities.tsx';
import CardMarket from './components/card/CardMarket.tsx';
import CardsArray from './components/card/CardsArray.tsx';
import CardsDisplay from './components/listOrGrid/CardsDisplay.tsx';

// layouts
import RootLayout from './layouts/RootLayout.tsx';
import CardLayout from './layouts/CardLayout.tsx';

// utils
import {singleCardLoader} from './utils/singleCardLoader.tsx';
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';
import GameRules from './pages/game-docs/Game_rules.tsx';
import CardRules from './pages/game-docs/Card_rules.tsx';

//pages
import ProfilePage from './pages/profile/ProfilePage.tsx';
import ProfileDashboard from './pages/profile/ProfileDashboard.tsx';
import MyCollectionCards from './pages/profile/MyCollectionCards.tsx';
import MyCollectionCommons from './pages/profile/MyCollectionCommons.tsx';
import MyCollectionRare from './pages/profile/MyCollectionRare.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cards" element={<CardsArray />} loader={cardsArrayLoader} />
      <Route path="gamerules" element={<GameRules />} />
      <Route path="cardrules" element={<CardRules />} />
      <Route
        path="cards-display"
        element={<CardsDisplay />}
        loader={cardsArrayLoader}
      />
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
        RR
      </Route>
      <Route path="profile" element={<ProfilePage />} />
      <Route path="profile-dashboard" element={<ProfileDashboard />} />
      <Route path="mycollection" element={<MyCollectionCards />} />
      <Route path="mycollection-commmons" element={<MyCollectionCommons />} />
      <Route path="mycollection-rare" element={<MyCollectionRare />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
