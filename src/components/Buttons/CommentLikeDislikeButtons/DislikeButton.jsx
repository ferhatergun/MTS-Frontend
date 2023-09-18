"use client"
import React,{useEffect,useState} from 'react'
import styles from './page.module.css'
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Checkbox } from '@mui/material';
import { isAuth } from '$/lib/auth';

export default function DislikeButton() {
    const auth = isAuth()

    const [buttonStyle, setButtonStyle] = useState({});
    const [disabled, setDisabled] = useState(false)

    useEffect(()=>{
      setButtonStyle({opacity: auth ? 1 : 0.5})
      setDisabled(!auth)
    },[])
  return (
        <Checkbox  
        icon={<div className={styles.commentIcon}><ThumbDownOffAltIcon className={styles.Icon}/>4</div>} 
        checkedIcon={<div className={styles.commentIcon}><ThumbDownAltIcon className={styles.Icon} />5</div>} 
        className={styles.commentIcon}
        disabled={disabled}
        style={buttonStyle}
        />
  )
}
