import React from "react";
import "../styles/home.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.background_image} alt={game.name} />
      <h3>{game.name}</h3>
      <p>Rating: {game.rating}</p>
    </div>
  );
};

export default GameCard;