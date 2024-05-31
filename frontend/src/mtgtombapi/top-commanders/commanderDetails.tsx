/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {GiMagicSwirl} from 'react-icons/gi';
import {LuSword} from 'react-icons/lu';
import Capitalizer from '../customs/customCapitalizer';
import manaSymbols from '../manaSymbols';
import ThemeDropdown from '../customs/themeDropdown';
import { CustomLoader } from '../customs/customLoader';

interface Commander {
  _id: string;
  name: string;
  rank: number;
  num_decks: number;
  imgSrc: string;
  themes: string[];
}

interface CommanderInfo {
  imgSrc?: string;
  [key: string]: any;
}

interface CardRecommendation {
  name: string;
  count: number;
  cardInfo: {
    imgSrc: string;
    [key: string]: any;
  };
}

interface Ruling {
  oracle_id: string;
  comment: string;
  published_at: string;
}

interface Recommendations {
  artifacts: CardRecommendation[];
  creatures: CardRecommendation[];
  enchantments: CardRecommendation[];
  [key: string]: CardRecommendation[];
}

const CommanderDetails: React.FC = () => {
  const {name} = useParams<{name: any}>();
  const location = useLocation();
  const state = location.state as {commander: Commander} | undefined;
  const [commander] = useState<Commander | null>(
    state?.commander || null
  );
  const [commanderInfo, setCommanderInfo] = useState<CommanderInfo | null>(
    null
  );
  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<string | null>(
    commander?.themes[0] || null
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [additionalInfoOpen, setAdditionalInfoOpen] = useState<boolean>(false);
  const [rulings, setRulings] = useState<Ruling[]>([]);

  useEffect(() => {
    const fetchCommanderInfo = async () => {
      try {
        const response = await fetch(
          `https://MTGTombAPI.onrender.com/api/allcards?name=${encodeURIComponent(name)}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCommanderInfo(data);
      } catch (error) {
        setError('Error fetching commander information');
      } finally {
        setLoading(false);
      }
    };

    if (!commanderInfo) {
      fetchCommanderInfo();
    } else {
      setLoading(false);
    }
  }, [name, commanderInfo]);

  const fetchInitialRecommendations = async () => {
    try {
      const response = await fetch(
        `https://MTGTombAPI.onrender.com/api/theme/recommendation/${encodeURIComponent(commander!.themes[0])}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      setError('Error fetching initial recommendations');
    }
  };

  const fetchThemeRecommendations = async (theme: string) => {
    try {
      const response = await fetch(
        `https://MTGTombAPI.onrender.com/api/theme/recommendation/${encodeURIComponent(theme)}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      setError('Error fetching recommendations for theme');
    }
  };

  const fetchRulings = async (uri: string) => {
    try {
      const response = await fetch(uri);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRulings(data.data);
    } catch (error) {
      setError('Error fetching rulings');
    }
  };

  const handleThemeClick = (theme: string) => {
    setActiveTheme(theme);
    fetchThemeRecommendations(theme);
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  useEffect(() => {
    if (commander) {
      setActiveTheme(commander.themes[0]);
      fetchInitialRecommendations();
    }
  }, [commander]);

  useEffect(() => {
    if (commanderInfo?.rulings_uri) {
      fetchRulings(commanderInfo.rulings_uri);
    }
  }, [commanderInfo?.rulings_uri]);

  if (loading) {
    return <div className='w-full mt-80 flex justify-center content-center'><CustomLoader></CustomLoader></div> ;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!commander) {
    return <div>No commander found</div>;
  }

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
        className={`transition-max-height duration-300 overflow-y-auto shaddow-inner mb-6 snap-y snap-mandatory ${openDropdown === category ? 'max-h-[600px] max-w-[350px]' : 'max-h-0'}`}>
        <ul className="space-y-4 p-4 ">
          {cards.map((card, index) => (
            <li key={index} className='snap-start'>
              <div className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6">
                <h2 className="font-bold text-xl mb-2">
                  <Capitalizer text={card.name} />
                </h2>
                <img
                  src={card.cardInfo.image_uris.border_crop}
                  alt={card.name}
                  className="rounded-2xl drop-shadow-md"
                />
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
                <p className="text-lg">Decks: {card.count}</p>
                <p>
                  <strong>Keywords: </strong>
                  {card.cardInfo.keywords.map((word: any) => {
                    return `${word}, `;
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6">
        <h2 className="font-bold text-2xl mb-2">{commander.name}</h2>
        <img
          src={commander.imgSrc}
          alt={commander.name}
          className="rounded-2xl drop-shadow-md"
        />
        <p className="text-lg">Decks: {commander.num_decks}</p>
        <h3 className="font-bold mb-2 text-2xl">Themes</h3>
        <div className="my-4">
          <ThemeDropdown
            options={commander.themes}
            selectedValue={activeTheme || ''}
            onSelect={handleThemeClick}
          />
        </div>
        {commanderInfo?.image_uris?.border_crop && (
          <div className="flex flex-col items-center mt-4 w-full">
            <div
              className="bg-custom-purple-800 rounded-lg flex flex-col items-center p-4 my-4 mx-6 cursor-pointer"
              onClick={() => setAdditionalInfoOpen(!additionalInfoOpen)}>
              <div className="grid grid-cols-4 justify-items-center items-center w-full">
                <h3 className="font-bold text-2xl mb-2 col-span-3">
                  Additional Info{' '}
                </h3>
                <div
                  className={`transition-transform duration-300  ${additionalInfoOpen ? 'rotate-180' : ''}`}>
                  <GiMagicSwirl size={32} />
                </div>
              </div>
            </div>
            <div
              className={`transition-max-height duration-300 overflow-y-auto ${additionalInfoOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-4 rounded-lg shadow-inner bg-plum">
                <div className="grid grid-cols-10 my-2">
                  {commanderInfo.mana_cost
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
                <p className="text-xl font-semibold my-2">
                  {commanderInfo.type_line}
                </p>
                {/* <p>{commanderInfo.oracle_text}</p> */}
                <p className='text-xl'>
                  <strong>Converted Mana Cost: </strong> {commanderInfo.cmc}
                </p>
                <p className='text-xl'>
                  <strong>Keywords: </strong>
                  {commanderInfo.keywords.map((word: any) => {
                    return `${word}, `;
                  })}
                </p>
                <p className='text-xl'>
                  <strong>Set:</strong> {commanderInfo.set_name}
                </p>
                <p className='text-xl'>
                  <strong>Rarity:</strong> {commanderInfo.rarity}
                </p>
                <p className='text-xl'>
                  <strong>Released:</strong> {commanderInfo.released_at}
                </p>
                <ul>
                  {rulings.length > 0 && (
                    <div className="mt-4">
                      <p className='text-xl'>
                        <strong>Rulings:</strong>
                      </p>
                      <ul className="list-disc list-inside">
                        {rulings.map((ruling, index) => (
                          <li key={index} className='text-xl'>
                            {ruling.comment} <br />
                            <span className="font-semibold">
                              ({ruling.published_at})
                            </span>
                            <br />
                            <br />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
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

export default CommanderDetails;
