import React from 'react'
import styles from './page.module.css'
import { TextField } from '@mui/material'

export default function UserName() {
  return (
    <div className={styles.containerUser}>
        <p>Kullanıcı Adı</p>
        <div className={styles.input_btn}>
            <TextField id="outlined-basic" label="Yeni kullanıcı adı" variant="outlined" />
            <div className={styles.button}>Değiştir</div>

        </div>
    </div>
  )
}
