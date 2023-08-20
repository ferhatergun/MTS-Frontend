
"use client"
import React from 'react'
import { Avatar,Rating,TextField,Checkbox } from '@mui/material'
import styles from './page.module.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


export default function Comments() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div>
        <div className={styles.commentDiv}>
            <div className={styles.commentTop}>
                <Avatar sx={{width:50,height:50}}>M</Avatar>
                <p>Murat Uçar</p>
                <Rating value={4} readOnly />
            </div>
            <div className={styles.commentContent}>
                Güzel film
            </div>
            <div className={styles.commentBottom}>
                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbUpOffAltIcon className={styles.Icon}/>15</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbUpIcon className={styles.IconChecked} />16</div>} 
                className={styles.commentIcon}/>

                <Checkbox  
                icon={<div className={styles.commentIcon}><ThumbDownOffAltIcon className={styles.Icon}/>4</div>} 
                checkedIcon={<div className={styles.commentIcon}><ThumbDownAltIcon className={styles.Icon} />5</div>} 
                className={styles.commentIcon}/>
                    
                <div className={styles.commentIcon}><ModeCommentOutlinedIcon className={styles.Icon} />Cevapla</div>
                <div className={styles.commentIconn}
                onClick={handleClick}
                ><MoreVertIcon className={styles.Icon} /></div>
            </div>
        </div>


            <Menu
                id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={styles.menu}
            >
                <MenuItem onClick={handleClose}> <ReportOutlinedIcon/>Rapor Et</MenuItem>
            </Menu>
    </div>
  )
}
