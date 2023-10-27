"use client"
import React,{useState,useEffect} from 'react';
import { Avatar, Skeleton} from '@mui/material';
import styles from './page.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../../RatingStar/RatingStar';
import { isAuth } from '$/lib/auth';
import LikeButtton from '../../Buttons/CommentLikeDislikeButtons/LikeButtton';
import DislikeButton from '../../Buttons/CommentLikeDislikeButtons/DislikeButton'
import { commentDate } from '$/allApi/CommentOperations'
import { fetchData } from '$/allApi/api';

export default function Comment({ commentId }) {
  const [data,setData] = useState(null)


  useEffect(()=>{
    const getComment = async () => {
      const data = await fetchData(`comments/${commentId}`)
      setData(data.comment)
    }
    getComment()
  },[commentId])


  return (
    <div>
      {
        data ?
        <div className={styles.commentDiv}>
          <div className={styles.commentTop}>
            <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
            <div style={{display:'relative'}}>
              <p>Murat Uçar</p>
              <p className={styles.date}>{commentDate(data?.createdDate)}</p>
            </div>
            
            <RatingStar star={data?.rating} />
          </div>
          <div className={styles.commentContent}>
            {data?.comment ? data?.comment : "Bu film hakkında yorum yapılmamıştır."}
          </div>
          <div className={styles.commentBottom}>
            <LikeButtton />
            <DislikeButton />
            <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
            <CommentReportButton commentId={commentId} />
          </div> 
        </div>: 
          <Skeleton variant="rectangular" width="100%" height={140} style={{marginBottom:5}} />
      }
        
       
    </div>
  );
}