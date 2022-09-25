import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PokeDetail from '../../components/PokeDetail'
import { usePokemon } from '../../contexts/pokemon'
import pokemonService from '../../services/pokemonService'
import styles from '../../styles/pages/Detail.module.css'

export default function Detail() {
  const [pokemon, setPokemon] = useState(null)
  const [pokemonDescription, setPokemonDescription] = useState("")
  const router = useRouter()
  const pokemonContext = usePokemon()

  useEffect(() => {
    const { id: pokemonId } = router.query

    const pokemon = pokemonContext.pokemons.find(pokemon => pokemon.id === pokemonId)

    if (pokemon) {
      setPokemon(pokemon)
    } else {
      pokemonService.getPokemonById(pokemonId)
        .then(pokemon => {
          setPokemon(pokemon)
        })
        .catch(err => {
          console.log(err)
        })
    }

    pokemonService.getPokemonFireredDescription(pokemonId)
      .then(pokeDescription => {
        setPokemonDescription(pokeDescription)
      })
      .catch(err => {
        console.log(err)
      })
  }, [router.query, pokemonContext.pokemons])

  return (
    <div>
      <Head>
        <title>Pokedéx - Pokémon Detail</title>
        <meta name="description" content="Pokémon Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PokeDetail
          pokemon={pokemon}
          pokemonsSize={pokemonContext.pokemons.length > 0 ? pokemonContext.pokemons.length : 151}
          description={pokemonDescription}
        />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}