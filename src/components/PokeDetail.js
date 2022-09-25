import { useEffect, useState } from 'react'
import Link from 'next/link'
import { faArrowLeft, faRulerVertical, faWeight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import Image from './Image'
import ProgressBar from './ProgressBar'
import helper from '../utils/helper'
import pokemonService from '../services/pokemonService'
import styles from '../styles/components/PokeDetail.module.css'
import POKEBALL_WHITE from '../assets/img/pokeball-white.png'
import DEFAULT_POKEMON from '../assets/json/empty-pokemon.json'

export default function PokeDetail({ pokemon, pokemonsSize = 151, description = DEFAULT_POKEMON.description }) {
  const [pokemonData, setPokemonData] = useState(DEFAULT_POKEMON)

  useEffect(() => {
    if (pokemon) {
      setPokemonData(pokemon)
    } else {
      setPokemonData(DEFAULT_POKEMON)
    }
  }, [pokemon])

  return (
    <div className={`${styles.pokeDetail} ${pokemonData.types[0].type.name}`}>
      <div className={styles.detailHeader}>
        <Link href={`/`}>
          <Icon
            className={styles.backIcon}
            icon={faArrowLeft}
          />
        </Link>
        <h2>{helper.makeFirstLetterUpperCase(pokemonData.name)}</h2>
        <h4>{`#${helper.fillZeroInFront(pokemonData.id, 3)}`}</h4>
      </div>
      <Image
        className={styles.pokeballImage}
        src={POKEBALL_WHITE}
        alt={pokemonData.name}
      />
      <div className={styles.nextPokemon}>
        {pokemonData.id > 1 && (
          <div className={styles.previous}>
            <Link href={`/detail?pokemonId=${pokemonData.id - 1}`}>
              <Icon
                className={styles.icon}
                icon={faChevronLeft}
              />
            </Link>
          </div>
        )}
        {pokemonData.id < pokemonsSize && (
          <div className={styles.next}>
            <Link href={`/detail?pokemonId=${pokemonData.id + 1}`}>
              <Icon
                className={styles.icon}
                icon={faChevronRight}
              />
            </Link>
          </div>
        )}
      </div>
      <div className={styles.detailContainer}>
        <Image
          className={styles.pokemonImage}
          loader={() => pokemonService.getPokemonImage(pokemonData.id)}
          unoptimized={true}
          src={pokemonService.getPokemonImage(pokemonData.id)}
          alt={pokemonData.name}
          width={130}
          height={130}
        />
        <ul className={styles.typeContainer}>
          {pokemonData.types.map((pokeType) => {
            return (
              <li
                key={pokeType.type.name}
                className={pokeType.type.name}
              >
                {helper.makeFirstLetterUpperCase(pokeType.type.name)}
              </li>
            )
          })}
        </ul>
        <h3>About</h3>
        <ul className={styles.infoContainer}>
          <li>
            <div className={styles.info}>
              <Icon
                className={styles.infoIcon}
                icon={faWeight}
              />
              <p>{helper.formatPokeWeight(pokemonData.weight)}</p>
            </div>
            <h4>Weight</h4>
          </li>
          <li>
            <div className={styles.info}>
              <Icon
                className={styles.infoIcon}
                icon={faRulerVertical}
              />
              <p>{helper.formatPokeHeight(pokemonData.height)}</p>
            </div>
            <h4>Height</h4>
          </li>
          <li>
            <div className={`${styles.info} ${styles.pokeAbility}`}>
              {pokemonData.abilities.map((pokeAbility) => {
                return (
                  <p key={pokeAbility.ability.name}>{pokeAbility.ability.name}</p>
                )
              })}
            </div>
            <h4>Moves</h4>
          </li>
        </ul>
        <p className={styles.pokeDescription}>{description}</p>
        <h3>Base Stats</h3>
        <ul className={styles.statsContainer}>
          {pokemonData.stats.map((pokeStat) => {
            return (
              <li key={pokeStat.stat.name}>
                <p>{helper.mapStatsTitle(pokeStat.stat.name)}</p>
                <span className={styles.divider} />
                <ProgressBar value={pokeStat.base_stat} color={pokemonData.types[0].type.name} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}