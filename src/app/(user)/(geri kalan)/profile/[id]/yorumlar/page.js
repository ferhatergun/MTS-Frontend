"use client"
import React ,{useEffect,useState}from 'react'
import styles from './page.module.css'
import ProfileYorum from '$/components (User)/ProfileYorum/ProfileYorum'
import { Skeleton } from '@mui/material'
import { useParams } from 'next/navigation'
import { getUserComment } from '$/allApi/CommentOperations'

export default function page() {
  const [loading,setLoading] = useState(false)
  const [comments,setComments] = useState([])
  const params = useParams()
  const userId= params.id
  useEffect(()=>{
    setLoading(true)
    getComment(userId)
  },[])

  const getComment = async(userId) => {
    const result = await getUserComment(userId)
    setComments(result)
  }
  
  return (
    <div>
      <div className={styles.container}>
        {
          loading ? 
          <>
          {
            comments.map((commentId,index)=>
              <ProfileYorum key={index} commentId={commentId} />
            )
          }
          </> :
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
