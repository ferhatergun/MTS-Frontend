import React from 'react'
import styles from './page.module.css'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Image from 'next/image'
import ScrollToComment from '$/components/Buttons/ScrollToComment/ScrollToComment'
import CarouselMovie from '$/components/CarouselMovie/CarouselMovie'
import RatingStar from '$/components/RatingStar/RatingStar'
import { redirect } from 'next/navigation'
import MovieComment from '$/components/MovieComment/MovieComment'


export default async function page({params}) {
    // const [comments,setComments] = useState(null) 
    // yorumları yorum componentine gönderdik
    // create comment componentine gönderdik ki yeni yorumu bu diziye push edebilelim



const dataa=[
    {id:1,name:'hızlı ve öfkeli 9',},
    {id:2,name:'hızlı ve öfkeli 9',},
    {id:3,name:'hızlı ve öfkeli 9',},
    {id:4,name:'hızlı ve öfkeli 9',},
   ]
  
   const movie = await getMovies(params.id) 
   

   
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


const getMovies = async (movieId) => {
    try{
        const res = await fetch(`http://localhost:5000/movieSeries/${movieId}`,{cache:'no-cache'})
        const data = await res.json()
        if(data.success){
        return data.movieseries
        }
        else{
            redirect('/500')
        } 
    }catch(e){
        console.log("film getirilirken hata oluştu",e)
        redirect('/500')
    }

}
