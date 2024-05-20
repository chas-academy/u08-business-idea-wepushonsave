import React from 'react';
import {useLoaderData} from 'react-router-dom';

const CardImage = () => {
  const cardData: any = useLoaderData();
  const cardImage = cardData.image_uris.border_crop;

  return (
    <>
      <div>
        <img src={cardImage} alt="" />
      </div>
    </>
  );
};

export default CardImage;
