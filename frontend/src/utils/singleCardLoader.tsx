import {Params} from 'react-router-dom';

interface IId {
  id: Params<string>;
}

export const singleCardLoader = async (id: IId | undefined) => {
  await delay(1000);
  const cardId = id?.id;
  console.log(cardId);
  const url = `https://api.scryfall.com/cards/${cardId}`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
};

const delay = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
