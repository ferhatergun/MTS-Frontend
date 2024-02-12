"use client"
import styles from './page.module.css'
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import * as Yup from 'yup';
import { adminLogin } from '$/allApi/adminOperations';
import '$/app/globals.css'

export default function LoginAdmin() {


  const formikProps = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:Yup.object().shape({
      email:Yup.string().email("Geçerli bir email giriniz").required("Email alanı zorunludur"),
      password:Yup.string().required("Şifre alanı zorunludur")
    })
    ,
    onSubmit:(values,{setErrors})=>{
      console.log(values)
      adminLogin(values,setErrors)
    }
  })
  return (
    <div className={styles.bg}>
      <div className={styles.formbg}>
        Admin Giriş
        <div className={styles.inputs}>
          <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            onChange={formikProps.handleChange}
            value={formikProps.values.email}
            error={formikProps.errors.email && formikProps.touched.email}
            onBlur={formikProps.handleBlur}
            helperText={(formikProps.errors.email && 
            formikProps.touched.email) && formikProps.errors.email}
            sx={[InputSyles,erorStyles]}
            />
            <TextField 
            id="password" 
            label="Şifre" 
            variant="outlined" 
            type='password'
            onChange={formikProps.handleChange}
            value={formikProps.values.password}
            error={formikProps.errors.password && formikProps.touched.password}
            onBlur={formikProps.handleBlur}
            helperText={(formikProps.errors.password && 
            formikProps.touched.password) && formikProps.errors.password}
            sx={[InputSyles,erorStyles]}
            />
            <div className={styles.addMovieBtn} onClick={formikProps.handleSubmit}>Giriş Yap</div>
          </div>
      </div>
    </div>
  )
}

const erorStyles={
  "& .MuiFormHelperText-root.Mui-error":{
    position:'fixed',
    marginTop:'55px',
    marginLeft:0,
    fontSize:'11px',
  }
}
const InputSyles={
  '@media (max-width: 530px)': {
    width: '80%',
  },
  '@media (max-width: 300px)': {
    width: '90%',
  },
  width:'220px'
}

