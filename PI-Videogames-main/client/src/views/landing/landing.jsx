import React from 'react';
import { Link } from 'react-router-dom';
import './landing.style.css';

const Landing = () => {
  return (
    <div className="container-landing">
      <div className="content">
        <h1>¡Bienvenidos!</h1>
        <h3>
          Bienvenidos a la aplicación donde vas a poder informarte sobre todo
          de los videojuegos y agregar tu propio videojuego
        </h3>
        <Link to="/home">
          <button className="button">INGRESAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
