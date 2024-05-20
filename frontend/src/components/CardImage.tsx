import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {objectConverter} from '../utils/objectConverter';

const CardImage = () => {
  const cardData: any = useLoaderData();
  objectConverter(cardData);
  console.log(cardData);
  return (
    <>
      <div>
        <p>hej</p>
      </div>
    </>
  );
};

export default CardImage;
