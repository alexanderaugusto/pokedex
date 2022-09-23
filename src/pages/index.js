import { useEffect, useState } from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import PokeList from '../components/PokeList'
import SearchInput from '../components/SearchInput'
import SortButton from '../components/SortButton'
import pokemonService from '../services/pokemonService'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [initialPokemons, setInitialPokemons] = useState([])

  useEffect(() => {
    pokemonService.getAllPokemons()
      .then(pokemons => {
        setPokemons(pokemons)
        setInitialPokemons(pokemons)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Pokedéx</title>
        <meta name="description" content="Pokedéx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Logo />
          <SortButton
            initialItems={initialPokemons}
            changeInitialItems={setInitialPokemons}
            items={pokemons}
            changeItems={setPokemons} />
        </div>
        <SearchInput
          initialItems={initialPokemons}
          items={pokemons}
          changeItems={setPokemons}
        />
        <PokeList pokemons={pokemons} />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
