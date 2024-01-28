"use client"
import React, { useEffect, useState } from 'react'
import img from '$/assets/no.jpg'
import Image from 'next/image'
import { storage } from '$/firebase'
import { ref ,getDownloadURL} from 'firebase/storage'
import styles from './page.module.css'

export default function MovieImage({photoId,style}) {
    const [photo, setPhoto] = useState(null)

    const getPhoto = async () => {
        const docRef = ref(storage, `moviePhotos/${photoId}`)
        try{
            const Photo = await getDownloadURL(docRef)
            if(Photo){
                setPhoto(Photo)
            }
        }catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
      if(photoId)
        getPhoto()
    },[photoId])

  return (
      <Image src={photo ? photo : img } className={style} width={200} height={200} alt='resim bulunamadı' priority={true} key={photoId} />
  )
}
