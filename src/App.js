// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterLoader from './CharacterLoader';
import SearchComponent from './SearchComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row } from 'react-bootstrap'; 

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    loadCharacters();
  }, []); 

  const loadCharacters = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = (results) => {
    setFilteredCharacters(results);
  };

  return (
    <Container fluid className="App"> {/* Utiliza el Container de Bootstrap */}
      {/* Muestra el componente de búsqueda */}
      <SearchComponent onCharactersLoaded={handleSearch} />

      {/* Muestra el componente de carga de personajes con los resultados filtrados en tiempo real */}
      <Row>
        <CharacterLoader characters={filteredCharacters} loading={loading} />
      </Row>
    </Container>
  );
}

export default App;
