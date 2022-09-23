const BASE_URL = 'https://pokeapi.co/api/v2'
const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

async function getAllPokemons() {
  const response = await fetch(`${BASE_URL}/pokemon?limit=151`)
  const data = await response.json()
  const promises = data.results.map(async (pokemon) => {
    const response = await fetch(pokemon.url)
    return response.json()
  })
  const results = await Promise.all(promises);
  return results
}

function getPokemonImage(id) {
  return `${BASE_IMAGE_URL}/${id}.png`
}

const pokemonService = {
  getAllPokemons,
  getPokemonImage
}

export default pokemonService