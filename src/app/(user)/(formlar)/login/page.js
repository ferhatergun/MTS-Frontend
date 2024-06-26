"use client"
import React ,{useState}from 'react'
import { Grid ,TextField,Button,IconButton,OutlinedInput,
InputLabel,FormControl,FormHelperText} from '@mui/material'
import '../Forms.css'
import img from '$/assets/login.svg'
import { Formik } from 'formik'
import * as yup from "yup"
import { motion } from "framer-motion";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from 'next/link';
import Image from 'next/image';
import {userLogin} from '$/allApi/AuthOperations';




const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


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
    

  return (
    <div>
        <Grid container>
            <Grid display={'flex'} justifyContent={"center"} alignItems={"center"}  item md={6} xs={12}>
                <Grid item  md={8} sm={9} xs={10} >
                    <div className='containerLeft'>
                        <motion.div
                            className="leftForm"
                            initial={{ opacity: 0, y:50 }}
                            animate={{ opacity: 1, y:0 }}
                            transition={{duration: 1.5}}>
                            <div className='loginGiris'>Giriş Yap</div>
                            <Formik
                            initialValues={{
                                email:"",
                                password:""
                            }}
                            validationSchema={
                                yup.object({
                                    email:yup.string().email("Lütfen Geçerli Bir Mail Giriniz( @ )").required("Email Boş Bırakilamaz"),
                                    password:yup.string().min(6,"Şifre En Az 6 Karakterli Olmalıdır").required("Şifre Boş Bırakılamaz"),
                                })
                            }
                            onSubmit={(values,{setErrors})=>{ // form submit olduktan sonra yapılacaklar

                                    userLogin(values,setErrors)
                                    
                                }}
                            >
                                {
                                    ({values,errors,handleSubmit,handleChange,dirty,isSubmitting,touched,handleBlur})=>(
                                        <form onSubmit={handleSubmit} style={{width:'80%',textAlign:'center'}}>
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

                                            <FormControl  variant="outlined" 
                                            sx={{...inputstyles, ...erorStyles}}
                                            helperText="selam"
                                            >
                                            <InputLabel htmlFor="outlined-adornment-password" >
                                                Şifre
                                            </InputLabel>
                                            <OutlinedInput  
                                                type={showPassword ? "text" : "password"}
                                                endAdornment={
                                                <IconButton 
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                                }
                                                id="password"
                                                label="Şifre"
                                                onChange={handleChange}
                                                value={values.password}
                                                onBlur={handleBlur}
                                                error={errors.password && touched.password}
                                            />
                                            <FormHelperText sx={{position:'absolute',marginTop:'55px',marginLeft:0,color:'#d32f2f'}}>
                                                {errors.password && touched.password ? errors.password:null}
                                            </FormHelperText>
                                            </FormControl>
                                            <Button className='btn' variant="contained" type='submit'>Giriş Yap</Button>
                                        </form>
                                    )
                                }


                            </Formik>
                        
                        
                           
                            <div className='loginKaydol'>
                               Hesabın Yok mu ? <Link style={{textDecoration:"none",marginLeft:1}} href="/register"><div className='kaydol' > Hemen Kaydol</div> </Link>

                            </div>
                        </motion.div>
                    </div> 
                </Grid>
            </Grid>


            <Grid  item md={6} sm={0}  display={"flex"} alignItems={"center"}>
            <motion.div className='containerRight'
                initial={{
                    opacity: 0,
                    // scale:.8,
                    y:-100
                }}
                animate={{
                    opacity: 1,
                    // scale:1,
                    y:0
                }}
                transition={{
                    duration: 1.5,
                }}
                >
                <Image   className='fotoRight'  src={img} alt="resim bulunamadı"  ></Image>
            </motion.div>
            </Grid>
        </Grid>
      
    </div>
  )
}

export default Login
