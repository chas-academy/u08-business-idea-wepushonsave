import {ICardFaces} from './CardsArray';

export interface IPrintsAPIResponse {
  data: IPrintsData[];
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

interface IImageUris {
  border_crop: string;
}

export interface IPrices {
  eur?: string | null;
  eur_foil?: string | null;
  tix?: string | null;
  usd?: string | null;
  usd_etched?: string | null;
  usd_foil?: string | null;
}
