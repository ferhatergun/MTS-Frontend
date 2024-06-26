"use client"
import React from 'react'
import styles from './page.module.css'
import { Avatar ,Skeleton} from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { fetchData } from '$/allApi/api'


export default async function Layout({children}) {
  const pathname = usePathname()
  const path=pathname.split("/")


  const user = (await fetchData(`users/${path[2]}`)).user

  if (!children) {
    return null; // veya başka bir varsayılan içerik gösterilebilir
  }
  return (
    <div className={styles.container} >
      {
        user ?
        <div className={styles.headerDiv}>
          <div className={styles.profileCenter}>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',textAlign:'center'}}>
              <Avatar sx={{width:'70px',height:'70px'}}>{user.UserName.substring(0,1).toUpperCase()}</Avatar>
              <p>{user.UserName}</p>
            </div>
            <div style={{display:'flex',gap:'10px'}}>
              <div className={styles.level}>{user.skillRank ? user.skillRank : "Rütbesiz"}</div>
              <div className={styles.score}>{user.userScore ? user.userScore : "Skorsuz"}</div>
            </div>
          </div>
        </div> :
        <Skeleton animation="wave" height="40vh" width="100%" variant='rectangular' />
    }

        
        
        <div className={styles.contentDiv}>
          <div className={styles.menuBarDiv}>
            <ul>
              <Link href={`yorumlar`} className={`${styles.menuItem} ${path[3] =="yorumlar" && styles.active}`}>Film Yorumları</Link>
              <Link href={`favoriler`} className={`${styles.menuItem} ${path[3] =="favoriler" && styles.active}`}>Favoriler</Link>
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
