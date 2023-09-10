import React from 'react'
import styles from './page.module.css'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Checkbox } from '@mui/material';
import { isAuth } from '$/lib/auth';

export default function DislikeButton() {
    const auth = isAuth()
  return (
        <Checkbox  
        icon={<div className={styles.commentIcon}><ThumbDownOffAltIcon className={styles.Icon}/>4</div>} 
        checkedIcon={<div className={styles.commentIcon}><ThumbDownAltIcon className={styles.Icon} />5</div>} 
        className={styles.commentIcon}
        disabled={!auth}
        style={{opacity:!auth ? 0.5 : 1}}
        />
  )
}
