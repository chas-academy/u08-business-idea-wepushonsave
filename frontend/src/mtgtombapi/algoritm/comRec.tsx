/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    const encodedSearch = encodeURIComponent(searchQuery);
    const url = `https://MTGTombAPI.onrender.com/api/recommendation/${encodedSearch}`;
    console.log('Encoded URL:', url);
    const response = await fetch(url);
    const result = await response.json();
    setSearchResult(result);
    console.log(result);
  };
  console.log(searchResult);
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
