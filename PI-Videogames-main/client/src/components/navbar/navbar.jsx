import React from 'react';
import { Link } from "react-router-dom";
import videogameImage from "./videogame.png"; // Importa la imagen correctamente
import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
        <img src={videogameImage} alt="Logo" />
      </div>
      <div className='navbar-cont-links'>
        <Link className='navbar-links' to="/home">Home</Link>
        <Link className='navbar-links' to="/create">Create</Link>
        <Link className='navbar-links' to="/about">About</Link>
      </div>
      <div className='navbar-cont-search'>
        <input type="text" />
      </div>
    </div>
  );
};

export default Navbar;
