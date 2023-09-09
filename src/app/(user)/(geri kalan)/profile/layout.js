"use client"
import React ,{ useState ,useEffect}from 'react'
import styles from './page.module.css'
import { Avatar ,Skeleton} from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSelector } from 'react-redux'


export default function layout({children}) {
  const pathname = usePathname()
  const path=pathname.split("/")

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
  },[])
  // console.log("profile"+userId)
  return (
    <div className={styles.container} >
      {
        loading ?
        <div className={styles.headerDiv}>
          <div className={styles.profileCenter}>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',textAlign:'center'}}>
              <Avatar sx={{width:'70px',height:'70px'}}>A</Avatar>
              <p>Ali Kurt</p>
            </div>
            <div style={{display:'flex',gap:'10px'}}>
              <div className={styles.level}>Amatör</div>
              <div className={styles.score}>400 XP</div>
            </div>
          </div>
        </div> :
        <Skeleton animation="wave" height="40vh" width="100%" variant='rectangular' />
    }

        
        
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
