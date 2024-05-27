import {createContext, useContext, useState} from 'react';

interface ISearchContext {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  results: any[];
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);

  return (
    <SearchContext.Provider value={{query, setQuery, results, setResults}}>
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
