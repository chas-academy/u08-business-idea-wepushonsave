/* eslint-disable react/react-in-jsx-scope */

import { useState } from "react";

interface CollapsableProps {
  titles: string;
  content: JSX.Element;
  image?: JSX.Element;
}

const Collapsable = ({ titles, content, image }: CollapsableProps) => {
  const [collapsableOpen, setCollapsableOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setCollapsableOpen(!collapsableOpen)}
        className="flex justify-between w-full"
      >
        <div className="flex items-center">
          {image && <div className="mr-2 w-6 h-6">{image}</div>} {/* Display image if provided */}
          <span className="font-semibold text-nowrap">{titles}</span>
        </div>
        {collapsableOpen ? <span>-</span> : <span>+</span>}{' '}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          collapsableOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        {collapsableOpen && (
          <div className="mt-2 p-2 bg-zinc-700 rounded">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Collapsable;
