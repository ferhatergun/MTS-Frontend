
import React from 'react';
import { Avatar,Tooltip} from '@mui/material';
import styles from './page.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../../RatingStar/RatingStar';
import LikeButtton from '../../Buttons/CommentLikeDislikeButtons/LikeButtton';
import DislikeButton from '../../Buttons/CommentLikeDislikeButtons/DislikeButton'
import { commentDate, deleteComment } from '$/allApi/CommentOperations'
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Link from 'next/link';
import { FRONT_URL } from '$/allApi/api';


export default function Comment({ comment , setComments}) {
  const userId = useSelector(state => state.user.userId)
 //createdUserId

  return (
    <div className={styles.commentDiv}>
      <div className={styles.commentTop}>
        <Link href={`${FRONT_URL}/profile/${comment.createdUserId}/yorumlar`} >
        <Avatar sx={{ width: 50, height: 50 }}>
          {comment.userName.substring(0,1).toUpperCase()}
        </Avatar>
        </Link>
        <Link href={`${FRONT_URL}/profile/${comment.createdUserId}/yorumlar`} style={{display:'relative'}}>
          <p>{comment.userName ? comment.userName : "Murat Uçar"}</p>
          <p className={styles.date}>{commentDate(comment?.createdDate)}</p>
        </Link>
        
        <RatingStar star={comment?.rating} />

        <Tooltip title="Sil" 
          followCursor 
          placement="top" 
          style={{display:comment.createdUserId !== userId && 'none'}}
          onClick={()=>deleteComment(comment,setComments)}
        >
          <div className={styles.deleteBtn}>
            <DeleteOutlineIcon/>
          </div>
        </Tooltip>
      </div>
      <div className={styles.commentContent}>
        {comment?.comment ? comment?.comment : "Bu film hakkında yorum yapılmamıştır."}
      </div>
      <div className={styles.commentBottom}>
        <LikeButtton 
          like={comment.likes} 
          createdId={comment.createdUserId} 
          commentId={comment._id} 
        />
        <DislikeButton 
          dislike={comment.dislikes} 
          createdId={comment.createdUserId} 
          commentId={comment._id}
        />
        <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
        <CommentReportButton commentId={comment._id} />
      </div> 
    </div>
  );
}