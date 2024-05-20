import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../utils/convertObjectToArray';

const CardImage: React.FC = () => {
  const cardData: any = useLoaderData();
  const cardImage = convertObjectToArray(cardData.image_uris.border_crop);

  return (
    <>
      <div>
        <p>CardImage.tsx</p>
      </div>
    </>
  );
};

export default CardImage;
