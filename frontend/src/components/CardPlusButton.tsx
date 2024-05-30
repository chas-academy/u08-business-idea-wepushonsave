/* eslint-disable react/react-in-jsx-scope */

import plusButton from '../assets/plus.svg';
import {navigate} from '../utils/navigate';

const CardPlusButton = () => {
  return (
    <>
      {/* hover:shadow-plum hover:bg-mint/60 */}
      {/* hover:border-white */}
      <div className="card-plus-button-container grid grid-cols-1 items-center min-w-8 ">
        <button className="border-2 border-amber-600 plus-button-circle rounded-full bg-btn-gradient shadow-md hover:shadow-lg hover:shadow-plum hover:bg-mint/60 ">
          <img src={plusButton} alt="add-button" />
        </button>
      </div>
    </>
  );
};

export default CardPlusButton;
