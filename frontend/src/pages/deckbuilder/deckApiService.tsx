import {ICard} from '../../utils/ScryfallInterfaces';

const baseUrl = 'http://localhost:3000';
const userId = '665ca94931ac5c37fb748c2a';

export const createDeckDB = async (deckName: string, userId: string) => {
  const response = await fetch(`${baseUrl}/decks`, {
    method: 'POST',
    mode: 'cors',
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
  const response = await fetch(`${baseUrl}/${deckId}/cards`, {
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
