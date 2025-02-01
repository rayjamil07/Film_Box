import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onSearchSubmit(event) {
    event.preventDefault();
    handleSearch(search);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={onSearchSubmit}>
        <input type='text' name='search' value={search} placeholder='Search Movies...' onChange={onSearchChange} />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar;


      
