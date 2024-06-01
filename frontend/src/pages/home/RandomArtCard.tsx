import { useState, useEffect } from 'react';
import { useSearch } from '../../components/search/SearchContext';

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

interface ArtCardProps {
  card?: CardData;
  showRandomizeButton?: boolean;
  showInfoText?: boolean;
  standalone?: boolean;
}



const ArtCard: React.FC<ArtCardProps> = ({ card: initialCard, showRandomizeButton = true, showInfoText = true, standalone = false }) => {
  const [card, setCard] = useState<CardData | null>(initialCard || null);
  const { results } = useSearch();

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

  return (
    <>
      {results.length <= 0 && (
        <div className={`flex justify-center items-start ${standalone ? 'h-fit md:min-w-screen' : ''}`}>
          {card && (
            <>
              <div className={`randomsinglecard flex flex-col text-center items-center md:items justify-center text-white/80 md:p-2 ${standalone ? 'md:flex-row md:h-screen w-screen ' : ''}`}>
                <div className={`img-container flex flex-col  ${standalone ? 'md:size-80 md:w-1/4 justify-center items-center m-5 p-5 md:flex-row md:h-screen w-screen max-h-full md:max-h-full ' : ''}`}>

                  <img
                    src={card.image_uris.border_crop}
                    alt={card.name}
                    className=" rounded-md mx-auto "
                  />
                </div>

                {showInfoText && (
                  <div className=" info-container flex flex-col  w-3/4 md:w-1/2 md:my-10 md:mx-2 md:justify-end border-transparent ">
                    <p className="text-lg md:mb-2 font-semi-bold ">{card.name}</p>
                    <p className="text-sm ">{card.type_line}</p>
                    <p className="text-sm min-h-36">{card.oracle_text}</p>
                  </div>
                )}
                {showRandomizeButton && (
                  <button
                    onClick={handleRandomize}
                    className=" bg-btn-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3 rounded ">
                    Another!
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ArtCard;
