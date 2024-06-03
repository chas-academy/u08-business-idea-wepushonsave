

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import logo from '../../assets/logo-MTG-TOMB.webp';
import docIcon from '../../assets/doc-icon.webp';
import profileIcon from '../../assets/profile-icon.webp';
import decksIcon from '../../assets/decks-icon.webp';
import communityIcon from '../../assets/community-icon.webp';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {

const navigate = useNavigate();

const [isLoggedIn, setIsLoggedIn] = useState(false);
const checkLogin = async () => {
  try {
      const response = await fetch('https://mtg-tomb.onrender.com/api/user/login', {

        method: "get",
        mode: "cors",
        credentials: "include",
      });
      if (!response.ok && response.status !== 401) {
        // Handle non-200 OK responses (e.g., errors from the server)
        throw new Error('Login failed'); // if check for 404
      }
      if (response.status === 401) {
        setIsLoggedIn(false);
      } else {
        const userData = await response.json(); // Parse the JSON from the response and save it in userData
        setIsLoggedIn(userData.isLoggedIn); // Check for "isLoggedIn" field in response data  || false
      }
    } catch (error) {
      console.error('Error fetching user data:', error); // Log the error
    }

    if (response.status === 401) {
      setIsLoggedIn(false);
    } else {
    const userData = await response.json(); // Parse the JSON from the response and save it in userData
    setIsLoggedIn(userData.isLoggedIn); // Check for "isLoggedIn" field in response data  || false
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
useEffect(() => { 
  checkLogin();
}, []);


 const logout = async () => {
  const response = await fetch('mtg-tomb.onrender.com/api/user/logout', {
    method: "get",
    mode: "cors",
    credentials: "include",
  });
  if (!response.ok) {
    navigate('/profile')
  }
    navigate('/login');
  };

  return (
    <nav className=" z-10 fixed bottom-0 inset-x-0 bg-nav-gradient flex items-start text-sm text-blue-900 uppercase font-mono md:fixed md:top-0 md:bottom-auto md:w-full md:h-auto">
      <a href="/" className="mtg-tomb-logo w-full md:w-24 block text-center 0">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto inset-0 border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg"
        />
      </a>
      <button
        onClick={toggleSidebar}
        className="docs-logo w-full md:w-24 block text-center 0">
        <img
          src={docIcon}
          alt="Doc Icon"
          className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto inset-0 border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg"
        />
      </button>
      <a
        href="/profile"
        className="profile-logo w-full block text-center 0 md:hover:bg-transparent md:w-auto  md:items-center  md:hidden">
        <img
          src={profileIcon}
          alt="Profile Icon"
          style={{ width: '4.25rem', height: '4.25rem' }}
          className="mx-auto bg-custom-purple-600 rounded-full border-4 border-plum hover:border-mint hover:shadow-md hover:shadow-plum"
        />
      </a>
      <a
        href="/deck-builder"
        className="decks-logo w-full md:w-24 block text-center 0">
        <img
          src={decksIcon}
          alt="Decks Icon"
          className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto inset-0 border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg"
        />
      </a>
      <a
        href="/community"
        className="community-logo w-full md:w-24 block text-center 0">
        <img
          src={communityIcon}
          alt="Community Icon"
          className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto inset-0 border-2 border-transparent hover:border-white hover:shadow-lg hover:shadow-plum hover:bg-mint/60 rounded-lg"
        />
      </a>
      {/* Desktop screen */}
      {!isLoggedIn ? ( // If user is not logged in
        <>
          <a href="/login" className="login-logo-desktop ml-auto 0">
            <button
              className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-btn-gradient text-white font-semibold md:rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
              <span className="absolute inset-0 border-2 border-transparent hover:border-white rounded-lg"></span>
              LOGIN
            </button>
          </a>
          <a href="/register" className="register-logo-desktop 0">
            <button className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-btn-gradient text-white font-semibold md:rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
              <span className="absolute inset-0 border-2 border-transparent hover:border-white rounded-lg"></span>
              REGISTER
            </button>
          </a>
        </>
      ) : ( 
        <>
          <a href="/login" className="login-logo-desktop ml-auto 0">
            <button

             onClick={logout}
              className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-btn-gradient text-white font-semibold md:rounded-lg shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 relative overflow-hidden">
              <span className="absolute inset-0 border-2 border-transparent hover:border-white rounded-lg"></span>
              LOG OUT
            </button>
          </a>
        </>
      )}

      <a
        href="/profile"
        className="profile-logo-desktop hidden md:block md:items-center md:w-24 0">
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="w-14 h-14 m-3 bg-custom-purple-600 rounded-full border-4 border-periwinkle hover:shadow-lg hover:shadow-plum  hover:border-white"
        />
      </a>
    </nav>
  );
};

export default Navbar;