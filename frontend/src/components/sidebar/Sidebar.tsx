import docIcon from '../../assets/doc-icon.webp';
import { useState } from 'react';

interface SidebarProps {
   isOpen: boolean;
   toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
   const [expandedItem, setExpandedItem] = useState<string | null>(null);

   const handleExpand = (itemName: string) => {
      setExpandedItem(prevItem => (prevItem === itemName ? null : itemName));
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

   /* const smoothStyle = {
      transition: 'max-height 500ms ease-in-out',
   }; */

   return (
      <div className="fixed inset-0 z-20 flex mb-[68px] md:mb-0 md:mt-[80px]" style={sidebarStyle}>
         <div className="bg-plum/90 text-white/80 w-64 p-4 relative">
            <div className="flex justify-end">
               <button onClick={toggleSidebar} className={`absolute top-2 right-2 p-1 rounded-full ${isOpen ? 'border border-purple-100/20 bg-periwinkle/70' : ''}`} style={buttonStyle}>
                  <img src={docIcon} alt="Doc Icaon" className="w-10 h-10" style={iconStyle} />
               </button>
            </div>
            <nav className="mt-12">
               <div className="mt-4">
                  <ul>
                     <li className="ABOUT py-2">
                        <button type="button" onClick={() => handleExpand('about')}>
                           About
                        </button>

                        <div className={`smooth ${expandedItem === 'about' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'about' ? '800ms' : '0ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="About bg-white/10 px-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#A1">About 1</a></li>
                              <li className="py-1 text-sm"><a href="#A2">About 2</a></li>
                              <li className="py-1 text-sm"><a href="#A3">About 3</a></li>
                           </ul>
                        </div>
                     </li>

                     <li className="GAME RULES py-2">
                        <button type="button" onClick={() => handleExpand('gameRules')}>
                           Game Rules
                        </button>

                        <div className={`smooth ${expandedItem === 'gameRules' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'gameRules' ? '800ms' : '0ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="GameRules bg-white/10 px-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
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
                        </div>
                     </li>
                     <li className="CARD RULES py-2">
                        <button type="button" onClick={() => handleExpand('cardRules')}>
                           Card Rules
                        </button>

                        <div className={`smooth ${expandedItem === 'cardRules' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'cardRules' ? '800ms' : '0ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="CardRules bg-white/10 px-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#land-types">Land Types</a></li>
                              <li className="py-1 text-sm"><a href="#swamp">Swamp</a></li>
                              <li className="py-1 text-sm"><a href="#mountain">Mountain</a></li>
                              <li className="py-1 text-sm"><a href="#plains">Plains</a></li>
                              <li className="py-1 text-sm"><a href="#forest">Forest</a></li>
                              <li className="py-1 text-sm"><a href="#island">Island</a></li>
                              <li className="py-1 text-sm"><a href="#colorless">Colorless</a></li>
                              <li className="py-1 text-sm"><a href="#cave">Cave</a></li>
                              <li className="py-1 text-sm"><a href="#desert">Desert</a></li>
                              <li className="py-1 text-sm"><a href="#gate">Gate</a></li>
                              <li className="py-1 text-sm"><a href="#lair">Lair</a></li>
                              <li className="py-1 text-sm"><a href="#locus">Locus</a></li>
                              <li className="py-1 text-sm"><a href="#sphere">Sphere</a></li>
                              <li className="py-1 text-sm"><a href="#urzas">Urza's</a></li>
                              <li className="py-1 text-sm"><a href="#cloud">Cloud</a></li>
                           </ul>
                        </div>
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
