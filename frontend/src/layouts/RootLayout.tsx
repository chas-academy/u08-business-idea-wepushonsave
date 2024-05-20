import {Outlet} from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <nav>{/* Navbar */}</nav>
      <div>{/* Searchbar */}</div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
