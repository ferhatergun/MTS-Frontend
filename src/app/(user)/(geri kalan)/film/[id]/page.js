import React from 'react'
import styles from './page.module.css'
import ScrollToComment from '$/components (User)/Buttons/ScrollToComment/ScrollToComment'
import CarouselMovie from '$/components (User)/CarouselMovie/CarouselMovie'
import RatingStar from '$/components (User)/RatingStar/RatingStar'
import MovieComment from '$/components (User)/MovieComment/MovieComment'
import { fetchData } from '$/allApi/api'
import MovieImage from '$/components (User)/MovieImage/MovieImage'



export default async function page({params}) {

    const mostPopular = (await fetchData('comments/rating/TopMovie')).topMovies
    const movie = (await fetchData(`movieSeries/${params.id}`)).movieseries

    console.log(movie)
    
  return (
    <div className={styles.container}>
        <p className={styles.movieName}>{movie?.name}</p>
        <div className={styles.movieInformationDiv}>
            <div className={styles.imageDiv}>
                <MovieImage photoId={movie?.moviePhoto} style={styles.image} />
            </div>
            <div className={styles.informationDiv} >
                <p>Kategori : {movie?.category}</p>
                <p>Yönetmen: {movie?.director} </p>
                <p>Vizyona Giriş Tarihi : 13 Temmuz 2022</p>
                <p>Film Süresi : {movie?.time}</p>
                <RatingStar star={movie?.rating} isVisible={true} />
                <div className={styles.fav_comment_btnDiv}>
                    <ScrollToComment />
                </div>
            </div>
        </div>
        <div className={styles.movieSummary}>
            {movie?.description}
        </div>
        <div className={styles.enPopulerSlider}>
            <CarouselMovie headerTitle="Popüler Filmler" delay={6000} data={mostPopular} /> 
        </div>
        <div className={styles.movieCommentsDiv}>
            {
                movie && params ?
                <MovieComment movieId={params.id}/> :null
            }
        </div>

    </div>
  )
}