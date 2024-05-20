import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';

const CardLegalities = () => {
  const cardData: any = useLoaderData();
  const cardLegalities = convertObjectToArray(cardData.legalities);
  console.log(cardLegalities);

  return (
    <>
      <h1>Card Legalities</h1>
    </>
  );
};

export default CardLegalities;
