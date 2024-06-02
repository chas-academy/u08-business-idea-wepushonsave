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
  imgStyles,
  infoStyles,
}) => {
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
        <>
          {card && (
            <>
              <div
                className={`randomSingleCard flex flex-col text-center items-center md:items justify-center md:flex-row text-white/80 md:p-2 ${standalone ? ' md:flex-row bg-red-500 w-screen ' : ''}`}
                style={containerStyles}
              >
                <div className="img-container flex flex-col" style={imgStyles}>
                  <img
                    src={card.image_uris.border_crop}
                    alt={card.name}
                    className="rounded-md mx-auto"
                    style={{ maxHeight: '300px', objectFit: 'contain' }}

                  />
                </div>
                <div className='text-container flex flex-col md:w-1/3 items-center p-2'>
                  {showInfoText && (
                    <div
                      style={infoStyles}
                    >
                      <p className="text-lg md:mb-2 font-semi-bold">{card.name}</p>
                      <p className="text-md w-[30vw]">{card.type_line}</p>
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
