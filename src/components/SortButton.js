import { useState } from 'react'
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import styles from '../styles/components/SortButton.module.css'

const ID_ORDER = 'id'
const NAME_ORDER = 'name'

export default function SortButton({ initialItems, changeInitialItems, items, changeItems }) {
  const [orderBy, setOrderBy] = useState(ID_ORDER)

  function sortItems(items) {
    const newItems = [...items]
    newItems.sort((a, b) => {
      if (orderBy === NAME_ORDER) {
        return a.id - b.id
      } else {
        return a.name.localeCompare(b.name)
      }
    })
    return newItems
  }

  function handleChange() {
    changeItems(sortItems(items))
    changeInitialItems(sortItems(initialItems))
    setOrderBy(orderBy === ID_ORDER ? NAME_ORDER : ID_ORDER)
  }

  return (
    <button className={styles.sortButton} onClick={handleChange}>
      {orderBy === ID_ORDER ? <h4>#</h4> : <h4>A <br /> Z</h4>}
      <Icon className={styles.sortIcon} icon={faLongArrowDown} />
    </button>
  )
}