import {PropsWithChildren, ReactElement} from 'react';
import React from 'react';

type CardProps = {
  card: string;
};

const CardImage = ({card}: PropsWithChildren<CardProps>): ReactElement => {
  return (
    <>
      <div>
        <img src={card} alt="" />
      </div>
    </>
  );
};

export default CardImage;
