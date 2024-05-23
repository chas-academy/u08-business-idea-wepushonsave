import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardMarket = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const cardPrints = cardData.prints_search_uri;
  console.log(cardPrints);
  const cardPrices = convertObjectToArray(cardData.prices);
  console.log(cardPrices);
  const cardMarkets = convertObjectToArray(cardData.purchase_uris);
  console.log(cardMarkets);

  return (
    <>
      <div className="grid grid-cols-2 bg-[#8cbfb5] gap-1">
        {cardPrices.map(({key, value}, index) => (
          <div className="border border-black m-1">
            <p key={index}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {value === null ? null : typeof value === 'object' ? '' : value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 bg-[#8cbfb5] gap-1">
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
