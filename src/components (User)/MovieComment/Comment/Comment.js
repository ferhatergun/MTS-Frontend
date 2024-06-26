
import React ,{ useEffect }from 'react';
import { Avatar,Tooltip} from '@mui/material';
import styles from './page.module.css';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentReportButton from '../../Buttons/CommentReportButton/CommentReportButton';
import RatingStar from '../../RatingStar/RatingStar';
import { commentDate, deleteComment } from '$/allApi/CommentOperations'
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Link from 'next/link';
import { useRouter} from 'next/navigation';
import LikeDislikeButtons from '$/components (User)/Buttons/CommentLikeDislikeButtons/LikeDislikeButtons';


export default function Comment({ comment , setComments,divİd}) {
  const userId = useSelector(state => state.user.userId)
  const router = useRouter()
  
 //createdUserId
 useEffect(() => {
  if (divİd === "target") {
    const targetElement = document.getElementById('target');
    if (targetElement) { // focus olacak dive gitik ve divi belirginleştirdik
      targetElement.scrollIntoView({ behavior: 'smooth' ,block:'center'})
      targetElement.style.border = "2px solid rgba(245, 0, 87, 0.5)"
      targetElement.style.transition = "border 0.5s ease-in";
      setTimeout(() => {
        targetElement.style.border = "2px solid transparent";
      }, 2000);
      // router.replace(`${comment.movieSeriesId}`, undefined, { shallow: true, scroll: false })
    }
  }
}, [divİd, comment.movieSeriesId, router]);

  return (
    <div className={styles.commentDiv} id={divİd}>
      <div className={styles.commentTop}>
        <Link href={`${process.env.FRONT_URL}/profile/${comment.createdUserId}/yorumlar`} >
        <Avatar sx={{ width: 50, height: 50 }}>
          {comment.userName.substring(0,1).toUpperCase()}
        </Avatar>
        </Link>
        <Link href={`${process.env.FRONT_URL}/profile/${comment.createdUserId}/yorumlar`} style={{display:'relative'}}>
          <p>{comment.userName ? comment.userName : "Murat Uçar"}</p>
          <p className={styles.date}>{commentDate(comment?.createdDate)}</p>
        </Link>
        
        <RatingStar star={comment?.rating} />

        <Tooltip title="Sil" 
          followCursor 
          placement="top" 
          style={{display:comment.createdUserId !== userId && 'none'}}
          onClick={()=>deleteComment(comment,setComments)}
        >
          <div className={styles.deleteBtn}>
            <DeleteOutlineIcon/>
          </div>
        </Tooltip>
      </div>
      <div className={styles.commentContent}>
        {comment?.comment ? comment?.comment : "Bu film hakkında yorum yapılmamıştır."}
      </div>
      <div className={styles.commentBottom}>
        <LikeDislikeButtons
          like={comment.likes} 
          userId={userId} 
          commentId={comment._id} 
          dislike={comment.dislikes} 
        />
        <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
        <CommentReportButton commentId={comment._id} />
      </div> 
    </div>
  );
}