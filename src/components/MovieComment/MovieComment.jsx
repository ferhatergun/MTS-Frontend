"use client"
import React ,{useEffect, useState}from 'react'
import CreateComment from './CreateComment/CreateComment'
import Comment from './Comment/Comment'

export default function MovieComment({movieId,movie}) {
  const [comments, setComments] = useState(movie?.comments)

  return (
    <div>
        <CreateComment movieId={movieId} setComments={setComments} />
            {
                comments ?
                (
                    comments?.map((commentId) => (
                    <Comment key={commentId} commentId={commentId} />
                    ))
                ) :null
                
            }
    </div>
  )
}
