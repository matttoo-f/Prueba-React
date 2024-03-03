import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./Buscador";
import SaberMas from "./ButtonSaberMas";

const MyApi = () => {
  const [aves, setAves] = useState([]);
  const [avesFiltradas, setAvesFiltradas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const apiUrl = `https://aves.ninjas.cl/api/birds`;

  const getApiData = async (url) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('La respuesta de la red no fue válida');
      }

      const data = await response.json();
      setAves(data);
    } catch (error) {
      console.error('Ha habido un error:', error.message);
    }
  };

  useEffect(() => {
    getApiData(apiUrl);
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // console.log(endIndex)

    const avesOrdenadas = [...aves].sort((a, b) => a.name.spanish.localeCompare(b.name.spanish));
    setAvesFiltradas(avesOrdenadas.slice(startIndex, endIndex))

  }, [currentPage, aves]);

  const handleSearch = (busqueda) => {
    const avesFiltradas = aves.filter((ave) =>
      ave.name.spanish.toLowerCase().includes(busqueda.toLowerCase())
    );
    setAvesFiltradas(avesFiltradas.slice(0, itemsPerPage));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
     <Buscador onSearch={handleSearch} />
      <Container className="container-card-general d-flex flex-wrap justify-content-between">
        

        {avesFiltradas.map((ave) => {
          return (
            <div className="card-container-principal" key={ave.sort}>
              <img className="img-card" src={ave.images.main} alt="" />
              <h1 className="card-title">{ave.name.spanish}</h1>
              <p className="card-text">{ave.name.latin}</p>
              <SaberMas apiDetalle={ave._links.self}/>
            </div>
          )
        })}
                <Container className="d-flex flex-row justify-content-between">
        <Button onClick={handlePrevPage} disabled={currentPage === 1} className="m-3">
          Página Anterior
        </Button>
        <Button onClick={handleNextPage} disabled={currentPage * itemsPerPage >= aves.length} className="m-3">
          Siguiente página
        </Button>
        </Container>
      </Container>
    </>
  )
}

export default MyApi
