
import { Container } from '@/app/components/Container/container'
import Link from 'next/link'
import PostComponent from '@/app/components/Blog/PostComponent'
import postsData from '../../../components/Blog/BlogList/posts.json'; 

interface PostProps {
  params: {
    id: string
    src: string
    alt: string
  }
}

export default async function Post({ params: { id, src, alt } }: PostProps) {
  const postId = parseInt(id, 10); 
  const postData = postsData.find((post) => post.id === postId);
  console.log(postData);


  return (
    <Container>
      <section className="py-16 xl:px-[100px] md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <h1 className="text-ml font-semibold text-start uppercase my-4 text-secondary">
          blog &gt; post
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="flex justify-between mb-4">
        <p className="text-secondary md:text-medium text-base uppercase">Sit back and enjoy!</p>
          <Link
            href="/blog"
            className="text-secondary border border-peach_light text-small font-semibold px-2 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer hover:bg-secondary hover:text-white"
          >
            Back to My blog
          </Link>
        </div>

        {postData && <PostComponent posts={postData} />}
      </section>
    </Container>
  )
}
