import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PokeDetail from '../../components/PokeDetail'
import pokemonService from '../../services/pokemonService'
import styles from '../../styles/pages/Detail.module.css'

export default function Detail() {
  const router = useRouter()
  const [pokemon, setPokemon] = useState(null)
  const [pokemonDescription, setPokemonDescription] = useState("")

  useEffect(() => {
    pokemonService.getPokemonById(router.query.id)
      .then(pokemon => {
        setPokemon(pokemon)
      })
      .catch(err => {
        console.log(err)
      })
    pokemonService.getPokemonFireredDescription(router.query.id)
      .then(pokeDescription => {
        setPokemonDescription(pokeDescription)
      })
      .catch(err => {
        console.log(err)
      })
  }, [router.query.id])

  return (
    <div>
      <Head>
        <title>Pokedéx - Pokémon Detail</title>
        <meta name="description" content="Pokémon Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PokeDetail pokemon={pokemon} description={pokemonDescription} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}