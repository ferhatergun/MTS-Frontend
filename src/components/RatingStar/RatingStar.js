import React from 'react'
import styles from './page.module.css'
import {Rating} from '@mui/material'
import '$/app/globals.css'

export default function RatingStar() {
  return (
    <Rating value={4} readOnly className={styles.rating} />
  )
}
