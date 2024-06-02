import {Params} from 'react-router-dom';
import {delay} from './setApiDelay';

interface IId {
  params: Params<string>;
}

export const singleCardLoader = async (params: IId) => {
  await delay(1000);
  const cardId = params?.params;
  console.log(cardId);

  /* const url = `https://api.scryfall.com/cards/${id}`; */
  const url =
    'https://api.scryfall.com/cards/56ebc372-aabd-4174-a943-c7bf59e5028d';

  const response = await fetch(url);
  const result = await response.json();

  return result;
};
