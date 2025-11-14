import React, { useState, useEffect } from "react";
import { getBestGames2025 } from "../services/api";
import GameCard from "./GameCard";

export const TopGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getBestGames2025();
        setGames(data.results.slice(0, 6)); // mostrar solo los primeros 6
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGames();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!games.length) return <div>Cargando juegos...</div>;

  return (
    <div className="games-2025">
      <h1>Best 2025 Games</h1>
      <div className="games-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};