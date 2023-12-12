import React from 'react'
import styles from './page.module.css'
import { Grid,Rating } from '@mui/material'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import RatingStar from '../RatingStar/RatingStar'


export default function ProfileFavori() {
  return (
    <div className={styles.container}>
        <div className={styles.ImageDiv}>
            <Image src={img} fill alt='resim bulunamadı' />
        </div>
        <div className={styles.contentDiv}>
            <p className={styles.movieName}>Hızlı ve öfkeli 9</p>
            <RatingStar star={4} />
        </div>
        <div className={styles.favoriteBtn}>
            <FavoriteIcon fontSize='large' />
        </div>
    </div>
  )
}
