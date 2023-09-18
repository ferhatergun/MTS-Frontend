"use client"
import React,{useEffect,useState}from 'react';
import styles from './page.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Checkbox } from '@mui/material';
import { isAuth } from '$/lib/auth';

export default function LikeButton() {
    const auth = isAuth();
    const [buttonStyle, setButtonStyle] = useState({});
    const [disabled, setDisabled] = useState(false);

    useEffect(()=>{
      setButtonStyle({opacity: auth ? 1 : 0.5})
      setDisabled(!auth)
    },[])

    return (
        <Checkbox
          icon={<div className={styles.commentIcon}><ThumbUpOffAltIcon className={styles.Icon} />15</div>}
          checkedIcon={<div className={styles.commentIcon}><ThumbUpIcon className={styles.IconChecked} />16</div>}
          className={styles.commentIcon}
          disabled={disabled}
          style={buttonStyle} // Stil nesnesini style prop'una ekleyin
        />
    );
}
