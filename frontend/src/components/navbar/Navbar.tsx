import logo from '../../assets/logo-MTG-TOMB.webp';
import docIcon from '../../assets/doc-icon.webp';
import profileIcon from '../../assets/profile-icon.webp';
import decksIcon from '../../assets/decks-icon.webp';
import communityIcon from '../../assets/community-icon.webp';

const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 inset-x-0 bg-gradient-to-t from-customGradientMiddle to-customGradientEnd flex items-start text-sm text-blue-900 uppercase font-mono md:fixed md:top-0 md:bottom-auto md:w-full md:h-auto">
        <a
          href="#"
          className="w-full md:w-24 block text-center hover:bg-custom-purple-600 0">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full md:w-24 block text-center hover:bg-custom-purple-600 0">
          <img
            src={docIcon}
            alt="Doc Icon"
            className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0 md:hover:bg-transparent md:w-auto md:flex md:items-center md:hidden">
          <img
            src={profileIcon}
            alt="Profile Icon"
            style={{width: '4.25rem', height: '4.25rem'}}
            className="mx-auto bg-custom-purple-600 rounded-full border-4 border-custom-purple-800"
          />
        </a>

        <a
          href="#"
          className="w-full md:w-24 block text-center hover:bg-custom-purple-600 0">
          <img
            src={decksIcon}
            alt="Decks Icon"
            className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full md:w-24 block text-center hover:bg-custom-purple-600 0">
          <img
            src={communityIcon}
            alt="Community Icon"
            className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-3 md:mt-2 mx-auto"
          />
        </a>

        {/* Desktop screen */}

        <a href="#" className="ml-auto hover:bg-custom-purple-600 0">
          <button className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-gradient-to-b from-customGradientMiddle to-customGradientStart text-white font-semibold md:rounded-lg">
            LOGIN
          </button>
        </a>
        <a href="#" className="hover:bg-custom-purple-600 0">
          <button className="hidden font-inter text-sm md:inline-block m-3 mt-4 p-4 bg-gradient-to-b from-customGradientMiddle to-customGradientStart text-white font-semibold md:rounded-lg">
            REGISTER
          </button>
        </a>
        <a
          href="#"
          className="hidden md:block md:flex md:items-center md:w-24 md:hover:bg-custom-purple-600 0">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="w-14 h-14 m-3 bg-custom-purple-600 rounded-full border-4 border-customGradientStart"
          />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
