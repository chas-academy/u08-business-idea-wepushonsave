/* eslint-disable react/react-in-jsx-scope */

const getIconApi = (mana: string) => {

  
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const svgUrls: any = [];
  const manaSymbols = mana.match(/{[^}]+}/g);
  manaSymbols?.forEach(element => {
    // Define the base URL for the card symbols
    const baseUrl = 'https://svgs.scryfall.io/card-symbols/';
    // Split the mana string into individual symbols using regex

    if (!element) {
      // Handle the case where no mana symbols are found
      console.log('No mana symbols found');
      return null;
    }
    // Array to hold the svg URLs for each symbol

    // Iterate over each symbol and generate the svg URL

    // Remove the curly braces and construct the svg URL
    const formattedSymbol = element.replace(/[{}]/g, '');
    const svgUrl = `${baseUrl}${formattedSymbol}.svg`;
    svgUrls.push(svgUrl);

  });
  return svgUrls;
  // Return the array of SVG URLs
};
export default getIconApi;
