import React, { useState, useEffect } from 'react';

interface CardData {
   object: string;
   id: string;
   name: string;
   type_line: string;
   oracle_text: string;
   image_uris: {
      border_crop: string;
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

      <div className="flex justify-center h-1/2 md:size-1000">
         {card && (
            <>
               <div className=" flex flex-col md:flex-row text-center items-center justify-center text-white/80 p-5  ">
                  <div className='img-container flex flex-col justify-center items-center max-h-full md:size-1/3 md:max-h-[20vh]'>
                     <img src={card.image_uris.border_crop} alt={card.name} className=" rounded-md mx-auto mb-4 max-h-600px " />
                     <button onClick={handleRandomize} className=" bg-btn-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Randomize
                     </button>
                  </div>

                  <div className=' card-info flex flex-col md:w-1/3 md:my-40 md:mx-2 md:justify-end border-transparent '>
                     <p className="text-lg mb-5 font-semi-bold">{card.name}</p>
                     <p className="text-sm">{card.type_line}</p>
                     <p className="text-sm">{card.oracle_text}</p>


                  </div>

               </div>

            </>
         )}

      </div>
   );
};

export default ArtCard;
