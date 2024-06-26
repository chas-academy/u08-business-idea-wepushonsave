/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {GiEvilWings, GiFireGem} from 'react-icons/gi';
import {LuSword} from 'react-icons/lu';
import Capitalizer from '../customs/customCapitalizer';
import manaSymbols from '../manaSymbols';
import {CustomLoader} from '../customs/customLoader';
import {FaEuroSign} from 'react-icons/fa';

interface Theme {
  _id: string;
  name: string;
  criteria: {
    oracle_text: string[];
  };
  explanation: string;
  count: number;
  cardCount: number;
  commanderCards: string[];
}

interface CardRecommendation {
  name: string;
  count: number;
  cardInfo: {
    image_uris: {
      border_crop: string;
    };
    prices: {
      eur: string;
      eur_foil: string;
    };
    mana_cost: string;
    cmc: number;
    rarity: string;
    keywords: string[];
    [key: string]: any;
  };
}

interface Card {
  name: string;
  image_uris?: {
    border_crop?: string;
  };
  prices?: {
    eur?: string;
    eur_foil?: string;
  };
  mana_cost?: string;
  cmc?: number;
  rarity: string;
  keywords?: string[];
  games?: string[];
}

interface Recommendations {
  artifacts: CardRecommendation[];
  creatures: CardRecommendation[];
  enchantments: CardRecommendation[];
  [key: string]: CardRecommendation[];
}

