
interface CardData {
   object: string;
   id: string;
   name: string;
   type_line: string;
   oracle_text: string;
   image_uris: {
      border_crop: string;
      normal: string;
      small: string;
   };
}

//for randomartcard.tsx
interface StandaloneArtCardProps {
   card: CardData;
   containerStyles?: React.CSSProperties;
   imgStyles?: React.CSSProperties;
   infoStyles?: React.CSSProperties;
}


const StandaloneArtCard: React.FC<StandaloneArtCardProps> = ({ card, containerStyles, imgStyles, infoStyles }) => {
   return (
      <div
         className="prop-randomsinglecard flex flex-col text-center items-center justify-center text-white/80 p-5  md:p-2 h-[20vh] w-screen"
         style={containerStyles}
      >
         <div
            className="img-container flex flex-col md:max-h-[50vh] md:size-80 md:w-1/4 justify-center items-center m-5 p-5"
            style={imgStyles}
         >
            <img src={card.image_uris.border_crop} alt={card.name} className="rounded-md mx-auto size-50" />
         </div>
         <div
            className="info-container flex flex-col w-full md:my-40 md:mx-2 md:justify-end border-transparent"
            style={infoStyles}
         >
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
