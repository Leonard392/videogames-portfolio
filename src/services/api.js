const API_KEY = process.env.REACT_APP_API_KEY;

export const getBestGames2025 = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2025-12-31&ordering=-rating`
  );
  if (!res.ok) throw new Error("Error al obtener juegos");
  return res.json();
};