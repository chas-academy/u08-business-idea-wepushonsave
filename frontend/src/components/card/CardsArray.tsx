
/* eslint-disable react/react-in-jsx-scope */
import {useLoaderData, useNavigate} from 'react-router-dom';
import {ICardInfo} from './ICardInfo';
import {IPrintsAPIResponse} from './IPrints';

/**
 * @IAPIResponse
 *  | @data : [ x { card-objects } ]
 *    | @ICard : { key - value }

 */

// Defines the structure of image_uris
interface IImageUris {
  border_crop: string;
}

export interface ICardFaces {
  name: string;
  image_uris: IImageUris;
}

// Defines the structure of each card
export interface ICard {
  name: string;
  id: string;
  image_uris: IImageUris;

  card_faces: ICardFaces[];
  mana_cost: string[];
  cmc: number;
  power: string;
  toughness: string;
  colors: string[];
  lang: string;
  released_at: string;
  keywords: string[];
  type_line: string;
  oracle_text: string;
  finishes: string[];
  collector_number: string;
  rarity: string;
  artist: string;
  frame: string;
  full_art: boolean;
  promo: boolean;
  booster: boolean;
  reserved: boolean;
  reprint: boolean;
  variation: boolean;
  set: string;
  set_name: string;
  set_type: string;
  edhrec_rank: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  prints_search_uri: IPrintsAPIResponse;
  legalities: string[];
}

// Defines the structure for the API response
export interface IAPIResponse {
  data: ICard[];
}

const CardsArray: React.FC = () => {
  const apiResponse = useLoaderData() as IAPIResponse;
  const cards = apiResponse.data;
  const navigate = useNavigate();

  const getCardId = async (id: string) => {
    navigate(`/card/${id}`);
  };

  if (cards !== null) {
    return (
      <>
        <div className="grid grid-cols-3 gap-1">
          {cards.map((value, index) => (
            <div key={index}>
              <img
                onClick={() => getCardId(value.id)}
                src={value.image_uris.border_crop}
                alt={value.name + 'card image'}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default CardsArray;
