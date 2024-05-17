import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 inset-x-0 bg-gradient-to-b from-white to-gray-400 flex justify-between text-sm text-blue-900 uppercase font-mono">
        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0 transition duration-300">
          <img
            src="./src/assets/logo-MTG-TOMB.webp"
            alt="Logo"
            className="w-12 h-12 mb-2 mt-4 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0">
          <img
            src="./src/assets/doc-icon.webp"
            alt="Logo"
            className="w-12 h-12 mb-2 mt-4 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0">
          <img
            src="./src/assets/profile-icon.webp"
            alt="Logo"
            className="w-max bg-custom-purple-600 rounded-full border-4 border-custom-purple-800"
          />
        </a>

        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0">
          <img
            src="./src/assets/decks-icon.webp"
            alt="Logo"
            className="w-12 h-12 mb-2 mt-4 mx-auto"
          />
        </a>

        <a
          href="#"
          className="w-full block text-center hover:bg-custom-purple-600 0">
          <img
            src="./src/assets/community-icon.webp"
            alt="Logo"
            className="w-12 h-12 mb-2 mt-4 mx-auto"
          />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
