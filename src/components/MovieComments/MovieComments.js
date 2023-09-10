"use client"
import React ,{useEffect,useState}from 'react'
import { Avatar,Rating,TextField,Checkbox, Skeleton } from '@mui/material'
import styles from './page.module.css'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../RatingStar/RatingStar';
import { isAuth } from '$/lib/auth';
import LikeButtton from '../Buttons/CommentLikeDislikeButtons/LikeButtton';
import DislikeButton from '../Buttons/CommentLikeDislikeButtons/DislikeButton';


export default async function Comments({commentId}) {
    const auth = isAuth()
    const [comment,setComment] = useState(null)
    const [loading,setLoading] = useState(false)
    
    const commentSet = async () => {
        const data = await getComment(commentId)
        setComment(data)
    }

    useEffect(() => {
        commentSet()
        setLoading(true)
    }, [])

  return ( // film id si gelecek ve istekler burada atılacak
    <div>
        {
            loading ? 
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
                <LikeButtton />
                <DislikeButton />
                <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
                <CommentReportButton />
            </div>
        </div> : <p>a</p>
        }

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
