// src/CharacterLoader.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CharacterLoader = ({ characters, loading }) => {
  return (
    <Container>
      <h1>-----------------------------------------------------------------------------------------</h1>
      <Row>
        {loading ? (
          <p>Cargando personajes...</p>
        ) : (
          characters.map((character, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4"> {/* Aplica estilos con Bootstrap */}
              <Card>
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>
                    <strong>Género:</strong> {character.gender}<br />
                    <strong>Año de nacimiento:</strong> {character.birth_year}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CharacterLoader;
