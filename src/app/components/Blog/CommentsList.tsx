import React from 'react'
import CommentsItem from './CommentsItem'
import SentCommentForm from '../Forms/SentCommentForm'

const CommentsList = () => {
  return (
    <div>
      <SentCommentForm/>
        <CommentsItem/>
    </div>
  )
}

export default CommentsList