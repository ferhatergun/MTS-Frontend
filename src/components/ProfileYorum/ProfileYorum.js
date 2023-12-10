"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Link from 'next/link'
import RatingStar from '../RatingStar/RatingStar'
import { getComment } from '$/allApi/CommentOperations'
import { FRONT_URL } from '$/allApi/api'

export default  function ProfileYorum({commentId}) {
  const [comment,setComment] = useState([])
  useEffect(()=>{
    commentGet()
  },[])

  const commentGet = async() => {
    const comment = await getComment(commentId)
    setComment(comment)
  }
  return (
    <div className={styles.container}>
        <div className={styles.Image}>
            <Image src={img} fill={true} alt='resim' />
        </div>
        <div className={styles.contentDiv}>
          <Link href={`${FRONT_URL}/film/${comment?.movieSeriesId}`} className={styles.movieName}>
            {comment?.movieSeriesName ? comment.movieSeriesName : "İsimsiz Film"}
          </Link>
          <RatingStar star={comment?.rating} />
          <p className={styles.content}>{comment?.comment}</p>
          <Link href="/" className={styles.link}>Yoruma Git</Link>
        </div>
    </div>
  )
}
