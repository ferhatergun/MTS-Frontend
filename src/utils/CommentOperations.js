import { toast } from "react-toastify";

export const CommentCreate = async (values,movieId) => {
    const data ={
        content:values.text,
        userId:"64dfbe17ab584e9d351b611e", // cokie veya redux dan çekilecek
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
            }
            else if(result.status == 'fail'){
                toast.warning("Tekrar Deneyiniz")
            }
        
    }catch(e){
        console.log(e)
    }
}