/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
//FIXME Look into how to solve lint-issue  | react/prop-types
import {createContext, useContext, useEffect, useState} from 'react';
import {delay} from '../../utils/setApiDelay';
import {ICard} from '../../utils/ScryfallInterfaces';
import {
  addCardToDeckDB,
  createDeckDB,
} from '../../pages/deckbuilder/deckApiService';

interface ISearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: ICard[];
  setResults: React.Dispatch<React.SetStateAction<ICard[]>>;
  deck: ICard[];
  setDeck: React.Dispatch<React.SetStateAction<ICard[]>>;
  addCardToDeck: (card: ICard) => Promise<void>;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);
  const [currentDeckId, setCurrentDeckId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        delay(100);
        fetch(
          `https://api.scryfall.com/cards/search?order=cmc&unique=art&include_extras=true&include_variations=true&q=${query}`
        )
          .then(res => res.json())
          .then(data => setResults(data.data));
      }
    };
    console.log('Context useEffect - Query:', query);
    console.log('Context useEffect - Results:', results);
    fetchData();
  }, [query]);

  const addCardToDeck = async (card: ICard) => {
    if (!currentDeckId) {
      const newDeck = await createDeckDB(
        'New Deck',
        '665dc3f827a85f1d3f4f6a33'
      );
      setCurrentDeckId(newDeck.id);
    }
    const updatedDeck = await addCardToDeckDB(currentDeckId!, card, 'user-id');
    setDeck(updatedDeck.cards);
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
        deck,
        setDeck,
        addCardToDeck,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
