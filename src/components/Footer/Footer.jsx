import React from 'react'
import styles from './page.module.css'
import {Grid} from '@mui/material'

export default function Footer() {
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Grid container  className={styles.topContainer}>
          <Grid item xs={5} sm={4} md={3}>
            <div className={styles.logo}>logo</div>
            <div className={styles.description}>açıklama</div>
          </Grid>
          <Grid item xs={5} sm={4} md={3}>
            <h4>Hızlı Linkler</h4>
            <ul className={styles.fastlink}>
              <li className={styles.link}>En İyi Filmler</li>
              <li className={styles.link}>En İyi Diziler</li>
              <li className={styles.link}>Popüler Filmler</li>
              <li className={styles.link}>Vizyondakiler</li>
              <li className={styles.link}>En Beğenilenler</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <h4>İletişim</h4>
          </Grid>
        </Grid>
      </div>
      <div className={styles.bottom}>

      </div>
    </div>
  )
}
