import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '../components/Container/container'
import NewPost from '../../../public/icon/NewPostSVG'
import BlogList from '../components/Blog/BlogList/BlogList'
import LinkNewPost from '../components/Button/LinkNewPost'
// SEO
export const metadata: Metadata = {
  title: 'Blog&Tips | A World in My Lens',
  description: 'Welcome to our Insights & Tips section, a treasure trove of enlightening blog posts and practical tips curated to enhance your journey. Delve into a wealth of information, from engaging narratives to actionable advice, designed to enrich your experiences and empower your adventures.',
}

interface BlogProps {
  params: {
    id: string
    photo: string
    title: string
    name: string
    avatar: string
    date: string
  }
}

export default function Blog({ params: { id, photo, title, name, avatar, date } }: BlogProps) {
  return (
    <Container>
      <section className=" xl:px-[100px] py-16 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <h1 className="text-md font-semibold text-start uppercase my-4 text-secondary">
          Blog & Tips
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="flex justify-between">
          <p className="text-secondary text-medium uppercase">Insights & Tips: <br/> Your go-to for valuable blog posts and helpful tips</p>
          
          <LinkNewPost/>
        </div>
        <BlogList />
      </section>
    </Container>
  )
}
