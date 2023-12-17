"use client"
import AddMovie from '$/components (Admin)/addMovie/AddMovie'
import MoviesTable from '$/components (Admin)/moviesTable/MoviesTable'
import styles from './page.module.css'
import React from 'react'

export default function Filmler() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Tüm Filmler</h3>
        <AddMovie/>
      </div>
      <MoviesTable/>
    </div>
  )
}
