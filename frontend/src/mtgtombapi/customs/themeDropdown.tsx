import React from 'react';
import Capitalizer from './customCapitalizer';

interface ThemeDropdownProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const ThemeDropdown: React.FC<ThemeDropdownProps> = ({ options, selectedValue, onSelect }) => {
  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
        className="block cursor-pointer p-2 bg-plum text-white rounded-lg shadow-inner"
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="bg-plum text-black">
            <Capitalizer text={option} />
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeDropdown;
