import React from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='beer-search'>
      <input type="text"
              placeholder="Search beers by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={() => setSearchQuery('')}>CLEAR FILTER</button>
    </div>
  );
};

export default Search;
