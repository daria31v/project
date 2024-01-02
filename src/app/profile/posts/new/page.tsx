import { Container } from '@/app/components/Container/container'
import UploadPostForm from '@/app/components/Forms/UploadPostForm'
import Link from 'next/link'
import React from 'react'

const NewPostPage = () => {
  return (
    <Container>
      <section className="py-20 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <h1 className="text-ml font-semibold text-start uppercase my-3 text-secondary">
      blog &gt; new post
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="flex justify-between mb-4">
          <p className="text-secondary uppercase">Tell other about a location that inspired you</p>
        <Link href="/profile/posts" className="text-secondary border border-green_light text-small font-semibold px-3 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white">
        Back to My blog
          </Link>
        </div>
        <UploadPostForm/>
      </section>
    </Container>
  )
}

export default NewPostPage
