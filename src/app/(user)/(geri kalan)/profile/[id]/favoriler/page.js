"use client"
import React, { useEffect ,useState} from 'react'
import Link from 'next/link'
import MovieImage from '$/components (User)/MovieImage/MovieImage'
import RatingStar from '$/components (User)/RatingStar/RatingStar'
import styles from './page.module.css'
import { fetchData } from '$/allApi/api'
import { useParams } from 'next/navigation'

export default function page() {
    const [favoriteMovies, setFavoriteMovies] = useState([])
    const userId = useParams().id

    useEffect(() => {
        dataFetch()
    }, [])
    const dataFetch = async () => {
        const result = await fetchData(`users/${userId}/favoritesMovieSeries`)
        setFavoriteMovies(result.favoriteMovieSeries)
    }
 
  return (
    <div className={styles.sliderContainer}> 
    {
        favoriteMovies.map((item,i)=>(
            <Link className={styles.movieDiv} key={i} href={`/film/${item._id}`}>
                <div className={styles.imageDiv}>
                    <MovieImage photoId={item.moviePhoto} style={styles.image} />
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'50px'}}>
                <div className={styles.movieName}>{item.name}</div>
                <RatingStar star={item.rating} isVisible={true} /> 
                </div>
            </Link>
        ))
    } 
    </div>
  )
}
