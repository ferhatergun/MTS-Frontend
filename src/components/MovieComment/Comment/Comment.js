
import React,{useState,useEffect} from 'react';
import { Avatar,Tooltip} from '@mui/material';
import styles from './page.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../../RatingStar/RatingStar';
import LikeButtton from '../../Buttons/CommentLikeDislikeButtons/LikeButtton';
import DislikeButton from '../../Buttons/CommentLikeDislikeButtons/DislikeButton'
import { commentDate } from '$/allApi/CommentOperations'
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Comment({ comment }) {
  const userId = useSelector(state => state.user.userId)
 //createdUserId
 console.log(comment)

  return (
    <div className={styles.commentDiv}>
      <div className={styles.commentTop}>
        <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
        <div style={{display:'relative'}}>
          <p>{comment.userName ? comment.userName : "Murat Uçar"}</p>
          <p className={styles.date}>{commentDate(comment?.createdDate)}</p>
        </div>
        
        <RatingStar star={comment?.rating} />

        <Tooltip title="Sil" followCursor placement="top" style={{display:comment.createdUserId !== userId && 'none'}}>
          <div className={styles.deleteBtn}>
            <DeleteOutlineIcon/>
          </div>
        </Tooltip>
      </div>
      <div className={styles.commentContent}>
        {comment?.comment ? comment?.comment : "Bu film hakkında yorum yapılmamıştır."}
      </div>
      <div className={styles.commentBottom}>
        <LikeButtton />
        <DislikeButton />
        <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
        <CommentReportButton commentId={comment._id} />
      </div> 
    </div>
  );
}