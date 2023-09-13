"use client"
import React ,{useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './page.module.css'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Dropdown, Space } from 'antd';
import Box from '@mui/material/Box';
import { TextField,Typography,InputLabel,MenuItem,FormControl,Select } from '@mui/material';
import { Formik } from 'formik'
import * as yup from "yup"
import { Modal } from 'antd';


export default function CommentReportButton({ commentId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


   const erorStyles={
    "& .MuiFormHelperText-root.Mui-error":{
      position:'absolute',
      marginTop:'55px',
      marginLeft:0
    }
}
 

const items = [
  {
    label: <div className={styles.reportBtn} onClick={handleOpen}><ReportOutlinedIcon/>Rapor Et</div>,
    key: '0',
  },
];

  return (
    <>
    <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
    className={styles.reportBtn}
    >
      <Space>
      <MoreVertIcon className={styles.Icon} />
      </Space>
    </Dropdown>
    {/* açılır report sayfası */}
    <Modal
     open={open}  footer={null} onCancel={handleClose}  /* bodyStyle={modalStyle} */
      > {/* formik başlangıcı */}
            <Formik
            initialValues={{
                report:"Uygunsuz İçerik",
                description:"",
            }}
            validationSchema={
                yup.object({
                    report:yup.string().required("Rapor Nedeni Boş Bırakilamaz"),
                    description:yup.string().required("Açıklama Yapmak Zorunludur"),
                })
            }
            onSubmit={(values)=>{ // form submit olduktan sonra yapılacaklar

                    console.log(values)                    
                }}
            >
            {              
              ({values,errors,handleSubmit,handleChange,touched,handleBlur}) =>(
                <form onSubmit={handleSubmit}> 
                  <Box sx={modalStyle}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Raporla
                      </Typography>
                      <FormControl variant="standard" sx={{ minWidth: 160 ,mt:3}}>
                    <InputLabel id="demo-simple-select-standard-label">Rapor Nedeni</InputLabel>
                    <Select
                      id="report"
                      value={values.report}
                      onChange={handleChange}
                      label="Rapor Nedeni"

                    >
                      <MenuItem value="Uygunsuz İçerik">Uygunsuz İçerik</MenuItem>
                      <MenuItem value="Spam Ve Reklam">Spam Ve Reklam</MenuItem>
                      <MenuItem value="Yalan Bilgi">Yalan Bilgi</MenuItem>
                    </Select>
                  </FormControl>
                    <TextField 
                    id="description" 
                    label="Açıklayın" 
                    variant="standard" 
                    multiline 
                    onChange={handleChange}
                    value={values.description}
                    onBlur={handleBlur} 
                    error={errors.description && touched.description}
                    helperText={errors.description && touched.description ? errors.description:null}  
                    sx={{...erorStyles,mt:2}}
                    />
                    <button className={styles.sendBtn} onClick={()=>console.log(commentId)}  type='submit'>Gönder</button>
                  </Box>
                 </form>
              )}
            </Formik>
      </Modal>
    </>
  )
}


 const modalStyle={
  display:'flex',
  flexDirection:'column',
  padding: 3,
  gap:2,
 }