import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_ITEMS } from '../../utils/queries';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchItems, { loading, error, data }] = useLazyQuery(SEARCH_ITEMS);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    searchItems({ variables: { query: event.target.value } });
  };

  return (
    <div >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className='border-2 rounded-lg p-3 flex border-neutral-300 w-[400px] lg:max-w-[200px]'
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.searchItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
