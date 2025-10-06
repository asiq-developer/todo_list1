
import React from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <input type="text"placeholder="Search" value={searchValue}  onChange={(e) => setSearchValue(e.target.value)}/>
   );
};

export default SearchBar;
