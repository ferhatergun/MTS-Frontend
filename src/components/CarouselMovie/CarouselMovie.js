import React,{useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import { Rating } from '@mui/material'


export default function CarouselMovie() {
    const [emblaRef,emblaApi] = useEmblaCarousel({align:'start'})
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

      const data =[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8},
      ]

  return (
    <>
        <div className={styles.visionMovies} >
        <div className={styles.sliderHeader}>
            <div>vizyondaki filmer</div>
            <div>tümünü gör</div>
        </div>
        <hr/>
        <div className={styles.slideContainerr} ref={emblaRef}>
        <div className={styles.slideContainer}>
            {
                data.map((item,i)=>(
                    <div className={styles.movieDiv}>
                        <div className={styles.imageDiv}>
                            <Image src={img} className={styles.image}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'50px'}}>
                        <div>Hızlı Ve Öfkeli 9</div>
                            <Rating value={4} readOnly sx={{color:'purple'}} size='small' />  
                        </div>
                    </div>
                ))
            } 
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
            Prev
        </button>
        <button className="embla__next" onClick={scrollNext}>
            Next
        </button>
         </div>
        </div>
    </>
    
  )
}
