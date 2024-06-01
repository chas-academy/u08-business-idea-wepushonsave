import { Deck } from "../interfaces/IDeck";
/**
 * @Deck
 * A container that can hold:
 * 100 unique cards
 */
const decks: Deck[] = [];
/**
 *
 * @param name user-named deck
 * @returns a new instanse of an empty deck
 */
export const createDeck = (name: string, userId: string): Deck => {
  const newDeck: Deck = {
    id: (decks.length + 1).toString(),
    name,
    cards: [],
    userId,
  };
  decks.push(newDeck);
  return newDeck;
};
/**
 *
 * @returns a list of @Deck objects
 * specific to the user
 */
export const getDecks = (userId: string): Deck[] =>
  decks.filter((deck) => deck.userId === userId);
/**
 *
 * @param id @Deck content/cards
 * @returns
 */
export const getDeck = (id: string, userId: string): Deck | undefined =>
  decks.find((deck) => deck.id === id && deck.userId === userId);
/**
 *
 * @param id card_id
 * @param card specific card
 * @returns an updated version av that deck
 */
export const addCardToDeck = (
  id: string,
  userId: string,
  card: string
): Deck | undefined => {
  const deck = decks.find((deck) => deck.id === id && deck.userId === userId);
  if (deck && deck.cards.length < 100) {
    deck.cards.push(card);
    return deck;
  }
  return undefined;
};
/**
 *
 * @param id
 * @returns
 */
export const deleteDeck = (id: string, userId: string): boolean => {
  const index = decks.findIndex(
    (deck) => deck.id === id && deck.userId === userId
  );
  if (index !== -1) {
    decks.splice(index, 1);
    return true;
  }
  return false;
};
