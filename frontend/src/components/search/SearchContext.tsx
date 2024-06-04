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
import {User} from '../../utils/MTGTombAPIInterfaces';

interface ISearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: ICard[];
  setResults: React.Dispatch<React.SetStateAction<ICard[]>>;
  deck: ICard[];
  setDeck: React.Dispatch<React.SetStateAction<ICard[]>>;
  addCardToDeck: (card: ICard) => void;
  userId: User;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<ICard[]>([]);
  const [deck, setDeck] = useState<ICard[]>([]);
  const [currentDeckId, setCurrentDeckId] = useState<string | null>(null);
  const [userId, setUserId] = useState<User | any>();

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

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await fetch(`http://localhost:3000/user/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setUserId(data._id);
      console.log(data._id);
    };
    fetchUserInfo();
  }, [userId]);

  /**
   * Add card to deck
   * @param card
   * @param deckId
   */
  const addCardToDeck = async (card: ICard) => {
    setDeck([...deck, card]);
    if (currentDeckId === null) {
      const newDeck = await createDeckDB('New Deck', userId);
      setCurrentDeckId(newDeck._id);
      const updatedDeck = await addCardToDeckDB(currentDeckId!, card);
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
        userId,
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
