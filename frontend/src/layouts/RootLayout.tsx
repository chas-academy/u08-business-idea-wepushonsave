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
      <nav className=" bg-gray-500">
        <NavLink to={'cards'}>Cards</NavLink> |{' '}
        <NavLink to={'docs'}>Docs</NavLink> |{' '}
        <NavLink to={'thread'}>Threads</NavLink> |{' '}
        <NavLink to={'login'}>Login</NavLink> |{' '}
        <NavLink to={'register'}>Register</NavLink> |{' '}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
