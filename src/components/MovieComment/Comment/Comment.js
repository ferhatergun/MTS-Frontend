"use client";
import React, { useEffect, useState } from 'react';
import { Avatar} from '@mui/material';
import styles from './page.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../../RatingStar/RatingStar';
import { isAuth } from '$/lib/auth';
import LikeButtton from '../../Buttons/CommentLikeDislikeButtons/LikeButtton';
import DislikeButton from '../../Buttons/CommentLikeDislikeButtons/DislikeButton'
import { commentDate } from '$/utils/CommentOperations'
import { fetchData } from '$/utils/api';

export default function Comment({ commentId }) {
  const auth = isAuth();
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const commentSet = async () => {
      const data = (await fetchData(`comments/${commentId}`)).comment
      setComment(data);
      setLoading(true);
    };

    commentSet();
  }, [commentId]);


  return (
    <div>
      {loading ? (
        <div className={styles.commentDiv}>
          <div className={styles.commentTop}>
            <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
            <div style={{display:'relative'}}>
              <p>Murat Uçar</p>
              <p className={styles.date}>{commentDate(comment.createdDate)}</p>
            </div>
            
            <RatingStar star={comment.rating} />
          </div>
          <div className={styles.commentContent}>
            {comment.comment ? comment.comment : "Bu film hakkında yorum yapılmamıştır."}
          </div>
          <div className={styles.commentBottom}>
            <LikeButtton />
            <DislikeButton />
            <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
            <CommentReportButton commentId={commentId} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
