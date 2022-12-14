import Link from 'next/link'
import Image from './Image'
import helper from '../utils/helper'
import styles from '../styles/components/PokeCard.module.css'

export default function PokeCard({ id, name, image, color }) {
  return (
    <Link href={`/detail?pokemonId=${id}`}>
      <div className={`${styles.pokeCard} ${color}`}>
        <h4>{`#${helper.fillZeroInFront(id, 3)}`}</h4>
        <Image
          className={id.toString().includes('default') && styles.loading}
          loader={() => image}
          unoptimized={true}
          src={image}
          alt={name}
          width={130}
          height={130}
        />
        <div className={styles.nameContainer}>
          <h3>{helper.makeFirstLetterUpperCase(name)}</h3>
        </div>
      </div>
    </Link>
  )
}