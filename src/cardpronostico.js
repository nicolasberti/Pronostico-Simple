import React, { useEffect, useState } from "react";
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';
import Card from 'react-bootstrap/Card';

function CardPronostico(props) {
  const [pronostico, setPronostico] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=0b53f6db12854688aee145332230607&q=' + props.lat + ',' + props.lon + '&lang=es';
    // Realizar la llamada a la API utilizando Axios
    axios.get(apiUrl)
      .then(function (response) {
        setPronostico(response.data);
      })
      .catch(function (error) {
        // Manejar el error de la llamada
        console.log(error);
      });
  }, []); // El segundo argumento vacío [] asegura que se llame solo una vez al renderizar el componente

  // Verificar si el array pronostico no está vacío
  if (pronostico.length === 0) {
    return <div><CircularProgress color="primary" size="lg" /></div>;
  }

  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pronostico.current.condition.icon} />
      <Card.Body>
        <Card.Title>{pronostico.location.name}</Card.Title>
        <Card.Text>
          {pronostico.current.condition.text}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardPronostico;
