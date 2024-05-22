import React from 'react';
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
      <h1>Card Market</h1>
      <div>
        {cardPrices.map(({key, value}, index) => (
          <p key={index}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
            {typeof value === 'object' ? '' : value}
          </p>
        ))}
      </div>

      <div>
        {cardMarkets.map(({key, value}, index) => (
          <a href={value} target="_blank" rel="noopener noreferrer" key={index}>
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
          </a>
        ))}
      </div>
    </>
  );
};

export default CardMarket;
