import { ICard } from "./ICard";

export interface Deck {
  id: string;
  name: string;
  cards: ICard[];
  userId?: string | undefined;
}
