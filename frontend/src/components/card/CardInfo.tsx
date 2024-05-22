import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {convertObjectToArray} from '../../utils/convertObjectToArray';
import {ICardInfo} from './ICardInfo';

const CardInfo = () => {
  //FIXME See if there is any other data-type we can use for an unknown value
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const cardData: any = useLoaderData();
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const extractCardData = (cardData: ICardInfo) => {
    return {
      name: cardData.name,
      mana_cost: cardData.mana_cost,
      cmc: cardData.cmc,
      power: cardData.power,
      toughness: cardData.toughness,
      colors: cardData.colors,
      lang: cardData.lang,
      released_at: cardData.released_at,
      keywords: cardData.keywords,
      type_line: cardData.type_line,
      oracle_text: cardData.oracle_text,
      finishes: cardData.finishes,
      collector_number: cardData.collector_number,
      rarity: cardData.rarity,
      artist: cardData.artist,
      frame: cardData.frame,
      full_art: cardData.full_art,
      promo: cardData.promo,
      booster: cardData.booster,
      reserved: cardData.reserved,
      reprint: cardData.reprint,
      variation: cardData.variation,
      set: cardData.set,
      set_name: cardData.set_name,
      set_type: cardData.set_type,
      edhrec_rank: cardData.edhrec_rank,
      tcgplayer_id: cardData.tcgplayer_id,
      cardmarket_id: cardData.cardmarket_id,
    };
  };

  const cardInfo: ICardInfo = extractCardData(cardData);
  const info = convertObjectToArray(cardInfo);
  console.log(info);

  return (
    <>
      <div>
        <p>Card Information</p>
        {info.map(({key, value}, index) => (
          <p key={index}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
            {typeof value === 'object' ? value.join(', ') : value}
          </p>
        ))}
      </div>
    </>
  );
};
export default CardInfo;
