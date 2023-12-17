"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { Checkbox } from "@mui/material";
import { isAuth } from "$/lib/auth";
import { dislikeComment } from "$/allApi/CommentOperations";

export default function DislikeButton({ dislike, userId, commentId }) {
  const auth = isAuth();
  const [dislikeCount, setDislikeCount] = useState(dislike.length);
  const [buttonStyle, setButtonStyle] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setButtonStyle({ opacity: auth ? 1 : 0.5 });
    setDisabled(!auth);
  }, []);

  return (
    <Checkbox
      icon={
        <div className={styles.commentIcon}>
          <ThumbDownOffAltIcon className={styles.Icon} />
          {dislikeCount}
        </div>
      }
      checkedIcon={
        <div className={styles.commentIcon}>
          <ThumbDownAltIcon className={styles.IconChecked} />
          {dislikeCount}
        </div>
      }
      className={styles.commentIcon}
      disabled={disabled}
      style={buttonStyle}
      defaultChecked={
        dislike.find((item) => item === userId) ? true : false
      }
      onClick={()=>dislikeComment(commentId,setDislikeCount)}
    />
  );
}
