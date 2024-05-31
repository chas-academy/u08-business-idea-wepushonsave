/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

const CommanderRecSearch = ({ setSearchResult }:any) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    const encodedSearch = encodeURIComponent(searchQuery);
    const url = `https://MTGTombAPI.onrender.com/api/recommendation/${encodedSearch}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setSearchResult(result); 
    } catch (error:any) {
      console.error('Error fetching data:', error.message);
    }
  };

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

export default CommanderRecSearch;
