import React from 'react';
import {Link} from "react-router-dom"
import "./card.style.css"

const Card = ({ videogame, id }) => {
  const { name, image,genres } = videogame;
  return (
    <div className='card-container'>
      <img src={image} alt={image} />
      <Link to={`/videogame/${id}`}><h2>{name}</h2></Link>
      <h5>{genres}</h5>
    </div>
  );
}

export default Card;