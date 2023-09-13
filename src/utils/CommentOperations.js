import { toast } from "react-toastify";

export const CommentCreate = async (values,movieId,userId) => {
    const data ={
        comment:values.text,
        user:userId, // cokie veya redux dan çekilecek
        rating:values.star
    }
    try{
        const response = await fetch(`http://localhost:5000/comments/${movieId}/CreateComment`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
             console.log(result)
            if(result.success === true){
                toast.success("Yorum Gönderildi")
                window.location.reload() // user experience için sayfa yenileme olmayabilir onun yerine
                // yorum dizisinin en sonuna push edilebilir test edilik karar verilecek
            }
            else if(result.status == 'fail'){
                toast.warning("Tekrar Deneyiniz")
            }
        
    }catch(e){
        console.log(e)
    }
}