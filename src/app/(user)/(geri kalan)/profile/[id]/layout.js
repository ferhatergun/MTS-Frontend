"use client"
import React ,{ useState ,useEffect}from 'react'
import styles from './page.module.css'
import { Avatar ,Skeleton} from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSelector } from 'react-redux'


export default async function layout({children,...props}) {
  const pathname = usePathname()
  const path=pathname.split("/")
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
  },[])

  const user = await getUser(path[2])
  return (
    <div className={styles.container} >
      {
        loading ?
        <div className={styles.headerDiv}>
          <div className={styles.profileCenter}>
            <div style={{display:'flex',flexDirection:'column',gap:'10px',textAlign:'center'}}>
              <Avatar sx={{width:'70px',height:'70px'}}>{user.UserName.substring(0,1).toUpperCase()}</Avatar>
              <p>{user.UserName}</p>
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
              <Link href={`yorumlar`} className={`${styles.menuItem} ${path[3] =="yorumlar" && styles.active}`}>Film Yorumları</Link>
              <Link href={`favoriler`} className={`${styles.menuItem} ${path[3] =="favoriler" && styles.active}`}>Favoriler</Link>
              <Link href={`ayarlar`} className={`${styles.menuItem} ${path[3] =="ayarlar" && styles.active}`}>Ayarlar</Link>
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

const getUser = async (id) =>{
  const res = await fetch(`http://localhost:5000/users/${id}`)
  const data = await res.json()
  if(data.success == true){
    return data.user
  }
  else{
    return false
  }
}