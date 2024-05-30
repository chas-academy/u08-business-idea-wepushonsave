import React, { useState } from 'react';
import manaSymbols from '../manaSymbols';

interface CustomDropdownProps {
  options: string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

const getManaSymbols = (color: string) => {
  const colorToSymbols: { [key: string]: string[] } = {
    '': ['{PW}'],
    black: ['{B}'],
    'black-green': ['{B}', '{G}'],
    'black-red': ['{B}', '{R}'],
    'black-red-green': ['{B}', '{R}', '{G}'],
    blue: ['{U}'],
    'blue-black': ['{U}', '{B}'],
    'blue-black-green': ['{U}', '{B}', '{G}'],
    'blue-black-red': ['{U}', '{B}', '{R}'],
    'blue-green': ['{U}', '{G}'],
    'blue-red': ['{U}', '{R}'],
    'blue-red-green': ['{U}', '{R}', '{G}'],
    colorless: ['{C}'],
    green: ['{G}'],
    red: ['{R}'],
    'red-green': ['{R}', '{G}'],
    white: ['{W}'],
    'white-black': ['{W}', '{B}'],
    'white-black-green': ['{W}', '{B}', '{G}'],
    'white-black-red': ['{W}', '{B}', '{R}'],
    'white-black-red-green': ['{W}', '{B}', '{R}', '{G}'],
    'white-blue': ['{W}', '{U}'],
    'white-blue-black': ['{W}', '{U}', '{B}'],
    'white-blue-black-green': ['{W}', '{U}', '{B}', '{G}'],
    'white-blue-black-red': ['{W}', '{U}', '{B}', '{R}'],
    'white-blue-black-red-green': ['{W}', '{U}', '{B}', '{R}', '{G}'],
    'white-blue-green': ['{W}', '{U}', '{G}'],
    'white-blue-red': ['{W}', '{U}', '{R}'],
    'white-blue-red-green': ['{W}', '{U}', '{R}', '{G}'],
    'white-green': ['{W}', '{G}'],
    'white-red': ['{W}', '{R}'],
    'white-red-green': ['{W}', '{R}', '{G}'],
  };

  return colorToSymbols[color] || [];
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-52">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-custom-purple-800 border border-purple-300 rounded-md shadow-sm p-2 grid grid-cols-6"
      >
        {selectedValue ? (
          <div className="flex items-center">
            {getManaSymbols(selectedValue).map(symbol => {
              const mana = manaSymbols.find(mana => mana.symbol === symbol);
              return mana ? (
                <img key={symbol} src={mana.imageUrl} alt={mana.symbol} className="w-7 h-7 space-x-2 col-span-5" />
              ) : null;
            })}
          </div>
        ) : (
            <img src="https://svgs.scryfall.io/card-symbols/PW.svg" alt="All Colors" className="w-7 h-7 space-x-2 col-span-5" />
        )}
        <svg
          className="w-7 h-7 text-purple-300 col-start-6 items-center"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M19 13l-7-7-7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-mint shadow-lg max-h-60 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-auto">
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
            >
              <div className="flex items-center space-x-2">
                {getManaSymbols(option).map(symbol => {
                  const mana = manaSymbols.find(mana => mana.symbol === symbol);
                  return mana ? (
                    <img key={symbol} src={mana.imageUrl} alt={mana.symbol} className="w-7 h-7" />
                  ) : null;
                })}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;