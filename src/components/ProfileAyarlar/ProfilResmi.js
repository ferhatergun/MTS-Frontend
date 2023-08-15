import React from 'react'
import styles from './page.module.css'

export default function ProfilResmi() {
  return (
    <div className={styles.containerProfile}>
        <p>Profil Resmi</p>
        <div className={styles.UploadButton}>+ Yükle</div>
    </div>
  )
}
