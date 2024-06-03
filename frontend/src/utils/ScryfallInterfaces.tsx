export interface IImageUris {
  border_crop: string;
}

export interface ICardFaces {
  name: string;
  image_uris: IImageUris;
}

export interface ICardInfo {
  name: string;
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
}

export interface IPrices {
  eur?: string | null;
  eur_foil?: string | null;
  tix?: string | null;
  usd?: string | null;
  usd_etched?: string | null;
  usd_foil?: string | null;
}

export interface IPrintsData {
  card_faces: ICardFaces[];
  image_uris: IImageUris;
  foil: boolean;
  full_art: boolean;
  name: string;
  prices: IPrices;
  rarity: string;
  related?: string;
  set: string;
  set_name: string;
  set_search_uri: string;
  type_line: string;
}

export interface IPrintsAPIResponse {
  data: IPrintsData[];
}

export interface ICard {
  name: string;
  id: string;
  image_uris: IImageUris;
  card_faces: ICardFaces[];
  mana_cost: string;
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
  print: IPrintsData;
}

export interface IAPIResponse {
  data: ICard[];
}

export interface CardMarketProps {
  card: ICard;
  setActiveCard: React.Dispatch<React.SetStateAction<ICard | undefined>>;
}
