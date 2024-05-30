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
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <nav className="bg-gray-500">
        <NavLink to={'/cards'}>Cards</NavLink> |{' '}
        <NavLink to={'/community'}>Community</NavLink> |{' '}
        <NavLink to={'/gamerules'}>Game Rules</NavLink> |{' '}
        <NavLink to={'/cardrules'}>Card Rules</NavLink> |{' '}
        <NavLink to={'/algoritm'}>Algoritm</NavLink> |{' '}
        <NavLink to={'/alldecks'}>All Decks</NavLink> |{' '}
        <NavLink to={'/topcommander'}>Top Commanders</NavLink>
      </nav>
      <div>
        {isHomePage ? (
          <>
            <div className="bg-mobile-search bg-cover w-full py-16 md:bg-desktop-search md:bg-fill md:p-5 md:bg-top md:mt-14 md:h-40">
              <SearchForm />
            </div>
            <ArtCard></ArtCard>
          </>
        ) : null}
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
