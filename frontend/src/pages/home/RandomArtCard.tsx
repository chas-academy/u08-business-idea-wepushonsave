import { useState, useEffect, useRef } from 'react';
import { useSearch } from '../../components/search/SearchContext';
import { ICard } from '../../utils/ScryfallInterfaces';
import CardLayout from '../../layouts/CardLayout';


interface ArtCardProps {
   card?: ICard;
   showRandomizeButton?: boolean;
   showInfoText?: boolean;
   standalone?: boolean;
   containerStyles?: React.CSSProperties;
   imgStyles?: React.CSSProperties;
   infoStyles?: React.CSSProperties;
}


const ArtCard: React.FC<ArtCardProps> = ({
   card: initialCard,
   showRandomizeButton = true,
   showInfoText = true,
   standalone = false,
   containerStyles,
   infoStyles,
}) => {
   const [card, setCard] = useState<ICard | null>(initialCard || null);
   const { results } = useSearch();
   const [activeCard, setActiveCard] = useState<ICard | null>(null);
   const dialogRef = useRef<HTMLDialogElement | null>(null);

   useEffect(() => {
      if (!initialCard) {
         getRandomCard();
      }
   }, [initialCard]);

   const getRandomCard = async () => {
      try {
         const response = await fetch('https://api.scryfall.com/cards/random');
         const data = await response.json();
         setCard(data);
      } catch (error) {
         console.error('Error fetching random card:', error);
      }
   };


   const handleRandomize = () => {
      getRandomCard();
   };

   const handleClickCard = () => {
      setActiveCard(card);
      dialogRef.current?.showModal();
      document.body.style.overflow = 'hidden';
   };

   const handleCloseDialog = () => {
      dialogRef.current?.close();
      setActiveCard(null);
      document.body.style.overflow = '';
   };

   const imageUrl = card?.card_faces && card.card_faces.length > 0
      ? card.card_faces[0].image_uris.border_crop
      : card?.image_uris.border_crop;

   return (
      <>
         <header className="flex flex-col items-center text-center py-4">
            <h1 className="text-[10vh] font-bold text-white/80">
               MTG-Tomb
            </h1>
            <p className="text-white/60 mt-2">
               Welcome to MTG-Tomb! <br /> This is your hub for building decks, searching cards, sorting your collection online, <br /> and getting inspired by other Magic: The Gathering players.
            </p>
         </header>

         <dialog
            ref={dialogRef}
            className="size-9/12 md:h-9/10 md:w-1/3 bg-transparent backdrop:bg-black/75 shadow-xl no-scrollbar flex h-min overflow-auto">
            {activeCard && (
               <dialog
                  open
                  className="m-2 bg-[#17140D] text-white rounded-t-xl relative">
                  <CardLayout
                     card={activeCard}
                     onClose={handleCloseDialog}
                     setActiveCard={setActiveCard} addCardToDeck={function (_card: ICard): void {
                        throw new Error('Function not implemented.');
                     }} />
               </dialog>
            )}
         </dialog>

         {results.length <= 0 && (
            <>

               {card && (
                  <>
                     <div
                        className={`randomSingleCard flex flex-col text-center items-center m-2 md:items justify-center md:flex-row text-white/80 md:p-2 ${standalone ? ' md:flex-row w-screen ' : ''}`}
                        style={containerStyles}>

                        <button onClick={handleClickCard}>
                           <div className="img-container flex flex-col rounded-md" style={{ border: '2px solid transparent', transition: 'border-color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#757BC0'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                              <img
                                 src={imageUrl}
                                 alt={card.name}
                                 className="rounded-md mx-auto"
                                 style={{ maxHeight: '300px', objectFit: 'contain' }}

                              />
                           </div>
                        </button>
                        <div className='text-container flex flex-col w-1/2 md:w-1/3 items-center p-2'>
                           {showInfoText && (
                              <div
                                 style={infoStyles}
                              >
                                 <p className="text-lg md:mb-2 font-semi-bold">{card.name}</p>
                                 <p className="text-md ">{card.type_line}</p>
                                 <p className="text-sm min-h-36 italic">{card.oracle_text}</p>
                              </div>
                           )}

                           {showRandomizeButton && (
                              <button
                                 onClick={handleRandomize}
                                 className="bg-btn-gradient hover:bg-periwinkle  text-white/80 hover:text-white font-bold py-2 px-4 mb-3 rounded w-1/2"
                              >
                                 Another!
                              </button>
                           )}
                        </div>
                     </div>
                  </>
               )}
            </>
         )}
      </>
   );
};

export default ArtCard;
