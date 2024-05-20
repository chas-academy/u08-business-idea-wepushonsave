import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardTestLegalities = () => {
  const cardData: any = useLoaderData();
  const cardLegalities = convertObjectToArray(cardData.legalities);
  console.log(cardLegalities);

  return <></>;
};

export default CardTestLegalities;
