/* eslint-disable react/react-in-jsx-scope */

import deckButton from '../assets/decks-icon.webp';
import {ICard} from '../utils/ScryfallInterfaces';

interface AddToDeckProps {
  card: ICard;
  addCardToDeck: (card: ICard) => void;
}

const AddToDeckBtn: React.FC<AddToDeckProps> = ({card, addCardToDeck}) => {
  const handleAddCardToDeck = () => {
    addCardToDeck(card);
  };
  return (
    <>
      {/* hover:shadow-plum hover:bg-mint/60 */}
      {/* hover:border-white */}
      <div className="card-plus-button-container grid grid-cols-1 items-center min-w-8 ">
        <button
          onClick={handleAddCardToDeck}
          className="border-2 border-amber-600 plus-button-circle rounded-full bg-btn-gradient shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 ">
          <img src={deckButton} alt="add-button" />
        </button>
      </div>
    </>
  );
};

export default AddToDeckBtn;
