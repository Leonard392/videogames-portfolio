import React from "react";
import "../styles/home.css";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.thumbnail} alt={game.title} />
      <h3>{game.title}</h3>
      <p>Género: {game.genre}</p>
      <p>Plataforma: {game.platform}</p>
    </div>
  );
};

export default GameCard;
