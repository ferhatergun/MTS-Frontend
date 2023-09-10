"use client"
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './page.module.css'
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Dropdown, Space } from 'antd';
import Box from '@mui/material/Box';
import { TextField,Typography,Modal,InputLabel,MenuItem,FormControl,Select } from '@mui/material';


export default function CommentReportButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Raporla
          </Typography>
          <FormControl variant="standard" sx={{ minWidth: 160 ,mt:3}}>
        <InputLabel id="demo-simple-select-standard-label">Rapor Nedeni</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>Uygunsuz İçerik</MenuItem>
          <MenuItem value={20}>Spam Ve Reklam</MenuItem>
          <MenuItem value={30}>Yalan Bilgi</MenuItem>
        </Select>
      </FormControl>
        <TextField id="standard-basic" label="Açıklayın" variant="standard" sx={{mt:2}} multiline />
        <button className={styles.sendBtn}>Gönder</button>
        </Box>
      </Modal>
    </>
  )
}5

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 4,
  borderRadius:5,
  display:'flex',
  flexDirection:'column',
};
