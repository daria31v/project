import React from 'react'
import CommentsList from './CommentsList'

const CommentsComponent = () => {
  return (
    <div className="mt-9">
      <p className="mb-8 font-bold text-sm">Write your comment</p>
        <CommentsList/>
    </div>
  )
}

export default CommentsComponent