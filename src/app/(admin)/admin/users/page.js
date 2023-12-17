"use client"
import React from 'react'
import UsersTable from '$/components (Admin)/usersTable/UsersTable'
import styles from './page.module.css'

export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Tüm Kullanıcılar</h3>
      </div>
      <UsersTable/>
    </div>
  )
}
