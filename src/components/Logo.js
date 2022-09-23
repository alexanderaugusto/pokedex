import Image from 'next/image'
import styles from '../styles/components/Logo.module.css'
import POKEBALL from '../assets/img/pokeball.png'

export default function Logo() {
  return (
    <div className={styles.logo }>
      <Image
        src={POKEBALL}
        alt='Pokeball'
        width={40}
        height={40}
      />
      <h1>Pokedéx</h1>
    </div>
  )
}