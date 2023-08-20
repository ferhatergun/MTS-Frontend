import React from 'react'
import styles from './page.module.css'
import { Avatar ,Rating ,TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


export default function CreateComment() {
  return (
    <div className={styles.commnetCreateDiv} id='create-comment'>
        <div className={styles.topComment}>
            <Avatar sx={{width:50,height:50}}>F</Avatar>
            <Rating />
        </div>
        <div className={styles.bottomComment}>
            <TextField id="standard-basic" variant="standard" placeholder='Yorum Giriniz'  multiline className={styles.commentInput} />
            <div className={styles.sendBtn}>Gönder <SendIcon/></div>
        </div>
    </div>
  )
}
