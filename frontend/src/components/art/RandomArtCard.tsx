import React, { useState, useEffect } from 'react';

interface CardData {
   object: string;
   id: string;
   name: string;
   type_line: string;
   oracle_text: string;
   image_uris: {
      normal: string;
   };
}

const ArtCard: React.FC = () => {
   const [card, setCard] = useState<CardData | null>(null);

   useEffect(() => {
      getRandomCard();
   }, []);

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

   return (
      <div className="flex justify-center items-center h-screen max-h-50vh">
         {card && (
            <div className="text-center w-1/2">
               <img src={card.image_uris.normal} alt={card.name} className="mx-auto mb-4" />
               <p className="text-lg font-bold">{card.name}</p>
               <p className="text-sm">{card.type_line}</p>
               <p className="text-sm">{card.oracle_text}</p>
               <button onClick={handleRandomize} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Randomize
               </button>
            </div>
         )}
      </div>
   );
};

export default ArtCard;
