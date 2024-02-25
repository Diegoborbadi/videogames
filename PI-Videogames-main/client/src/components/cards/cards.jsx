import React from "react";
import Card from "../card/card";
import "./cards.style.css"

const Cards = ({allVideoGames}) => {
    const videoGamesList = allVideoGames
    return (
      <div className='cards-list'>
    {Array.isArray(videoGamesList) && videoGamesList.map((videogame) => (
    <Card key={videogame.id} videogame={videogame} id={videogame.id} />
      ))}      
    </div>
    );
  }
  export default Cards;







