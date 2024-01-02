import React from 'react'
import CommentsItem from './CommentsItem'
import SentCommentForm from '../Forms/SentCommentForm'

const CommentsList = () => {
  return (
    <div>
      <SentCommentForm />
      <ul className="grid gap-5 mt-10">
      <CommentsItem />
      </ul>

    </div>
  )
}

export default CommentsList
