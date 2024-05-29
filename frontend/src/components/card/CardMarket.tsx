/* eslint-disable react/react-in-jsx-scope */
import {Dispatch, useEffect, useState} from 'react';
import {IPrices, IPrintsAPIResponse, IPrintsData} from './IPrints';
import {delay} from '../../utils/setApiDelay';
import {getImageFromCardFaces} from '../../utils/getImageFromCardFaces';
import {ICard} from './CardsArray';
import {useNavigate} from 'react-router-dom';

interface CardMarketProps {
  card: ICard;
  setActiveCard: Dispatch<any>;
}
const CardMarket: React.FC<CardMarketProps> = ({card, setActiveCard}) => {
  const [prints, setPrints] = useState<IPrintsData[]>([]);
  const cardPrints = card.prints_search_uri.toString();
  const navigate = useNavigate();
  const getSetUri = async (set: string) => {
    navigate(`/cards/${set}`);
  };

  useEffect(() => {
    const getPrints = async () => {
      await delay(1000);
      try {
        const response = await fetch(cardPrints);
        const result: IPrintsAPIResponse = await response.json();
        setPrints(result.data);
      } catch (error) {
        console.error('Error fetching prints:', error);
      }
    };
    if (!cardPrints) return;
    getPrints();
    console.log('CardMarket useEffect');
  }, [cardPrints]);

  const getEURPrice = (prices: IPrices): string | null => {
    const price = prices.eur || prices.eur_foil || null;
    return price ? `${price} €` : 'No price available';
  };

  /**
   *
   * @param print looks at if the print is foil or fullart or both
   * @returns font-color
   */
  const getCardQuality = (print: IPrintsData) => {
    if (print.foil && print.full_art) return 'text-green-200';
    if (print.full_art) return 'text-purple-500';
    if (print.foil) return 'text-[#f0ae58]';
    return 'text-white';
  };

  /**
   *
   * @param print looks at if the print is foil or fullart or both
   * @returns string
   */
  const getCardQualityType = (print: IPrintsData) => {
    if (print.foil && print.full_art) return 'Fullart & Foil';
    if (print.full_art) return 'Fullart';
    if (print.foil) return 'Foil';
    return null;
  };

  const getCardRarity = (print: IPrintsData) => {
    if (print.rarity === 'common') return 'text-yellow-300';
    if (print.rarity === 'uncommon') return 'text-yellow-500';
    if (print.rarity === 'rare') return 'text-orange-400';
    if (print.rarity === 'mythic') return 'text-red-500';
  };

  return (
    <>
      <section className="card-market-grid grid grid-cols-1 gap-4 text-white">
        {/* .map(print) = The amount of diffrent card illustarations  */}
        {prints.map((print, index: number) => {
          const imageUrl =
            print.card_faces && print.card_faces.length > 0
              ? getImageFromCardFaces(print.card_faces)
              : print.image_uris?.border_crop;

          const cardName =
            print.card_faces && print.card_faces.length > 0
              ? print.card_faces[0].name
              : print.name;

          return (
            <div
              key={index}
              className="p-1 card-market-prints-container bg-[#322929] shadow-2xl shadow-[#322929] rounded-sm grid grid-cols-3 gap-1 m-1">
              <div className=" print-container">
                <button onClick={() => setActiveCard(print)}>
                  <img
                    className="shadow shadow-[#0000008a]"
                    src={imageUrl}
                    alt={cardName}
                  />
                </button>
              </div>

              <div className=" print-details-container col-span-2 grid-rows-3 grid-flow-row justify-items-center content-center relative">
                <div className="print-name-quality-container grid grid-cols-3 absolute top-0 w-full">
                  <h1 className={` col-span-3 w-full ${getCardQuality(print)}`}>
                    {cardName}
                  </h1>
                </div>
                <div className="m-1">
                  <p className="text-xs relative top-1">
                    <strong className="text-xs mr-1">SET:</strong>
                    <a
                      className="hover:text-blue-400"
                      onClick={() => getSetUri(print.set)}>
                      {print.set_name}
                    </a>
                  </p>
                  <p className="text-xs relative top-1">
                    <strong className="text-xs mr-1">PRICE:</strong>
                    {getEURPrice(print.prices)}
                  </p>
                </div>
                <p className={`absolute bottom-1 m-1 ${getCardRarity(print)}`}>
                  {print.rarity.charAt(0).toUpperCase() + print.rarity.slice(1)}
                </p>
                <p
                  className={`text-xs absolute right-0 bottom-0 m-1 ${getCardQuality(print)}`}>
                  {getCardQualityType(print)}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CardMarket;
