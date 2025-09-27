const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            bestGames2024: [],
            topCreators: [],
            platforms: [],
            stores: [],
            error: null
        },
        actions: {
            // Ejemplo: obtener mejores juegos
            fetchBestGames2024: async () => {
                try {
                    const resp = await fetch("https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2024-01-01,2024-12-31&ordering=-rating");
                    if (!resp.ok) throw new Error("Error al obtener juegos 2024");
                    const data = await resp.json();
                    setStore({ bestGames2024: data.results, error: null });
                } catch (err) {
                    console.error("fetchBestGames2024 error:", err);
                    setStore({ error: err.message });
                }
            },

            // Ejemplo: obtener top creadores
            fetchTopCreators: async () => {
                try {
                    const resp = await fetch("https://api.rawg.io/api/creators?key=YOUR_API_KEY&ordering=-games_count");
                    if (!resp.ok) throw new Error("Error al obtener creadores");
                    const data = await resp.json();
                    setStore({ topCreators: data.results, error: null });
                } catch (err) {
                    console.error("fetchTopCreators error:", err);
                    setStore({ error: err.message });
                }
            },

            // Ejemplo: obtener plataformas
            fetchPlatforms: async () => {
                try {
                    const resp = await fetch("https://api.rawg.io/api/platforms?key=YOUR_API_KEY");
                    if (!resp.ok) throw new Error("Error al obtener plataformas");
                    const data = await resp.json();
                    setStore({ platforms: data.results, error: null });
                } catch (err) {
                    console.error("fetchPlatforms error:", err);
                    setStore({ error: err.message });
                }
            },

            // Ejemplo: obtener tiendas
            fetchStores: async () => {
                try {
                    const resp = await fetch("https://api.rawg.io/api/stores?key=YOUR_API_KEY");
                    if (!resp.ok) throw new Error("Error al obtener tiendas");
                    const data = await resp.json();
                    setStore({ stores: data.results, error: null });
                } catch (err) {
                    console.error("fetchStores error:", err);
                    setStore({ error: err.message });
                }
            }
        }
    };
};

export { getState };