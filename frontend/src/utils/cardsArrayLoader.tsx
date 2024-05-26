export const cardsArrayLoader = async () => {
  const delay = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  await delay(1000);

  const response = await fetch(
    'https://api.scryfall.com/cards/search?include_extras=true&include_variations=true&order=set&q=e%3Aaer&unique=prints'
  );
  const result = await response.json();

  return {
    data: result.data,
  };
};
