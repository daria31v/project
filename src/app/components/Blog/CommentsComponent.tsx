import React from 'react'
import CommentsList from './CommentsList'

const CommentsComponent = () => {
  return (
    <div className="">
      <p className="mb-8 font-medium md:text-sm text-medium tracking-widest text-primary">Write your comment</p>
        <CommentsList/>
    </div>
  )
}

export default CommentsComponent