import {ICard} from '../../utils/ScryfallInterfaces';

const baseUrl = 'https://mtg-tomb.onrender.com';

export const createDeckDB = async (deckName: string, userId: string) => {
  const response = await fetch(`${baseUrl}/decks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name: deckName, userId}),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to create deck');
  return response.json();
};

export const displayAllDecksDB = async () => {};

export const displayDeckDB = async () => {};

export const addCardToDeckDB = async (
  deckId: string,
  card: ICard,
  userId: string
) => {
  const response = await fetch(`${baseUrl}/${deckId}/add-card`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({card, userId}),
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to add card to deck');
  return await response.json();
};
