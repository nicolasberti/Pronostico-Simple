import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import CardPronostico from './cardpronostico';

function Pronostico() {
	
	 const [lat, setLat] = useState(null);
	  const [lon, setLon] = useState(null);
	  
	useEffect(() => {
    obtenerCoordenadas();
  }, []);
  
const obtenerCoordenadas = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (posicion) {
      const latitud = posicion.coords.latitude;
      const longitud = posicion.coords.longitude;
      const altitud = posicion.coords.altitude;
      setLat(latitud);
	  setLon(longitud);
    }, function (error) {
      console.log("Error al obtener las coordenadas: " + error.message);
    });
  } else {
    console.log("La geolocalización no es soportada por este navegador.");
  }
}

	if(lat != null && lon != null)
	  return (
	  <div><CardPronostico lat={lat} lon={lon} /></div>
	  );
	else 
		return (
	  <div><CircularProgress color="primary" size="lg" /></div>
	  );
}

export default Pronostico;
