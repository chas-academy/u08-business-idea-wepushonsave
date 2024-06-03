import { ICard } from "../interfaces/ICard";
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
 * @returns a list of @Deck objects specific to the user
 */
export const getDecks = (): Deck[] => decks;
/**
 *
 * @param id @Deck content/cards
 * @returns
 */
export const getDeck = (id: string): Deck | undefined =>
  decks.find((deck) => deck.id === id);
/**
 *
 * @param id card_id
 * @param card specific card
 * @returns an updated version av that deck
 */
export const addCardToDeck = (
  id: string,
  userId: string,
  card: ICard
): Deck | undefined => {
  const deck = decks.find((deck) => deck.id === id && deck.userId === userId);

  if (!deck) return undefined;

  // Checks if card is in the deck and does not have a mana_cost = ''
  const cardExists = deck.cards.some((existingCard) => {
    existingCard.id === card.id &&
      existingCard.name === card.name &&
      existingCard.type_line.includes("Basic Land");
  });

  if (cardExists) return undefined; // Card is in this deck already

  if (deck && deck.cards.length < 100) {
    deck.cards.push(card);
    return deck;
  }
  return undefined; // The deck has > or = 100 cards
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
