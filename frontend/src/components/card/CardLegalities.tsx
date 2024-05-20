import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardLegalities = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const cardLegalities = convertObjectToArray(cardData.legalities);
  console.log(cardLegalities);
  return (
    <>
      <h1>Card Legalities</h1>
    </>
  );
};

export default CardLegalities;
