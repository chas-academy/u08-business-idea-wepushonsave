import {NavLink, Outlet, useLocation} from 'react-router-dom';
/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import SearchForm from '../components/search/SearchForm';
import {SearchProvider} from '../components/search/SearchContext';
import SearchResults from '../components/search/SearchResults';
import ArtCard from '../pages/home/RandomArtCard';
import CardGallery from '../pages/home/CardGallery';

import Footer from '../components/footer/footer';

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
                <header className="flex flex-col items-center text-center py-4">
                  <h1 className="text-[10vh] font-bold text-white/80">
                    MTG-Tomb
                  </h1>
                  <p className="text-white/60 mt-2">
                    Welcome to MTG-Tomb! <br /> This is your hub for building
                    decks, searching cards, sorting your collection online,{' '}
                    <br /> and getting inspired by other Magic: The Gathering
                    players.
                  </p>
                </header>
                <nav className="flex p-4 rounded-lg mb-4 justify-around items-center">
                  <NavLink
                    to={'/alldecks'}
                    className={
                      'flex justify-center w-[30vw] bg-btn-gradient px-4 py-2 rounded-md'
                    }>
                    All Decks
                  </NavLink>{' '}
                  <NavLink
                    to={'/topcommander'}
                    className={
                      'flex justify-center w-[30vw] bg-btn-gradient px-4 py-2 rounded-md'
                    }>
                    Top Commanders
                  </NavLink>{' '}
                  <NavLink
                    to={'/allthemes'}
                    className={
                      'flex justify-center w-[30vw] bg-btn-gradient px-4 py-2 rounded-md'
                    }>
                    Themes
                  </NavLink>{' '}
                </nav>
                <SearchResults />
                <ArtCard />
                <CardGallery />
              </SearchProvider>
            </>
          ) : null}
        </div>

        <main className="md:pt-24">
          <div className="container mx-auto p-4 flex flex-col items-center">
            <nav className="bg-pink-500 p-4 rounded-lg mb-4">
              {/* <NavLink to={'/algoritm'}>Algorithm</NavLink> |{' '}
              <NavLink to={'/alldecks'}>All Decks</NavLink> |{' '}
              <NavLink to={'/topcommander'}>Top Commanders</NavLink> |{' '}
              <NavLink to={'/allthemes'}>Themes</NavLink> |{' '}
              <NavLink to={'/usernav'}>User Nav</NavLink> |{' '} */}
              <NavLink to={'/my-decks'}>My Decks</NavLink>
            </nav>
            <SearchProvider>
              <Outlet />
            </SearchProvider>
          </div>
        </main>
      </div>
      <footer className="absolut bottom-0 pb-16 md:p-0">
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
