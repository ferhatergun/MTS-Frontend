

export const userLogin=async(values,setErrors,router)=>{
    const data={
        email:values.email,
        password:values.password
    }
    try{
        const response = await fetch("http://localhost:5000/users/login",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
            console.log(result)
            if(result.status == 'success'){
                console.log("kayıt başarılı")
                localStorage.setItem("user",JSON.stringify(result.user))
                // dispatch(updateUser(result.user))
                // dispatch(updateOrganizer(false))
                router.push("/")
            }
            else{
                console.log("kayıt başarısız")
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
        const response = await fetch("http://localhost:5000/users/register",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
             }) 
             const result = await response.json(); // database den gelen mesaj 
             
            console.log(result)
            if(result.status === 'success'){ // kayıt başarılı ise giriş yap sayfasına yönlendiriyoruz
                console.log("kayıt başarılı")
                router.push("/login")
                
            }
            else{ // hatanın kaynağını bulup kullanıcıya gösteriyoruz 
                console.log("kayıt başarısız")
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
