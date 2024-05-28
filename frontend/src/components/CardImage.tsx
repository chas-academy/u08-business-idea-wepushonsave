/* eslint-disable react/react-in-jsx-scope */

import {useLoaderData} from 'react-router-dom';
import {getImageFromCardFaces} from '../utils/getImageFromCardFaces';

const CardImage = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */
  const imageUrl =
    cardData.card_faces && cardData.card_faces.length > 0
      ? getImageFromCardFaces(cardData.card_faces)
      : cardData.image_uris?.border_crop;

  return (
    <>
      <div className="card-image-container flex justify-center items-center size-fit">
        <img className="size-9/12 shadow-xl" src={imageUrl} alt="" />
      </div>
    </>
  );
};

export default CardImage;
