"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Link from 'next/link'
import RatingStar from '../RatingStar/RatingStar'
import { getComment } from '$/allApi/CommentOperations'

export default  function ProfileYorum({commentId}) {
  const [comment,setComment] = useState([])
  useEffect(()=>{
    commentGet()
  },[])

  const commentGet = async() => {
    const comment = await getComment(commentId)
    setComment(comment)
  }
  if(comment)
  return (
    <div className={styles.container}>
        <div className={styles.Image}>
            <Image src={img} fill={true} alt='resim' />
        </div>
        <div className={styles.contentDiv}>
          <Link href={`${process.env.FRONT_URL}/film/${comment?.movieSeriesId}`}  className={styles.movieName}>
            {comment?.movieSeriesName ? comment.movieSeriesName : "İsimsiz Film"}
          </Link>
          <RatingStar star={comment?.rating} />
          <p className={styles.content}>{comment?.comment}</p>
          <Link href={{pathname: `${process.env.FRONT_URL}/film/${comment?.movieSeriesId}`,query:`target=${commentId}`}} className={styles.link}>Yoruma Git</Link>
        </div>
    </div>
  )
}
