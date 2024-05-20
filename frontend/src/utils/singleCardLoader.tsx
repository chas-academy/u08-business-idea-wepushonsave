export const singleCardLoader = async () => {
  const delay = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  await delay(1000);
  const cardID = '56ebc372-aabd-4174-a943-c7bf59e5028d';
  const url = `https://api.scryfall.com/cards/${cardID}`;
  const response = await fetch(url);
  const result = await response.json();

  return result;
};
