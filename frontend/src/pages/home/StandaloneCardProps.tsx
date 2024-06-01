
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

//for randomartcard.tsx
interface StandaloneArtCardProps {
   card: CardData;
}


const StandaloneArtCard: React.FC<StandaloneArtCardProps> = ({ card }) => {
   return (
      <div className="randomsinglecard flex flex-col text-center items-center justify-center text-white/80 p-5 md:pt-16 md:p-2 h-screen w-screen">
         <div className="img-container flex flex-col max-h-full md:max-h-full md:size-80 md:w-1/4 justify-center items-center m-5 p-5">
            <img src={card.image_uris.border_crop} alt={card.name} className="rounded-md mx-auto size-50" />
         </div>
         <div className="info-container flex flex-col w-full md:my-40 md:mx-2 md:justify-end border-transparent">
            <p className="text-lg md:mb-5 font-semi-bold">{card.name}</p>
            <p className="text-sm">{card.type_line}</p>
            <p className="text-sm">{card.oracle_text}</p>
         </div>
      </div>
   );
};

//for cardgallery.tsx
interface GalleryArtCardProps {
   card: CardData;
}

const GalleryArtCard: React.FC<GalleryArtCardProps> = ({ card }) => {
   return (
      <div className="rounded-lg overflow-hidden shadow-md flex-none" style={{ minWidth: '300px' }}>
         <img src={card.image_uris.border_crop} alt={card.name} className="rounded-md mx-auto size-50" />
      </div>
   );
};

export { StandaloneArtCard, GalleryArtCard };
export type { CardData };
