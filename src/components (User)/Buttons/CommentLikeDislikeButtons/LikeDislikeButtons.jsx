"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Checkbox } from "@mui/material";
import { isAuth } from "$/lib/auth";
import { dislikeComment, likeComment} from "$/allApi/CommentOperations";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export default function LikeDislikeButtons({like ,dislike ,userId ,commentId}) {
    const auth = isAuth();
    const [buttonStyle, setButtonStyle] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [likes, setLikes] = useState(like);
    const [dislikes, setDislikes] = useState(dislike);
    console.log(likes)

    useEffect(()=>{
      setButtonStyle({opacity: auth ? 1 : 0.5})
      setDisabled(!auth)
    },[])


  return (
    <div className={styles.container}>
    <Checkbox
        icon={
        <div className={styles.commentIcon}>
        <ThumbUpOffAltIcon className={styles.Icon} />
        {likes.length}
        </div>
        }
        checkedIcon={
        <div className={styles.commentIcon}>
        <ThumbUpIcon className={styles.IconChecked} />
        {likes.length}
        </div>
        }
        className={styles.commentIcon}
        disabled={disabled}
        style={buttonStyle}
        onClick={()=>likeComment(commentId,setLikes,dislikes,setDislikes)}
        checked={likes.find((item)=>item === userId) ? true : false}
    />

    <Checkbox
      icon={
        <div className={styles.commentIcon}>
          <ThumbDownOffAltIcon className={styles.Icon} />
          {dislikes.length}
        </div>
      }
      checkedIcon={
        <div className={styles.commentIcon}>
          <ThumbDownAltIcon className={styles.IconChecked} />
          {dislikes.length}
        </div>
      }
      className={styles.commentIcon}
      disabled={disabled}
      style={buttonStyle}
      checked={
        dislikes.find((item) => item === userId) ? true : false
      }
      onClick={()=>dislikeComment(commentId,setDislikes,likes,setLikes)}
    />
    </div>
  )
}
