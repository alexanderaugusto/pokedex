import Link from 'next/link'
import Image from 'next/image'
import helper from '../utils/helper'
import styles from '../styles/components/PokeCard.module.css'

export default function PokeCard({ id, name, image, color }) {
  return (
    <Link href={`/detail/${id}`}>
      <div className={`${styles.pokeCard} ${color}`}>
        <h4>{`#${helper.fillZeroInFront(id, 3)}`}</h4>
        <Image
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