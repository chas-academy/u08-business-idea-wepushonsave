/* eslint-disable react/react-in-jsx-scope */

import {convertObjectToArray} from '../../utils/convertObjectToArray';
import {ICard} from './CardsArray';

interface CardLegalitiesProps {
  card: ICard;
}
const CardLegalities: React.FC<CardLegalitiesProps> = ({card}) => {
  const cardLegalities = convertObjectToArray(card.legalities);

  return (
    <>
      <div className="grid grid-cols-2 bg-[#322929] gap-1">
        {cardLegalities.map(({key, value}, index) => (
          <div key={index} className="border border-black m-1 ">
            <p>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {typeof value === 'object' ? value.join(', ') : value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardLegalities;
