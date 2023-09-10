"use client"
import React from 'react'
import styles from './page.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Checkbox } from '@mui/material';
import { isAuth } from '$/lib/auth';

export default function LikeButtton() {
    const auth = isAuth()

  return (
        <Checkbox  
        icon={<div className={styles.commentIcon}><ThumbUpOffAltIcon className={styles.Icon}/>15</div>} 
        checkedIcon={<div className={styles.commentIcon}><ThumbUpIcon className={styles.IconChecked} />16</div>} 
        className={styles.commentIcon} 
        disabled={!auth}
        style={{opacity:!auth ? 0.5 : 1}}
        />
  )
}
