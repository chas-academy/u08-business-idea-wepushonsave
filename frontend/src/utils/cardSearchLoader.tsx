/* eslint-disable react/react-in-jsx-scope */

import {LoaderFunctionArgs, Params} from 'react-router-dom';
import {delay} from './setApiDelay';

export interface ISearchQuery {
  params: Params<string> | HTMLFormElement;
}

export const cardSearchLoader = async ({request}: LoaderFunctionArgs) => {
  await delay(1000);
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  const apiUrl =
    'https://api.scryfall.com/cards/search?order=cmc&unique=art&include_extras=true&include_variations=true&q=';
  const response = await fetch(apiUrl + query);
  const result = await response.json();

  return result;
};
