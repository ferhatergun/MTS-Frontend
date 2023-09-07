import React from 'react'
import { Avatar,Rating,TextField,Checkbox } from '@mui/material'
import styles from './page.module.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentReportButton from '../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../RatingStar/RatingStar';


export default function Comments({Id}) {

    console.log(Id)
  return ( // film id si gelecek ve istekler burada atılacak
    <div>
        <div className={styles.commentDiv}>
            <div className={styles.commentTop}>
                <Avatar sx={{width:50,height:50}}>M</Avatar>
                <p>Murat Uçar</p>
                <RatingStar />
            </div>
            <div className={styles.commentContent}>
                Güzel film
            </div>
            <div className={styles.commentBottom}>
                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbUpOffAltIcon className={styles.Icon}/>15</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbUpIcon className={styles.IconChecked} />16</div>} 
                className={styles.commentIcon}/>

                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbDownOffAltIcon className={styles.Icon}/>4</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbDownAltIcon className={styles.Icon} />5</div>} 
                className={styles.commentIcon}/>
                    
                <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
                <CommentReportButton />
            </div>
        </div>
    </div>
  )
}
