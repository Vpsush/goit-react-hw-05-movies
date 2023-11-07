// import css from './Searchbar.module.css';
import React, { useState } from 'react';

const SearchForm = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter a search value');
    }

    handleSearch(query);
  };

  return (
    <header className="searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchFormButton">
          <span>
            <svg>
              <use href="../../services/symbol-defs.svg#icon-search"></use>
            </svg>
          </span>
        </button>
        <input
          className="SearchFormInput"
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
};

export default SearchForm;
