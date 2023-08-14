"use client"
import React from 'react'
import styles from './page.module.css'
import { Avatar } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function layout({children}) {
  const pathname = usePathname()
  const path=pathname.split("/")
  console.log(path)
  return (
    <div className={styles.container} >
        <div className={styles.headerDiv}>
          <div className={styles.profileCenter}>
            <Avatar sx={{width:'60px',height:'60px'}}>A</Avatar>
            <p>Ali Kurt</p>
          </div>
          <div className={styles.profileInformationDiv}>
            <div className={styles.Information}>Amatör</div>
            <div className={styles.Information}>400 Puan</div>
          </div>
        </div>
        <div className={styles.contentDiv}>
          <div className={styles.menuBarDiv}>
            <ul>
              <Link href={`yorumlar`} className={`${styles.menuItem} ${path[2] =="yorumlar" && styles.active}`}>Film Yorumları</Link>
              <Link href={`favoriler`} className={`${styles.menuItem} ${path[2] =="favoriler" && styles.active}`}>Favoriler</Link>
              <Link href={`ayarlar`} className={`${styles.menuItem} ${path[2] =="ayarlar" && styles.active}`}>Ayarlar</Link>
            </ul>
            <hr/>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
    </div>
  )
}
