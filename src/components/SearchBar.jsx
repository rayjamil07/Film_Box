import React from 'react'

const SearchBar = ({ handleSearch, clearSearch }) => {
  return (
    <div className='search-bar'>
     <div>
      <form onSubmit={handleSearch}>
        <input type='text' name='search' placeholder='Search Movies...' />
        <button type='submit'>Search</button>
      <button onClick={clearSearch}>Clear</button>
      </form>
     </div>
    </div>
  )
}

export default SearchBar


      
