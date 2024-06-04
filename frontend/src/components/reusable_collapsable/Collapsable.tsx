/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

interface CollapsableProps {
  titles: string;
  content?: JSX.Element;
  isOpen?: boolean;
  image?: JSX.Element;
  onClick: () => void;
}

const Collapsable: React.FC<CollapsableProps> = ({
  titles,
  content,
  image,
  isOpen,
  onClick,
}) => {
  return (
    <div className="py-4 bg-white/10 px-2 rounded-lg my-2">
      <button onClick={onClick} className="flex justify-between w-full p-2">
        <div className="flex items-center">
          {image && <div className="mr-2 w-8 h-8">{image}</div>}
          <span className="font-semibold text-lg text-nowrap">{titles}</span>
        </div>
        <div className="text-2xl">{isOpen ? <p>-</p> : <p>+</p>}</div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}>
        {isOpen && <div className="mt-2 p-2 rounded">{content}</div>}
      </div>
    </div>
  );
};

export default Collapsable;
