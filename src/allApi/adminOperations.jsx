import { ref ,uploadBytes ,updateMetadata} from 'firebase/storage'
import { storage } from '../firebase'
import { getCookie ,setCookie} from "cookies-next"
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';
import { setRef } from '@mui/material';


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

export const addMovieSeries = async (values,file,setOpen) => {
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
            setOpen(false)
        }
        else{
            toast.error("Film Eklenemedi")
        }
    }catch(err)
    {
        console.log(err)
    }
}


export const updateMovieSeries = async (values,file,movieId,setOpen,setRefresh) => {
    const data={
        name:values.name,
        description:values.description,
        time:values.time,
        startDate:values.startDate,
        category:values.category,
        MovieOrSeries:values.MovieOrSeries,
        director:values.director,
        moviePhoto:values.moviePhoto,
    }
    try
    {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminMovieseries/admin/UpdateMovieSeries/${movieId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + getCookie('accessToken'),
            },
            body: JSON.stringify(data),
        })
        const result = await response.json()
        console.log(result)
        if(result.status == "success"){
            toast.success("Film Başarıyla Güncellendi")
            if(file != null){
                uploadMoviePhoto(values.moviePhoto,file)
                setOpen(false)
                setRefresh((prev) => prev+1)
            }
        }
        else{
            toast.error("Film Eklenemedi")
        }
    }catch(err)
    {
        console.log(err)
    }



}


export const deleteMovieSeries = async (movieIds,setRefresh) => {
    const data ={
        movieSeriesIds:movieIds
    }
    console.log(data)
 
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminMovieseries/admin/BulkDeleteMovieSeries`, {
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
            toast.success("Film Başarıyla Silindi")
            setRefresh((prev) => prev+1)
        }
        else{
            toast.error("Film Silinemedi")
        }
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser = async (userIds,setRefresh) => {
    const data ={
        userIds:userIds
    }
    console.log(data)
 
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminUser/admin/bulkDeleteUser`, {
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
            toast.success("User Başarıyla Silindi")
            setRefresh((prev) => prev+1)
        }
        else{
            toast.error("User Silinemedi")
        }
    } catch (error) {
        console.log(error)
    }
}


export const bannedUser = async (userId) => { 
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/AdminUser/${userId}/bannedUser`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + getCookie('accessToken'),
            },
        })
        const result = await response.json()
        console.log(result)
        if(result.status == "success"){
            toast.success("İşlem Başarılı")
            setRefresh((prev) => prev+1)
        }
        else{
            toast.error("Hata")
        }
    } catch (error) {
        console.log(error)
    }
}



