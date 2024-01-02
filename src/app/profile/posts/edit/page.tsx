'use client'
import { Container } from '@/app/components/Container/container'
import EditPostForm from '@/app/components/Forms/EditPostForm'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const EditPostPage = () => {
    const {data: session} = useSession()

  return (
    <Container>
      <section className="py-20 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <h1 className="text-ml font-semibold text-start uppercase my-4 text-secondary">
      Edit post
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <p className="text-secondary uppercase">You can correct your post here</p>

        <div className="flex justify-end mb-4">
        <Link href="/profile/posts" className="text-secondary border border-green_light text-small font-semibold px-3 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white">
        Back to My posts
          </Link>
        </div>
        <EditPostForm userData={session?.user}/>
      </section>
    </Container>
  )
}

export default EditPostPage
