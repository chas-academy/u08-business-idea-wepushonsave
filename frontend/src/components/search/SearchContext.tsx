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
  addCardToDeck: (card: ICard) => void;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);
  const [currentDeckId, setCurrentDeckId] = useState<string | null>(null);

  /**
   * Search response
   */
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
    fetchData();
  }, [query]);

  /**
   * Add card to deck
   * @param card
   * @param deckId
   */
  const addCardToDeck = async (card: ICard) => {
    if (!currentDeckId) {
      const newDeck = await createDeckDB('New Deck');
      setCurrentDeckId(newDeck._id);
      const updatedDeck = await addCardToDeckDB(newDeck._id, card);
      setDeck(updatedDeck.cards);
    } else {
      const updatedDeck = await addCardToDeckDB(currentDeckId, card);
      setDeck(updatedDeck.cards);
    }
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
