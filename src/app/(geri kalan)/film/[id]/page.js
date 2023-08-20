import React from 'react'
import styles from './page.module.css'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Image from 'next/image'
import { Rating } from '@mui/material'
import MovieComment from '$/components/MovieComment/MovieComment'
import CreateComment from '$/components/CreateComment/CreateComment'
import { getMovie } from '$/utils/api'
import ScrollToComment from '$/components/ScrollToComment/ScrollToComment'

export default async function page({params}) {

// const movie = await getMovie(params.id) // use client yapmadan veri çekme

  return (
    <div className={styles.container}>
        <p className={styles.movieName}>Hızlı ve öfkeli 9</p>
        <div className={styles.movieInformationDiv}>
            <div className={styles.imageDiv}>
                <Image src={img} fill className={styles.image} />
            </div>
            <div className={styles.informationDiv} >
                <p>Kategori : Macera</p>
                <p>Yönetmen: Ali Cabbar </p>
                <p>Vizyona Giriş Tarihi : 13 Temmuz 2022</p>
                <p>Film Süresi : 2 saat 89 dakika</p>
                <Rating value={4} readOnly sx={{color:'purple'}} /> 
                <div className={styles.fav_comment_btnDiv}>
                    <div className={styles.favBtn}>Favoriye Ekle</div>
                    <ScrollToComment />
                </div>
            </div>
        </div>
        <div className={styles.movieSummary}>
            Hızlı ve öfkeli 9 Konusu
        </div>
        <div className={styles.enPopulerSlider}>en populer filmler</div>
        <div className={styles.movieCommentsDiv}>
            <CreateComment />
            <MovieComment />
            <MovieComment />
        </div>

    </div>
  )
}
