"use client"
import React ,{useState,useEffect}from 'react'
import { Avatar,Rating,TextField,Checkbox, Skeleton } from '@mui/material'
import styles from './page.module.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentReportButton from '../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../RatingStar/RatingStar';
import { isAuth } from '$/lib/auth';


export default async function Comments({commentId}) {
    const [loading,setLoading] = useState(false)
    const auth = isAuth()

    useEffect(() => {
        setLoading(true)
    }, [])

    const comment = await getComment(commentId)
  return ( // film id si gelecek ve istekler burada atılacak
    <div>
        <div className={styles.commentDiv}>
            <div className={styles.commentTop}>
                <Avatar sx={{width:50,height:50}}>M</Avatar>
                <p>Murat Uçar</p>
                <RatingStar star={comment.rating} />
            </div>
            <div className={styles.commentContent}>
                {comment.comment ? comment.comment : "Bu film hakkında yorum yapılmamıştır."}
            </div>
            <div className={styles.commentBottom}>
                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbUpOffAltIcon className={styles.Icon}/>15</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbUpIcon className={styles.IconChecked} />16</div>} 
                className={styles.commentIcon} 
                disabled={!auth}
                style={{opacity:!auth ? 0.5 : 1}}
                />
                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbDownOffAltIcon className={styles.Icon}/>4</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbDownAltIcon className={styles.Icon} />5</div>} 
                className={styles.commentIcon}
                disabled={!auth}
                style={{opacity:!auth ? 0.5 : 1}}
                />
                    
                <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
                <CommentReportButton />
            </div>
        </div>
    </div>
  )
}

const getComment = async (id) => {
    const res = await fetch(`http://localhost:5000/comments/${id}`)
    const data = await res.json()
    if(data.success){
        return data.comment
    }
    else{
        return false
    }
}
