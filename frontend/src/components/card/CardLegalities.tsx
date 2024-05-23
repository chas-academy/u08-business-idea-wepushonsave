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
      {cardLegalities.map(({key, value}, index) => (
        <p key={index}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
          {typeof value === 'object' ? value.join(', ') : value}
        </p>
      ))}
    </>
  );
};

export default CardLegalities;
