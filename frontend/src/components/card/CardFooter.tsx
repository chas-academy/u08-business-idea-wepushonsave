/* eslint-disable react/react-in-jsx-scope */

import CardPlusButton from '../CardPlusButton';
import CardValue from './CardValue';

const CardFooter = () => {
  return (
    <>
      <div className="card-footer-value col-span-2 ">
        <CardValue />
      </div>
      <div className="card-footer-plus-button-container w-9">
        <CardPlusButton />
      </div>
    </>
  );
};

export default CardFooter;
