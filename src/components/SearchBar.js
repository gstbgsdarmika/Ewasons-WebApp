import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="input-group w-75 rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={keyword}
        onChange={(event) => {
          keywordChange(event.target.value);
        }}
      />
      <span className="input-group-text border-0" id="search-addon">
        <FaSearch />
      </span>
    </div>
  );
}

export default SearchBar;
