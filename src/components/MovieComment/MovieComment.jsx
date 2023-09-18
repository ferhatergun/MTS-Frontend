"use client"
import React from 'react'
import CreateComment from './CreateComment/CreateComment'
import Comment from './Comment/Comment'

export default function MovieComment({movieId,movie}) {
  const [comments, setComments] = React.useState(movie.comments)
  // film içindeki yorumları createComment e gönderiyoruz yeni yorumu sonuna eklemek için
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
