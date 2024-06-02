import { useState, useEffect } from 'react';
import ArtCard from './RandomArtCard';
import { ICard } from '../../utils/ScryfallInterfaces';


const CardGallery: React.FC = () => {
   const [cards, setCards] = useState<ICard[]>([]);

   useEffect(() => {
      fetchRandomCards();
   }, []);

   const fetchRandomCards = async () => {
      const cardPromises = Array.from({ length: 20 }, () =>
         fetch('https://api.scryfall.com/cards/random').then((response) =>
            response.json()
         )
      );

      try {
         const cards = await Promise.all(cardPromises);
         setCards(cards);
      } catch (error) {
         console.error('Error fetching random cards:', error);
      }
   };

   return (
      <section className="card-gallery-section  bg-zinc-900/50 p-4 overflow-x-auto">
         <div className="flex space-x-4">
            {cards.map((card) => (
               <div key={card.id} className="rounded-lg overflow-hidden shadow-md flex-none" style={{ minWidth: '200px', maxWidth: '300px' }}>
                  <ArtCard card={card} showRandomizeButton={false} showInfoText={false} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default CardGallery;