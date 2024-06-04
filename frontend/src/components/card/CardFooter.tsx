/* eslint-disable react/react-in-jsx-scope */

import {ICard} from '../../utils/ScryfallInterfaces';
import AddToDeckBtn from '../AddToDeckBtn';
import CardPlusButton from '../CardPlusButton';
import CardValue from './CardValue';

interface CardFooterProps {
  card: ICard;
  addCardToDeck: (card: ICard) => void;
}

const CardFooter: React.FC<CardFooterProps> = ({card, addCardToDeck}) => {
  return (
    <>
      <div className="flex justify-center items-center m-2">
        <div className="card-footer-value col-span-2 ">
          <CardValue card={card} />
        </div>
      </div>
      <div className="flex justify-end gap-2 m-2">
        <div className="card-footer-plus-button-container w-9">
          <CardPlusButton />
        </div>
        <div className="card-footer-plus-button-container w-9">
          <AddToDeckBtn card={card} addCardToDeck={addCardToDeck} />
        </div>
      </div>
    </>
  );
};

export default CardFooter;
