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
    </>
  );
};

export default CardMarket;
