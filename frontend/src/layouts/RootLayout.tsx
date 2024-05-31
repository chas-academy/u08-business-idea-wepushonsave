import {NavLink, Outlet, useLocation} from 'react-router-dom';
/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import SearchForm from '../components/search/SearchForm';

import ArtCard from '../pages/home/RandomArtCard';

const RootLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen pb-16 md:pb-0">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="md:pt-24">
        {isHomePage && (
          <>
            <div className="bg-mobile-search bg-cover w-full py-16 md:bg-desktop-search md:bg-fill md:p-5 md:bg-top md:mt-14 md:h-40">
              <SearchForm />
            </div>
            <ArtCard />
          </>
        )}
        <div className="container mx-auto p-4">
          <nav className="bg-gray-500 p-4 rounded-lg mb-4">
            <NavLink to={'cards'}>Cards</NavLink> |{' '}
            <NavLink to={'community'}>Community</NavLink> |{' '}
            <NavLink to={'gamerules'}>Game Rules</NavLink> |{' '}
            <NavLink to={'cardrules'}>Card Rules</NavLink> |{' '}
            <NavLink to={'deck-builder'}>Deck Builder</NavLink> |{' '}
            <NavLink to={'/algoritm'}>Algorithm</NavLink> |{' '}
            <NavLink to={'/alldecks'}>All Decks</NavLink> |{' '}
            <NavLink to={'/topcommander'}>Top Commanders</NavLink> |{' '}
            <NavLink to={'/onetopcommander'}>One Top Commanders</NavLink>
          </nav>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
