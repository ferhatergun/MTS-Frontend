import React from 'react'
import styles from './page.module.css'
import {Rating} from '@mui/material'
import '$/app/globals.css'

export default function RatingStar({star,isVisible}) {
  return (
    <div className={styles.ratingContainer}>
      <Rating value={star ? parseFloat(star) :0} readOnly className={styles.rating} precision={0.1}/>
      {/* her yıldız olan kısımda rating sayısı gösterilmesin diye */}
      {isVisible ? (
        star ? star.toString().substring(0,3) : 0
      ):
      null
      }
    </div>
  )
}
