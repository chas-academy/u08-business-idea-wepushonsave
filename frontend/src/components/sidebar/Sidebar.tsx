import docIcon from '../../assets/doc-icon.webp';
import { useState } from 'react';

interface SidebarProps {
   isOpen: boolean;
   toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
   const [expanded, setExpanded] = useState(false);

   const handleExpand = () => {
      setExpanded(!expanded);
   };

   const scrollbarStyle: React.CSSProperties = {
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'thin',
      scrollbarColor: 'transparent transparent',
   };

   const sidebarStyle = {
      transitionDuration: isOpen ? '500ms' : '600ms',
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      transitionDelay: isOpen ? '0' : '300ms',
   };

   const iconStyle = {
      transitionDuration: isOpen ? '1500ms' : '200ms',
      transform: isOpen ? 'rotate(360deg)' : 'rotate(90deg)',
      borderRadius: '20%',
      padding: isOpen ? '3px' : '10px',
      transitionDelay: isOpen ? '200ms' : '0',
   };

   const buttonStyle = {
      boxShadow: isOpen ? '0 0 10px rgba(200, 200, 300, 0.8)' : 'none',
      transitionDuration: isOpen ? '1000ms' : '200ms',
      transitionDelay: isOpen ? '200ms' : '0',

   };

   return (
      <div className="fixed inset-0 z-20 flex mb-[68px] md:mb-0 md:mt-[80px]" style={sidebarStyle}>
         <div className="bg-gray-700 text-white w-64 p-4 relative">
            <div className="flex justify-end">
               <button onClick={toggleSidebar} className={`absolute top-2 right-2 p-1 rounded-full ${isOpen ? 'border border-purple-100/20 bg-periwinkle/70' : ''}`} style={buttonStyle}>
                  <img src={docIcon} alt="Doc Icon" className="w-10 h-10" style={iconStyle} />
               </button>

            </div>
            <nav className="mt-12">
               <div className="mt-4">
                  <ul >
                     <li className="py-2"><a href="#">About</a></li>
                     <li className="py-2"><a href="#">Card Rules</a></li>
                     <li className="py-2">
                        <button type="button" onClick={handleExpand}>
                           Game Rules
                        </button>
                        {expanded && (
                           <ul className=" bg-green-500 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#commander-rules">Commander Rules and Gameplay Guide</a></li>
                              <li className="py-1 text-sm"><a href="#card-types">Card Types</a></li>
                              <li className="py-1 text-sm"><a href="#turn-structure">Turn Structure</a></li>
                              <li className="py-1 text-sm"><a href="#casting-spells">Casting Spells</a></li>
                              <li className="py-1 text-sm"><a href="#combat">Combat</a></li>
                              <li className="py-1 text-sm"><a href="#damage-and-life">Damage and Life</a></li>
                              <li className="py-1 text-sm"><a href="#keywords-and-abilities">Keywords and Abilities</a></li>
                              <li className="py-1 text-sm"><a href="#win-conditions">Win Conditions</a></li>
                              <li className="py-1 text-sm"><a href="#interaction-and-stack">Interaction and Stack</a></li>
                              <li className="py-1 text-sm"><a href="#mulligans-and-sideboarding">Mulligans and Sideboarding</a></li>
                              <li className="py-1 text-sm"><a href="#philosophy">Philosophy</a></li>
                              <li className="py-1 text-sm"><a href="#the-golden-rule">The Golden Rule</a></li>
                              <li className="py-1 text-sm"><a href="#house-rules">House Rules</a></li>
                              <li className="py-1 text-sm"><a href="#rules-sources">Rules Sources</a></li>
                              <li className="py-1 text-sm"><a href="#deck-construction">Deck Construction</a></li>
                              <li className="py-1 text-sm"><a href="#starting-the-game">Starting the Game</a></li>
                              <li className="py-1 text-sm"><a href="#commander">Commander</a></li>
                              <li className="py-1 text-sm"><a href="#card-legality">Card Legality</a></li>
                              <li className="py-1 text-sm"><a href="#banned-list">Banned List</a></li>
                              <li className="py-1 text-sm"><a href="#color-identity-and-color-indicator">Color Identity and Color Indicator</a></li>
                              <li className="py-1 text-sm"><a href="#limited-range-of-influence">Limited Range of Influence</a></li>
                              <li className="py-1 text-sm"><a href="#official-announcements-and-rulings">Official Announcements and Rulings</a></li>
                              <li className="py-1 text-sm"><a href="#object-of-commander">Object of Commander</a></li>
                              <li className="py-1 text-sm"><a href="#rule-violations">Rule Violations</a></li>
                              <li className="py-1 text-sm"><a href="#additional-rules-for-commander-games">Additional Rules for Commander Games</a></li>
                              <li className="py-1 text-sm"><a href="#faq-frequently-asked-questions">FAQ (Frequently Asked Questions)</a></li>
                           </ul>
                        )}
                     </li>

                  </ul>
               </div>

            </nav>
         </div>
         <div className="flex-1 p-4" onClick={toggleSidebar}>
            <h1 className="text-2xl">Main Content</h1>
            <p>This is the main content area.</p>
         </div>
      </div>
   );
};

export default Sidebar;
