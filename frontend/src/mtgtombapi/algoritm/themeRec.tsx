import { useState } from "react";

const SearchThemeComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult]: any = useState([]);

    const handleSearch = async () => {
        const encodedSearch = encodeURIComponent(searchQuery);
        const url = `https://MTGTombAPI.onrender.com/api/theme/recommendation/${encodedSearch}`;
        console.log('Encoded URL:', url);
        const response = await fetch(url);
        const result:any = await response.json();
        setSearchResult(result);
        console.log(result);
    };

    return (
        <div>
            <input 
                type="text" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
                placeholder="Search..." 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchThemeComponent;