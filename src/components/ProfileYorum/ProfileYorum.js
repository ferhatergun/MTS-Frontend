import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import { Rating } from '@mui/material'
import Link from 'next/link'

export default function ProfileYorum({movieName,star,content}) {
  return (
    <div className={styles.container}>
        <div className={styles.Image}>
            <Image src={img} fill={true} />
        </div>
        <div className={styles.contentDiv}>
          <p className={styles.movieName}>{movieName}</p>
          <Rating value={star} readOnly sx={{color:'purple'}} />
          <p className={styles.content}>{content}</p>
          <Link href="/" className={styles.link}>Yoruma Git</Link>
        </div>
    </div>
  )
}
