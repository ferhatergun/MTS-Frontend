"use client"
import React ,{ useEffect, useState }from 'react'
import CreateComment from './CreateComment/CreateComment'
import Comment from './Comment/Comment'
import { fetchData } from '$/allApi/api'
import { Skeleton } from '@mui/material'

export default function MovieComment({movieId}) {
  const [comments, setComments] = useState(null)
  // film içindeki yorumları createComment e gönderiyoruz yeni yorumu sonuna eklemek için

  const getComments = async () => { // film içindeki yorumları getiriyoruz
    try {
      const response = await fetchData(`comments/${movieId}/comments`);
      setComments(response.comments);
    } catch (error) {
      console.error("Veri yüklenirken hata oluştu: ", error);
    }
  }

  useEffect(()=>{
    getComments()
  },[])

  return (
    <div>
        <CreateComment movieId={movieId} setComments={setComments} />
            {
                comments ?
                (
                    comments?.map((comment) => (
                      <Comment 
                        key={comment._id} 
                        comment={comment} 
                        setComments={setComments} 
                      />
                    ))
                ) :
                (<>
                  <Skeleton variant="rectangular" style={{marginTop:30,borderRadius:20}} width="100%" height={150} animation="wave" />
                  <Skeleton variant="rectangular" style={{marginTop:20,borderRadius:20}} width="100%" height={150} animation="wave" />
                  </>
                )
                
            }
    </div>
  )
}
