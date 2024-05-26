import {Params} from 'react-router-dom';
import {delay} from './setApiDelay';

interface ISetUri {
  params: Params<string>;
}

export const cardSetLoader = async (set: ISetUri) => {
  await delay(1000);
  const setUrl = set.params.set;
  console.log(setUrl);

  const response = await fetch(
    `https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3A${setUrl}&unique=prints`
  );
  const result = await response.json();
  console.log(result);

  return {
    data: result.data,
  };
};
