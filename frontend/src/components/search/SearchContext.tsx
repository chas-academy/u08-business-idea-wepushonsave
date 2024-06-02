/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
//FIXME Look into how to solve lint-issue  | react/prop-types
import {createContext, useContext, useEffect, useState} from 'react';
import {delay} from '../../utils/setApiDelay';
import {ICard} from '../../utils/ScryfallInterfaces';

interface ISearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: ICard[];
  setResults: React.Dispatch<React.SetStateAction<ICard[]>>;
  deck: ICard[];
  addCardToDeck: (card: ICard) => void;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);

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

  const addCardToDeck = (card: ICard) => {
    setDeck([...deck, card]);
  };

  return (
    <SearchContext.Provider
      value={{query, setQuery, results, setResults, deck, addCardToDeck}}>
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
