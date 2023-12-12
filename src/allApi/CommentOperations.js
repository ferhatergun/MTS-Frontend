import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import { BACKEND_URL } from "./api";

export const CommentCreate = async (values,movieId,setComments) => {
    const data ={
        comment:values.text,
        rating:values.star
    }
    try{
        const response = await fetch(`${BACKEND_URL}/comments/${movieId}/CreateComment`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': "Bearer " + getCookie('accessToken'),
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
            if(result.success === true){
                toast.success("Yorum Gönderildi")
                setComments((prev)=>[result.createComment,...prev])
                // yeni yorumu yorum dizisinin en sonuna pushladık
            }
            else if(result.status == 'fail'){
                toast.warning("Tekrar Deneyiniz")
            }
        
    }catch(e){
        console.log(e)
    }
}

export const getUserComment = async(userId) => {
  try{
    const response = await fetch(`${BACKEND_URL}/comments/${userId}/user`,{
      method:'GET',
    })
    const result = await response.json()
    if(result.status === true){
      return result.comments
    }
    else{
      toast.warning("Yorumlar getirilemedi")
    }
  }catch(e){
    console.log(e)
  }
}

export const getComment = async(commentId) => {
  try{
    const response = await fetch(`${BACKEND_URL}/comments/${commentId} `,{
      method:'GET',
    })
    const result = await response.json()
     if(result.status === true){
      return result.comment
    }
    else{
      console.log("Yorum getirilemedi")
    } 
  }catch(e){
    console.log(e)
  }
}

export const likeComment = async(commentId,setLikeCount) => {
  try{
      const response = await fetch(`${BACKEND_URL}/comments/${commentId}/Like`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer " + getCookie('accessToken'),
        }
      })
      const result = await response.json()
      // beğeni atıyorsa beğeni sayısını arttır
      if(result === 'The comment has been liked'){
        setLikeCount((prev)=>prev+1)
      }
      // beğeni kaldırıyorsa beğeni sayısını azalt
      else if(result === 'The like has been removed'){
        setLikeCount((prev)=>prev-1)
      }
  }catch(e){
    console.log(e)
  }

}

export const dislikeComment = async(commentId,setDislikeCount) => {
  try{
      const response = await fetch(`${BACKEND_URL}/comments/${commentId}/Dislike`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer " + getCookie('accessToken'),
        }
      })
      const result = await response.json()
      // dislike atıyorsa dislike sayısını arttır
      if(result === 'The comment has been disliked'){
        setDislikeCount((prev)=>prev+1)
      }
      // dislike kaldırıyorsa dislike sayısını azalt
      else if(result === 'The dislike has been removed'){
        setDislikeCount((prev)=>prev-1)
      }
  }catch(e){
    console.log(e)
  }

}

export const deleteComment = async(comment,setComments) => {
  try{
      const response = await 
      fetch(`${BACKEND_URL}/comments/${comment.movieSeriesId}
      /deleteComment/${comment._id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer " + getCookie('accessToken'),
        }
      })
      const result = await response.json()
      if(result.success === true){
        toast.success("Yorum Silindi")
        setComments((prev)=>prev.filter((item)=>item._id !== comment._id))
        // yorumu yorum dizisinden sildik
      }
  }catch(e){
    console.log(e)
  }

}




export const commentDate=(date)=>{ // yorum tarih

    const commentDate = new Date(date);
    const now = new Date();
    const timeElapsed = now.getTime() - commentDate.getTime();
    const secondsElapsed = Math.floor(timeElapsed / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);
    const hoursElapsed = Math.floor(minutesElapsed / 60);
    const daysElapsed = Math.floor(hoursElapsed / 24);
  
    if (daysElapsed > 0) {
      return`${daysElapsed} gün önce yazıldı`;
    } else if (hoursElapsed > 0) {
      return `${hoursElapsed} saat önce yazıldı`;
    } else if (minutesElapsed > 0) {
      return `${minutesElapsed} dakika önce yazıldı`;
    } else {
      return `${secondsElapsed} saniye önce yazıldı`;
    }
}