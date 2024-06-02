import {Params} from 'react-router-dom';
import {delay} from './setApiDelay';

interface IId {
  params: Params<string>;
}

export const singleCardLoader = async (params: IId) => {
  await delay(1000);
  const {id} = params.params;

  const url = `https://api.scryfall.com/cards/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch card data');
  }
  const result = await response.json();

  return result;
};
