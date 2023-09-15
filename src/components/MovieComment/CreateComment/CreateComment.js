"use client"
import React, { useEffect ,useState } from 'react'
import styles from './page.module.css'
import { Avatar ,FormHelperText,Rating ,TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik'
import * as yup from "yup"
import { CommentCreate } from '$/utils/CommentOperations';
import { useSelector } from 'react-redux';
import { isAuth } from '$/lib/auth';
import { Skeleton } from '@mui/material';



export default function CreateComment({movieId,setComments}) {
  const [loading,setLoading] = useState(false)
  const auth = isAuth()
  const userId = useSelector(state => state.user.userId)

    useEffect(() => {
      setLoading(true)
    }, [])


  return (
    <div className={styles.commnetCreateDiv} id='create-comment'>
      {
        loading ?
        (auth ?

          <Formik
            initialValues={{
                star:"1",
                text:""
            }}
            validationSchema={
                yup.object({
                    star:yup.string().required("Yıldız Boş Bırakılamaz"),
                    text:yup.string().required("Yorum Boş Bırakılamaz"),
                })
            }
            onSubmit={(values,{setErrors,resetForm})=>{ // form submit olduktan sonra yapılacaklar

                    console.log(values)
                    setTimeout(() => {
                      resetForm()
                    }, 2000);
                    CommentCreate(values,movieId,userId,setComments)
                    
                }}
            >
              {({values,errors,handleSubmit,handleChange,touched,handleBlur})=>(
                <>
                <form onSubmit={handleSubmit}>
                  <div className={styles.topComment}>
                    <Avatar sx={{width:50,height:50}}>F</Avatar>
                    <Rating 
                    id='star'
                    name='star'
                    value={parseInt(values.star)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.rating}
                    />
                  </div>
                  <div className={styles.bottomComment}>
                      <TextField 
                      id="text" 
                      variant="standard" 
                      placeholder='Yorum Giriniz'  
                      multiline 
                      className={styles.commentInput} 
                      value={values.text}
                      onChange={handleChange}
                      onBlur={handleBlur}

                      />
                      <button className={styles.sendBtn} type='submit' >Gönder <SendIcon/></button>
                  </div>
                  {
                    errors.star &&
                    <FormHelperText className={styles.error}>{errors.star}</FormHelperText>
                  }
                  {
                    errors.text &&
                    <FormHelperText className={styles.error}>{errors.text}</FormHelperText>
                  }
                  
                </form>
              </>
              )}
            </Formik>
            :
            <center style={{padding:"10px 0"}}>Yorum Yazmak İçin Giriş Yapınız</center>):
            <Skeleton variant="rectangular" width="100%" height={150} animation="wave" />
      }
        
    </div>
  )
}
