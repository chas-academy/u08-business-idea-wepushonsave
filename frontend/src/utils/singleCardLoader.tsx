import { Params } from 'react-router-dom';

interface IId {
  params: Params<string>;
}

export const singleCardLoader = async (params: IId) => {
  await delay(1000);
  const cardId = params?.params;
  const id = Object.values(cardId).toString();

  const url = `https://api.scryfall.com/cards/${id}`;

  const response = await fetch(url);
  const result = await response.json();

  return result;
};

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
