"use client"
import UsersTable from '$/components (Admin)/usersTable/UsersTable'
import styles from './page.module.css'
import '$/app/globals.css'

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
