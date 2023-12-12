"use client"
import React,{useCallback, useEffect, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import { Rating } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import RatingStar from '../RatingStar/RatingStar'



export default function CarouselMovie({headerTitle,data,delay}) {
    const [emblaRef,emblaApi] = useEmblaCarousel({align:'start'},[
        Autoplay({ delay: delay }),
      ])
    
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev() 
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])




  return (
    <>
        <div className={styles.visionMovies} >
        <div className={styles.sliderHeader}>
            <div>{headerTitle}</div>
        </div>
        <hr/>
        <div className={styles.embla} ref={emblaRef}>
        <div className={styles.sliderContainer}>
            
            {
                data.map((item,i)=>(
                    <Link className={styles.movieDiv} key={i} href={`/film/${item._id}`}>
                        <div className={styles.imageDiv}>
                            <Image src={img} className={styles.image} alt='resim bulunamadı' priority={true} />
                        </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'50px'}}>
                        <div className={styles.movieName}>{item.name}</div>
                            <RatingStar star={4} /> 
                        </div>
                    </Link>
                ))
            } 
        </div>
         </div>
         <div className={styles.backButton} onClick={scrollPrev}>
            <ArrowBackIosNewIcon sx={{color:'white'}}/>
        </div>
        <div className={styles.nextButton} onClick={scrollNext}>
            <ArrowForwardIosIcon sx={{color:'white'}}/>
        </div>
        </div>
    </>
    
  )
}
