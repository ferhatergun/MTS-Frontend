"use client"
import AddMovie from '$/components (Admin)/addMovie/AddMovie'
import UsersTable from '$/components (Admin)/usersTable/UsersTable'
import styles from './page.module.css'

export default function Filmler() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Tüm Kullanıcılar</h3>
      </div>
      <UsersTable/>
    </div>
  )
}
