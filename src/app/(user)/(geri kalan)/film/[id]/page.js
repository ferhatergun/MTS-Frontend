import React from 'react'
import styles from './page.module.css'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Image from 'next/image'
import ScrollToComment from '$/components/Buttons/ScrollToComment/ScrollToComment'
import CarouselMovie from '$/components/CarouselMovie/CarouselMovie'
import RatingStar from '$/components/RatingStar/RatingStar'
import MovieComment from '$/components/MovieComment/MovieComment'
import { fetchData } from '$/utils/api'


export default async function page({params}) {


const dataa=[
    {id:1,name:'hızlı ve öfkeli 9',},
    {id:2,name:'hızlı ve öfkeli 9',},
    {id:3,name:'hızlı ve öfkeli 9',},
    {id:4,name:'hızlı ve öfkeli 9',},
   ]
  
   const movie = (await fetchData(`movieSeries/${params.id}`)).movieseries
   

   
  return (
    <div className={styles.container}>
        <p className={styles.movieName}>{movie?.name}</p>
        <div className={styles.movieInformationDiv}>
            <div className={styles.imageDiv}>
                <Image src={img} fill className={styles.image} alt='resim bulunamadı' />
            </div>
            <div className={styles.informationDiv} >
                <p>Kategori : {movie?.category}</p>
                <p>Yönetmen: {movie?.director} </p>
                <p>Vizyona Giriş Tarihi : 13 Temmuz 2022</p>
                <p>Film Süresi : {movie?.time}</p>
                <RatingStar />
                <div className={styles.fav_comment_btnDiv}>
                    <div className={styles.favBtn}>Favoriye Ekle</div>
                    <ScrollToComment />
                </div>
            </div>
        </div>
        <div className={styles.movieSummary}>
            {movie?.description}
        </div>
        <div className={styles.enPopulerSlider}>
            <CarouselMovie headerTitle="Benzer Filmler" delay={4000} data={dataa} />
        </div>
        <div className={styles.movieCommentsDiv}>
            <MovieComment movie={movie} movieId={params.id} />
        </div>

    </div>
  )
}
