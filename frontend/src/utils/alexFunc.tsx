const getIconApi = (mana: string) => {
  /* const mana: string = "{W}{B}{S}"  */
  // Define the base URL for the card symbols
  const baseUrl = 'https://svgs.scryfall.io/card-symbols/';
  // Split the mana string into individual symbols using regex
  const manaSymbols = mana.match(/{[^}]+}/g);

  if (!manaSymbols) {
    // Handle the case where no mana symbols are found
    console.log('No mana symbols found');
    return null;
  }
  // Array to hold the svg URLs for each symbol
  let svgUrls: any = [];

  // Iterate over each symbol and generate the svg URL
  manaSymbols.forEach(symbol => {
    // Remove the curly braces and construct the svg URL
    /*     const formattedSymbol = symbol.replace(/[{}]/g, '');
    const svgUrl = ${baseUrl}${formattedSymbol}.svg;
    svgUrls.push(svgUrl); */
  });

  return svgUrls;
  // Return the array of SVG URLs
};

export default getIconApi;
