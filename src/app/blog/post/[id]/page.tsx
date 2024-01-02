// import { Metadata } from "next";

import { Container } from '@/app/components/Container/container'
import Link from 'next/link'
import PostComponent from '@/app/components/Blog/PostComponent'
import post from '../../../../app/components/Blog/post.json'

interface PostProps {
  params: {
    id: string
    src: string
    alt: string
  }
}

// export async function generateMetadata({params: {id}, } : PostProps) : Promise<Metadata> {
// const post = await getData({id});
//   return {
//   title: post.title,
// }
// }

// async function getData(params: {id: string}) {
//   const data = await fetch(`http://.../post/${id}`, {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return data.json();
// }

export default async function Post({ params: { id, src, alt } }: PostProps) {
  
  // const data = await getData({id});

  
  return (
    <Container>
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
      <h1 className="text-ml font-semibold text-start uppercase my-4 text-secondary">
      blog &gt; post
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="flex justify-end mb-4">
        <Link href="/blog" className="text-secondary border border-green_light text-small font-semibold px-3 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white">
        Back to My blog
          </Link>
        </div>

        <PostComponent postData={post}/>


       
      </section>
    </Container>
  )
}
