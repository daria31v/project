import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/images/photo.jpg'
import image_two from '../../../public/images/photo_2.jpg'
import image_three from '../../../public/images/photo_4.jpg'
import budda from '../../../public/images/photo_6.jpg'
import photo from '../../../public/images/photo_7.jpg'
import photo_v from '../../../public/images/fly.jpg'
import { Container } from '../components/Container/container'
import Button from '../components/Button/Buttons'
import NewPost from '../../../public/icon/NewPostSVG'
import HeartSVG from '../../../public/icon/HeartSVG'
import ScrollSVG from '../../../public/icon/Scroll'
// SEO
export const metadata: Metadata = {
  title: 'Blog&Tips | A World in My Lens',
  description: '',
}

// async function getData() {
//   const data = await fetch("http://.../post", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return data.json();
// }

const posts = [
  {
    id: 1,
    photo: image,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '27.09.2023',
  },
  {
    id: 2,
    photo: image_two,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '24.08.2023',
  },
  {
    id: 3,
    photo: photo,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '01.10.2023',
  },
  {
    id: 4,
    photo: image_three,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '27.10.2023',
  },
  {
    id: 5,
    photo: photo_v,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '17.10.2023',
  },
  {
    id: 6,
    photo: budda,
    title: 'Title',
    nikname: 'Fox',
    avatar: 'http://',
    date: '15.11.2023',
  },
]

interface BlogProps {
  params: {
    id: string
    photo: string
    title: string
    nikname: string
    avatar: string
    date: string
  }
}

export default function Blog({ params: { id, photo, title, nikname, avatar, date } }: BlogProps) {
  return (
    <Container>
      <section className=" xl:px-[100px] py-16 md:px-12 px-6 bg-section-texture bg-cover bg-center bg-no-repeat">
        <h1 className="text-md font-semibold text-start uppercase my-4 text-secondary">
          Blog & Tips
        </h1>
        <div className="w-14 h-1 bg-secondary rounded-md mb-4"></div>
        <div className="flex justify-between">
          <p className="text-secondary text-base">EXPLORE OTHER USER&apos;S PHOTOS</p>
          <Link href="/profile/posts/new" className="text-secondary text-base font-semibold px-3 rounded-md h-[38px] flex justify-center items-center bg-white shadow-md cursor-pointer gap-1 hover:bg-secondary hover:text-white">
            <NewPost className=''/>
            New post
          </Link>
        </div>

        <div className="mt-11">
          <ul className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-11 mb-10 grid gap-7">
            {posts.map((post) => (
              <li
                key={post.id}
                className=" shadow-lg hover:shadow-nude focus:shadow-nude rounded-2xl md:mb-0 transition transform hover:-translate-y-1 motion-reduce:transition-none"
              >
                <div className="overflow-hidden rounded-2xl relative">
                  <Link href={`/blog/post/${post.id}`}>
                    <Image src={post.photo} alt="post photo"
                    className=" overflow-hidden h-[250px] 2xl:h-[300px]"
                    priority
                    />
                  <div className="absolute inset-0 flex flex-col justify-end ">
                    <div className="bg-green_light h-16 px-4 pt-2 font-extra font-semibold  hover:bg-orange_light">
                      <div className="flex justify-between items-center">

                      <div>
                      <h3 className="text-md text-white">{post.title}</h3>
                      <p className="text-medium text-white">{post.date}</p>
                      </div>
                      <div className="ml-auto">
                        <Button>
                          <HeartSVG className=""/>
                        </Button>
                      </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center py-4">
        <Button className="border-2 border-orange md:w-14 md:h-14  flex justify-center items-center p-4 rounded-full shadow-xl bg-gradient-to-t to-[#22462CB2] via-transparent from-orange"><ScrollSVG/></Button>
        </div>
      </section>
    </Container>
  )
}
