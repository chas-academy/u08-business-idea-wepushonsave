import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardMarket = () => {
  const cardData: any = useLoaderData();
  const cardPrints = cardData.prints_search_uri;
  console.log(cardPrints);
  const cardPrices = convertObjectToArray(cardData.prices);
  console.log(cardPrices);
  const cardMarkets = convertObjectToArray(cardData.purchase_uris);
  console.log(cardMarkets);

  return (
    <>
      <h1>Card Market</h1>
    </>
  );
};

export default CardMarket;
