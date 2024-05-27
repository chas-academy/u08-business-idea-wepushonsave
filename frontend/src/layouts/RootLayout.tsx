/* eslint-disable react/react-in-jsx-scope */

import {NavLink, Outlet} from 'react-router-dom';
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import HomeSearch from '../components/search/Search';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div>{/* Searchbar */}</div>

      <nav className=" bg-gray-500">
        <NavLink to={'cards'}>Cards</NavLink> |{' '}
        <NavLink to={'community'}>Community</NavLink> |{' '}
        <NavLink to={'gamerules'}>Game Rules</NavLink> |{' '}
        <NavLink to={'cardrules'}>Card Rules</NavLink> |{' '}
      </nav>
      <div>
        <App />
      </div>
      <div>
        <HomeSearch />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
