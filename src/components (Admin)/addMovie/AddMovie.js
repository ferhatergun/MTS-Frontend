"use client"
import React ,{useState}from 'react'
import styles from './page.module.css'
import { Modal ,TextField ,InputLabel,MenuItem,FormControl,Select,
FormHelperText,
Tooltip} from '@mui/material';
import { useFormik } from 'formik';
import { addMovieInitialValues, addMovieSchema } from '$/lib/formikYup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { trTR } from '@mui/x-date-pickers';
import {name} from 'dayjs/locale/tr';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { addMovieSeries, updateMovieSeries, uploadMoviePhoto } from '$/allApi/adminOperations';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';




export default function AddMovie({updateMovie,uploadStyle}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const [file, setFile] = useState(null)
    
    const handleClose = () => {
      formikProps.setValues(addMovieInitialValues())
      formikProps.setTouched({})
      formikProps.setErrors({})
      console.log("kapandı")
      setOpen(false)
    } 


    const formikProps = useFormik({
      initialValues:addMovieInitialValues(updateMovie),
      validationSchema:addMovieSchema,
      onSubmit:(values)=>{
        console.log(values)
        if(updateMovie){
          updateMovieSeries(values,file,updateMovie.id,setOpen)
        }
        else{
          addMovieSeries(values,file,setOpen)
        }
      }
    })

  return (
    <div>
      <Tooltip title={updateMovie && "Düzenle"} followCursor>
        <div className={uploadStyle ? uploadStyle: styles.addMovie} onClick={handleOpen}>
          {
            updateMovie ? <EditIcon/> : "Yeni Film Ekle"
          }
        </div>
      </Tooltip>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.modalContainer}>
        <h4 style={{padding:15}}>
          {
            updateMovie ? "Film Düzenle" : "Film Ekle"
          }
        </h4>
        <div className={styles.InputsContainer}>
        <TextField 
          id="name" 
          label="Film Adı" 
          variant="outlined" 
          className="md:w-96 w-52"
          onChange={formikProps.handleChange}
          value={formikProps.values.name}
          error={formikProps.errors.name && formikProps.touched.name}
          onBlur={formikProps.handleBlur}
          helperText={(formikProps.errors.name && 
          formikProps.touched.name) && formikProps.errors.name}
          sx={[InputSyles,erorStyles]}
          />
          <TextField 
          id="description" 
          label="Film Açıklaması" 
          variant="outlined" 
          onChange={formikProps.handleChange}
          value={formikProps.values.description}
          error={formikProps.errors.description && formikProps.touched.description}
          onBlur={formikProps.handleBlur}
          helperText={(formikProps.errors.description && 
          formikProps.touched.description) && formikProps.errors.description}
          sx={[InputSyles,erorStyles]}
          />
          <TextField 
          id="time" 
          label="Film Uzunluğu(saat)" 
          placeholder='2 saat 10 dakika'
          variant="outlined" 
          onChange={formikProps.handleChange}
          value={formikProps.values.time}
          error={formikProps.errors.time && formikProps.touched.time}
          onBlur={formikProps.handleBlur}
          helperText={(formikProps.errors.time && 
          formikProps.touched.time) && formikProps.errors.time}
          sx={[InputSyles,erorStyles]}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={name} localeText={trTR.components.MuiLocalizationProvider.defaultProps.localeText} >
            <DemoContainer components={['DatePicker']} sx={InputSyles}>
              <DatePicker 
              label="Film Çıkış Tarihi"
              id="startDate"
              onChange={(e) => {
                formikProps.setFieldValue('startDate', e?.$d)
              }}
              value={dayjs(formikProps.values.startDate)}
              views={['year', 'month', 'day']}
              slotProps={{
                textField:{
                  id:'startDate',
                  onBlur:formikProps.handleBlur,
                  helperText:(formikProps.errors.startDate && formikProps.touched.startDate)
                  && formikProps.errors.startDate,
                  error:(formikProps.errors.startDate && formikProps.touched.startDate) ? true : false,
                  sx:[erorStyles],
                  variant:'outlined',
                },
              }}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField 
          id="director" 
          label="Film Yünetmeni" 
          variant="outlined" 
          onChange={formikProps.handleChange}
          value={formikProps.values.director}
          error={formikProps.errors.director && formikProps.touched.director}
          onBlur={formikProps.handleBlur}
          helperText={(formikProps.errors.director && 
          formikProps.touched.director) && formikProps.errors.director}
          sx={[InputSyles,erorStyles]}
          />
          <FormControl sx={InputSyles}>
          <InputLabel id="category">Film Kategorisi</InputLabel>
          <Select
          id="category" 
          label="Film Kategorisi" 
          variant="outlined" 
          onChange={formikProps.handleChange('category')}
          value={formikProps.values.category}
          error={formikProps.errors.category && formikProps.touched.category}
          onBlur={formikProps.handleBlur}
          sx={[erorStyles]}
          >
            <MenuItem value={"Komedi"}>Komedi</MenuItem>
            <MenuItem value={'Macera'}>Macera</MenuItem>
          </Select>
          {
            formikProps.errors.category && formikProps.touched.category && (
              <FormHelperText sx={erorStylesHelper}>
                {formikProps.errors.category}
              </FormHelperText>
            )
          }
          </FormControl>

          <FormControl sx={InputSyles}>
          <InputLabel id="MovieOrSeries">Tür Seçiniz</InputLabel>
          <Select
          id="MovieOrSeries" 
          label="Tür Seçiniz" 
          variant="outlined" 
          onChange={formikProps.handleChange('MovieOrSeries')}
          value={formikProps.values.MovieOrSeries}
          error={formikProps.errors.MovieOrSeries && formikProps.touched.MovieOrSeries}
          onBlur={formikProps.handleBlur}
          sx={[erorStyles]}
          >
            <MenuItem value={"Film"}>Film</MenuItem>
            <MenuItem value={'Dizi'}>Dizi</MenuItem>
          </Select>
          {
            formikProps.errors.MovieOrSeries && formikProps.touched.MovieOrSeries && (
              <FormHelperText sx={erorStylesHelper}>
                {formikProps.errors.MovieOrSeries}
              </FormHelperText>
            )
          }
          </FormControl>
        <div className={styles.fileInput}>
          <UploadFileIcon fontSize='large' />
          {
            formikProps.values.moviePhoto ? 
            <p>{file?.name || updateMovie?.name}</p> 
            : <p>Film Resmi Yükle</p>
          }
          <input type="file" id='moviePhoto' onChange={(e)=>{
            setFile(e.target.files[0])
            formikProps.setFieldValue('moviePhoto',"1")
          }}/>
          {
          formikProps.errors.moviePhoto && formikProps.touched.moviePhoto && (
            <FormHelperText sx={[erorStylesHelper,{marginTop:'80px'}]}>
              {formikProps.errors.moviePhoto}
            </FormHelperText>
          )
        }
        </div>


        </div>

        <div className={styles.addMovieBtn} onClick={formikProps.handleSubmit}>
          {
            updateMovie ? "Film Güncelle" : "Film Ekle"
          }
        </div>
        <div className={styles.closeBtn} onClick={handleClose}>
          <CloseOutlinedIcon/>
        </div>
      </div>
    </Modal>
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
const erorStylesHelper={
    marginLeft:0,
    position:'absolute',
    marginTop:'55px',
    fontSize:'11px',
    color:'#d32f2f'
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

