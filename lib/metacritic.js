// lib/rickmorty.js
export async function getInfoCharacters() {
  try {
    const API_URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(API_URL);
    const json = await response.json();

    // Retorna cada personaje con sus datos relevantes
    return json.results.map((character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episodes: character.episode.length,
    }));
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}
