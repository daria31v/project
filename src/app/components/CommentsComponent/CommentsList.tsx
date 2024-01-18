'use client'
import CommentsItem from './CommentsItem'
import SentCommentForm from '../Forms/SentCommentForm'
import { getSession, useSession } from 'next-auth/react'
import { authConfig } from '@/utils/authConfig'
import Link from 'next/link'

const CommentsList = () => {
  const { data: session } = useSession()

  return (
    <div>
      {!session ? (
        <div className="flex gap-2">
          <p>Please</p>
          <Link href="/login" className="text-duna">
            {' '}
            Login{' '}
          </Link>
          <p>or</p>
          <Link href="/login" className="text-duna">
            {' '}
            Join us{' '}
          </Link>
          <p>to write a comment </p>
        </div>
      ) : (
        <SentCommentForm />
      )}
      <ul className="grid gap-5 mt-10">
      {/* {!comments ? (<div><p>Be first who write a comment</p></div>) : (<CommentsItem />)} */}
        <CommentsItem />
      </ul>
    </div>
  )
}

export default CommentsList
