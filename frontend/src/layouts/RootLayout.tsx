import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import App from '../App';

const RootLayout = () => {
  return (
    <>
      <nav>{/* Navbar */}</nav>
      <div>{/* Searchbar */}</div>
      <div>
        <App />
      </div>
      <nav>
        <NavLink to={'card'}>Card</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
