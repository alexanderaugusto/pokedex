import { PokemonProvider } from '../contexts/pokemon'
import '../styles/global.css'
import '../styles/color.css'

function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  )
}

export default MyApp
