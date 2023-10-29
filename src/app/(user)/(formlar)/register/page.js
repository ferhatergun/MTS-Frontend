"use client"
import React, {  useState } from 'react'
import { Grid ,Box,TextField,Button} from '@mui/material'
import '../Forms.css'
import img from '$/assets/login.jpg'
import { Formik } from 'formik'
import * as yup from "yup"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import { userRegister } from '$/allApi/AuthOperations'
import { useRouter } from 'next/navigation'


const Register = () => {
    const [passwordControl,setpasswordControl]=useState(true) // şifre kurallarının doğruluğunu kontrol etmek için

    const handleInputChange = (event) => {
        const value = event.target.value.replace(/\D/g, ''); // Sadece sayısal karakterleri alır
        event.target.value = value;
      };

      const regexTurkishBigLetters = /[A-ZÇĞİÖŞÜ]/;
      const regexBig = new RegExp(regexTurkishBigLetters);
      const regexAllSpecial = /[!@#$%^&*()+\-=_\[\]{}|\\;:'",.<>/?]+/;
      const regexSpecial = new RegExp(regexAllSpecial);

      const inputstyles = {
        "& .MuiInputLabel-root.Mui-focused ": {
          // placeholders yukarı gidinceki rengi
          color: "black",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color1) !important", // inputa basınca kenarlık
            borderWidth: "2px",
        },
        width: "100%",
        marginTop: "20px",
      };
      const erorStyles={
        "& .MuiFormHelperText-root.Mui-error":{
          position:'absolute',
          marginTop:'55px',
          marginLeft:0
        }
    }

   
 
    const Controlpassword=(values)=>{
        if((regexBig.test(values.password) || regexBig.test(values.trypassword))&& 
        (regexSpecial.test(values.password)|| regexSpecial.test(values.trypassword))&&
        (values.password.length>=8 ||values.trypassword.length>=8))
        {
            setpasswordControl(true)
            values.passwordControl=true
        }
        else{
            setpasswordControl(false)
            values.passwordControl=false
        }
    }


const router = useRouter()
 
  return (
    <div>
        <Grid container >
            <Grid display={'flex'} justifyContent={"center"} alignItems={"center"}  item md={6} xs={12}>
                <Grid item  md={8} sm={9} xs={10} >
                    <div className='containerLeft'>
                        <motion.div className='leftForm_register'
                            initial={{opacity:0,y:50}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:1.5}}
                        >
                            <div className='loginGiris'>Kayıt Ol</div>
                            <Formik

                            initialValues={{
                                UserName:"",
                                email:"",
                                phonenumber:"",
                                password:"",
                                trypassword:"",
                                // passwordControl:""
                            }}
                            validationSchema={
                                yup.object({
                                    UserName:yup.string().required("İsim alanı boş bırakılamaz"),
                                    email:yup.string().email("Lütfen Geçerli Bir Mail Giriniz( @ )").required("Email Boş Bırakilamaz") ,
                                    phonenumber:yup.string().min(11,"Eksik numara girdiniz").required("Telefon numarası zorunludur"),
                                    password:yup.string().min(6,"Şifre En Az 6 Karakterli Olmalıdır").required("Şifre Boş Bırakılamaz"),
                                    trypassword:yup.string().min(6,"Şifre En Az 6 Karakterli Olmalıdır").oneOf([yup.ref('password')], 'Şifreler Uyuşmuyor').required("Şifre Tekrarı Boş Bırakılamaz"),
                                    passwordControl:yup.boolean().required()
                                })
                            }
                            onSubmit={(values,{setErrors})=>{ // form submit olduktan sonra yapılacaklar
                                if(values.trypassword === values.password && values.passwordControl===true)
                                {    
                                  /*   const registered =  */ userRegister(values,setErrors,router) // başarılı şekilde kayıt olursa true döndürdü
                                /*     if(registered){ // true ise giriş sayfasına yönlendirme yaptık
                                        router.push("/login")
                                    }       
                                    console.log(registered) */

                                    
                                }
                                else{
                                    setpasswordControl(false)
                                    console.log(passwordControl)
                                } 
                                }}
                            >
                               { 
                                    ({values,errors,handleSubmit,handleChange,touched,handleBlur})=>(
                                        <form onSubmit={handleSubmit} style={{width:'80%',textAlign:'center'}} method='POST'>
                                            <TextField 
                                            label="İsim Soyisim"
                                            id="UserName"
                                            onChange={handleChange}
                                            value={values.UserName}
                                            onBlur={handleBlur}
                                            error={errors.UserName && touched.UserName}
                                            helperText={errors.UserName && touched.UserName ? errors.UserName:null}
                                            sx={{...inputstyles, ...erorStyles}}
                                            />
                                            <TextField 
                                            id="email" 
                                            label="Email" 
                                            onChange={handleChange}
                                            value={values.email}
                                            onBlur={handleBlur}
                                            error={errors.email && touched.email}
                                            helperText={errors.email && touched.email ? errors.email:null}
                                            sx={{...inputstyles, ...erorStyles}}
                                            />
                                            <TextField
                                            id="phonenumber"
                                            label="Telefon Numarası"
                                            inputProps={{
                                                inputMode: 'numeric',
                                                pattern: '[0-9]*',
                                                maxLength: 11,
                                                onInput: handleInputChange
                                            }}
                                            onChange={handleChange}
                                            value={values.phonenumber}
                                            onBlur={handleBlur}
                                            error={errors.phonenumber && touched.phonenumber}
                                            helperText={errors.phonenumber && touched.phonenumber ? errors.phonenumber:null}
                                            sx={{...inputstyles, ...erorStyles}}
                                            />
                                            <TextField
                                            onKeyUp={()=>Controlpassword(values)}
                                            id="password"
                                            label="Şifre"
                                            type="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            onBlur={handleBlur}
                                            error={errors.password && touched.password}
                                            helperText={errors.password && touched.password ? errors.password:null}
                                            sx={{...inputstyles, ...erorStyles}}
                                            />
                                            <TextField
                                            id="trypassword"
                                            label="Şifre Tekrarı"
                                            type="password"
                                            onChange={handleChange}
                                            value={values.trypassword}
                                            onBlur={handleBlur}
                                            error={errors.trypassword && touched.trypassword}
                                            helperText={errors.trypassword && touched.trypassword ? errors.trypassword:null}
                                            sx={{...inputstyles, ...erorStyles}}
                                            />
                                            <Box sx={passwordControl ? {opacity:"0.5",marginTop:"20px",display:'none'}:{opacity:"0.5",marginTop:"20px"}}>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                            {values.password.length >= 8 || values.trypassword.length >= 8? (
                                                <CheckCircleOutlineIcon sx={{ color: "green", mr: 1 }} />
                                            ) : (
                                                <HighlightOffIcon sx={{ color: "red", mr: 1 }} />
                                            )}
                                            <span>Min 8 Karakter</span>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                {regexSpecial.test(values.password) || regexSpecial.test(values.trypassword) ? (
                                                    <CheckCircleOutlineIcon sx={{ color: "green", mr: 1 }} />
                                                ) : (
                                                    <HighlightOffIcon sx={{ color: "red", mr: 1 }} />
                                                )}
                                                <span>En az 1 özel karakter</span>
                                            </Box>

                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                {regexBig.test(values.password) || regexBig.test(values.trypassword) ? (
                                                    <CheckCircleOutlineIcon sx={{ color: "green", mr: 1 }} />
                                                ) : (
                                                    <HighlightOffIcon sx={{ color: "red", mr: 1 }} />
                                                )}
                                                <span>En az 1 adet büyük harf</span>
                                            </Box>
                                            </Box>
                                                    {
                                                        (regexBig.test(values.password) || regexBig.test(values.trypassword)) &&
                                                        (regexSpecial.test(values.password) ||regexSpecial.test(values.trypassword)) &&
                                                       ( values.password.length >= 8 || values.trypassword.length >= 8)  &&
                                                       !errors.email && !errors.UserName && !errors.password && !errors.phonenumber && !errors.trypassword
                                                        ? 
                                                        <Button className='btn' type='submit' variant="contained" >Kayıt Ol</Button>
                                                        :
                                                        <Button className='btn notActive' variant="contained" onClick={()=>{return false}}>Kayıt Ol</Button>
                                                    }
                                        </form>
                                    )
                                }
                            </Formik>
                            <div className='loginKaydol'>
                                    Hesabın varmı
                                    <Link style={{textDecoration:"none",color:'tomato',marginLeft:1}} href="/login"> <div className='kaydol'>Giriş yap</div>
                                </Link>
                            </div>
                        </motion.div>
                    </div> 
                </Grid>
            </Grid>
            <Grid  item md={6} sm={0}  display={"flex"} alignItems={"center"}>
            <motion.div className='containerRight'
                initial={{
                    opacity: 0,
                    y:-100
                }}
                animate={{
                    opacity: 1,
                    y:0
                }}
                transition={{
                    duration: 1.5,
                }}
                >
                <Image   className='fotoRight'  src={img} alt=""  ></Image>
            </motion.div>
            </Grid>
        </Grid>
      
    </div>
  )
}

export default Register