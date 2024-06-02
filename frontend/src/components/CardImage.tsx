/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import {getImageFromCardFaces} from '../utils/getImageFromCardFaces';
import x from '../assets/x-letter.svg';
import {ICard} from '../utils/ScryfallInterfaces';

interface CardImageProps {
  card: ICard;
  onClose: () => void;
}

const CardImage: React.FC<CardImageProps> = ({card, onClose}) => {
  const imageUrl =
    card.card_faces && card.card_faces.length > 0
      ? getImageFromCardFaces(card.card_faces)
      : card.image_uris?.border_crop;

  return (
    <>
      <div className="card-image-container z-0 flex justify-center items-center ">
        <img className="rounded-2xl" src={imageUrl} alt={card.name} />
        <button
          className="search-result-btn z-1 flex items-center justify-center rounded-full bg-neutral-300 w-5 h-5 absolute -top-2 -right-2"
          onClick={() => onClose()}>
          <img className=" w-4 h-4 text-neutral-700" src={x} alt="" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
};

export default CardImage;
