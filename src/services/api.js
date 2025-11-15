export const getBestGames2025 = async () => {
  const url = "https://www.freetogame.com/api/games";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al cargar juegos");

  const data = await res.json();

  // Aquí solo tomamos 6 juegos como hacías antes
  return data.slice(0, 6);
};
