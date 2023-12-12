import { toast } from "react-toastify";
import { setCookie , deleteCookie } from "cookies-next";
import { BACKEND_URL } from "./api";





export const userLogin=async(values,setErrors)=>{
    const data={
        email:values.email,
        password:values.password
    }
    try{
        const response = await fetch(`${BACKEND_URL}/users/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
            if(result.success == true ){
                toast.success("Giriş Başarılı")
                setCookie("accessToken",result.accessToken,{maxAge:3600})
                setCookie("userId",result.user._id,{maxAge:3600})
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


    }catch(e){
        console.log(e)
    }

}


export const userRegister=async(values,setErrors,router)=>{
    const data={
        UserName:values.UserName,
        telephone:values.phonenumber,
        email:values.email,
        password:values.password
    }
     try{
        const response = await fetch(`${BACKEND_URL}/users/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
            if(result.status === 'success'){ // kayıt başarılı ise giriş yap sayfasına yönlendiriyoruz
                toast.success("Kayıt Başarılı")
                router.push("/login")
                
            }
            else{ // hatanın kaynağını bulup kullanıcıya gösteriyoruz 
               if(result.message ==='Bu telefon numarası zaten kullanılıyor.'){ 
                setErrors({ phonenumber: 'Telefon numarası kullanımda' })
               }
               else if(result.message === 'Bu e-posta adresi zaten kullanılıyor.'){ 
                setErrors({ email: 'Email kullanımda' })
               }
               else if(result.message === 'Bu telefon numarası ve e-posta adresi zaten kullanılıyor.'){
                setErrors({email:'Email kullanımda',phonenumber:'Telefon numarası kullanımda'})
               }
               
            }
    }catch(e){
        console.log(e)
    }  
}

export const userLogout=async()=>{
    deleteCookie("accessToken")
    deleteCookie("userId")
    window.location.href="/"
    toast.success("Çıkış Yapıldı")
}