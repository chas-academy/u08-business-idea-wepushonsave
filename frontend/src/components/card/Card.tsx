import {useEffect, useState} from 'react';
import React from 'react';

// Components
import CardImage from '../CardImage';
import CardInfo from './CardInfo';
import CardMarket from './CardMarket';
import CardLegalities from './CardLegalities';

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const Card = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [card, setCard]: any = useState();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const getCard = async () => {
    await delay(1000);
    const cardID = '56ebc372-aabd-4174-a943-c7bf59e5028d';
    const url = `https://api.scryfall.com/cards/${cardID}`;
    const response = await fetch(url);
    const result = await response.json();
    setCard(result);
    console.log(card);
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <>
      <main className="border border-red-600 h-screen ">
        {card && (
          <>
            <CardImage card={card.image_uris.border_crop}></CardImage>
            <CardInfo card={card}></CardInfo>
            <CardMarket card={card.prices}></CardMarket>
            <CardLegalities legalities={card.legalities}></CardLegalities>
          </>
        )}
      </main>
    </>
  );
};

export default Card;
