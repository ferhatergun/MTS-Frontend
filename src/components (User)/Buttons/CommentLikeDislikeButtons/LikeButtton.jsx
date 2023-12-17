"use client"
import React,{useEffect,useState}from 'react';
import styles from './page.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Checkbox } from '@mui/material';
import { isAuth } from '$/lib/auth';
import { likeComment } from '$/allApi/CommentOperations';

export default function LikeButton({like,userId,commentId}) {
    const auth = isAuth();
    const [buttonStyle, setButtonStyle] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [likeCount, setLikeCount] = useState(like.length);

    useEffect(()=>{
      setButtonStyle({opacity: auth ? 1 : 0.5})
      setDisabled(!auth)
    },[])

    return (
        <Checkbox
          icon={
          <div className={styles.commentIcon}>
            <ThumbUpOffAltIcon className={styles.Icon} />
            {likeCount}
          </div>
          }
          checkedIcon={
          <div className={styles.commentIcon}>
            <ThumbUpIcon className={styles.IconChecked} />
            {likeCount}
          </div>
          }
          className={styles.commentIcon}
          disabled={disabled}
          style={buttonStyle} // Stil nesnesini style prop'una ekleyin
          onClick={()=>likeComment(commentId,setLikeCount)}
          defaultChecked={like.find((item)=>item === userId) ? true : false}
        />
    );
}
