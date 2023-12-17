import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';

export default function Nabvar() {
  return (
    <div className={styles.container}>
        <div className={styles.rightItems}>
            <Image 
            src="/logo.jpg" 
            alt="logo" 
            width={80} height={50} 
            style={{mixBlendMode:'color-burn'}} />
            <Link href="/admin/filmler">Filmler</Link>
            <Link href="/admin/users">Kullanıcılar</Link> 
        </div>
        <Tooltip title="Çıkış Yap" followCursor>
            <div className={styles.logoutBtn}>
                <LogoutIcon/>
            </div>
        </Tooltip>

    </div>
  )
}
