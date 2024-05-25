import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';
import {useEffect, useState} from 'react';
import {IPrices, IPrintsAPIResponse, IPrintsData} from './IPrints';

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const CardMarket = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  console.log(cardData);

  const [prints, setPrints] = useState<IPrintsData[]>([]);

  const cardPrices = convertObjectToArray(cardData.prices);
  console.log(cardPrices);
  const cardMarkets = convertObjectToArray(cardData.purchase_uris);
  const cardPrints = cardData.prints_search_uri.toString();

  useEffect(() => {
    const getPrints = async () => {
      await delay(1000);
      try {
        const response = await fetch(cardPrints);
        const result: IPrintsAPIResponse = await response.json();
        setPrints(result.data);
        console.log(convertObjectToArray(prints));

        if (prints != null) {
          console.log(prints);
        }
      } catch (error) {
        console.error('Error fetching prints:', error);
      }
    };
    getPrints();
  }, []);

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
  return (
    <>
      <section className="card-market-grid grid grid-cols-1 gap-4 text-white">
        {/* .map(print) = The amount of diffrent card illustarations  */}
        {prints.map(print => {
          return (
            <div className="card-market-prints-container  bg-[#322929] shadow-2xl shadow-[#322929] rounded-sm grid grid-cols-3 gap-1 m-1">
              <div className="print-container m-2 ">
                <img
                  className="shadow shadow-[#0000008a]"
                  src={print.image_uris.border_crop}
                  alt=""
                />
              </div>
              <div className="print-details-container col-span-2 justify-items-center content-center relative mr-2">
                <div className="print-name-quality-container grid grid-cols-3 absolute top-0 m-2 w-full">
                  <h1 className={`text-xl col-span-2 ${getCardQuality(print)}`}>
                    {print.name}
                  </h1>
                  <p
                    className={`text-xs absolute right-3 top-2 ${getCardQuality(print)}`}>
                    {getCardQualityType(print)}
                  </p>
                </div>
                <p>
                  <strong className="m-2">SET:</strong>
                  {print.set_name}
                </p>
                <p>
                  <strong className="m-2">PRICE:</strong>
                  {getEURPrice(print.prices)}
                </p>
              </div>
            </div>
          );
        })}
        <div className="grid grid-cols-2 bg-[#322929] gap-1">
          {cardPrices.map(({key, value}, index) => (
            <div key={index} className="border border-black m-1">
              <p>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                {value === null ? null : typeof value === 'object' ? '' : value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 bg-[#322929] gap-1">
          {cardMarkets.map(({key, value}, index) => (
            <div className="border border-black m-1">
              <a
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                key={index}>
                <p className="underline text-center">
                  {key ? key.charAt(0).toUpperCase() + key.slice(1) : null}:
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardMarket;
