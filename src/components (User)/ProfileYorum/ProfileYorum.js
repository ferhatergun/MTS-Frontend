"use client"
import React, { useState, useEffect } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from '$/assets/hizli-ve-ofkeli-9.jpeg'
import Link from 'next/link'
import RatingStar from '../RatingStar/RatingStar'
import { deleteCommentProfile, getComment } from '$/allApi/CommentOperations'
import MovieImage from '../MovieImage/MovieImage'
import { Tooltip } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useSelector } from 'react-redux'

export default  function ProfileYorum({commentId,setComments}) {
  const [comment,setComment] = useState([])
  const userId = useSelector(state => state.user.userId)

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
        <MovieImage photoId={comment?.moviePhoto} style={styles.Image}/>
        <div className={styles.contentDiv}>
          <Link href={`${process.env.FRONT_URL}/film/${comment?.movieSeriesId}`}  className={styles.movieName}>
            {comment?.movieSeriesName ? comment.movieSeriesName : "İsimsiz Film"}
          </Link>
          <RatingStar star={comment?.rating} />
          <p className={styles.content}>{comment?.comment}</p>
          <Link href={{pathname: `${process.env.FRONT_URL}/film/${comment?.movieSeriesId}`,query:`target=${commentId}`}} className={styles.link}>Yoruma Git</Link>
          <Tooltip title="Sil" 
          followCursor 
          placement="top" 
          style={{display:comment.createdUserId !== userId && 'none'}}
          onClick={()=>deleteCommentProfile(comment,setComments)}
          >
          <div className={styles.deleteBtn}>
            <DeleteOutlineIcon/>
          </div>
        </Tooltip>
        </div>
    </div>
  )
}
