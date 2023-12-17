import React from 'react'
import styles from './page.module.css'
import { TextField } from '@mui/material'

export default function ChangePass() {
  return (
    <div className={styles.containerChange}>
      <p>Şifre Değiştir</p>
      <div className={styles.input_btn}>
        <TextField id="outlined-basic" label="mevcut şifreniz" variant="outlined" />
        <TextField id="outlined-basic" label="yeni şifre" variant="outlined" sx={{mt:2}}  />
        <TextField id="outlined-basic" label="yeni şifre tekrar" variant="outlined" sx={{mt:2}} />
        <div className={styles.button}>Değiştir</div>
      </div>
    </div>
  )
}
