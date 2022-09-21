import Head from 'next/head'
import styles from '../styles/pages/Detail.module.css'

export default function Detail() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Pokedéx - Pokémon Detail</title>
        <meta name="description" content="Pokémon Detail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
