import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';
import {useEffect, useState} from 'react';
import {IPrintsAPIResponse, IPrintsData} from './IPrints';

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
  const cardMarkets = convertObjectToArray(cardData.purchase_uris);
  const cardPrints = cardData.prints_search_uri.toString();

  useEffect(() => {
    const getPrints = async () => {
      await delay(1000);
      const response = await fetch(cardPrints);
      const result: IPrintsAPIResponse = await response.json();
      setPrints(result.data);
      console.log(convertObjectToArray(prints));

      if (prints != null) {
        console.log(prints);
      }
    };
    getPrints();
  }, []);
  return (
    <>
      {prints.map(print => (
        <img src={print.image_uris.border_crop} alt="" />
      ))}
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
    </>
  );
};

export default CardMarket;
