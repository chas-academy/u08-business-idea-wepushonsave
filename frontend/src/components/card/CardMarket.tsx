/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {IPrices, IPrintsAPIResponse, IPrintsData} from './IPrints';
import {delay} from '../../utils/setApiDelay';
import {getImageFromCardFaces} from '../../utils/getImageFromCardFaces';
import {ICard} from './CardsArray';
import {useNavigate} from 'react-router-dom';

interface CardMarketProps {
  card: ICard;
}
const CardMarket: React.FC<CardMarketProps> = ({card}) => {
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
              className="card-market-prints-container text-re  bg-[#322929] shadow-2xl shadow-[#322929] rounded-sm grid grid-cols-3 gap-1 m-1">
              <div className="print-container m-2 ">
                <img
                  className="shadow shadow-[#0000008a]"
                  src={imageUrl}
                  alt={cardName}
                />
              </div>

              <div className="print-details-container col-span-2 justify-items-center content-center relative mr-2">
                <div className="print-name-quality-container border border-red-600 grid grid-cols-3 absolute top-0 m-2 w-full -ml-2">
                  <h1
                    className={`text-xl col-span-2 text-nowrap ${getCardQuality(print)}`}>
                    {cardName}
                  </h1>

                  <p
                    className={`text-xs absolute right-3 top-2 ${getCardQuality(print)}`}>
                    {getCardQualityType(print)}
                  </p>
                </div>

                <p className="text-sm border text-nowrap">
                  <strong className="m-2">SET:</strong>
                  <a onClick={() => getSetUri(print.set)}>{print.set_name}</a>
                </p>
                <p className="text-sm text-nowrap">
                  <strong className="m-2">PRICE:</strong>
                  {getEURPrice(print.prices)}
                </p>
                <p className={`absolute bottom-2 m-2 ${getCardRarity(print)}`}>
                  {print.rarity.charAt(0).toUpperCase() + print.rarity.slice(1)}
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
