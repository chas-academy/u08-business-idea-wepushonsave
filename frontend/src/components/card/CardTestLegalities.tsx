import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardTestLegalities = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const cardLegalities = convertObjectToArray(cardData.legalities);
  console.log(cardLegalities);

  return <></>;
};

export default CardTestLegalities;
