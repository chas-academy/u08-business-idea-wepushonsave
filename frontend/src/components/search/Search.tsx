/* eslint-disable react/react-in-jsx-scope */

import SearchBtn from './SearchBtn';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';

const Search = () => {
  return (
    <>
      <form action="submit" method="post">
        <div className="search-container text-white grid grid-cols-7 w-full max-h-12 sm:h-16 relative sm:top-14 ">
          <div className="search-bar-container bg-[#827C81] shadow rounded-xl col-start-2 sm:col-start-3 col-span-4 sm:col-span-2 grid grid-cols-5   ">
            <div className="search-icon-container self-center content-center m-1 sm:size-9">
              <SearchIcon />
            </div>

            <div className="search-input-container col-span-4 m-1 sm:-ml-14 hover:shadow-inner opacity-20 rounded-lg ">
              <SearchInput />
            </div>
          </div>
          <div className="search-btn-container border col-start-6 sm:col-start-5 sm:max-w-20 sm:ml-2 rounded-lg bg-[#827C81] text-center content-center">
            <SearchBtn />
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
