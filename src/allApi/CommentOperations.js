import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

export const CommentCreate = async (values,movieId,setComments) => {
    const data ={
        comment:values.text,
        rating:values.star
    }
    try{
        const response = await fetch(`http://localhost:5000/comments/${movieId}/CreateComment`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': "Bearer " + getCookie('accessToken'),
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
             console.log(result)
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