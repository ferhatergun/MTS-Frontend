import React from 'react'
import styles from './page.module.css'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Image from 'next/image'
import { Rating ,Avatar,TextField, Button} from '@mui/material'
import Comments from '$/components/Comments/Comments'

export default function page({params}) {
console.log(params.id)
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
                    <div className={styles.commentBtn}>Yorum Yaz</div>
                </div>
            </div>
        </div>
        <div className={styles.movieSummary}>
            Hızlı ve öfkeli 9 Konusu
        </div>
        <div className={styles.enPopulerSlider}>en populer filmler</div>
        <div className={styles.movieCommentsDiv}>
            <Comments />
        </div>

    </div>
  )
}
