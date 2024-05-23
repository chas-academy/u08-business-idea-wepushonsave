import React, {useState} from 'react';

interface CollapsableProps {
  titles: string;
  content: React.ReactNode;
}

const Collapsable: React.FC<CollapsableProps> = ({titles, content}) => {
  const [collapsableOpen, setCollapsableOpen] = useState(false);

  return (
    <>
    <div className="py-2 m-2 ">
      <button
        onClick={() => setCollapsableOpen(!collapsableOpen)} //onclick event som kommer att öppna eller stänga drop downen 
        className="flex justify-between w-full">
        <span className='font-semibold'>{titles}</span>
        {collapsableOpen ? <span>-</span> : <span>+</span>} {/*om öppen ska - skrivas ut om stängd + */}
      </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          collapsableOpen
            ? 'grid-rows-[1fr] opacity-100' //vad som händer om den inte är öppen
            : 'grid-rows-[0fr] opacity-0' //vad som händer om den är öppen
        }`}>
          {/* här under skapas layout men också ger en content till collapsable som aggerar pappa, inuti contentet lägger man sedan i items som då är dropdownsens information */}
        {collapsableOpen && (
          <div className="mt-2 p-2 bg-zinc-700"> 
          {content} 
        </div>
        )}
      </div>
      </>
  );
};

export default Collapsable;
