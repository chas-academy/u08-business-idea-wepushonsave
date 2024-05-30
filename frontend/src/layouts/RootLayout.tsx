// src/layouts/RootLayout.tsx
/* eslint-disable react/react-in-jsx-scope */

import {NavLink, Outlet} from 'react-router-dom';
import {useState} from 'react';
import App from '../App';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import SearchForm from '../components/search/SearchForm';
import welcomeMobile from '../assets/welcome.png';

const RootLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isHomePage = window.location.pathname === '/';

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <nav className="bg-gray-500">
        <NavLink to={'cards'}>Cards</NavLink> |{' '}
        <NavLink to={'community'}>Community</NavLink> |{' '}
        <NavLink to={'gamerules'}>Game Rules</NavLink> |{' '}
        <NavLink to={'cardrules'}>Card Rules</NavLink> |{' '}
        <NavLink to={'deck-builder'}>Deck Builder</NavLink> |{' '}
      </nav>
      <div>
        {isHomePage ? (
          <>
            <div className="bg-mobile-search bg-cover w-full py-16 md:bg-desktop-search md:bg-fill md:p-5 md:bg-top md:mt-14 md:h-40">
              <SearchForm />
            </div>
            <div className="welcome-img flex-grow flex items-center justify-center mt-4 p-2">
              <img
                src={welcomeMobile}
                alt="Welcome"
                className="max-w-full max-h-[60vh] mx-10"
              />
            </div>
          </>
        ) : (
          <SearchForm />
        )}
      </div>
      <div>
        <App />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
