import { ref ,uploadBytes } from 'firebase/storage'
import { storage } from '../firebase'
import { getCookie ,setCookie} from "cookies-next"
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';


export const adminLogin = async (values,setErrors) => {
    const data={
        email:values.email,
        password:values.password
    }
    try
    {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminUser/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)

        if(result.success == true ){
            toast.success("Giriş Başarılı")
            setCookie("accessToken",result.accessToken,{maxAge:3600})
            setCookie("adminId",result.user._id,{maxAge:3600})
            window.location.reload()
        }
        else{
            toast.error("Giriş Başarısız")
            if(result.error =="Kayitli kullanici bulunamadi"){
                setErrors({ email: 'Kayıtlı Kullanıcı Bulunamadı' })
            }
            else if(result.error =="Girdiginiz şifre yanlis"){
                setErrors({ password: 'Girdiğiniz Şifre Yanlış' })
            }
        }

    }catch(err)
    {
        console.log(err)
    }


}


export const uploadMoviePhoto = (photoId,file) => {
    console.log(file)
    const imageRef = ref(storage, `moviePhotos/${photoId}`)
    uploadBytes(imageRef, file)
    console.log("Başarı ile yüklendi")
}

export const addMovieSeries = async (values,file) => {
    const id = uuidv4()
    const data={
        name:values.name,
        description:values.description,
        time:values.time,
        startDate:values.startDate,
        category:values.category,
        MovieOrSeries:values.MovieOrSeries,
        director:values.director,
        moviePhoto:id,
    }
    try
    {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminMovieseries/admin/createMovieSeries`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + getCookie('accessToken'),
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.status == "success"){
            toast.success("Film Başarıyla Eklendi")
            uploadMoviePhoto(id,file)
        }
        else{
            toast.error("Film Eklenemedi")
        }
    }catch(err)
    {
        console.log(err)
    }



}

