import helper from '../utils/helper'
import styles from '../styles/components/ProgressBar.module.css'

export default function ProgressBar({ value, color }) {
  return (
    <div className={`${styles.progressBar} ${color}`}>
      <label>{helper.fillZeroInFront(value, 3)}</label>
      <div className={styles.progressContainer}>
        <div className={styles.progress} style={{ width: `${helper.calculatePercentage(value, 230)}%` }} />
      </div>
    </div>
  )
}