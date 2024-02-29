import React, { useState, useEffect } from "react";
import { Container, Card, Button, CardText } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./Buscador";

const MyApi = () => {
  const [aves, setAves] = useState([]);
  const [avesFiltradas, setAvesFiltradas] = useState([]);

  const apiUrl = `https://aves.ninjas.cl/api/birds`;

  const getApiData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('La respuesta de la red no fue válida');
      }

      const data = await response.json();
      setAves(data);
      setAvesFiltradas(data);
    } catch (error) {
      console.error('Ha habido un error:', error.message);
    }
  };

  useEffect(() => {
    getApiData(apiUrl);
  }, []);

  const handleSearch = (busqueda) => {
    // Filtrar aves según el término de búsqueda
    const avesFiltradas = aves.filter((ave) =>
      ave.name.spanish.toLowerCase().includes(busqueda.toLowerCase())
    );
    setAvesFiltradas(avesFiltradas);
  };

  return (
    <>
      <Container className="d-flex flex-wrap justify-content-center">
        <Buscador onSearch={handleSearch} />

        {avesFiltradas.map((ave) => {
          return (
            <Card style={{ width: '14rem' }} key={ave.sort} className="m-3 d-flex flex-column">
              <Card.Img variant="top" src={ave.images.main} />
              <Card.Body>
                <Card.Title>{ave.name.spanish}</Card.Title>
                <CardText>{ave.name.latin}</CardText>
                <Button variant="primary">Saber más</Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default MyApi;
