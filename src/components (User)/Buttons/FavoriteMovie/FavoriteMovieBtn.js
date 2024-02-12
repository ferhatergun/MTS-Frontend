"use client"
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import { favoriteMovie, getUser } from '$/allApi/UserOperations';
import { Skeleton } from '@mui/material';

export default function FavoriteMovieBtn({movieId}) {
    const userId = useSelector(state=>state.user.userId)
    const [favoriteMovies,setFavoriteMovies] = useState(false)
    const [loading, setLoading] = useState(false)

    const userGet=async ()=>{
        const user = await  getUser(userId)
        setFavoriteMovies(user.favoriteMovieSeries)
    }
    useEffect(()=>{
        if(userId)
        {
            userGet()
        }
        setLoading(true)
    },[])
if(loading)
  return (
    <div className={styles.container}>
        {
            !userId ? 
            <div className={styles.favBtn} style={{opacity:0.5,pointerEvents:'none'}}>
            Favorile
            <BookmarkBorderIcon/>
        </div>
            
            :(
                favoriteMovies && (
                <div className={styles.favBtn} onClick={()=>favoriteMovie(movieId,setFavoriteMovies)}>
                    Favorile
                    {
                        favoriteMovies.includes(movieId) ?
                        <BookmarkIcon/> :
                        <BookmarkBorderIcon/>
                    }
                </div>
                )
            )
        }

    </div>
  )
  else{
    return(
        <div style={{width:100}}>
            <Skeleton variant="rectangular" style={{borderRadius:10}} width="100%" height={45} animation="wave" />
        </div>
    )
  }
}
