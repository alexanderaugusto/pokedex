import PokeCard from './PokeCard'
import pokemonService from '../services/pokemonService'
import styles from '../styles/components/PokeList.module.css'

export default function PokeList({ pokemons = [] }) {
  return (
    <ul className={styles.pokeList}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokeCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemonService.getPokemonImage(pokemon.id)}
            color={pokemon.types[0].type.name}
          />
        </li>
      ))}
    </ul>
  )
}