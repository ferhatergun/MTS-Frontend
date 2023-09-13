import React from 'react'
import styles from './page.module.css'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Image from 'next/image'
import { Rating } from '@mui/material'
import MovieComments from '$/components/MovieComments/MovieComments'
import CreateComment from '$/components/CreateComment/CreateComment'
import { getMovie } from '$/utils/api'
import ScrollToComment from '$/components/Buttons/ScrollToComment/ScrollToComment'
import CarouselMovie from '$/components/CarouselMovie/CarouselMovie'
import RatingStar from '$/components/RatingStar/RatingStar'

export default async function page({params}) {

// const movie = await getMovie(params.id) // use client yapmadan veri çekme


const dataa=[
    {id:1,name:'hızlı ve öfkeli 9',},
    {id:2,name:'hızlı ve öfkeli 9',},
    {id:3,name:'hızlı ve öfkeli 9',},
    {id:4,name:'hızlı ve öfkeli 9',},
   ]
  
   const movie = await getMovies(params.id) 
   
   
// telefondan kontrol edebilmek için backend yokken de değerler yazdık
  return (
    <div className={styles.container}>
        <p className={styles.movieName}>{movie.name}</p>
        <div className={styles.movieInformationDiv}>
            <div className={styles.imageDiv}>
                <Image src={img} fill className={styles.image} alt='resim bulunamadı' />
            </div>
            <div className={styles.informationDiv} >
                <p>Kategori : {movie.category ? movie.category : "Kategori"}</p>
                <p>Yönetmen: {movie.director ? movie.director :"Yönetmen"} </p>
                <p>Vizyona Giriş Tarihi : 13 Temmuz 2022</p>
                <p>Film Süresi : {movie.time ? movie.time : "Süre"}</p>
                <RatingStar />
                <div className={styles.fav_comment_btnDiv}>
                    <div className={styles.favBtn}>Favoriye Ekle</div>
                    <ScrollToComment />
                </div>
            </div>
        </div>
        <div className={styles.movieSummary}>
            {movie.description ? movie.description : "Bu film hakkında bir açıklama bulunmamaktadır."}
        </div>
        <div className={styles.enPopulerSlider}>
            <CarouselMovie headerTitle="Benzer Filmler" delay={4000} data={dataa} />
        </div>
        <div className={styles.movieCommentsDiv}>
            <CreateComment  movieId={params.id} />
            {
                movie ?
                (
                    movie?.comments?.map((commentId,index) => (
                    <MovieComments key={index} commentId={commentId} />
                    ))
                ) :null
                
            }
        </div>

    </div>
  )
}


const getMovies = async (movieId) => {
    const res = await fetch(`http://localhost:5000/movieSeries/${movieId}`,{cache:'no-cache'})
    const data = await res.json()
    if(data.success){
      return data.movieseries
    }
    else{
      return false
    }
}
