import Icon from './Icon'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/components/SearchInput.module.css'

export default function SearchInput({ initialItems, items, changeItems }) {
  function handleChange(e) {
    const { value } = e.target
    const filteredItems = initialItems.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    changeItems(filteredItems)
  }

  return (
    <div className={styles.searchInput}>
      <button>
        <Icon
          className={styles.searchIcon}
          icon={faSearch}
        />
      </button>
      <input type="text" placeholder="Procurar" onChange={handleChange} />
    </div>
  )
}