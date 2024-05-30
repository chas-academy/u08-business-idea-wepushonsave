import React, {useEffect, useState} from 'react';
import CustomDropdown from '../customs/customDropdown';
import manaSymbols from '../manaSymbols';

const colors = [
  '',
  'black',
  'black-green',
  'black-red',
  'black-red-green',
  'blue',
  'blue-black',
  'blue-black-green',
  'blue-black-red',
  'blue-green',
  'blue-red',
  'blue-red-green',
  'colorless',
  'green',
  'red',
  'red-green',
  'white',
  'white-black',
  'white-black-green',
  'white-black-red',
  'white-black-red-green',
  'white-blue',
  'white-blue-black',
  'white-blue-black-green',
  'white-blue-black-red',
  'white-blue-black-red-green',
  'white-blue-green',
  'white-blue-red',
  'white-blue-red-green',
  'white-green',
  'white-red',
  'white-red-green',
];

const AllDecksComponent: React.FC = () => {
  const [deckResult, setDeckResult] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [color, setColor] = useState<string>('');
  const limit = 20;

  const allDecksFiltered = async (page: number, color: string) => {
    setError(null);
    try {
      const url = `https://MTGTombAPI.onrender.com/api/decks?color=${encodeURIComponent(
        color
      )}&page=${page}&limit=${limit}`;
      console.log('Encoded URL:', url);
      const response = await fetch(url);
      const result: any = await response.json();
      const decks: any = result.docs;
      setDeckResult(decks);
    } catch (error) {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    allDecksFiltered(page, color);
  }, [page, color]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">All Decks</h1>

        <div className="my-4">
          <CustomDropdown
            options={colors}
            selectedValue={color}
            onSelect={setColor}
          />
        </div>

        <div className="grid grid-cols-3 w-full my-3 text-lg font-bold">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}>
            Previous
          </button>
          <p className="text-center">{page}</p>
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
      </div>

      <ul className="">
          {deckResult.map(deck => (
            <div className='grid grid-cols-2 justify-items-center w-full'>
            <li key={deck._id}>
                <a href='https://svgs.scryfall.io/card-symbols/PW.svg' className="text-2xl">{deck.deckName}</a>
            </li>
            <li>
                <div className="flex flex-nowrap">
                  {getManaSymbols(deck.color).map(symbol => {
                    const mana = manaSymbols.find(
                      mana => mana.symbol === symbol
                    );
                    return mana ? (
                      <img
                        key={symbol}
                        src={mana.imageUrl}
                        alt={mana.symbol}
                        width="20"
                        height="20"
                        className="mx-0.5"
                      />
                    ) : null;
                  })}
                </div>
            </li>
            </div>
          ))}
      </ul>

      <div className="grid grid-cols-3 w-full my-3 text-lg font-bold">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}>
            Previous
          </button>
          <p className="text-center">{page}</p>
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>

      {error && <p>{error}</p>}
    </div>
  );
};

export default AllDecksComponent;

const getManaSymbols = (color: string) => {
  const colorToSymbols: {[key: string]: string[]} = {
    black: ['{B}'],
    'black-green': ['{B}', '{G}'],
    'black-red': ['{B}', '{R}'],
    'black-red-green': ['{B}', '{R}', '{G}'],
    blue: ['{U}'],
    'blue-black': ['{U}', '{B}'],
    'blue-black-green': ['{U}', '{B}', '{G}'],
    'blue-black-red': ['{U}', '{B}', '{R}'],
    'blue-green': ['{U}', '{G}'],
    'blue-red': ['{U}', '{R}'],
    'blue-red-green': ['{U}', '{R}', '{G}'],
    colorless: ['{C}'],
    green: ['{G}'],
    red: ['{R}'],
    'red-green': ['{R}', '{G}'],
    white: ['{W}'],
    'white-black': ['{W}', '{B}'],
    'white-black-green': ['{W}', '{B}', '{G}'],
    'white-black-red': ['{W}', '{B}', '{R}'],
    'white-black-red-green': ['{W}', '{B}', '{R}', '{G}'],
    'white-blue': ['{W}', '{U}'],
    'white-blue-black': ['{W}', '{U}', '{B}'],
    'white-blue-black-green': ['{W}', '{U}', '{B}', '{G}'],
    'white-blue-black-red': ['{W}', '{U}', '{B}', '{R}'],
    'white-blue-black-red-green': ['{W}', '{U}', '{B}', '{R}', '{G}'],
    'white-blue-green': ['{W}', '{U}', '{G}'],
    'white-blue-red': ['{W}', '{U}', '{R}'],
    'white-blue-red-green': ['{W}', '{U}', '{R}', '{G}'],
    'white-green': ['{W}', '{G}'],
    'white-red': ['{W}', '{R}'],
    'white-red-green': ['{W}', '{R}', '{G}'],
  };

  return colorToSymbols[color] || [];
};
