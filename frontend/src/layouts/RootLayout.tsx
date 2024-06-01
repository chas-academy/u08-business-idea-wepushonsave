import { NavLink, Outlet, useLocation } from 'react-router-dom';
/* eslint-disable react/react-in-jsx-scope */

import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import SearchForm from '../components/search/SearchForm';
import { SearchProvider } from '../components/search/SearchContext';
import SearchResults from '../components/search/SearchResults';
import ArtCard from '../pages/home/RandomArtCard';
import CardGallery from '../pages/home/CardGallery';

const RootLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current route
  const isHomePage = location.pathname === '/';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="relative min-h-screen pb-16 md:pb-0">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div>
          {isHomePage ? (
            <>
              <SearchProvider>
                <div className="bg-mobile-search bg-cover w-full py-16 md:bg-desktop-search md:bg-fill md:p-5 md:bg-top md:mt-14 md:h-40">
                  <SearchForm />
                </div>
                <SearchResults />
                <ArtCard />
                <CardGallery />

              </SearchProvider>
            </>
          ) : null}
        </div>

        <main className="md:pt-24">
          <div className="container mx-auto p-4">
            <nav className="bg-gray-500 p-4 rounded-lg mb-4">
              <NavLink to={'/algoritm'}>Algorithm</NavLink> |{' '}
              <NavLink to={'/alldecks'}>All Decks</NavLink> |{' '}
              <NavLink to={'/topcommander'}>Top Commanders</NavLink> |{' '}
            </nav>
            <SearchProvider>
              <Outlet />
            </SearchProvider>
          </div>
        </main>
      </div>
    </>
  );
};

export default RootLayout;
