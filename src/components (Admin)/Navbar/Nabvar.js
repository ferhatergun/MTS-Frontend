"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import { toast } from 'react-toastify';
import { deleteCookie } from 'cookies-next'

export default function Nabvar() {

  const logoutAdmin=()=>{
    deleteCookie("accessToken")
    deleteCookie("adminId")
    window.location.href="/"
    toast.success("Çıkış Yapıldı")
  }
  return (
    <div className={styles.container}>
        <div className={styles.rightItems}>
            <Image 
            src="/logo.png" 
            alt="logo" 
            width={70} height={70} 
            style={{mixBlendMode:'color-burn'}} />
            <Link href="/admin/filmler">Filmler</Link>
            <Link href="/admin/users">Kullanıcılar</Link> 
        </div>
        <Tooltip title="Çıkış Yap" followCursor>
            <div className={styles.logoutBtn} onClick={logoutAdmin}>
                <LogoutIcon/>
            </div>
        </Tooltip>

    </div>
  )
}
