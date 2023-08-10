import { useState } from 'react';
import styles from './page.module.css'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input className={styles.input}></input>
      <SearchIcon />
    </div>
  )
}
