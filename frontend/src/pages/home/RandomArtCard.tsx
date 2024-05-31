import React, {useState, useEffect} from 'react';
import SearchResults from '../../components/search/SearchResults';
import {useSearch} from '../../components/search/SearchContext';

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
  const {results} = useSearch();

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
    <>
      {results.length <= 0 && (
        <div className="flex justify-center items-start h-screen md:min-w-screen items">
          {card && (
            <>
              <div className=" randomsinglecard flex flex-col text-center items-center md:items justify-center text-white/80 p-5 md:pt-16 md:p-2 md:flex-row md:h-screen w-screen">
                <div className="img-container flex flex-col h-1/2 max-h-full md:max-h-full  md:size-80 md:w-1/4 justify-center items-center m-5 p-5">
                  <button
                    onClick={handleRandomize}
                    className=" bg-btn-gradient hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 ">
                    Another!
                  </button>
                  <img
                    src={card.image_uris.border_crop}
                    alt={card.name}
                    className=" rounded-md mx-auto size-50 "
                  />
                </div>

                <div className=" info-container flex flex-col w-3/4 md:w-1/2 md:my-40 md:mx-2 md:justify-end border-transparent ">
                  <p className="text-lg md:mb-5 font-semi-bold">{card.name}</p>
                  <p className="text-sm">{card.type_line}</p>
                  <p className="text-sm">{card.oracle_text}</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ArtCard;
