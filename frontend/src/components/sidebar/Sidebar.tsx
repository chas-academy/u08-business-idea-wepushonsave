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
         <div className="bg-zinc-900/95 text-white/70 w-64 p-4 relative">
            <div className="flex justify-end">
               <button onClick={toggleSidebar} className={`absolute top-2 right-2 p-1 rounded-full ${isOpen ? 'border border-purple-100/20 bg-periwinkle/70' : ''}`} style={buttonStyle}>
                  <img src={docIcon} alt="Doc Icaon" className="w-10 h-10" style={iconStyle} />
               </button>
            </div>
            <nav className="mt-12">
               <div className="mt-4">
                  <ul>
                     <li className="ABOUT py-2">
                        <button
                           type="button"
                           onClick={() => handleExpand('about')}
                           className={`hover:text-white ${expandedItem === 'about' ? 'text-white' : ''}`}
                        >                           About
                        </button>

                        <div className={`smooth ${expandedItem === 'about' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'about' ? '800ms' : '300ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="About bg-white/10 rounded-md p-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#A1" className="hover:text-white">About 1</a></li>
                              <li className="py-1 text-sm"><a href="#A2" className="hover:text-white">About 2</a></li>
                              <li className="py-1 text-sm"><a href="#A3" className="hover:text-white">About 3</a></li>

                           </ul>
                        </div>
                     </li>

                     <li className="GAME RULES py-2">
                        <button
                           type="button"
                           onClick={() => handleExpand('gameRules')}
                           className={`hover:text-white ${expandedItem === 'gameRules' ? 'text-white' : ''}`}
                        >                           Game Rules
                        </button>

                        <div className={`smooth ${expandedItem === 'gameRules' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'gameRules' ? '800ms' : '300ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="GameRules bg-white/10 rounded-md p-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#commander-rules" className="hover:text-white">Commander Rules and Gameplay Guide</a></li>
                              <li className="py-1 text-sm"><a href="#card-types" className="hover:text-white">Card Types</a></li>
                              <li className="py-1 text-sm"><a href="#turn-structure" className="hover:text-white">Turn Structure</a></li>
                              <li className="py-1 text-sm"><a href="#casting-spells" className="hover:text-white">Casting Spells</a></li>
                              <li className="py-1 text-sm"><a href="#combat" className="hover:text-white">Combat</a></li>
                              <li className="py-1 text-sm"><a href="#damage-and-life" className="hover:text-white">Damage and Life</a></li>
                              <li className="py-1 text-sm"><a href="#keywords-and-abilities" className="hover:text-white">Keywords and Abilities</a></li>
                              <li className="py-1 text-sm"><a href="#win-conditions" className="hover:text-white">Win Conditions</a></li>
                              <li className="py-1 text-sm"><a href="#interaction-and-stack" className="hover:text-white">Interaction and Stack</a></li>
                              <li className="py-1 text-sm"><a href="#mulligans-and-sideboarding" className="hover:text-white">Mulligans and Sideboarding</a></li>
                              <li className="py-1 text-sm"><a href="#philosophy" className="hover:text-white">Philosophy</a></li>
                              <li className="py-1 text-sm"><a href="#the-golden-rule" className="hover:text-white">The Golden Rule</a></li>
                              <li className="py-1 text-sm"><a href="#house-rules" className="hover:text-white">House Rules</a></li>
                              <li className="py-1 text-sm"><a href="#rules-sources" className="hover:text-white">Rules Sources</a></li>
                              <li className="py-1 text-sm"><a href="#deck-construction" className="hover:text-white">Deck Construction</a></li>
                              <li className="py-1 text-sm"><a href="#starting-the-game" className="hover:text-white">Starting the Game</a></li>
                              <li className="py-1 text-sm"><a href="#commander" className="hover:text-white">Commander</a></li>
                              <li className="py-1 text-sm"><a href="#card-legality" className="hover:text-white">Card Legality</a></li>
                              <li className="py-1 text-sm"><a href="#banned-list" className="hover:text-white">Banned List</a></li>
                              <li className="py-1 text-sm"><a href="#color-identity-and-color-indicator" className="hover:text-white">Color Identity and Color Indicator</a></li>
                              <li className="py-1 text-sm"><a href="#limited-range-of-influence" className="hover:text-white">Limited Range of Influence</a></li>
                              <li className="py-1 text-sm"><a href="#official-announcements-and-rulings" className="hover:text-white">Official Announcements and Rulings</a></li>
                              <li className="py-1 text-sm"><a href="#object-of-commander" className="hover:text-white">Object of Commander</a></li>
                              <li className="py-1 text-sm"><a href="#rule-violations" className="hover:text-white">Rule Violations</a></li>
                              <li className="py-1 text-sm"><a href="#additional-rules-for-commander-games" className="hover:text-white">Additional Rules for Commander Games</a></li>
                              <li className="py-1 text-sm"><a href="#faq-frequently-asked-questions" className="hover:text-white">FAQ (Frequently Asked Questions)</a></li>
                           </ul>
                        </div>
                     </li>
                     <li className="CARD RULES py-2">
                        <button
                           type="button"
                           onClick={() => handleExpand('cardRules')}
                           className={`hover:text-white ${expandedItem === 'cardRules' ? 'text-white' : ''}`}
                        >                           Card Rules
                        </button>

                        <div className={`smooth ${expandedItem === 'cardRules' ? 'max-h-[1000px]' : 'max-h-0'}`} style={{ transition: `max-height ${expandedItem === 'cardRules' ? '800ms' : '300ms'} ease-in-out`, overflow: 'hidden' }}>
                           <ul className="CardRules bg-white/10 rounded-md p-2 max-h-[calc(100vh-300px)] overflow-y-auto" style={scrollbarStyle}>
                              <li className="py-1 text-sm"><a href="#land-types" className="hover:text-white">Land Types</a></li>
                              <li className="py-1 text-sm"><a href="#creature-types" className="hover:text-white">Creature Types</a></li>
                              <li className="py-1 text-sm"><a href="#enchantment" className="hover:text-white">Enchantment</a></li>
                              <li className="py-1 text-sm"><a href="#artifacts" className="hover:text-white">Artifacts</a></li>
                              <li className="py-1 text-sm"><a href="#sorcery" className="hover:text-white">Sorcery</a></li>
                              <li className="py-1 text-sm"><a href="#instants" className="hover:text-white">Instants</a></li>
                              <li className="py-1 text-sm"><a href="#planeswalker" className="hover:text-white">Planeswalker</a></li>

                              {/*  <li className="py-1 text-sm"><a href="#land-types" className="hover:text-white">Land Types</a></li>
                              <li className="py-1 text-sm"><a href="#swamp" className="hover:text-white">Swamp</a></li>
                              <li className="py-1 text-sm"><a href="#mountain" className="hover:text-white">Mountain</a></li>
                              <li className="py-1 text-sm"><a href="#plains" className="hover:text-white">Plains</a></li>
                              <li className="py-1 text-sm"><a href="#forest" className="hover:text-white">Forest</a></li>
                              <li className="py-1 text-sm"><a href="#island" className="hover:text-white">Island</a></li>
                              <li className="py-1 text-sm"><a href="#colorless" className="hover:text-white">Colorless</a></li>
                              <li className="py-1 text-sm"><a href="#cave" className="hover:text-white">Cave</a></li>
                              <li className="py-1 text-sm"><a href="#desert" className="hover:text-white">Desert</a></li>
                              <li className="py-1 text-sm"><a href="#gate" className="hover:text-white">Gate</a></li>
                              <li className="py-1 text-sm"><a href="#lair" className="hover:text-white">Lair</a></li>
                              <li className="py-1 text-sm"><a href="#locus" className="hover:text-white">Locus</a></li>
                              <li className="py-1 text-sm"><a href="#sphere" className="hover:text-white">Sphere</a></li>
                              <li className="py-1 text-sm"><a href="#urzas" className="hover:text-white">Urza's</a></li>
                              <li className="py-1 text-sm"><a href="#cloud" className="hover:text-white">Cloud</a></li> */}

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
