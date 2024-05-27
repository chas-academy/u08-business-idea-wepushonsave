/* eslint-disable react/react-in-jsx-scope */

import { NavLink, Outlet } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import SearchForm from '../components/search/SearchForm';

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
      <div className="bg-mobile-search bg-cover bg-center p-5 md:bg-desktop-search">

        <SearchForm />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
