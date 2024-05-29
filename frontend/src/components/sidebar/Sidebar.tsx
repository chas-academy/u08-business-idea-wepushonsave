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
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAcommander-rules" className="hover:text-white">Commander Rules and Gameplay Guide</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#deck-construction-and-setup" className="hover:text-white">deck construction and setup</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#card-types" className="hover:text-white">Card Types</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#turn-structure" className="hover:text-white">Turn Structure</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#casting-spells" className="hover:text-white">Casting Spells</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#combat" className="hover:text-white">Combat</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#damage-and-life" className="hover:text-white">Damage and Life</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#keywords-and-abilities" className="hover:text-white">Keywords and Abilities</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#win-conditions" className="hover:text-white">Win Conditions</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#interaction-and-stack" className="hover:text-white">Interaction and Stack</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#mulligans-and-sideboarding" className="hover:text-white">Mulligans and Sideboarding</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAphilosophy" className="hover:text-white">Philosophy</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAthe-golden-rule" className="hover:text-white">The Golden Rule</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAhouse-rules" className="hover:text-white">House Rules</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPArules-sources" className="hover:text-white">Rules Sources</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAdeck-construction" className="hover:text-white">Deck Construction</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAstarting-the-game" className="hover:text-white">Starting the Game</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAcommander" className="hover:text-white">Commander</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAcard-legality" className="hover:text-white">Card Legality</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAbanned-list" className="hover:text-white">Banned List</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAcolor-identity-and-color-indicator" className="hover:text-white">Color Identity and Color Indicator</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAlimited-range-of-influence" className="hover:text-white">Limited Range of Influence</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAofficial-announcements-and-rulings" className="hover:text-white">Official Announcements and Rulings</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#Vobject-of-commander" className="hover:text-white">Object of Commander</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPArule-violations" className="hover:text-white">Rule Violations</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAadditional-rules-for-commander-games" className="hover:text-white">Additional Rules for Commander Games</a></li>
                              <li className="py-1 text-sm"><a href="/gamerules/#pAPAfaq-frequently-asked-questions" className="hover:text-white">FAQ (Frequently Asked Questions)</a></li>
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
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAland-types" className="hover:text-white">Land Types</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#swamp" className="hover:text-white">Swamp</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#mountain" className="hover:text-white">Mountain</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#plains" className="hover:text-white">Plains</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#forest" className="hover:text-white">Forest</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#island" className="hover:text-white">Island</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#colorless" className="hover:text-white">Colorless</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#cave" className="hover:text-white">Cave</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#desert" className="hover:text-white">Desert</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#gate" className="hover:text-white">Gate</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#lair" className="hover:text-white">Lair</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#locus" className="hover:text-white">Locus</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#sphere" className="hover:text-white">Sphere</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#urzas" className="hover:text-white">Urza's</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#cloud" className="hover:text-white">Cloud</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAcreature" className="hover:text-white">Cloud</a></li> 
                              <li className="py-1 text-sm"><a href="/cardrules/#creature-types" className="hover:text-white">Creature Types</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#characteristics" className="hover:text-white">Characteristics</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-and-subtypes" className="hover:text-white">Types and Subtypes</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#summoning-sickness" className="hover:text-white">Summoning Sickness</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#creature-abilities" className="hover:text-white">Creature Abilities</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#combat" className="hover:text-white">Combat</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#creature-token" className="hover:text-white">Creature Tokens</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAenchantment" className="hover:text-white">Enchantments</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#enchantments" className="hover:text-white">Enchantments</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#flavor-and-identity" className="hover:text-white">Flavor and Identity</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-of-enchantments" className="hover:text-white">Types of Enchantments</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#continuous-effects-enchantments" className="hover:text-white">Continuous Effects</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#strategic-value-enchantments" className="hover:text-white">Strategic Value</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#interaction-with-other-cards-enchantments" className="hover:text-white">Interaction with Other Cards</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#enchantress-effects" className="hover:text-white">Enchantress Effects</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAartifacts" className="hover:text-white">Artifacts: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#artifacts-key-concepts-and-gameplay" className="hover:text-white">Artifacts: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#overview-of-artifacts" className="hover:text-white">Overview of Artifacts</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-of-artifacts" className="hover:text-white">Types of Artifacts</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#continuous-effects" className="hover:text-white">Continuous Effects</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#strategic-value-artifacts" className="hover:text-white">Strategic Value</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#interaction-with-other-cards-artifacts" className="hover:text-white">Interaction with Other Cards</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#artifact-deck-themes" className="hover:text-white">Artifact Deck Themes</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#artifact-creatures-and-animation" className="hover:text-white">Artifact Creatures and Animation</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAsorceries" className="hover:text-white">Sorceries: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#sorceries-key-concepts-and-gameplay" className="hover:text-white">Sorceries: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#overview-of-sorceries" className="hover:text-white">Overview of Sorceries</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-of-sorceries" className="hover:text-white">Types of Sorceries</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#casting-sorceries" className="hover:text-white">Casting Sorceries</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#strategic-value-sorceries" className="hover:text-white">Strategic Value</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#interaction-with-other-cards-sorceries" className="hover:text-white">Interaction with Other Cards</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#deck-themes-sorceries" className="hover:text-white">Deck Themes</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#instants-key-concepts-and-gameplay" className="hover:text-white">Instants: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAinstants" className="hover:text-white">Overview of Instants</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#overview-of-instants" className="hover:text-white">Overview of Instants</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-of-instants" className="hover:text-white">Types of Instants</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#casting-instants" className="hover:text-white">Casting Instants</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#strategic-value-instants" className="hover:text-white">Strategic Value</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#interaction-with-other-cards-instants" className="hover:text-white">Interaction with Other Cards</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#deck-themes-instants" className="hover:text-white">Deck Themes</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#pAPAplaneswalkers" className="hover:text-white">Overview of Instants</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#planeswalkers-key-concepts-and-gameplay" className="hover:text-white">Planeswalkers: Key Concepts and Gameplay</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#overview-of-planeswalkers" className="hover:text-white">Overview of Planeswalkers</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#types-of-planeswalker-abilities" className="hover:text-white">Types of Planeswalker Abilities</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#activating-planeswalker-abilities" className="hover:text-white">Activating Planeswalker Abilities</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#strategic-value" className="hover:text-white">Strategic Value</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#interaction-with-other-cards" className="hover:text-white">Interaction with Other Cards</a></li>
                              <li className="py-1 text-sm"><a href="/cardrules/#deck-themes" className="hover:text-white">Deck Themes</a></li>

                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
         <div className="flex-1 p-4" onClick={toggleSidebar}>
            <h1 className="text-2xl text-white">MOUSE OUT</h1>

         </div>
      </div>
   );
};

export default Sidebar;
