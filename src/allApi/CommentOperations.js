import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

export const CommentCreate = async (values,movieId,setComments) => {
    const data ={
        comment:values.text,
        rating:values.star
    }
    try{
        const response = await fetch(`${process.env.BACKEND_URL}/comments/${movieId}/CreateComment`,{
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
    const response = await fetch(`${process.env.BACKEND_URL}/comments/${userId}/user`,{
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
    const response = await fetch(`${process.env.BACKEND_URL}/comments/${commentId} `,{
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

export const likeComment = async(commentId,setLikes,dislike,setDislikes) => {
  const userId= getCookie('userId')
  try{
      const response = await fetch(`${process.env.BACKEND_URL}/comments/${commentId}/Like`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer " + getCookie('accessToken'),
        }
      })
      const result = await response.json()
      // beğeni atıyorsa beğeni sayısını arttır
      if(result === 'The comment has been liked'){
        if(dislike.includes(userId)){ // beğeni atarken önceden dislike atmışsa dislike ı siliyoruz
          dislikeComment(commentId,setDislikes)
        }
        setLikes((prev)=>[...prev,userId])
      }
      // beğeni kaldırıyorsa beğeni sayısını azalt
      else if(result === 'The like has been removed'){
        setLikes((prev)=>prev.filter((item)=>item !== userId))
      }
  }catch(e){
    console.log(e)
  }

}

export const dislikeComment = async(commentId,setDislikes,likes,setLikes) => {
  const userId= getCookie('userId')
  try{
      const response = await fetch(`${process.env.BACKEND_URL}/comments/${commentId}/Dislike`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer " + getCookie('accessToken'),
        }
      })
      const result = await response.json()
      // dislike atıyorsa dislike sayısını arttır
      if(result === 'The comment has been disliked'){
        if(likes.includes(userId)){ // dislike atarken önceden like atmışsa like ı siliyoruz
          likeComment(commentId,setLikes)
        }
        setDislikes((prev)=>[...prev,userId])

      }
      // dislike kaldırıyorsa dislike sayısını azalt
      else if(result === 'The dislike has been removed'){
        setDislikes((prev)=>prev.filter((item)=>item !== userId))
      }
  }catch(e){
    console.log(e)
  }

}

export const deleteComment = async(comment,setComments) => {
  try{
      const response = await 
      fetch(`${process.env.BACKEND_URL}/comments/${comment.movieSeriesId}
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
      else{
        toast.warning("Tekrar Deneyiniz")
      }
  }catch(e){
    console.log(e)
  }

}

export const deleteCommentProfile = async(comment,setComments) => {
  try{
      const response = await 
      fetch(`${process.env.BACKEND_URL}/comments/${comment.movieSeriesId}
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
        setComments((prev)=>prev.filter((item)=>item !== comment._id))
        // yorumu yorum dizisinden sildik
      }
      else{
        toast.warning("Tekrar Deneyiniz")
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