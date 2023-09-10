import React from 'react'
import styles from './page.module.css'
import {Rating} from '@mui/material'
import '$/app/globals.css'

export default function RatingStar({star}) {
  return (
    <Rating value={star ? star :3} readOnly className={styles.rating} />
  )
}
