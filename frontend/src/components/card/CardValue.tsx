/* eslint-disable react/react-in-jsx-scope */

import {ICard} from '../../utils/ScryfallInterfaces';

interface CardValueProps {
  card: ICard;
}
const CardValue: React.FC<CardValueProps> = ({card}) => {
  return (
    <>
      {card.prices && (
        <h1 className="card-calue-text text-xl">
          {card.prices.eur ? 'Card Value:' + card.prices.eur + '€' : ''}
        </h1>
      )}
    </>
  );
};

export default CardValue;
