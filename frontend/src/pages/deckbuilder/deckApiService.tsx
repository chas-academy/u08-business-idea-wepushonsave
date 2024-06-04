import {ICard} from '../../utils/ScryfallInterfaces';

export const createDeckDB = async (name: string, userId: string) => {
  const response = await fetch('https://mtg-tomb.onrender.com/decks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, userId}),
  });
  if (!response.ok) {
    throw new Error('Failed to create deck');
  }
  return response.json();
};

export const displayAllDecksDB = async () => {};

export const displayDeckDB = async () => {};

export const addCardToDeckDB = async (deckId: string, card: ICard) => {
  const response = await fetch(
    `https://mtg-tomb.onrender.com/decks/${deckId}/cards`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({card}),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to add card to deck');
  }
  return response.json();
};
