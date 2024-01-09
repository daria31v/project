'use client'
import Link from 'next/link'
import NewPostSVG from '../../../../public/icon/NewPostSVG'
import toast, { Toaster } from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const LinkNewPost = () => {
  const { data: session } = useSession()

  const handleClick = () => {
    if (!session) {
      toast.error('Please Log In or Join us😊')
      setTimeout(() => {
        redirect('/login')
      }, 3000)
    }
    return
  }

  return (
    <div>
      <Toaster/>
      <Link
        onClick={handleClick}
        href="/profile/posts/new"
        className="text-secondary text-base font-semibold px-2 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white"
      >
        <NewPostSVG className="hover:stroke-white" />
        New post
      </Link>
    </div>
  )
}

export default LinkNewPost
