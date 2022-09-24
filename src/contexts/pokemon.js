import React, { createContext, useContext, useState } from 'react'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  return useContext(PokemonContext)
}