const ThemeDetail: React.FC = () => {
  const {name} = useParams<{name: any}>();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [commanderCardsDetails, setCommanderCardsDetails] = useState<Card[]>(
    []
  );
  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openDropdown2, setOpenDropdown2] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemeDetails = async () => {
      try {
        const response = await fetch(
          `https://MTGTombAPI.onrender.com/api/theme/recommendation/${encodeURIComponent(name)}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        setError('Error fetching theme details');
      } finally {
        setLoading(false);
      }
    };
    fetchThemeDetails();
  }, [name]);

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const toggleDropdown2 = () => {
    setOpenDropdown2(openDropdown2 ? null : 'Commanders');
  };

  useEffect(() => {
    const fetchThemeInfo = async () => {
      try {
        const response = await fetch(
          `https://mtgtombapi.onrender.com/api/theme/details/${encodeURIComponent(name)}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTheme(data);

        const commanderResponse = await fetch(
          'https://mtgtombapi.onrender.com/api/cards/by-names',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({names: data.commanderCards}),
          }
        );
        if (!commanderResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const commanderData = await commanderResponse.json();
        console.log(commanderData);
        setCommanderCardsDetails(commanderData);
      } catch (error) {
        console.error(error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    if (name) {
      fetchThemeInfo();
    }
  }, [name]);

  if (loading) {
    return (
      <div className="w-full mt-80 flex justify-center content-center">
        <CustomLoader />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!theme) {
    return <div>No theme found</div>;
  }

  const getRarityClass = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'common':
        return 'fill-common';
      case 'uncommon':
        return 'fill-uncommon';
      case 'rare':
        return 'fill-rare';
      case 'mythic':
        return 'fill-mythic';
      default:
        return '';
    }
  };

  const renderRecommendations = (
    title: string,
    cards: CardRecommendation[],
    category: string
  ) => (
    <div key={category} className="w-full flex flex-col items-center">
      <div
        className="bg-custom-purple-800 rounded-lg flex flex-col items-center w-[382px] p-4 my-4 mx-6 cursor-pointer"
        onClick={() => toggleDropdown(category)}>
        <div className="grid grid-cols-2 w-full justify-items-center">
          <h3 className="font-bold text-2xl mb-2 text-left w-full">{title}</h3>
          <div
            className={`transition-transform duration-300 ${openDropdown === category ? 'rotate-180' : ''}`}>
            <LuSword size={32} />
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height duration-300 overflow-x-auto shadow-inner snap-x snap-mandatory no-scrollbar ${openDropdown === category ? 'max-w-[350px]' : 'max-h-0'}`}>
        <ul className="pb-4 px-4 flex flex-row">
          {cards.map((card, index) => (
            <li key={index} className="snap-start flex-shrink-0 mx-2 top-0">
              <div className="bg-custom-purple-800 rounded-lg flex flex-col items-center pb-2 px-4 w-80 h-full">
                <h2 className="font-bold text-lg my-2">
                  <Capitalizer text={card.name} />
                </h2>
                <img
                  src={card.cardInfo.image_uris.border_crop}
                  alt={card.name}
                  className="rounded-lg drop-shadow-md w-11/12"
                />
                <div className="flex flex-col items-center mt-4 w-full">
                  <div className="p-1 rounded-lg shadow-inner bg-plum">
                    <div className="grid grid-cols-4 gap-x-2 text-center">
                      <p className="font-semibold text-green-200">Normal</p>
                      <p className="flex flex-row items-center">
                        <FaEuroSign /> {card.cardInfo.prices.eur || 'N/A'}
                      </p>
                      <p className="font-semibold text-[#f0ae58]">Foil</p>
                      <p className="flex flex-row items-center">
                        <FaEuroSign /> {card.cardInfo.prices.eur_foil || 'N/A'}
                      </p>
                    </div>
                    <div className="grid grid-cols-10 gap-1 my-2">
                      {card.cardInfo.mana_cost
                        .split('}{')
                        .map((mana: string, index: number) => {
                          const formattedMana = `{${mana.replace(/[{}]/g, '')}}`;
                          const matchedSymbol = manaSymbols.find(
                            symbol => symbol.symbol === formattedMana
                          );
                          return matchedSymbol ? (
                            <img
                              key={index}
                              src={matchedSymbol.imageUrl}
                              alt={matchedSymbol.description}
                              title={matchedSymbol.description}
                              className="h-6 w-6"
                            />
                          ) : null;
                        })}
                    </div>
                    <p>Decks: {card.count}</p>
                    <p>
                      <strong>CMC: </strong> {card.cardInfo.cmc}
                    </p>
                    <p className="flex flex-row items-center">
                      <strong>Rarity: </strong>
                      <GiFireGem
                        size={32}
                        className={getRarityClass(card.cardInfo.rarity)}
                      />{' '}
                      <Capitalizer text={card.cardInfo.rarity} />
                    </p>
                    <p>
                      <strong>Keywords: </strong>
                      {card.cardInfo.keywords.map((word: any) => {
                        return `${word}, `;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full flex flex-col content-center max-w-[600px] text-silverpine">
      <div className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6">
        <h1 className="text-4xl font-bold my-4">
          <Capitalizer text={theme.name} />
        </h1>
        <div>
          <GiEvilWings size={50} />
        </div>
        <div className="p-4 rounded-lg shadow-inner bg-plum">
          <p className="text-lg my-4 text-center">{theme.explanation}</p>
          <h3 className="font-bold mb-2 text-2xl">Criteria</h3>
          <ul className="list-disc list-inside">
            {theme.criteria.oracle_text.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <p className="text-lg mt-4">
            <strong>Count:</strong> {theme.count}
          </p>
          <p className="text-lg">
            <strong>Card Count:</strong> {theme.cardCount}
          </p>
        </div>
      </div>
      <div
        className="bg-custom-purple-800 rounded-lg flex flex-col items-center w-[382px] p-4 my-4 mx-6 cursor-pointer"
        onClick={() => toggleDropdown2()}>
        <div className="grid grid-cols-2 w-full justify-items-center">
          <h3 className="font-bold text-2xl mb-2 text-left w-full">
            Commanders
          </h3>
          <div
            className={`transition-transform duration-300 ${openDropdown2 ? 'rotate-180' : ''}`}>
            <LuSword size={32} />
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height duration-300 overflow-x-auto shadow-inner snap-x snap-mandatory no-scrollbar ${openDropdown2 ? 'max-w-[350px]' : 'max-h-0'}`}>
        <ul className="pb-4 px-4 flex flex-row">
          {commanderCardsDetails
            .filter(
              card =>
                card.games &&
                !(card.games.length === 1 && card.games[0] === 'arena')
            )
            .filter(card => !card.name.includes('//'))
            .map(
              (card, index) =>
                card && (
                  <li
                    key={index}
                    className="snap-start flex-shrink-0 mx-2 top-0">
                    <div className="bg-custom-purple-800 rounded-lg flex flex-col items-center pb-2 px-4 w-80 h-full">
                      <h2 className="font-bold text-lg my-2">
                        <Capitalizer text={card.name} />
                      </h2>
                      <img
                        src={card.image_uris?.border_crop}
                        alt={card.name}
                        className="rounded-lg drop-shadow-md w-11/12"
                      />
                      <div className="flex flex-col items-center mt-4 w-full">
                        <div className="p-1 rounded-lg shadow-inner bg-plum">
                          <div className="grid grid-cols-4 gap-x-2 text-center">
                            <p className="font-semibold text-green-200">
                              Normal
                            </p>
                            <p className="flex flex-row items-center">
                              <FaEuroSign /> {card.prices?.eur || '?'}
                            </p>
                            <p className="font-semibold text-[#f0ae58]">Foil</p>
                            <p className="flex flex-row items-center">
                              <FaEuroSign /> {card.prices?.eur_foil || '?'}
                            </p>
                          </div>
                          <div className="grid grid-cols-10 gap-1 my-2">
                            {card.mana_cost?.split('}{').map((mana, index) => {
                              const formattedMana = `{${mana.replace(/[{}]/g, '')}}`;
                              const matchedSymbol = manaSymbols.find(
                                symbol => symbol.symbol === formattedMana
                              );
                              return matchedSymbol ? (
                                <img
                                  key={index}
                                  src={matchedSymbol.imageUrl}
                                  alt={matchedSymbol.description}
                                  title={matchedSymbol.description}
                                  className="h-6 w-6"
                                />
                              ) : null;
                            })}
                          </div>
                          <p>
                            <strong>CMC: </strong> {card.cmc}
                          </p>
                          <p className="flex flex-row items-center">
                            <strong>Rarity: </strong>
                            <GiFireGem
                              size={32}
                              className={getRarityClass(card.rarity)}
                            />{' '}
                            <Capitalizer text={card.rarity} />
                          </p>
                          <p>
                            <strong>Keywords: </strong>
                            {card.keywords?.join(', ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
            )}
        </ul>
      </div>
      {recommendations && (
        <div className="w-full">
          {Object.entries(recommendations).map(([category, cards]) =>
            renderRecommendations(
              category.charAt(0).toUpperCase() + category.slice(1),
              cards,
              category
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeDetail;
