import { IUser } from "./IUser";

export interface Deck {
  id: string;
  name: string;
  cards: string[];
  userId?: string | undefined;
}
