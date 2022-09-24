import Link from 'next/link'
import { faArrowLeft, faRulerVertical, faWeight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import Image from './Image'
import helper from '../utils/helper'
import pokemonService from '../services/pokemonService'
import styles from '../styles/components/PokeDetail.module.css'
import POKEBALL_WHITE from '../assets/img/pokeball-white.png'
import ProgressBar from './ProgressBar'

export default function PokeDetail({ pokemon, pokemonsSize = 151, description }) {
  if (!pokemon) {
    return null
  }

  return (
    <div className={`${styles.pokeDetail} ${pokemon.types[0].type.name}`}>
      <div className={styles.detailHeader}>
        <Link href={`/`}>
          <Icon
            className={styles.backIcon}
            icon={faArrowLeft}
          />
        </Link>
        <h2>{helper.makeFirstLetterUpperCase(pokemon.name)}</h2>
        <h4>{`#${helper.fillZeroInFront(pokemon.id, 3)}`}</h4>
      </div>
      <Image
        className={styles.pokeballImage}
        src={POKEBALL_WHITE}
        alt={pokemon.name}
      />
      <div className={styles.nextPokemon}>
        {pokemon.id > 1 && (
          <div className={styles.previous}>
            <Link href={`/detail/${pokemon.id - 1}`}>
              <Icon
                className={styles.icon}
                icon={faChevronLeft}
              />
            </Link>
          </div>
        )}
        {pokemon.id < pokemonsSize && (
          <div className={styles.next}>
            <Link href={`/detail/${pokemon.id + 1}`}>
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
          loader={() => pokemonService.getPokemonImage(pokemon.id)}
          unoptimized={true}
          src={pokemonService.getPokemonImage(pokemon.id)}
          alt={pokemon.name}
          width={130}
          height={130}
        />
        <ul className={styles.typeContainer}>
          {pokemon.types.map((pokeType) => {
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
              <p>{helper.formatPokeWeight(pokemon.weight)}</p>
            </div>
            <h4>Weight</h4>
          </li>
          <li>
            <div className={styles.info}>
              <Icon
                className={styles.infoIcon}
                icon={faRulerVertical}
              />
              <p>{helper.formatPokeHeight(pokemon.height)}</p>
            </div>
            <h4>Height</h4>
          </li>
          <li>
            <div className={`${styles.info} ${styles.pokeAbility}`}>
              {pokemon.abilities.map((pokeAbility) => {
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
          {pokemon.stats.map((pokeStat) => {
            return (
              <li key={pokeStat.stat.name}>
                <p>{helper.mapStatsTitle(pokeStat.stat.name)}</p>
                <span className={styles.divider} />
                <ProgressBar value={pokeStat.base_stat} color={pokemon.types[0].type.name} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}