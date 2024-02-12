import { toast } from "react-toastify"
import { fetchData } from "./api"
import { getCookie } from "cookies-next"




const getUser = async (userId,router) => {
    try{
        const user = await fetchData(`users/${userId}`)
        if(user.success){
            return user.user
        }
        else{
            throw new Error("user getirilirken hata oluştu")
        } 
    }
    catch(err){
        console.log("user getirilirken hata oluştu", err)
        router.push('/error')
        
    }

}

 const favoriteMovie = async(movieId,setFavoriteMovies) => {
    try{
        const response = await 
        fetch(`${process.env.BACKEND_URL}/movieSeries/${movieId}/favorite`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization': "Bearer " + getCookie('accessToken'),
          }
        })
        const result = await response.json()
        console.log(result)
        if(result.status === "success"){
          toast.success("İşlem Başarılı")
          setFavoriteMovies(result.user.favoriteMovieSeries)
        }
        else{
          toast.warning("Tekrar Deneyiniz")
        }
    }catch(e){
      console.log(e)
    }
  
  }
  



export {getUser,favoriteMovie}
