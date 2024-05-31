/* eslint-disable react/react-in-jsx-scope */

import SearchBtn from './SearchBtn';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import {useSearch} from './SearchContext';
import {useState} from 'react';

const SearchForm: React.FC = () => {
  const {query, setQuery} = useSearch();
  const [inputValue, setInputValue] = useState(query);

  /**
   * Submitter for
   * @param e user search input
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-container text-white grid grid-cols-9 sm:grid-cols-12 w-full max-h-12 sm:h-16 relative sm:top-14 gap-1">
          <div className="search-bar-container bg-[#827C81] shadow rounded-xl col-start-2 sm:col-start-5 col-span-5 sm:col-span-3 grid grid-cols-5 sm:grid-cols-7">
            <div className="search-icon-container self-center content-center m-1 sm:size-9">
              <SearchIcon />
            </div>

            <div className="search-input-container col-span-4 sm:col-span-6 col-start-2 sm:col-start-2 m-1 hover:shadow-inner opacity-20 rounded-lg ">
              <SearchInput
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="search-btn-container border col-start-7 sm:col-start-8  rounded-lg bg-[#827C81] text-center w-fit h-fit p-2 flex justify-center self-center">
            <SearchBtn />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
