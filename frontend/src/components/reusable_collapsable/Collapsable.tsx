import React, {useState} from 'react';

interface CollapsableProps {
  titles: string;
  content: React.ReactNode;
}

const Collapsable: React.FC<CollapsableProps> = ({titles, content}) => {
  const [collapsableOpen, setCollapsableOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setCollapsableOpen(!collapsableOpen)}
        className="flex justify-between w-full">
        <span>{titles}</span>
        {collapsableOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          collapsableOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}>
        {collapsableOpen && (
          <div className="mt-2 p-2 bg-gray-50 border border-gray-200 rounded">
          {content}
        </div>
        )}
      </div>
    </div>
  );
};

export default Collapsable;
