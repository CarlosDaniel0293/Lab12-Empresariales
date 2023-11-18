// src/SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = ({ onCharactersLoaded }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${inputValue}`);
      onCharactersLoaded(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="SearchComponent">
      <h1>Personajes de Star Wars</h1>
      <form>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Buscar..."
          className="form-control"
        />
      </form>
    </div>
  );
};

export default SearchComponent;
