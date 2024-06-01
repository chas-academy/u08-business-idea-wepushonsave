import React, { useState, useEffect } from 'react';
import ArtCard from './RandomArtCard';

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

const CardGallery: React.FC = () => {
   const [cards, setCards] = useState<CardData[]>([]);

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
      <section className="card-gallery-section">
         <div className="cards-grid flex flex-row">
            {cards.map((card) => (
               <div key={card.id} className="card-item">
                  <ArtCard card={card} showRandomizeButton={false} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default CardGallery;