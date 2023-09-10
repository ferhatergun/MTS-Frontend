"use client"
import React ,{useEffect,useState}from 'react'
import styles from './page.module.css'
import ProfileYorum from '$/components/ProfileYorum/ProfileYorum'
import { Skeleton } from '@mui/material'

export default function page() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
  },[])
  return (
    <div>
      <div className={styles.container}>
        {
          loading ? <>
          <ProfileYorum movieName="Hızlı ve öfkeli 9" star={3} content="çok sevdim" key={1} />
          <ProfileYorum movieName="Barbie" star={4} content="idare eder eğlenceliydi" key={2}/></> :
        <>
          <div style={{display:'flex'}}>
            <Skeleton animation="wave" width="100px" height="120px" variant='rectangular'/>
            <div style={{width:'100%'}}>
              <Skeleton animation="wave" width="70%" height="30px" variant='text'/>
              <Skeleton animation="wave" width="80%" height="30px" variant='text'/>
              <Skeleton animation="wave" width="90%" height="30px" variant='text'/>
            </div>
          </div>
          <div style={{display:'flex',marginTop:"10px"}}>
            <Skeleton animation="wave" width="100px" height="120px" variant='rectangular'/>
            <div style={{width:'100%'}}>
              <Skeleton animation="wave" width="70%" height="30px" variant='text'/>
              <Skeleton animation="wave" width="80%" height="30px" variant='text'/>
              <Skeleton animation="wave" width="90%" height="30px" variant='text'/>
            </div>
          </div> 
        </>
        }
        
      </div>
    </div>
  )
}
