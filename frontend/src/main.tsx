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

// layouts
import RootLayout from './layouts/RootLayout.tsx';
import CardLayout from './layouts/CardLayout.tsx';

// utils
import {singleCardLoader} from './utils/singleCardLoader.tsx';
import {cardsArrayLoader} from './utils/cardsArrayLoader.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="cards" element={<CardsArray />} loader={cardsArrayLoader} />
      <Route
        path="card/:id"
        element={<CardLayout />}
        loader={({params}) => {
          return singleCardLoader(params);
        }}>
        <Route
          path="info"
          element={<CardInfo />}
          loader={({params}) => {
            return singleCardLoader(params);
          }}
        />

        <Route
          path="market"
          element={<CardMarket />}
          loader={({params}) => {
            return singleCardLoader(params);
          }}
        />
        <Route
          path="legalities"
          element={<CardLegalities />}
          loader={({params}) => {
            return singleCardLoader(params);
          }}
        />
        RR
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
