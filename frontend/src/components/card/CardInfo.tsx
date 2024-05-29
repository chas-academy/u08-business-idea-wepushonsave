/* eslint-disable react/react-in-jsx-scope */

import {convertObjectToArray} from '../../utils/convertObjectToArray';
import {ICard} from './CardsArray';

interface CardInfoProps {
  card: ICard;
}

const CardInfo: React.FC<CardInfoProps> = ({card}) => {
  const extractCardData = (cardData: ICard) => {
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

  const cardInfo = extractCardData(card);
  const info = convertObjectToArray(cardInfo);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 bg-[#322929] gap-1">
          {info.map(({key, value}, index) => (
            <div key={index} className="border border-black m-1">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
              {typeof value === 'object' ? value.join(', ') : value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardInfo;
