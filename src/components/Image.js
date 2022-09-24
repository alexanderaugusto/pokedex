import Image from 'next/image'
import styles from '../styles/components/Image.module.css'

export default function Logo({ className, loader, unoptimized, src, alt, width, height }) {
  return (
    <div className={`${className} ${styles.image}`}>
      <Image
        loader={loader}
        unoptimized={unoptimized}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  )
}