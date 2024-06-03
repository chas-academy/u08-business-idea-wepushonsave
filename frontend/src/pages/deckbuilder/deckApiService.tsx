import {ICard} from '../../utils/ScryfallInterfaces';

export const createDeckDB = async (name: string) => {
  const response = await fetch('http://localhost:3000/decks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name}),
  });
  if (!response.ok) {
    throw new Error('Failed to create deck');
  }
  return response.json();
};

export const displayAllDecksDB = async () => {};

export const displayDeckDB = async () => {};

export const addCardToDeckDB = async (deckId: string, card: ICard) => {
  const response = await fetch(`http://localhost:3000/decks/${deckId}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({card}),
  });
  if (!response.ok) {
    throw new Error('Failed to add card to deck');
  }
  return response.json();
};
